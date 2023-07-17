import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='px-2 bg-black text-white'>
            <footer className='mx-auto max-w-[1200px] flex justify-between p-4'>
                <ul>
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
                <ul>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                    <li>Link 4</li>
                </ul>
                <ul>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                    <li>Link 4</li>
                </ul>

            </footer>
        </div>
    );
}

export default Footer;
