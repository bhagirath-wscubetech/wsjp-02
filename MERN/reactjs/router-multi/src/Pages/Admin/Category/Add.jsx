import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Add = () => {
    return (
        <div className="container-fluid my-3">
            <div className='card p-3'>
                <h4>Dasboard / Category /  Add </h4>
                <hr />
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Category Name</Form.Label>
                        <Form.Control type="text" name="category_name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Category Slug</Form.Label>
                        <Form.Control type="text" name="category_slug" />
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
