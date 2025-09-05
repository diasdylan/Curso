class Book{
    constructor(name, author = 'Me'){
        this.name = name;
        this.author = author;
        this.published = false
    }
    publish(){
        this.published = true;
    }
}
const eragon = new Book('eragon', 'idk');
eragon.publish();
const lord = new Book('ramon', 'canto')
//Return error
// Class constructor cannot be invoked without 'new' keyword
// const test = Book('namorado', 'arroz', 'jamaica') 

console.log(eragon)
console.log(lord)
console.log(eragon instanceof Book);