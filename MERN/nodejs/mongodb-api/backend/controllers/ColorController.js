const Color = require('../models/Color.js');
class ColorController {

    getData(id = null) {
        return new Promise(
            async (res, rej) => {
                try {
                    let color = []
                    if (id == null) {
                        color = await Color.find();
                    } else {
                        color = await Color.find({
                            _id: id
                        });
                    }
                    res({
                        status: 1,
                        color

                    })
                } catch (err) {
                    rej({
                        status: 0,
                        msg: "Internal server error",
                        color: []
                    })
                }
            }
        )
    }

    create(data) {
        return new Promise(
            async (res, rej) => {
                try {
                    const color = new Color(data);
                    color.save()
                        .then(
                            () => {
                                res(
                                    {
                                        status: 1,
                                        msg: "Color added successfully"
                                    }
                                )
                            }
                        ).catch(
                            (error) => {
                                console.log(error);
                                rej(
                                    {
                                        status: 0,
                                        msg: "Unable to add color"
                                    }
                                )
                            }
                        )
                }
                catch (err) {
                    rej(
                        {
                            status: 0,
                            msg: "Internal server error"
                        }
                    )
                }
            }
        )
    }


}


module.exports = ColorController;