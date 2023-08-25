const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            max: 100,
            required: true,
            unique: true
        },
        slug: {
            type: String,
            max: 100,
            required: true,
            unique: true
        },
        status: {
            type: Boolean,
            enum: [1, 0],
            default: 1
        },
        image: {
            type: String,
            max: 100,
            required: true,
            unique: true
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

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;