function binarySearch(arr, key){
    let start = arr[0];
    let end = arr[arr.length-1];
    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid] === key){
            return mid;
        }
        if(arr[mid] > key){
            end = mid - 1;
        }
        else{
            start = mid + 1;
        }
    }
    return -1;
}

const arr = [1, 3, 5, 6, 7, 8, 9];
const key = 7;
console.log("Binary Search: ", binarySearch(arr, key));