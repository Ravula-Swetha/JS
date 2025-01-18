function hasProperty(obj, property){
    return obj.hasOwnProperty(property);
}

const obj = {name: "Kookie", age: 19, city: "Busan"};
const property = "city";
console.log("Has Property: ", hasProperty(obj, property));