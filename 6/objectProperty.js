function properties(obj){
    return Object.keys(obj);
}
const obj = {name: "Kookie", age: 19, city: "Busan"};
console.log("Object Properties: ", properties(obj));