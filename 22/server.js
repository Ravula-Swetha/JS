const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) =>{
    let fpath;
    let statusCode = 200;
    switch (req.url){
        case "/":
        case "/home":
            fpath = path.join(__dirname, "home.html");
            break;
        case "/about":
            fpath = path.join(__dirname, "about.html");
            break;
        case "/contact":
            fpath = path.join(__dirname, "contact.html");
            break;
        default:
            fpath = path.join(__dirname, "404.html");
            statusCode = 404;
            break;
    }
    fs.readFile(fpath, "utf-8", (err, data) =>{
        res.writeHead(statusCode, {'Content-Type': 'text/html'});
        res.end(data);
    })
});

let port = 5000;
server.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`)
});