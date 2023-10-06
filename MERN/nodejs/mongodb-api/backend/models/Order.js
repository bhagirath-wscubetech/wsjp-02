const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        order_details: {
            type: Array
        },
        user_details: {
            type: Array
        },
        razor_pay_id: {
            type: String,
            default: null
        },
        order_total: {
            type: Number
        },
        order_status: {
            type: Number,
            default: 0,
            enum: [0, 1, 2, 3, 4, 5, 6]
            //0: Payment pending 1: Order Placed 2: Dispatch 3: Shipped 4: Delivered 5: Cancalled 6: Returned
        },
        transaction_id: {
            type: mongoose.Schema.Types.ObjectId,
            default: null
        },
    },
    { timestamps: true }
)

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;