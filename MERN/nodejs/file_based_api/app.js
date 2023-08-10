const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

app.get('/create/:filename', (req, res) => {
    const fileName = req.params.filename;
    fs.access(
        `files/${fileName}`,
        (err) => {
            if (err) {
                fs.writeFile(
                    `files/${fileName}`,
                    "",
                    (err) => {
                        if (err) res.send("Unable to create the file");
                        else res.send("File created successfully");
                    }
                )
            } else {
                res.send("File named already exits");
            }
        }
    )
})

app.post('/write/:filename', (req, res) => {
    const fileName = req.params.filename;
    fs.writeFile(
        `files/${fileName}`,
        req.body.data,
        (err) => {
            if (err) res.send("Unable to write data");
            else res.send("Data added successfully")
        }
    )
})

app.delete("/delete/:filename", (req, res) => {
    const fileName = req.params.filename;
    fs.unlink(
        `files/${fileName}`,
        (err) => {
            if (err) res.send("Unable to delete the file");
            else res.send("File deleted successfully")
        }
    )
})

app.listen(5500, () => console.log('Server started'));