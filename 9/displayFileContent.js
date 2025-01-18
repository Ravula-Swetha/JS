const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'bun.txt');

fs.readFile(filepath, 'utf-8', (err, data) =>{ 
    if(err){
        console.log("Error reading file: ", err.message);
        return;
    }
    else{
        console.log("File Contents:");
        console.log(data);
    }
});