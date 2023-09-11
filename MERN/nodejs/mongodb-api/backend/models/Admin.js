const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
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
        password: {
            type: String,
            required: true,
        },
        updateAt: {
            type: String,
            default: null
        },
        createdAt: {
            type: String,
            default: null
        }
    }
)

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;