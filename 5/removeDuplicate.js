function removeDuplicate(arr){
    return [...new Set(arr)];
}

const arr = [1, 2, 1, 3, 7, 7];
const res = removeDuplicate(arr);
console.log("Input: ", arr);
console.log("Output: ", res);