const express = require('express');
const UserControler = require('../controllers/UserController.js');


const UserRouter = express.Router();

UserRouter.get(
    "/",
    (req, res) => {
        const result = new UserControler().getData();
        res.send("Hello");
    }
)

UserRouter.post(
    "/create",
    (req, res) => {
        const result = new UserControler().createUser(req.body);
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

module.exports = UserRouter;