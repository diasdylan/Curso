const Mage = require('./Mage.js');
const Thief = require('./Thief.js');
const Warrior = require('./Warrior.js');

let guts = new Warrior('Guts',10,10,10,5)
let corbo = new Thief('Corbo',10,5,8);



guts.changePosition();
// guts.changePosition()
// guts.atack(corbo);

console.table({guts})

guts.changePosition();
console.table(guts);