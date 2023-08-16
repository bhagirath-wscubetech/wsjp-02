const express = require('express');
const { readFile, writeFile } = require('fs');
var cors = require('cors')
const app = express();


app.use(express.json());
app.use(cors());

app.get("/blog/:index?", (req, res) => {
    readFile(
        "data/blogs.json",
        (err, data) => {
            if (err) {
                res
                    .status(500)
                    .send(
                        {
                            status: 0,
                            msg: "Unable to get data"
                        }
                    )
            } else {
                const dataBlogs = JSON.parse(data.toString());
                res
                    .status(200)
                    .send(
                        {
                            status: 1,
                            blogs: req.params.index == null
                                ? dataBlogs
                                : dataBlogs[req.params.index],
                            msg: "Data found"
                        }
                    )
            }
        }
    )
})

app.post(
    "/create",
    (req, res) => {
        // console.log(req.body);
        readFile(
            "data/blogs.json",
            (err, data) => {
                if (err) {
                    res
                        .status(500)
                        .send(
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
                        req.body
                    ]
                    writeFile(
                        "data/blogs.json",
                        JSON.stringify(newData),
                        (err) => {
                            if (err) {
                                res
                                    .status(500)
                                    .send(
                                        {
                                            status: 0,
                                            msg: "Unable to add data"
                                        }
                                    )
                            } else {
                                res
                                    .status(200)
                                    .send(
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


app.patch(
    "/update/:index",
    (req, res) => {
        const index = req.params.index;
        readFile(
            "data/blogs.json",
            (err, data) => {
                if (err) {
                    res
                        .status(500)
                        .send(
                            {
                                status: 0,
                                msg: "Unable to get data"
                            }
                        )
                } else {
                    const dataBlogs = JSON.parse(data.toString());
                    dataBlogs[index].title = req.body.title;
                    dataBlogs[index].body = req.body.body;
                    writeFile(
                        "data/blogs.json",
                        JSON.stringify(dataBlogs),
                        (err) => {
                            if (err) {
                                res
                                    .status(500)
                                    .send(
                                        {
                                            status: 0,
                                            msg: "Unable to update the data"
                                        }
                                    )
                            } else {
                                res
                                    .status(200)
                                    .send(
                                        {
                                            status: 1,
                                            msg: "Data updated successfully"
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

app.delete("/delete/:index", (req, res) => {
    const delIndex = req.params.index;
    readFile(
        "data/blogs.json",
        (err, data) => {
            if (err) {
                res
                    .status(500)
                    .send(
                        {
                            status: 0,
                            msg: "Unable to get data"
                        }
                    )
            } else {
                const oldData = JSON.parse(data.toString())
                const newData = oldData.filter(
                    (d, i) => {
                        if (i == delIndex) {
                            return false;
                        } else {
                            return true;
                        }
                    }
                )
                writeFile(
                    "data/blogs.json",
                    JSON.stringify(newData),
                    (err) => {
                        if (err) {
                            res
                                .status(500)
                                .send(
                                    {
                                        status: 0,
                                        msg: "Unable to delete data"
                                    }
                                )
                        } else {
                            res
                                .status(200)
                                .send(
                                    {
                                        status: 1,
                                        msg: "Data deleted successfully"
                                    }
                                )
                        }
                    }
                )
            }
        }
    )
})

app.listen(
    5500,
    () => console.log('Server started')
)