const express = require('express');
const CartControler = require('../controllers/CartController');

const CartRouter = express.Router();
CartRouter.post(
    "/add-to-cart/:user_id",
    (req, res) => {
        const result = new CartControler().addToCart(req.body, req.params.user_id);
        result.then(
            (success) => {
                res.send(success);
            }
        ).catch(
            (error) => {
                res.send(error)
            }
        )
    }
)
CartRouter.get(
    "/get-cart/:user_id",
    (req, res) => {
        const result = new CartControler().getCart(req.params.user_id);
        result.then(
            (success) => {
                res.send(success);
            }
        ).catch(
            (error) => {
                res.send(error)
            }
        )
    }
)
module.exports = CartRouter;