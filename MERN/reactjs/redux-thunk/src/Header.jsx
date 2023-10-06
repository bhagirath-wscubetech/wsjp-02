import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from './Reducers/User';
import Login from './Login';
import { emptyCart } from './Reducers/Cart';

const Header = () => {
    const { cart } = useSelector(store => store.cart);
    const { user } = useSelector(store => store.user);
    const dispatch = useDispatch();

    return (
        <>
            <div className='flex justify-center gap-[30px] my-4'>
                <Link to={"/"}>Product</Link>
                <Link to={"/cart"}>Cart ({cart == null ? "0" : cart.length})</Link>
                {
                    user == null
                        ?
                        <Link to={"/login"}>Login</Link>
                        :
                        <>
                            <button onClick={
                                () => {
                                    dispatch(logout())
                                    dispatch(emptyCart())
                                }
                            }>Logout - {user.name}</button>
                            <Link to={"/my-order"}>My Order</Link>
                        </>
                }
            </div>
        </>
    );
}

export default Header;
