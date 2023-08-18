const { readFile, writeFile } = require('fs');
class BlogController {

    getData(index = null) {
        return new Promise(
            (res, rej) => {
                readFile(
                    "data/blogs.json",
                    (err, data) => {
                        if (err) {
                            rej({
                                status: 0,
                                msg: "Unable to get data"
                            })
                        } else {
                            const dataBlogs = JSON.parse(data.toString());
                            res({
                                status: 1,
                                blogs: index == null
                                    ? dataBlogs
                                    : dataBlogs[index],
                                msg: "Data found"
                            })
                        }
                    }
                )
            }
        )


    }

    createData(blogsData) {
        return new Promise(
            (res, rej) => {
                readFile(
                    "data/blogs.json",
                    (err, data) => {
                        if (err) {
                            rej(
                                {
                                    status: 0,
                                    msg: "Unable to get data",
                                    err
                                }
                            )
                        } else {
                            const oldData = JSON.parse(data.toString());
                            // data.toString() -> json 
                            // JSON.parse() -> json -> array
                            const newData = [
                                ...oldData,
                                blogsData
                            ]
                            writeFile(
                                "data/blogs.json",
                                JSON.stringify(newData),
                                (err) => {
                                    if (err) {
                                        rej(
                                            {
                                                status: 0,
                                                msg: "Unable to add data"
                                            }
                                        )
                                    } else {
                                        res(
                                            {
                                                status: 1,
                                                msg: "Data added successfully"
                                            }
                                        )
                                    }
                                }
                            )
                        }
                    }
                )

            }
        )
    }

}

module.exports = BlogController;