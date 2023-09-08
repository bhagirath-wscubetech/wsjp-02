import React, { useContext, useEffect, useState } from 'react';
import Container from './Container';
import { AiFillFilter } from 'react-icons/ai';
import { MainContext } from '../Context/Main';
import axios from 'axios';
const BestSeller = () => {
    const { BASEURL, CATEGORY_BASEURL, PRODUCT_BASEURL } = useContext(MainContext);
    const [filterToggle, setFiltetToggle] = useState(false);
    const [categories, setCategory] = useState([])
    const [products, setProduct] = useState([])
    const [imgBaseUrl, setBaseUrl] = useState("")
    const [activeCat, setActiveCat] = useState(null);

    useEffect(
        () => {
            axios.get(BASEURL + CATEGORY_BASEURL)
                .then(
                    (success) => {
                        if (success.data.status == 1) {
                            setCategory(
                                [
                                    {
                                        name: "All",
                                        _id: null
                                    },
                                    ...success.data.category
                                ]
                            );
                        }
                    }
                ).catch(
                    (err) => {
                        setCategory([]);
                    }
                )
        },
        []
    )

    useEffect(
        () => {
            axios.get(BASEURL + PRODUCT_BASEURL)
                .then(
                    (success) => {
                        if (success.data.status == 1) {
                            setProduct(success.data.product);
                            setBaseUrl(success.data.imageBaseUrl);
                        }
                    }
                ).catch(
                    (err) => {
                        setProduct([]);
                    }
                )
        },
        []
    )


    let displayProduct = products;
    if (activeCat != null) {
        displayProduct = products.filter(
            (prod) => {
                if (prod.category == activeCat) {
                    return true;
                } else {
                    return false;
                }
            }
        )
    }

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
                            return <li key={index} onClick={() => setActiveCat(cat._id)} className={`cursor-pointer p-2  text-center ${activeCat == cat._id ? 'text-blue-600' : ''} hover:text-[#33A0FF] duration-200`}>
                                {cat.name}
                            </li>
                        }
                    )
                }
            </ul>

            <ul className={`justify-center gap-14 mt-3 md:hidden duration-300 
                            ${filterToggle ? 'h-[250px] opacity-1 visible' : 'h-0  opacity-0 invisible'}`}>
                {
                    categories.map(
                        (cat, index) => {
                            return <li key={index} onClick={() => setActiveCat(cat._id)}
                                className={`cursor-pointer p-2 border text-center ${activeCat == cat._id ? 'text-blue-600' : ''} duration-200`}>
                                {cat.name}
                            </li>
                        }
                    )
                }
            </ul>

            <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 flex-wrap py-5 gap-[30px]'>
                {
                    displayProduct.map(
                        (product, index) => {
                            return <ProductBox {...product} key={index} imgBaseUrl={imgBaseUrl} />
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
        <img src={props.imgBaseUrl + props.image} alt="" className='h-[200px] w-full' />
        <div className='text-center my-2 text-[#262626] text-[14px] rounded'>{props.name}</div>
        <div>
            <span className='text-[#FF4858]'>$ {props.discounted}</span>
            <del className='text-[#C1C8CE]'>$ {props.price}</del>
        </div>
    </div>
}