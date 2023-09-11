import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { MainContext } from '../../Context/Main';

const RegisterAdmin = () => {
    const [togglePassword, setTogglePassoword] = useState(false);
    const { BASEURL, ADMIN_BASEURL, notify } = useContext(MainContext);

    function submitHandler(event) {
        event.preventDefault();
        const form = event.target;
        const data = {
            name: form.name.value,
            email: form.email.value,
            password: form.password.value
        }
        axios.post(
            BASEURL + ADMIN_BASEURL + "/create",
            data
        ).then(
            (success) => {
                if (success.data.status == 1) {
                    notify(success.data.msg, "success");
                    form.reset();
                    console.log(success);
                } else {
                    notify(success.data.msg, "error");
                }
            }
        ).catch(
            (error) => {
                notify("Internal server error", "error");
            }
        )
    }

    return (
        <div className="container-fluid my-3">
            <div className='card p-3'>
                <h4>Dasboard / Register Admin </h4>
                <hr />
                <Form encType='multpart/form-data' onSubmit={submitHandler}>
                    <div className='row'>
                        <div className="col-6">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" />
                            </Form.Group>
                        </div>
                        <div className='col-6'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" />
                            </Form.Group>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-5">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type={`${togglePassword ? 'text' : 'password'}`} name="password" />
                            </Form.Group>
                        </div>
                        <div className="col-5">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Re-enter Password</Form.Label>
                                <Form.Control type={`${togglePassword ? 'text' : 'password'}`} name="re_password" />
                            </Form.Group>
                        </div>
                        <div className="col-2">
                            <Button variant={togglePassword ? "warning" : "primary"} className='mt-[30px]' type="button" onClick={() => setTogglePassoword(!togglePassword)}>
                                {togglePassword ? "Hide Password" : "Show Password"}
                            </Button>
                        </div>
                    </div>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Button variant="info" className="ml-2" type="reset">
                        Reset
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default RegisterAdmin;
