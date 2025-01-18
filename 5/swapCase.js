function swapCase(input){
    let str = "";
    for(let i = 0; i < input.length; i++){
        let char = input[i];
        if(char === char.toLowerCase()){
            str += char.toUpperCase();
        }
        else{
            str += char.toLowerCase();
        }
    }
    return str;
}

const input = "The Quick Brown Fox";
const output = swapCase(input);
console.log("input: ", input);
console.log("output: ", output);