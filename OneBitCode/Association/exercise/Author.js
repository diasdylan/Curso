const Post = require('./Post.js')
class Author{
    constructor(Author){
        this.Author = Author;
        this.Posts = [];
    }
    createPost(...content){
        let postCreation = new Post(this.Author, content)
        this.Posts.push(postCreation);
        return postCreation
    }
}

let test = new Author('joe')
console.log(test)
test.createPost('Joe is mean')
console.log(test)
module.exports = Author;