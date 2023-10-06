import axios from 'axios';
import React, { useEffect } from 'react';
import { login } from './Reducers/User';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateCart } from './Reducers/Cart';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cart } = useSelector(store => store.cart);
    const { user } = useSelector(store => store.user);

    useEffect(
        () => {
            if (user != null) {
                navigate("/");
            }
        },
        [user]
    )

    function submitHandler(event) {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        let userId = null;
        if (email != "" && password != "") {
            axios.post(
                "http://localhost:5000/user/login",
                { email, password }
            ).then(
                (success) => {
                    userId = success.data.user._id
                    dispatch(
                        login({ user: success.data.user, token: success.data.token })
                    );
                    localStorage.setItem("user", JSON.stringify(success.data.user));
                    localStorage.setItem("token", success.data.token);
                    axios.post(
                        `http://localhost:5000/cart/add-to-cart/${userId}`,
                        cart
                    ).then(
                        (success) => {
                            axios.get(`http://localhost:5000/cart/get-cart/${userId}`)
                                .then(
                                    (success) => {
                                        if (success.data.status == 1) {
                                            dispatch(updateCart({ cart: success.data.cart }));
                                        }
                                    }
                                ).catch(
                                    () => {

                                    }
                                )
                            if (success.data.status == 1) {
                                navigate("/checkout");
                            } else {
                                console.log(success.data);
                            }
                        }
                    ).catch(
                        (err) => console.log(err)
                    )
                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )
        }
    }

    return (
        <div className='w-full h-screen flex justify-center items-center top-0'
            style={
                {
                    background: "rgba(0,0,0,0.6)"
                }
            }
        >
            <section className="p-3 bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                    <div className="w-full rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form onSubmit={submitHandler} className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="text" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;
