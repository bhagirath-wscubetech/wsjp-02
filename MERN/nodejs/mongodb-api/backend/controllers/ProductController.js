const { generateNameAndDesti } = require('../helper.js');
const Product = require('../models/Product.js');
class ProductController {

    getData(id = null, filter = null) {
        return new Promise(
            async (res, rej) => {
                try {
                    let product = []
                    if (id == null) {
                        product = await Product.find();
                    } else {
                        product = await Product.find({
                            _id: id
                        });
                    }
                    res({
                        status: 1,
                        product,
                        imageBaseUrl: "http://localhost:5000/uploads/product/"

                    })
                } catch (err) {
                    rej({
                        status: 0,
                        msg: "Internal server error",
                        product: []
                    })
                }
            }
        )
    }

    create(data, file) {
        return new Promise(
            async (res, rej) => {
                try {
                    const fileInfo = generateNameAndDesti(file.name, "uploads/product");
                    file.mv(fileInfo.desti)
                        .then(
                            () => {
                                data.image = fileInfo.fileName;
                                const product = new Product(data);
                                product.save()
                                    .then(
                                        () => {
                                            res(
                                                {
                                                    status: 1,
                                                    msg: "Product added successfully"
                                                }
                                            )
                                        }
                                    ).catch(
                                        (err) => {
                                            rej(
                                                {
                                                    status: 0,
                                                    msg: "Unable to add product"
                                                }
                                            )
                                        }
                                    )
                            }
                        ).catch(
                            (err) => {
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


module.exports = ProductController;