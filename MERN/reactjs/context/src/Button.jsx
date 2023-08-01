import React, { useContext } from 'react';
import { CounterContext } from './Context/Main';
const Button = ({ symbol }) => {
    const { count, handler } = useContext(CounterContext);

    function changeCount() {
        if (symbol == "+") {
            handler(count + 1);
        } else {
            handler(count - 1);
        }
    }

    return (
        <button onClick={changeCount}>{symbol}</button>
    );
}

export default Button;
