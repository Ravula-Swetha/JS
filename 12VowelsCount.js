function countVowels(str){
    const vow = "aeiouAEIOU";
    let v = 0;
    for(let i = 0; i < str.length; i++){
        if(vow.includes(str[i])){
            v++;
        }
    }
    return v;
}

const word = "Hello";
console.log("String: ", word);
const vowels = countVowels(word);
console.log("Vowels: ", vowels, " Non-Vowels: ", word.length - vowels);