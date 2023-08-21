const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserRouter = require('./routes/UserRouter.js');
const PORT = 5000;

const app = express();
app.use(express.json());

app.use("/user", UserRouter);

mongoose.connect(
    "mongodb+srv://wscubetech:MuOGSDnCYkdGUnoH@cluster0.6qpqbkk.mongodb.net/?retryWrites=true&w=majority"
).then(
    () => {
        app.listen(PORT, () => console.log('Server started'));
    }
).catch(
    (error) => {
        console.log(error)
    }
)
