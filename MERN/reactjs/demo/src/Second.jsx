import React, { useEffect, useRef, useState } from 'react';

const Second = () => {
    const [data, setData] = useState("");
    const inpRef = useRef()

    const updateData = () => {
        setData(inpRef.current.value);
    }

    const getMovies = async () => {
        const API = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${data}`
        const response = await fetch(API);
        const result = await response.json();
        console.clear();
        console.log(result);
    }

    useEffect(
        () => {
            getMovies()
        },
        [data]
    )

    return (
        <div className='container'>
            <input type="text" value={data} onChange={updateData} ref={inpRef} />
            <h1>{data}</h1>
        </div>
    );
}

export default Second;
