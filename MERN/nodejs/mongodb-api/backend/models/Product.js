const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            maxLength: 100,
            required: true,
            unique: true
        },
        slug: {
            type: String,
            maxLength: 100,
            required: true,
            unique: true
        },
        status: {
            type: Boolean,
            enum: [1, 0],
            default: 1
        },
        category: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        image: {
            type: String,
            maxLength: 100,
            required: true,
            unique: true
        },
        price: {
            type: Number,
            min: 1,
            required: true
        },
        discounted: {
            type: Number,
            default: 0
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

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;