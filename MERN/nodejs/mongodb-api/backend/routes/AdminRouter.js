const express = require('express');
const AdminController = require('../controllers/AdminController.js');

const AdminRouter = express.Router();

AdminRouter.get(
    "/:id?",
    (req, res) => {
        const result = new AdminController().getData(req.params.id);
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

AdminRouter.delete(
    "/delete/:id",
    (req, res) => {
        const result = new AdminController().deleteData(req.params.id);
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


AdminRouter.post(
    "/create",
    (req, res) => {
        const result = new AdminController().createAdmin(req.body);
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

AdminRouter.patch(
    "/update/:id",
    (req, res) => {
        const result = new AdminController().updateAdmin(req.params.id, req.body)
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

module.exports = AdminRouter;