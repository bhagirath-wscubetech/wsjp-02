const express = require('express');
const cors = require('cors');
const app = express();
const fileUpload = require('express-fileupload');

app.use(cors());
app.get("/", (req, res) => console.log(res.send("Hello")));

app.post(
    "/upload",
    fileUpload({
        createParentPath: true
    }),
    (req, res) => {

        const random = Math.floor(Math.random() * 1000) + (new Date().getTime())

        const img = req.files.image;
        const destination = "./public/uploads/" + random + img.name;
        try {
            img.mv(destination);
            res.send("file uploaded");
        } catch (err) {
            res.send("server error");
        }
    }
)

app.listen(
    5000,
    () => console.log('server started')
)