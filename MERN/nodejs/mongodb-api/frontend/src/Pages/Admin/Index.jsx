import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineUser } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import MenuItem from '../../Components/Admin/MenuItem';
import { Outlet, useNavigate } from 'react-router-dom';
import { MainContext } from '../../Context/Main';
const Index = () => {
    const { admin } = useContext(MainContext);
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/admin/login");
    }
    
    useEffect(
        () => {
            // if (admin == null) {
            //     goToLogin()
            // } 
        },
        []
    )


    const menu = [
        {
            name: "Dashboard",
            url: "/admin",
            child: null
        },
        {
            name: "Category",
            url: null,
            child: [
                {
                    name: "Add",
                    url: "/admin/category/add"
                },
                {
                    name: "View",
                    url: "/admin/category"
                }
            ]

        },
        {
            name: "Product",
            url: null,
            child: [
                {
                    name: "Add",
                    url: "/admin/product/add"
                },
                {
                    name: "View",
                    url: "/admin/product"
                }
            ]
        },
        {
            name: "Color",
            url: null,
            child: [
                {
                    name: "Add",
                    url: "/admin/color/add"
                },
                {
                    name: "View",
                    url: "/admin/color"
                }
            ]
        },
        {
            name: "Fabric",
            url: null,
            child: [
                {
                    name: "Add",
                    url: "/admin/fabric/add"
                },
                {
                    name: "View",
                    url: "/admin/fabric"
                }
            ]
        },
        {
            name: "User",
            url: "/admin/user"
        },
        {
            name: "Register Admin",
            url: "/admin/register-admin"
        }
    ]

    return (
        <Container fluid>
            <Row>
                <Col md={2} className='p-0 d-none d-md-block sticky top-0' style={{
                    height: "100vh",
                    background: "rgb(78, 115, 223)"
                }}>
                    <h1 className='text-center my-2 text-white'>iShop</h1>
                    <hr className='text-white' />
                    <ul className='list-unstyled text-white p-3'>
                        {
                            menu.map(
                                (item, index) => {
                                    return <MenuItem {...item} key={index} />
                                }
                            )
                        }
                    </ul>


                </Col>
                <Col md={10} className='p-0'>
                    <div className='bg-white py-2 px-3 shadow d-flex justify-content-end' style={
                        {
                            gap: 20,
                            zIndex: 9999
                        }
                    }>
                        <div className="flex gap-2">
                            {admin?.name}
                            <AiOutlineUser style={{
                                fontSize: 20
                            }} />
                        </div>
                        <div className="flex gap-2">
                            Logout
                            <BiLogOut style={{
                                fontSize: 20
                            }} />
                        </div>
                    </div>

                    <Outlet />

                </Col>
            </Row>
        </Container>
    );
}

export default Index;
