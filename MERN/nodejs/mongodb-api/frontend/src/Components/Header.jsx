import React, { useState } from 'react';
import Container from './Container';
import { AiFillCaretDown, AiFillCloseCircle } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"
import { BsHandbag } from "react-icons/bs";
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Header = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const menuItems = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Store",
            link: "/store"
        },
        {
            name: "Iphone",
            link: "/iphone"
        },
        {
            name: "Ipad",
            link: "/ipad"
        },
        {
            name: "Macbook",
            link: "/macbook"
        },
        {
            name: "Accessories",
            link: "/accessories"
        },
        {
            name: "Login",
            link: "/login"
        }
    ]

    return (
        <>
            <Container fluid={true} extraClass="shadow p-2 hidden md:block">
                <Container>
                    <div className='grid grid-cols-2'>
                        <div className='flex gap-2 items-center'>
                            <span> EN </span>
                            <AiFillCaretDown />
                            <span> $ </span>
                            <AiFillCaretDown />
                        </div>
                        <div className='flex gap-3 items-center justify-end'>
                            <AiOutlineUser />
                            <span>My Profile</span>
                            <BsHandbag />
                            <span>2 Items</span>
                            <span className='text-[grey]'>$998</span>
                        </div>
                    </div>
                </Container>
            </Container>
            <Container extraClass="pt-[40px]">
                <div className='flex md:justify-center justify-between items-center'>
                    <img src="img/logo.svg" alt="" />
                    <FaBars onClick={() => setMenuToggle(true)} className='md:hidden text-[30px]' />
                </div>
                {/* z-index */}
                <ul style={{
                    zIndex: "999999"
                }} className={`md:hidden text-white flex flex-col items-center justify-center gap-10 fixed w-full h-[100vh] bg-[rgba(0,0,0,0.7)] top-0 duration-300 
                 ${menuToggle == true ? 'left-[0%]' : 'left-[-100%]'}`}>
                    {
                        menuItems.map(
                            (item, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={item.link}>{item.name}</Link>
                                    </li>
                                )
                            }
                        )
                    }
                    <li>
                        <AiFillCloseCircle className='text-[30px]' onClick={() => setMenuToggle(false)} />
                    </li>
                </ul>
                <ul className='hidden md:flex gap-5 justify-center mt-[30px]'>
                    {
                        menuItems.map(
                            (item, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={item.link}>{item.name}</Link>
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
            </Container>
        </>
    );
}

export default Header;
