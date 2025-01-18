const readline = require('readline');

const Items = [
    { "fruits": ["mango", "strawberry", "peach"] },
    { "holder": ["cone", "cup", "stick"] },
    { "toppings": ["sprinkles", "dry fruits", "chocolate"] }
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Select fruit ${Items[0].fruits.join(", ")}: `, (fruit) => {
    rl.question(`Select holder ${Items[1].holder.join(", ")}: `, (holder) => {
        rl.question(`Select toppings ${Items[2].toppings.join(", ")}: `, (toppings) => {
            iceProcess(fruit, holder, toppings);
        });
    });
});

const iceProcess = (fruit, holder, toppings) => {
    console.log("Process started");

    setTimeout(() => {
        console.log(`Chop the fruit ${fruit}`);
        setTimeout(() => {
            console.log("Add water and ice");
            setTimeout(() => {
                console.log("Start the machine");
                setTimeout(() => {
                    console.log(`Place it in the holder: ${holder}`);
                    setTimeout(() => {
                        console.log(`Add toppings: ${toppings}`);
                        console.log("Ice cream is ready!");
                        rl.close();
                    }, 1000); // Add toppings
                }, 1000); // Place in holder
            }, 2000); // Start machine
        }, 3000); // Add water and ice
    }, 2000); // Chop fruit
};
