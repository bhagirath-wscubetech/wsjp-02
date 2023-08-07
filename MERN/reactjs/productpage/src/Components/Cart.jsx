import React, { useContext } from 'react';
import { ProductContext } from '../App';

const Cart = () => {
    const { cart, products, removeFromCart } = useContext(ProductContext);

    let cartProducts = [];
    if (products.length != 0 && cart.length != 0) {
        cartProducts = products.filter(
            (prod) => {
                if (cart.includes(prod.id)) {
                    return true;
                } else {
                    return false;
                }
            }

        )
    }


    return (
        <div className='max-w-[1200px] mx-auto'>
            <h1 className='text-center my-2 text-3xl'>Your Cart</h1>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Sr.
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Image
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartProducts.map(
                        (prod, index) => {
                            return (
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td>{index + 1}</td>
                                    <td>
                                        <img src={prod.image} alt="" width={"100px"} />
                                    </td>
                                    <td>{prod.title}</td>
                                    <td>{prod.price}</td>
                                    <td>
                                        <button onClick={() => removeFromCart(prod.id)}>Remove</button>
                                    </td>
                                </tr>
                            )
                        }
                    )}

                </tbody>
            </table>
        </div>
    );
}

export default Cart;
