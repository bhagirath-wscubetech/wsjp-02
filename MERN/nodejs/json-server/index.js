const express = require('express');
const BlogController = require('./Controllers/BlogController.js');
var cors = require('cors')
const app = express();


app.use(express.json());
app.use(cors());

app.get("/blog/:index?", (req, res) => {
    const index = req.params.index ?? null;
    const respones = new BlogController().getData(index);
    respones.then(
        (success) => {
            res.status(200).send(success)
        }
    ).catch(
        (error) => {
            res.status(500).send(error)
        }
    )
})

app.post(
    "/create",
    (req, res) => {
        const respones = new BlogController().createData(req.body);
        respones.then(
            (success) => {
                res.status(200).send(success)
            }
        ).catch(
            (error) => {
                res.status(500).send(error)
            }
        )
    }
)


// app.patch(
//     "/update/:index",
//     (req, res) => {
//         const index = req.params.index;
//         readFile(
//             "data/blogs.json",
//             (err, data) => {
//                 if (err) {
//                     res
//                         .status(500)
//                         .send(
//                             {
//                                 status: 0,
//                                 msg: "Unable to get data"
//                             }
//                         )
//                 } else {
//                     const dataBlogs = JSON.parse(data.toString());
//                     dataBlogs[index].title = req.body.title;
//                     dataBlogs[index].body = req.body.body;
//                     writeFile(
//                         "data/blogs.json",
//                         JSON.stringify(dataBlogs),
//                         (err) => {
//                             if (err) {
//                                 res
//                                     .status(500)
//                                     .send(
//                                         {
//                                             status: 0,
//                                             msg: "Unable to update the data"
//                                         }
//                                     )
//                             } else {
//                                 res
//                                     .status(200)
//                                     .send(
//                                         {
//                                             status: 1,
//                                             msg: "Data updated successfully"
//                                         }
//                                     )
//                             }
//                         }
//                     )
//                 }
//             }
//         )

//     }
// )

// app.delete("/delete/:index", (req, res) => {
//     const delIndex = req.params.index;
//     readFile(
//         "data/blogs.json",
//         (err, data) => {
//             if (err) {
//                 res
//                     .status(500)
//                     .send(
//                         {
//                             status: 0,
//                             msg: "Unable to get data"
//                         }
//                     )
//             } else {
//                 const oldData = JSON.parse(data.toString())
//                 const newData = oldData.filter(
//                     (d, i) => {
//                         if (i == delIndex) {
//                             return false;
//                         } else {
//                             return true;
//                         }
//                     }
//                 )
//                 writeFile(
//                     "data/blogs.json",
//                     JSON.stringify(newData),
//                     (err) => {
//                         if (err) {
//                             res
//                                 .status(500)
//                                 .send(
//                                     {
//                                         status: 0,
//                                         msg: "Unable to delete data"
//                                     }
//                                 )
//                         } else {
//                             res
//                                 .status(200)
//                                 .send(
//                                     {
//                                         status: 1,
//                                         msg: "Data deleted successfully"
//                                     }
//                                 )
//                         }
//                     }
//                 )
//             }
//         }
//     )
// })

app.listen(
    5500,
    () => console.log('Server started')
)