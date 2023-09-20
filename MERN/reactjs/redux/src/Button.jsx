import React from 'react';

const Button = ({ handler, type }) => {
    return (
        <button onClick={handler}>{type}</button>
    );
}

export default Button;
