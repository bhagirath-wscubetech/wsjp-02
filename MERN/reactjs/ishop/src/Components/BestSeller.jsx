import React, { useState } from 'react';
import Container from './Container';
import { AiFillFilter } from 'react-icons/ai';
const BestSeller = () => {
    const [filterToggle, setFiltetToggle] = useState(false);
    const categories = [
        'All', 'Mac', 'iPad', 'iPod', 'iPhone', 'Accessories'
    ]

    const products = [
        {
            name: "Apple Macbook Pro",
            img: "img/apple_macbook.png"
        },
        {
            name: "Apple Macbook Air",
            img: "img/Apple Macbook Air.png"
        },
        {
            name: "iPhone 11",
            img: "img/Apple iPhone 11.png"
        },
        {
            name: "Apple Watch 21-1",
            img: "img/Apple Watch 21-1.png"
        }
    ]

    return (
        <Container extraClass="my-[40px] mb-[300px]">
            <div className='flex justify-around items-center'>
                <div className='text-[30px] text-center font-bold'>
                    BEST SELLER
                </div>
                <AiFillFilter onClick={() => setFiltetToggle(!filterToggle)} className='text-2xl md:hidden' />
            </div>
            <ul className='justify-center gap-14 mt-3 hidden md:flex'>
                {
                    categories.map(
                        (cat, index) => {
                            return <li key={index} className='cursor-pointer hover:text-[#33A0FF]'>{cat}</li>
                        }
                    )
                }
            </ul>

            <ul className={`justify-center gap-14 mt-3 md:hidden duration-300 
                            ${filterToggle ? 'h-[250px] opacity-1 visible' : 'h-0  opacity-0 invisible'}`}>
                {
                    categories.map(
                        (cat, index) => {
                            return <li key={index} className='cursor-pointer p-2 border text-center'>{cat}</li>
                        }
                    )
                }
            </ul>

            <div className='flex justify-center flex-wrap py-5 gap-[30px]'>
                {
                    products.map(
                        (product, index) => {
                            return <ProductBox {...product} key={index} />
                        }
                    )
                }
            </div>
        </Container>
    );
}

export default BestSeller;



const ProductBox = (props) => {
    return <div className='shadow-lg p-3 border-[3px solid #F6F7F8;]'>
        <img src={props.img} alt="" />
        <div className='text-center my-2 text-[#262626] text-[14px] rounded'>{props.name}</div>
    </div>
}