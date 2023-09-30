import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from './Reducers/User';
import Login from './Login';

const Header = () => {
    const { cart } = useSelector(store => store.cart);
    const { user } = useSelector(store => store.user);
    const dispatch = useDispatch();
    const [pop, setPop] = useState(false);

    const loginUser = () => {
        setPop(true);
    }

    return (
        <>
            <div className='w-full h-screen fixed z-[9999]  justify-center items-center top-0'
                style={
                    {
                        background: "rgba(0,0,0,0.6)",
                        display: pop == true ? 'flex' : 'none'
                    }
                }
            >
                <div className='shadow rounded w-[500px] h-[400px] bg-white'>
                    <Login url={"/"}  closeHandler={setPop}/>
                </div>
            </div>
            <div className='flex justify-center gap-[30px] my-4'>
                <Link to={"/"}>Product</Link>
                <Link to={"/cart"}>Cart ({cart == null ? "0" : cart.length})</Link>
                {
                    user == null
                        ?
                        <button onClick={loginUser}>Login</button>
                        :
                        <button onClick={() => dispatch(logout())}>Logout - {user.name}</button>
                }
            </div>
        </>
    );
}

export default Header;
