const Autor = require('./Autor')

const raven = new Autor('RavenCraft');
const ramon = new Autor('Ramon')

raven.addBook('The great crow')
raven.addBook('The great Theo')
ramon.addBook('El chapo')
let ravenBooks = raven.listBooks();
let ramonBooks = ramon.listBooks()
console.log(raven)
console.log(ramon)
console.log(ravenBooks)
console.log(ramonBooks)