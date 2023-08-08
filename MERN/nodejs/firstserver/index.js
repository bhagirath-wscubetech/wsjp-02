const http = require('http')
const fs = require('fs');
const server = http.createServer(
    (req, res) => {
        let page = "<h1> 404 </h1>";
        if (req.url == "/") {
            page = fs.readFileSync("pages/listing.html", { encoding: "utf-8" });
        } else if (req.url == "/details") {
            page = fs.readFileSync("pages/details.html", { encoding: "utf-8" });
        }
        res.end(page);
    }
)

server.listen(
    5000,
    () => {
        console.log('Server started at http://localhost:5000');
    }
)