import React, { useRef } from 'react';

const Search = ({ query, handler }) => {
    const inpRef = useRef();

    const changeHandler = () => {
        handler(inpRef.current.value);
    }

    return (
        <div>
            <input type="text" value={query} onChange={changeHandler} placeholder='Search here...' ref={inpRef} />
        </div>
    );
}

export default Search;
