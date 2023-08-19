const express = require('express');
const mongoose = require('mongoose');
const app = express();


mongoose.connect(
    "mongodb+srv://wscubetech:MuOGSDnCYkdGUnoH@cluster0.6qpqbkk.mongodb.net/?retryWrites=true&w=majority"
).then(
    (success) => {
        app.listen(
            5000,
            () => console.log("Server started")
        )
    }
).catch(
    (error) => {
        console.log(error);
        console.log('Unable to connect to the database')
    }
)
