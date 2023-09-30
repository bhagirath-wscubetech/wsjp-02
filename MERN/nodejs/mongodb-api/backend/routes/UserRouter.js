const express = require('express');
const UserControler = require('../controllers/UserController.js');


const UserRouter = express.Router();

UserRouter.get(
    "/:id?",
    (req, res) => {
        const result = new UserControler().getData(req.params.id);
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

UserRouter.delete(
    "/delete/:id",
    (req, res) => {
        const result = new UserControler().deleteData(req.params.id);
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

UserRouter.patch(
    "/update/:id",
    (req, res) => {
        const result = new UserControler().updateUser(req.params.id, req.body)
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
UserRouter.post(
    "/login",
    (req, res) => {
        const result = new UserControler().login(req.body)
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

UserRouter.post(
    "/add-to-cart/:id",
    (req, res) => {
        const result = new UserControler().addToCart(req.params.id, req.body);
        result.then(
            (success) => {
                console.log("success",success);
                res.send(success);
            }
        ).catch(
            (error) => {
                console.log("error",error);
                res.send(error)
            }
        )
    }
)



module.exports = UserRouter;