import React, { createContext, useEffect, useState } from 'react';

const CounterContext = createContext();

const Main = (props) => {
    const [count, setCount] = useState(10);
    const [price, setPrice] = useState(0);

    useEffect(
        () => {
            setPrice(count * 500);
        },
        [count]
    )

    return (
        <CounterContext.Provider value={{
            count: count,
            handler: setCount,
            price
        }}>
            {props.children}
        </CounterContext.Provider>
    );
}

export default Main;
export { CounterContext };