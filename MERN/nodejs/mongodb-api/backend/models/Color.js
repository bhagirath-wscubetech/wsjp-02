const mongoose = require("mongoose");

const ColorSchema = new mongoose.Schema(
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
        code: {
            type: String,
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

const Color = mongoose.model("Color", ColorSchema);

module.exports = Color;