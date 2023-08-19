const express = require('express');
const BlogRouter = require('./Routes/BlogRouter.js');
const UserRouter = require('./Routes/UserRouter.js');

var cors = require('cors')
const app = express();

// Route Grouping

app.use(express.json());
app.use(cors());


app.use("/blog", BlogRouter);
app.use("/user", UserRouter);




app.listen(
    5500,
    () => console.log('Server started')
)