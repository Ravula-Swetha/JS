function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let pivot = arr[0];
    let left = [];
    let right = [];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > pivot){
            right.push(arr[i]);
        }
        else{
            left.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [3, 8, 1, 5, 9, 2, 4];
console.log("Sorted array: ", quickSort(arr));