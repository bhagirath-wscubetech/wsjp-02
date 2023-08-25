const { generateNameAndDesti } = require('../helper.js');
const Category = require('../models/Category.js');
class CategoryController {

    getData(id = null) {
        return new Promise(
            async (res, rej) => {
                try {
                    let category = []
                    if (id == null) {
                        category = await Category.find();
                    } else {
                        category = await Category.find({
                            _id: id
                        });
                    }
                    res({
                        status: 1,
                        category,
                        imageBaseUrl: "http://localhost:5000/category/"

                    })
                } catch (err) {
                    rej({
                        status: 0,
                        msg: "Internal server error",
                        category: []
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