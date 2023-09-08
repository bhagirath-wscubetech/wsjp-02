const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserRouter = require('./routes/UserRouter.js');
const CategoryRouter = require('./routes/CategoryRouter.js');
const bodyParser = require('body-parser');
const ColorRouter = require('./routes/ColorRouter.js');
const ProductRouter = require('./routes/ProductRouter.js');
const PORT = 5000;


const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'))

app.use("/user", UserRouter);
app.use("/category", CategoryRouter);
app.use("/color", ColorRouter);
app.use("/product", ProductRouter);

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
