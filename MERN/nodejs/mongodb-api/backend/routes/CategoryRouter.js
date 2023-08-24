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
        // console.log(req.body);
        // console.log(req.files.image);
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
    (req, res) => {
        const result = new CategoryController().updateUser(req.params.id, req.body)
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