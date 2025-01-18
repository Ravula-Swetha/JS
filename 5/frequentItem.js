function frequentItem(arr){
    let maxfreq = 0;
    let maxitem;
    let map = {};
    for(item of arr){
        map[item] = (map[item] || 0) + 1;
        if(map[item] > maxfreq){
            maxfreq = map[item];
            maxitem = item;
        }
    }
    return{
        item: maxitem,
        frequency: maxfreq
    };
}

const arr = [1,2,1,1,2,4,3];
console.log("input array: ", arr);
const res = frequentItem(arr);
console.log("Most Frequent Item: ", res.item);
console.log("Frequency: ", res.frequency);