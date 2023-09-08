import React, { useContext, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { MainContext } from '../../../Context/Main';
const Add = () => {
    const { BASEURL, COLOR_BASEURL, notify } = useContext(MainContext);
    const slug_ref = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.color_name.value;
        const slug = form.color_slug.value;
        const color = form.color_code.value;

        if (name !== "" && slug !== "" && color !== "") {
            const formData = {
                name,
                slug,
                code: color
            }

            axios.post(BASEURL + COLOR_BASEURL + "/create", formData)
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
            form.Color_name.focus();
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
                <h4>Dasboard / Color /  Add </h4>
                <hr />
                <Form onSubmit={submitHandler} encType='multpart/form-data'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Color Name</Form.Label>
                        <Form.Control type="text" name="color_name" onKeyUp={createSlug} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Color Slug</Form.Label>
                        <Form.Control type="text" name="color_slug" ref={slug_ref} readOnly />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Color</Form.Label>
                        <Form.Control type="color" name="color_code" />
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
