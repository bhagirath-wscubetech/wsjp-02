const { generateNameAndDesti } = require('../helper.js');
const fs = require('fs');
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
                        imageBaseUrl: "http://localhost:5000/uploads/category/"

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
                    const fileInfo = generateNameAndDesti(file.name, "uploads/category");
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

    changeStatus(id, data) {
        return new Promise(
            (resolve, reject) => {
                try {
                    Category
                        .updateOne(
                            {
                                _id: id
                            },
                            {
                                ...data,
                                updateAt: new Date().getTime()
                            }
                        )
                        .then(
                            (success) => {
                                resolve(
                                    {
                                        status: 1,
                                        msg: "Data Updated"
                                    }
                                )
                            }
                        ).catch(
                            (error) => {
                                resolve(
                                    {
                                        status: 0,
                                        msg: "Unable to update the data"
                                    }
                                )
                            }
                        )
                }
                catch (err) {
                    reject({
                        status: 0,
                        msg: "Internal server error"
                    })
                }
            }
        )

    }


    updateData(id, data, file) {
        return new Promise(
            async (res, rej) => {
                try {
                    if (file == null) {
                        Category.updateOne(
                            { _id: id },
                            {
                                name: data.name,
                                slug: data.slug
                            }
                        ).then(
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
                    } else {
                        const fileInfo = generateNameAndDesti(file.name, "uploads/category");
                        file.mv(fileInfo.desti)
                            .then(
                                () => {
                                    ;
                                    Category.updateOne(
                                        { _id: id },
                                        {
                                            name: data.name,
                                            slug: data.slug,
                                            image: fileInfo.fileName
                                        }
                                    ).then(
                                        () => {
                                            res(
                                                {
                                                    status: 1,
                                                    msg: "Category updated successfully"
                                                }
                                            )
                                            fs.unlink(
                                                `public/uploads/category/${data.old_name}`,
                                                (err) => console.log(err)
                                            );
                                        }
                                    ).catch(
                                        () => {
                                            rej(
                                                {
                                                    status: 0,
                                                    msg: "Unable to update category"
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