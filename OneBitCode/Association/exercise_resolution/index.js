const Author = require("./Author");

const john = new Author('John')

const post = john.writePost('pescado', 'ramon es su nombre')

post.addComment('Jefe', 'LOL')
// post.addComment('drilo', 'hehehe')

console.log(john)