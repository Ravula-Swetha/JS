const objects = [
    {name: "namjoon", age: 30, city: "Ilsan"},
    {name: "seokjin", age: 32, city: "Ilsan"},
    {name: "yoongi", age: 31, city: "Daegu"},
    {name: "hoseok", age: 30, city: "Gwangu"},
    {name: "jimin", age: 28, city: "Busan"},
    {name: "taehyung", age: 28, city: "Daegu"},
    {name: "jungkook", age: 27, city: "Busan"}
]

const res = objects.reduce((acc, user) =>{
    if(!acc[user.age]){
        acc[user.age] = [];
    }
    acc[user.age].push(user.name);
    return acc;
}, {});
console.log("Group by age:");
console.log(res);