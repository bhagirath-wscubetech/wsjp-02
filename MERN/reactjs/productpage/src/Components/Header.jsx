import React, { useContext } from 'react';
import { ProductContext } from '../App';
const Header = (props) => {

    const { cart, setCart } = useContext(ProductContext);

    return (
        <div className='shadow sticky top-0 bg-white' style={
            {
                zIndex: 99
                // z-index
            }
        }>
            <header className='text-center text-2xl max-w-[1200px] mx-auto p-3'>
                <span className='underline cursor-pointer' 
                onClick={() => props.handler(!props.toggle)}>
                    Cart: {cart.length}
                </span>
            </header>
        </div>
    );
}

export default Header;
