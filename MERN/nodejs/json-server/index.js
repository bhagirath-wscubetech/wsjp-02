const express = require('express');
const { readFile, writeFile } = require('fs');
var cors = require('cors')

const app = express();

app.use(cors());

app.get("/blog", (req, res) => {
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
                res
                    .status(200)
                    .send(
                        {
                            status: 1,
                            blogs: JSON.parse(data.toString()),
                            msg: "Data found"
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