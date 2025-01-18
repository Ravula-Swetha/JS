const http = require('http');
const fs = require('fs');
const path = require('path');

let server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<html><body><h1>Welcome To KMIT</h1></body></html>');
    // let fpath = path.join(__dirname, "my.html")
    // fs.readFile(fpath, "utf-8", (err, data) =>{
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.end(data);
    // }) 
});

server.listen(5000, ()=>{
    console.log("Server running on http://localhost:5000");
})