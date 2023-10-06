import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const OrderListing = () => {
    const [orders, setOrder] = useState([]);
    const { user } = useSelector(store => store.user);
    useEffect(
        () => {
            if (user != null) {
                axios.get("http://localhost:5000/order/get-orders/" + user._id)
                    .then(
                        (success) => {
                            setOrder(success.data.orders.reverse());
                        }
                    ).catch(
                        (error) => {
                            console.log(error);
                        }
                    )
            }
        },
        [user]
    )

    console.log(orders);

    return (
        <div className='max-w-[1200px] mx-auto'>
            {
                orders.length != 0
                    ?
                    orders.map(
                        (order, index) => {
                            return <OrderBox {...order} key={index} />
                        }
                    )
                    :
                    "No orders yet!!"
            }
        </div>
    );
}

export default OrderListing;


const OrderBox = ({ _id: orderId, createdAt, order_total, order_status, order_details }) => {

    const [toggle, setToggle] = useState(false);
    let orderStatusElem = "";

    switch (order_status) {
        case 0:
            orderStatusElem = <span className='text-red-500'> Payment Pending </span>;
            break;
        case 1:
            orderStatusElem = <span className='text-green-500'> Order Placed </span>;
            break;
        case 2:
            orderStatusElem = <span> Order Dispatched </span>;
            break;
        case 3:
            orderStatusElem = <span> Order Shipped </span>;
            break;
        case 4:
            orderStatusElem = <span> Delivered </span>;
            break;
        case 5:
            orderStatusElem = <span> Cancalled </span>;
            break;
    }


    return (
        <div className='p-3'>
            <div className={`border duration-150 p-3 ${toggle ? 'bg-blue-400 !text-white' : ''}`} onClick={() => setToggle(!toggle)}>
                <div className='flex justify-between'>
                    <div>
                        <b>Order-Id:</b> #{orderId}
                    </div>
                    <div>
                        <b> Date: </b>  {new Date(createdAt).toLocaleString()}
                    </div>
                </div>
                <hr className='my-4' />
                <div className='flex justify-between'>
                    <div>
                        <b>Total:</b> ₹ {order_total}
                    </div>
                    <div>
                        <b> Status: </b>
                        {orderStatusElem}
                    </div>
                </div>
            </div>
            <table style={{
                display: toggle ? '' : 'none'
            }} cellPadding={10} className='w-full shadow table-auto'>
                <thead className='border-b'>
                    <tr>
                        <th>Sr</th>
                        <th>Details</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        order_details.map(
                            (d, i) => {
                                return (
                                    <tr key={i} align={"center"} className='border-b'>
                                        <td>{i + 1}</td>
                                        <td>Name: {d.name}</td>
                                        <td>Price: {d.price}</td>
                                        <td>Qty: {d.qty}</td>
                                        <td>Total: {d.qty * d.price}</td>
                                    </tr>
                                )
                            }
                        )
                    }

                </tbody>
            </table>
        </div>
    )
}