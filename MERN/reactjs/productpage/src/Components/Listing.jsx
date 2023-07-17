import React, { useState } from 'react';

const Listing = ({ products, filterCat, price }) => {

    let total = products.length;
    let filteredProducts = [];
    if (filterCat !== null) {
        filteredProducts = products.filter(
            (pro, i) => {
                if (pro.category == filterCat) {
                    return true;
                } else {
                    return false;
                }
            }
        )
        total = filteredProducts.length;
    }
    let advancedFilter = [];
    if (price.status == true) {
        if (filterCat !== null) {
            advancedFilter = filteredProducts.filter(
                (prod) => {
                    if (parseFloat(prod.price) >= price.from && parseFloat(prod.price) <= price.to) {
                        return true;
                    } else {
                        return false;
                    }
                }
            )
        } else {
            advancedFilter = products.filter(
                (prod) => {
                    // console.log(prod.price, price.to, price.form);
                    if (parseFloat(prod.price) >= price.from && parseFloat(prod.price) <= price.to) {
                        return true;
                    } else {
                        return false;
                    }
                }
            )
        }
        total = advancedFilter.length;
    }

    return (
        <div className='col-span-3'>
            <h3 className='text-center p-2 text-3xl font-bold'>Product ({total})</h3>
            <div className='grid grid-cols-3 gap-3'>
                {

                    filterCat == null
                        ?
                        (
                            price.status == true
                                ? (
                                    advancedFilter.map(
                                        (product, index) => {
                                            return <Product {...product} key={index} />
                                        }
                                    )
                                ) : (
                                    products.map(
                                        (product, index) => {
                                            return <Product {...product} key={index} />
                                        }
                                    )
                                )

                        )
                        :
                        (
                            price.status == true
                                ? (
                                    advancedFilter.map(
                                        (product, index) => {
                                            return <Product {...product} key={index} />
                                        }
                                    )
                                ) : (
                                    filteredProducts.map(
                                        (product, index) => {
                                            return <Product {...product} key={index} />
                                        }
                                    )
                                )
                        )
                }
            </div>
        </div>
    );
}

export default Listing;


const Product = (props) => {
    return <div className='shadow p-2'>
        <img src={props.image} className='w-full h-[250px]' alt="" />
        <div className='text-center my-2 h-[100px]'>
            {props.title}
        </div>
        <div className='text-center my-2 font-bold'>
            $ {props.price}
        </div>
        <div>
            <button className='block mx-auto hover:bg-[transparent] hover:text-black border hover:border-gray-400 text-white bg-gray-400 p-2 duration-[0.5s]'>Add to Cart</button>
        </div>
    </div>
}