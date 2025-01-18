function bubbleSort(arr){
    let swapped;
    let n = arr.length;
    for(let i = 0; i < n; i++){
        swapped = false;
        for(let j = 0; j < n-i-1; j++){
            if(arr[j+1] < arr[j]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }
        }
        if(!swapped){
            break;
        }
    }
    return [...arr];
}
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Bubble Sort: ", bubbleSort(arr));