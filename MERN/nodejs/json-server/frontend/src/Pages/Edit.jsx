import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const [msg, setMsg] = useState("");
    const [data, setData] = useState(null);
    const { index } = useParams();
    const navigate = useNavigate();
    useEffect(
        () => {
            axios.get(`http://localhost:5500/blog/${index}`)
                .then(
                    (success) => {
                        setData(success.data.blogs);
                    }
                ).catch(
                    (error) => {
                        console.log(error);
                    }
                )
        },
        []
    )

    function changeTitle(event) {
        setData(
            {
                ...data,
                title: event.target.value
            }
        )
    }

    function changeBody(event) {
        setData(
            {
                ...data,
                body: event.target.value
            }
        )
    }
    function submitHandler(event) {
        event.preventDefault();
        axios.patch(
            `http://localhost:5500/update/${index}`,
            data
        ).then(
            (success) => {
                if (success.data.status == 1) {
                    event.target.reset();
                    navigate("/");
                    setMsg(success.data.msg);
                } else {
                    setMsg(success.data.msg);
                }
            }
        ).catch(
            (error) => {
                setMsg("Some server error");
            }
        )
    }

    return (
        <>
            <Header />
            <div className='text-center'>
                {msg}
            </div>
            <form onSubmit={submitHandler} className='max-w-[1200px] mx-auto px-3'>
                <div className="mb-6">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input value={data?.title} onChange={changeTitle} type="text" name='title' id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Body</label>
                    <textarea onChange={changeBody} value={data?.body} name="body" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></textarea>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </>
    );
}

export default Edit;
