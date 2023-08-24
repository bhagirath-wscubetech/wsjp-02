import React, { useContext, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { MainContext } from '../../../Context/Main';
const Add = () => {
    const { BASEURL, CATEGORY_BASEURL } = useContext(MainContext);
    const slug_ref = useRef();

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
            formData.append("image", image);

            axios.post(BASEURL + CATEGORY_BASEURL + "/create", formData)
                .then(
                    (success) => console.log(success)
                )
                .catch(
                    (error) => console.log(error)
                )

        } else {

        }
    }

    const createSlug = (event) => {
        const data = event.target.value;
        if (data !== "") {
            slug_ref.current.value = data.trim().toLowerCase().split(" ").join("-");
        } else {
            slug_ref.current.value = "";
        }
    }

    return (
        <div className="container-fluid my-3">
            <div className='card p-3'>
                <h4>Dasboard / Category /  Add </h4>
                <hr />
                <Form onSubmit={submitHandler} encType='multpart/form-data'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Category Name</Form.Label>
                        <Form.Control type="text" name="category_name" onKeyUp={createSlug} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Category Slug</Form.Label>
                        <Form.Control type="text" name="category_slug" ref={slug_ref} readOnly />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Category Image</Form.Label>
                        <Form.Control type="file" name="category_image" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Add;
