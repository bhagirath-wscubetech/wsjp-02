const { generateNameAndDesti } = require('../helper.js');
const Category = require('../models/Category.js');
class CategoryController {

    getData(id = null) {
        return new Promise(
            async (res, rej) => {
                try {
                    let users = []
                    if (id == null) {
                        users = await Category.find();
                    } else {
                        users = await Category.find({
                            _id: id
                        });
                    }
                    res({
                        status: 1,
                        users
                    })
                } catch (err) {
                    rej({
                        status: 0,
                        msg: "Internal server error",
                        users: []
                    })
                }
            }
        )
    }

    create(data, file) {
        return new Promise(
            async (res, rej) => {
                try {
                    const fileInfo = generateNameAndDesti(file.name, "category");

                    file.mv(fileInfo.desti)
                        .then(
                            () => {
                                data.image = fileInfo.fileName;
                                const category = new Category(data);
                                category.save()
                                    .then(
                                        () => {
                                            res(
                                                {
                                                    status: 1,
                                                    msg: "Category added successfully"
                                                }
                                            )
                                        }
                                    ).catch(
                                        () => {
                                            rej(
                                                {
                                                    status: 0,
                                                    msg: "Unable to add category"
                                                }
                                            )
                                        }
                                    )
                            }
                        ).catch(
                            () => {
                                rej(
                                    {
                                        status: 0,
                                        msg: "Unable to upload the file"
                                    }
                                )
                            }
                        );


                }
                catch (err) {
                    rej(
                        {
                            status: 0,
                            msg: "Unable to upload the file"
                        }
                    )
                }
            }
        )
    }


}


module.exports = CategoryController;