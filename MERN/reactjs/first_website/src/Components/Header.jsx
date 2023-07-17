import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='px-2 bg-black text-white sticky top-0'>
            <header className='max-w-[1200px] mx-auto p-3 flex justify-between'>
                <div className='text-4xl font-bold'>Logo</div>
                <ul className='flex gap-6 items-center'>
                    <li>
                        {/* <a href="/">Home</a> */}
                        <Link to="/"> Home </Link>
                    </li>

                    <li>
                        {/* <a href="/about">About</a> */}
                        <Link to="/about"> About </Link>
                    </li>

                    <li>
                        {/* <a href="/about">About</a> */}
                        <Link to="/gallery"> Gallery </Link>
                    </li>
                </ul>
            </header>
        </div>
    );
}

export default Header;
