const Book = require('./Book')
class Autor{
    constructor(name){
        this.name = name
        this.books = []
    }
    addBook(title){
        this.books.push(new Book(title, this.name))
    }
    listBooks(){
        return this.books
    }
}

module.exports = Autor;