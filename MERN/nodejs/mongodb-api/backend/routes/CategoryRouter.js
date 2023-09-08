const express = require('express');
const CategoryController = require('../controllers/CategoryController.js');
const fileUpload = require('express-fileupload');

const CategoryRouter = express.Router();

CategoryRouter.get(
    "/:id?",
    (req, res) => {
        const result = new CategoryController().getData(req.params.id);
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

CategoryRouter.delete(
    "/delete/:id",
    (req, res) => {
        const result = new CategoryController().deleteData(req.params.id);
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


CategoryRouter.post(
    "/create",
    fileUpload({
        createParentPath: true
    }),
    (req, res) => {
        const result = new CategoryController().create(req.body, req.files.image);
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

CategoryRouter.patch(
    "/update/:id",
    fileUpload({
        createParentPath: true
    }),
    (req, res) => {
        let result = ""
        if (req.files == null) {
            result = new CategoryController().updateData(req.params.id, req.body, null);
        } else {
            result = new CategoryController().updateData(req.params.id, req.body, req.files.image);
        }
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


CategoryRouter.patch(
    "/status-update/:id",
    (req, res) => {
        const result = new CategoryController().changeStatus(req.params.id, req.body);
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

module.exports = CategoryRouter;