const Order = require("../models/Order");
const Transaction = require("../models/Transaction");
const Cart = require('../models/Cart.js');
const crytpo = require('crypto');
const Razorpay = require('razorpay');

class OrderController {
    createOrder(data) {
        const razorpayInstance = new Razorpay({
            key_id: 'rzp_test_Hbid9h5ogSqYoW',
            key_secret: 'Bxr6ihkUU6wPVTRH4eXWmaN4',
        });
        return new Promise(
            (res, rej) => {
                const order = new Order(data);
                order
                    .save()
                    .then(
                        () => {
                            const orderOptions = {
                                // 1 Rs = 100 paise
                                amount: order.order_total * 100,  // amount in the smallest currency unit
                                currency: "INR",
                                receipt: order._id
                            };
                            razorpayInstance.orders.create(
                                orderOptions,
                                function (err, razorpayOrder) {
                                    if (!err) {
                                        Cart.deleteMany({ user_id: order.user_details[0]._id })
                                        res(
                                            {
                                                status: 1,
                                                msg: "Order created",
                                                razorpayOrder,
                                                order
                                            }
                                        )
                                    } else {
                                        rej(
                                            {
                                                msg: "Unable to place order right now",
                                                status: 0
                                            }
                                        )
                                    }
                                }
                            );
                        }
                    )
                    .catch(
                        (err) => {
                            console.log(err);
                            rej(
                                {
                                    msg: "Unable to place order right now",
                                    status: 0
                                }
                            )
                        }
                    )
            }
        )
    }

    orderTransaction(data) {
        const { response, order, razorpayOrder } = data;
        return new Promise(
            (res, rej) => {
                try {
                    const hmac = crytpo.createHmac('sha256', 'Bxr6ihkUU6wPVTRH4eXWmaN4');
                    hmac.update(response.razorpay_order_id + "|" + response.razorpay_payment_id);
                    const generated_signature = hmac.digest('hex');
                    if (generated_signature == response.razorpay_signature) {
                        const transaction = new Transaction({
                            order_id: order._id,
                            amount: order.order_total,
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            payment_status: 1
                        })
                        transaction.save()
                            .then(
                                (success) => {
                                    Order.updateOne(
                                        { _id: order._id },
                                        {
                                            transaction_id: transaction._id,
                                            order_status: 1
                                        }
                                    ).then(
                                        () => {

                                            res(
                                                {
                                                    msg: "Order placed",
                                                    status: 1,
                                                    order_id: order._id
                                                }
                                            )
                                        }
                                    ).catch(
                                        () => {
                                            rej(
                                                {
                                                    msg: "Unable to place order",
                                                    status: 0
                                                }
                                            )
                                        }
                                    )
                                }
                            ).catch(
                                (error) => {
                                    rej(
                                        {
                                            msg: "Unable to place order",
                                            status: 0
                                        }
                                    )
                                }
                            )
                    } else {
                        rej(
                            {
                                msg: "Payment failed",
                                status: 0
                            }
                        )
                    }
                } catch (err) {
                    rej(
                        {
                            msg: "Internal server error",
                            status: 0
                        }
                    )
                }
            }
        )
    }

    userOrder(user_id) {
        return new Promise(
            async (res, rej) => {
                const orders = await Order.find({ user_id: user_id });
                res({
                    orders,
                    status: 1
                })
            }
        );
    }
}

module.exports = OrderController;