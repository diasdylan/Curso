const Comments = require('./Comment.js');
const Author = require('./Author.js');

class Post{
  constructor(author, ...comment){
    this.Author = author;
    this.Comentarios = new Comments(comment);
  }
  adicionarComentario(...text){
    // console.log(text)
    return this.Comentarios.Comentario.push(...text)
  }
}

module.exports = Post;

// let test = new Post('Ramon', 'Drilo', 'Salame')
// console.log(test)
// test.adicionarComentario('test')
// console.log(test)