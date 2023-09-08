import React, { useContext, useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { MainContext } from '../../../Context/Main';
import { useParams } from "react-router-dom";

const Edit = () => {
    const { BASEURL, CATEGORY_BASEURL, notify } = useContext(MainContext);
    const [imgBaseUrl, setImgBaseUrl] = useState("");
    const slug_ref = useRef();
    const [category, setCategory] = useState([]);
    const { id } = useParams();
    useEffect(
        () => {
            axios.get(
                BASEURL + CATEGORY_BASEURL + "/" + id
            )
                .then(
                    (success) => {
                        setImgBaseUrl(success.data.imageBaseUrl)
                        setCategory(success.data.category[0]);
                    }
                )
                .catch(
                    (error) => {
                        console.log(error);
                    }
                )
        },
        []
    )


    const submitHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.category_name.value;
        const slug = form.category_slug.value;
        const image = form.category_image.files[0]

        if (name !== "" && slug !== "" && image !== "") {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("slug", slug);
            formData.append("old_name", category.image);
            formData.append("image", image);

            axios.patch(BASEURL + CATEGORY_BASEURL + `/update/${id}`, formData)
                .then(
                    (success) => {
                        console.log(success);
                        if (success.data.status == 1) {
                            notify(success.data.msg, "success");
                            form.reset()
                        } else {
                            notify(success.data.msg, "error");
                        }
                    }
                )
                .catch(
                    (error) => console.log(error)

                )

        } else {
            notify("Please fill all the data", "error");
            form.category_name.focus();
        }
    }

    const createSlug = (data) => {
        if (data !== "") {
            return data.trim().toLowerCase().split(" ").join("-");
        } else {
            return "";
        }
    }

    const changeName = (event) => {
        setCategory(
            {
                ...category,
                name: event.target.value,
                slug: createSlug(event.target.value)
            }
        )
    }

    return (
        <div className="container-fluid my-3">
            <div className='card p-3'>
                <h4>Dasboard / Category /  Edit </h4>
                <hr />
                <Form onSubmit={submitHandler} encType='multpart/form-data'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Category Name</Form.Label>
                        <Form.Control onChange={changeName} type="text" name="category_name" value={category.name} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Category Slug</Form.Label>
                        <Form.Control type="text" name="category_slug" ref={slug_ref} readOnly value={category.slug} onChange={() => { "" }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Category Image</Form.Label>
                        <Form.Control type="file" name="category_image" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <br />
                    <span>
                        <img src={imgBaseUrl + category.image} alt="" width={100}/>
                    </span>
                </Form>
            </div>
        </div>
    );
}

export default Edit;
