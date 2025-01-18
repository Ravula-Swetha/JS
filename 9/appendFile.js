const fs = require('fs');
const path = require('path');
const readline = require('readline');

const append = ((name, text) =>{
    let filepath = path.join(__dirname, name);
    fs.appendFile(filepath, text, (err) =>{
        if(err){
            console.log("Error appending file: ", err.message);
            return;
        }
        console.log("Successfully appended to file!");
        rl.close();
    })
})

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter file name: ", (name) =>{
    rl.question("Enter text to append: ", (text) =>{
        append(name, text);
    })
})