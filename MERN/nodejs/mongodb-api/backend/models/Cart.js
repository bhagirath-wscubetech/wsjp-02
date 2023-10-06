const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
    {
        pId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        qty: {
            type: Number,
            default: 1
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        updateAt: {
            type: String,
            default: null
        },
        createdAt: {
            type: String,
            default: new Date().getTime()
        }
    }
)

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;