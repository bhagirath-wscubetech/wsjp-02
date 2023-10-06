const express = require('express');
const OrderController = require('../controllers/OrderController');

const OrderRouter = express.Router();
OrderRouter.post(
    "/create-order",
    (req, res) => {
        const result = new OrderController().createOrder(req.body);
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

OrderRouter.post(
    "/order-transaction",
    (req, res) => {
        const result = new OrderController().orderTransaction(req.body);
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

OrderRouter.get(
    "/get-orders/:user_id",
    (req, res) => {
        const result = new OrderController().userOrder(req.params.user_id);
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
module.exports = OrderRouter;