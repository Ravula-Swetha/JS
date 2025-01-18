const objects = [
    {name: "namjoon", age: 30, city: "Ilsan"},
    {name: "seokjin", age: 32, city: "Ilsan"},
    {name: "yoongi", age: 31, city: "Daegu"},
    {name: "hoseok", age: 30, city: "Gwangu"},
    {name: "jimin", age: 29, city: "Busan"},
    {name: "taehyung", age: 29, city: "Daegu"},
    {name: "jungkook", age: 27, city: "Busan"}
]

console.log("Age below or equal to 30", objects.filter(obj => obj.age <= 30));