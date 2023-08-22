const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            max: 100,
            required: true
        },
        email: {
            type: String,
            max: 100,
            required: true,
            unique: true
        },
        gender: {
            type: String,
            enum: ["M", "F", "O"]
        },
        dob: {
            type: String,
            default: null
        },
        password: {
            type: String,
            required: true,
        }
    }
)

const User = mongoose.model("User", UserSchema);

module.exports = User;