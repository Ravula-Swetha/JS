const readline = require('readline');
const bookList = [
    {title: "Harry Potter", author: "Jk Rowling", bookId: 1},
    {title: "Almond", author: "Lee", bookId: 3},
    {title: "Silent Killer", author: "Jk", bookId: 5}
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Book Id: ", (id) =>{
    let books = bookList.find(book => book.bookId === parseInt(id));

    if(books){
        console.log(`Book with bookid ${books.bookId}: ${books.title} with author: ${books.author} is avaliable`);
        
    }
    else{
        console.log("Book not avaliable");   
    }
    rl.close();
})