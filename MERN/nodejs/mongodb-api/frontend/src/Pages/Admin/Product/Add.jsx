import React, { useContext, useEffect, useRef, useState } from 'react';
import axios from "axios";
import { MainContext } from '../../../Context/Main';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Add = () => {
    const slug_ref = useRef();
    const price_ref = useRef();
    const discount_ref = useRef();

    const [categories, setCategory] = useState([]);
    const [colors, setColor] = useState([]);
    const { BASEURL, CATEGORY_BASEURL, PRODUCT_BASEURL, COLOR_BASEURL, notify } = useContext(MainContext);
    const getCategories = () => {
        axios.get(BASEURL + CATEGORY_BASEURL)
            .then(
                (success) => {
                    if (success.data.status == 1) {
                        setCategory(success.data.category);
                    }
                }
            ).catch(
                (err) => {
                    setCategory([]);
                }
            )
    }


    const getColors = () => {
        axios.get(BASEURL + COLOR_BASEURL)
            .then(
                (success) => {
                    if (success.data.status == 1) {
                        setColor(success.data.color);
                    }
                }
            ).catch(
                (err) => {
                    setColor([]);
                }
            )
    }

    useEffect(
        () => {
            getCategories();
            getColors();
        },
        []
    )
    const createSlug = (event) => {
        const data = event.target.value;
        if (data !== "") {
            slug_ref.current.value = data.trim().toLowerCase().split(" ").join("-");
        } else {
            slug_ref.current.value = "";
        }
    }

    const addProduct = (event) => {
        const form = event.target;
        event.preventDefault();
        const name = event.target.product_name.value;
        const slug = event.target.product_slug.value;
        const price = event.target.product_price.value;
        const discounted = event.target.product_discounted.value;
        const color = event.target.color.value;
        const category = event.target.category.value;
        const image = event.target.product_image.files[0]

        if (
            name !== "" && slug !== "" && image !== "" && price !== ""
            && discounted !== "" && color !== "" && category !== ""
        ) {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("slug", slug);
            formData.append("image", image);
            formData.append("price", price);
            formData.append("discounted", discounted);
            formData.append("category", category);
            formData.append("color", color);

            axios.post(BASEURL + PRODUCT_BASEURL + "/create", formData)
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
        }

    }

    return (
        <div className="container-fluid my-3">
            <div className='card p-3'>
                <h4>Dasboard / Product /  Add </h4>
                <hr />
                <Form onSubmit={addProduct}>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" name="product_name" onKeyUp={createSlug} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Product Slug</Form.Label>
                        <Form.Control type="text" name="product_slug" readOnly ref={slug_ref} />
                    </Form.Group>

                    <div className='row'>
                        <div className="col-6">
                            <Form.Group className="mb-3">
                                <Form.Label>Product Price</Form.Label>
                                <Form.Control type="number" ref={price_ref} onChange={
                                    (event) => {
                                        discount_ref.current.max = event.target.value - 1;
                                    }
                                } name="product_price" />
                            </Form.Group>
                        </div>
                        <div className="col-6">
                            <Form.Group className="mb-3">
                                <Form.Label>Discounted Price</Form.Label>
                                <Form.Control type="number" ref={discount_ref} name="product_discounted" />
                            </Form.Group>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-6">
                            <Form.Group className="mb-3">
                                <Form.Label>Category</Form.Label>
                                <Form.Select name="category" aria-label="Default select example">
                                    <option>Select Category</option>
                                    {
                                        categories.map(
                                            (category) => {
                                                return (
                                                    <option value={category._id} key={category._id}>
                                                        {category.name}
                                                    </option>
                                                )
                                            }
                                        )
                                    }
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className="col-6">
                            <Form.Group className="mb-3">
                                <Form.Label>Color</Form.Label>
                                <Form.Select name="color">
                                    <option>Select Color</option>
                                    {
                                        colors.map(
                                            (color) => {
                                                return (
                                                    <option style={
                                                        {
                                                            color: color.code
                                                        }
                                                    } value={color._id} key={color._id}>
                                                        {color.name}
                                                    </option>
                                                )
                                            }
                                        )
                                    }
                                </Form.Select>
                            </Form.Group>
                        </div>
                    </div>

                    <Form.Group className="mb-3">
                        <Form.Label>Product Image</Form.Label>
                        <Form.Control type="file" name="product_image" />
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
