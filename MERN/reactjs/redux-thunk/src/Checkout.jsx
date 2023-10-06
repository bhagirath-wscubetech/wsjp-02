import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import useRazorpay from "react-razorpay";
import { emptyCart } from './Reducers/Cart';

const Checkout = () => {
    const [Razorpay] = useRazorpay();
    const { cart } = useSelector(store => store.cart);
    const { user } = useSelector(store => store.user);
    const [localUser, setUser] = useState(user);
    const { product, baseUrl } = useSelector(store => store.product);
    const [list, setList] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const placeOrder = () => {
        let order_total = 0;
        list.forEach(
            (l) => {
                order_total += parseFloat(l.price) * l.qty;
            }
        )
        const data = { order_total, user_id: localUser._id, order_details: list, user_details: localUser };
        setLoading(true);
        axios.post("http://localhost:5000/order/create-order", data)
            .then(
                (success) => {
                    if (success.data.status == 1) {
                        razorpayHandler(success.data.order, success.data.razorpayOrder);
                    }
                }
            ).catch(
                (error) => {
                    console.log(error);
                }
            ).finally(
                () => {
                    setLoading(false);
                }
            )
    }

    const razorpayHandler = (order, razorpayOrder) => {
        console.log('Hellio');
        const options = {
            key: "rzp_test_Hbid9h5ogSqYoW", // Enter the Key ID generated from the Dashboard
            amount: razorpayOrder.amount_due, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "WsCube Tech",
            description: "Test Transaction",
            image: "https://www.wscubetech.com/images/wscube-tech-logo.svg",
            order_id: razorpayOrder.id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
            handler: function (response) {
                axios.post(
                    "http://localhost:5000/order/order-transaction",
                    {
                        response,
                        order,
                        razorpayOrder
                    }
                )
                    .then(
                        (success) => {
                            console.log(success)
                            if (success.data.status == 1) {
                                dispatch(emptyCart());
                            }

                        }
                    ).catch(
                        (error) => {
                            console.log(error);
                        }
                    )
                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                // alert(response.razorpay_signature);
            },
            prefill: {
                name: order.user_details[0].name,
                email: order.user_details[0].email,
                contact: order.user_details[0].contact,
            },
            theme: {
                color: "#0d6efd",
            },
        };

        const rzp1 = new Razorpay(options);

        rzp1.on("payment.failed", function (response) {
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
        });

        rzp1.open();
    }

    useEffect(
        () => {
            if (cart.length != 0) {
                localStorage.setItem("cart", JSON.stringify(cart));
                let catProd = [];
                let totlalPrice = 0;
                product.forEach(
                    (prod) => {
                        let qty = 0;
                        cart.forEach(
                            (c) => {
                                if (c.pId == prod._id) {
                                    qty = c.qty;
                                }
                            }
                        )
                        if (qty != 0) {
                            totlalPrice = totlalPrice + (prod.price * qty);
                            catProd.push(
                                {
                                    ...prod,
                                    qty
                                }
                            );
                        }
                    }
                )
                setList(catProd);
                setTotal(totlalPrice);
            }
        },
        [cart]
    )
    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-4 gap-[10px]'>

            {/* loader */}
            <div className='fixed justify-center items-center w-full h-screen top-0 left-0' style={
                {
                    background: "rgba(0,0,0,0.6)",
                    display: loading ? 'flex' : 'none'
                }
            }>
                <div className='text-8xl text-white'>
                    Loading...
                </div>
            </div>
            {/* -------- */}


            <div className='bg-gray-100 pt-5 col-span-2 p-4'>
                <form action="" className='bg-white rounded p-3'>
                    <div className='my-2'>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                        <input value={localUser?.name}
                            onChange={(e) => { setUser({ ...localUser, name: e.target.value }) }}
                            type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                    <div className='my-2'>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email"
                            onChange={(e) => { setUser({ ...localUser, email: e.target.value }) }}
                            value={localUser?.email} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>

                    <div className='my-2'>
                        <label htmlFor="contact" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your contact</label>
                        <input type="text"
                            onChange={(e) => { setUser({ ...localUser, contact: e.target.value }) }}
                            value={localUser?.contact} name="contact" id="contact" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                    <div className='my-2'>
                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Address</label>
                        <textarea name="address"
                            onChange={(e) => { setUser({ ...localUser, address: e.target.value }) }}
                            id="address" cols="30" rows="10" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></textarea>
                    </div>
                </form>
            </div>
            <div className=" bg-gray-100 pt-5 col-span-2 p-4">
                <h1 className="mb-10 text-center text-2xl font-bold">Order Summary</h1>
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-1/3">
                        {
                            list.map(
                                (item, index) => {
                                    return <>
                                        <div key={index} className="justify-between bg-white p-6">
                                            <img src={baseUrl + item.image} alt="product-image" className="block rounded-lg !w-[60px] !h-[60px] mx-auto" />
                                            <div className="text-center">
                                                <div className="mt-5 sm:mt-0">
                                                    <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
                                                    <p className="mt-1 text-xs text-gray-700">₹ {item.price} x {item.qty}</p>
                                                </div>
                                                <div className="text-center my-2">
                                                    <p className="text-sm">₹{item.price * item.qty}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                    </>
                                }
                            )
                        }
                    </div>
                    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-2/3">
                        <div className="flex justify-between">
                            <p className="text-lg font-bold">Total</p>
                            <p className="text-gray-700">₹ {total}</p>
                        </div>
                        <hr className='my-2' />
                        <button onClick={placeOrder} className='block mx-auto bg-blue-600 p-4 my-5 text-white rounded'>
                            Pay Via Razor Pay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
