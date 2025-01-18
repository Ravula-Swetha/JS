const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

setTimeout(() =>{
    console.log("Food is ordered");
    setTimeout(() =>{
        console.log("Preparing Food....");
        setTimeout(() =>{
            console.log("Packing Food....");
            setTimeout(() =>{
                console.log("Delivering Food....");
                console.log("Food Delivered!");
            }, 4000);
        }, 2000);
    }, 3000);
}, 2000);