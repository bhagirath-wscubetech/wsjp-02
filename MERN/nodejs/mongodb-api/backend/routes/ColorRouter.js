const express = require('express');
const ColorController = require('../controllers/ColorController.js');

const ColorRouter = express.Router();

ColorRouter.get(
    "/:id?",
    (req, res) => {
        const result = new ColorController().getData(req.params.id);
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

ColorRouter.delete(
    "/delete/:id",
    (req, res) => {
        const result = new ColorController().deleteData(req.params.id);
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


ColorRouter.post(
    "/create",
    (req, res) => {
        const result = new ColorController().create(req.body);
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

ColorRouter.patch(
    "/update/:id",
    (req, res) => {
        const result = new ColorController().updateUser(req.params.id, req.body)
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

module.exports = ColorRouter;