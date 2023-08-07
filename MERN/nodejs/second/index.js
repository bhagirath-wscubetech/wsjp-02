const fs = require('fs');
const http = require('http');
// file system

// replace old data and update the new data
fs.writeFile(
    "note.html",
    "<h1>This is the updated data</h1>",
    function (err) {
        if (err) console.log(err)
        else console.log('Updated')
    }
)

// create a file
// replace old data and update the new data
// fs.appendFile(
//     "note.txt", // fileName
//     " Hello this is a testing file", // file text
//     function (err) { // callback function
//         console.log(err);
//     }
// );

// fs.readFile(
//     "note.txt",
//     {
//         encoding:"utf-8"
//     },
//     function (err, data) {
//         console.log(data);
//     }
// )


// const data = fs.readFileSync("note.txt", { encoding: 'utf-8' };
// console.log(data);


// fs.unlink('note.txt', function (err) {
//     if (!err) {
//         console.log('File was deleted');
//     } else {
//         console.log(err)
//     }
// })



// fs.rename('note.txt', 'mynote.txt', function (err) {
//     if (err) throw err;
//     console.log('File Renamed!');
// });
