import React, { useRef } from 'react';

const Input = (props) => {

    const inputRef = useRef(); //hook
    // ref = reference
    // const bottonRef = useRef(); //hook

    const getData = () => {
        props.handler(inputRef.current.value);
        inputRef.current.value = "";
        inputRef.current.focus();
    }   

    return (
        <div className='input-box'>
            <input type="text" ref={inputRef} />
            <button onClick={getData}>Add</button>
        </div>
    );
}

export default Input;
