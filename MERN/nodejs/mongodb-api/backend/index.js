const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserRouter = require('./routes/UserRouter.js');
const CategoryRouter = require('./routes/CategoryRouter.js');
const bodyParser = require('body-parser');
const ColorRouter = require('./routes/ColorRouter.js');
const ProductRouter = require('./routes/ProductRouter.js');
const AdminRouter = require('./routes/AdminRouter.js');
const PORT = 5000;
const Cryptr = require('cryptr');
const auth = require('./middlewares/auth.js');
require('dotenv').config('.env');
const cryptr = new Cryptr("ws@123!!jaipur");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'))

app.use(auth); //calling of a middleware


app.use("/user", UserRouter);
app.use("/category", CategoryRouter);
app.use("/color", ColorRouter);
app.use("/product", ProductRouter);
app.use("/admin", AdminRouter);

app.get("/decrypt-password/:password", (req, res) => {
    res.send(cryptr.decrypt(req.params.password));
})

mongoose.connect(
    process.env.DB_URL
).then(
    () => {
        app.listen(PORT, () => console.log('Server started'));
    }
).catch(
    (error) => {
        console.log(error)
    }
)
