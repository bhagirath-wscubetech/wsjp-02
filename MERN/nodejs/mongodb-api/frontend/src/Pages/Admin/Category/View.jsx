import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { MainContext } from '../../../Context/Main';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import { AiFillDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
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

    const deleteData = (id) => {
        const newCategories = categories.filter(
            (cat) => {
                if (cat._id == id) return false;
                else return true;
            }
        )
        setCategory(newCategories);
    }

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
                            <th>Action</th>
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
                                            <Status id={cat._id} flag={cat.status} />
                                        </td>
                                        <td>{cat.createdAt}</td>
                                        <td width={50}>
                                            <AiFillDelete className='text-danger' onClick={
                                                () => deleteData(cat._id)
                                            } />
                                            <Link to={`/admin/category/edit/${cat._id}`}>
                                                <BsFillPencilFill />
                                            </Link>
                                        </td>
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


const Status = ({ flag, id }) => {
    const [status, setStatus] = useState(flag);
    const { BASEURL, CATEGORY_BASEURL, notify } = useContext(MainContext);

    const changeStatus = () => {
        const url = BASEURL + CATEGORY_BASEURL + `/status-update/${id}`;
        axios.patch(
            url,
            {
                status: !status
            }
        ).then(
            (success) => {
                if (success.data.status == 1) {
                    notify(success.data.msg);
                    setStatus(!status);
                } else {
                    notify(success.data.msg);
                }
            }
        ).catch(
            (err) => {
                notify(err.data.msg);
            }
        )
    }

    return (
        <>
            {
                status
                    ? <Badge bg="primary" onClick={changeStatus} className='cursor-pointer'> Active </Badge>
                    : <Badge bg="warning" onClick={changeStatus} className='cursor-pointer'> Inactive </Badge>
            }
        </>
    )

}
