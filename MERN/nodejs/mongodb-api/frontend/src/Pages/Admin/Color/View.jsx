import React, { useContext, useEffect, useRef, useState } from 'react';
import axios from "axios";
import { MainContext } from '../../../Context/Main';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
const View = () => {
    const [colors, setColor] = useState([]);
    const { BASEURL, COLOR_BASEURL, notify } = useContext(MainContext);
    useEffect(
        () => {
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
                            <th>Color</th>
                            <th>Status</th>
                            <th>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            colors.map(
                                (cat, index) => {
                                    return <tr key={cat._id}>
                                        <td>{index + 1}</td>
                                        <td>{cat.name}</td>
                                        <td>{cat.slug}</td>
                                        <td>
                                            <span style={
                                                {
                                                    width: 30,
                                                    height: 30,
                                                    background: cat.code,
                                                    display: "inline-block"
                                                }
                                            }></span>
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
