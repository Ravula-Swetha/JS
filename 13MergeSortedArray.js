const merge = (arr1, arr2) =>{
    let mer = [];
    let i = 0, j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] > arr2[j]){
            mer.push(arr2[j]);
            j++;
        }
        else{
            mer.push(arr1[i]);
            i++;
        }
    }
    while(i < arr1.length){
        mer.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        mer.push(arr2[j]);
        j++;
    }
    return mer;
}

const arr1 = [1, 3, 6];
const arr2 = [2, 4, 7];
console.log("Sorted Merged Array: ", merge(arr1, arr2));