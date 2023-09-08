const express = require('express');
const fileUpload = require('express-fileupload');
const ProductController = require('../controllers/ProductController.js');

const ProductRouter = express.Router();

ProductRouter.get(
    "/:id?",
    (req, res) => {
        console.log(req.body);
        const result = new ProductController().getData(req.params.id,req.body);
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

ProductRouter.delete(
    "/delete/:id",
    (req, res) => {
        const result = new ProductController().deleteData(req.params.id);
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


ProductRouter.post(
    "/create",
    fileUpload({
        createParentPath: true
    }),
    (req, res) => {
        const result = new ProductController().create(req.body, req.files.image);
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

ProductRouter.patch(
    "/update/:id",
    (req, res) => {
        const result = new ProductController().updateUser(req.params.id, req.body)
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

module.exports = ProductRouter;