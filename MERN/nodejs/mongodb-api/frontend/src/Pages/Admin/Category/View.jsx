import React, { useContext, useEffect, useRef, useState } from 'react';
import axios from "axios";
import { MainContext } from '../../../Context/Main';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
const View = () => {
    const [categories, setCategory] = useState([]);
    const { BASEURL, CATEGORY_BASEURL, notify } = useContext(MainContext);
    const [imgBaseUrl, setBaseUrl] = useState("")
    useEffect(
        () => {
            axios.get(BASEURL + CATEGORY_BASEURL)
                .then(
                    (success) => {
                        if (success.data.status == 1) {
                            setCategory(success.data.category);
                            setBaseUrl(success.data.imageBaseUrl);
                        }
                    }
                ).catch(
                    (err) => {
                        setCategory([]);
                    }
                )
        },
        []
    )

    return (
        <div className="container-fluid my-3">
            <div className='card p-3'>
                <h4>Dasboard / Category </h4>
                <hr />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Slug</th>
                            <th>Image</th>
                            <th>Status</th>
                            <th>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories.map(
                                (cat, index) => {
                                    return <tr key={cat._id}>
                                        <td>{index + 1}</td>
                                        <td>{cat.name}</td>
                                        <td>{cat.slug}</td>
                                        <td align='center'>
                                            <img src={imgBaseUrl + cat.image} alt="" width={100} />
                                        </td>
                                        <td>
                                            {
                                                cat.status
                                                    ? <Badge bg="primary"> Active </Badge>
                                                    : <Badge bg="warning"> Inactive </Badge>
                                            }
                                        </td>
                                        <td>{cat.createdAt}</td>
                                    </tr>

                                }
                            )
                        }

                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default View;
