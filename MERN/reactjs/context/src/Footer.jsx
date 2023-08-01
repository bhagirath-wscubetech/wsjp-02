import React, { useContext } from 'react';
import { CounterContext } from './Context/Main';

const Footer = () => {
    const { price } = useContext(CounterContext);
    return (
        <div>
            <h1 style={
                {
                    textAlign: "center"
                }
            }>
                {price} 
            </h1>
        </div>
    );
}

export default Footer;
