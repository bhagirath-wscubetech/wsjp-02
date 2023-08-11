import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='p-5 bg-white flex justify-between'>
            <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" className='w-[50px]' />
            <ul className='flex gap-10'>
                <li>
                    <Link to="/create">
                        Create
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Read
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;
