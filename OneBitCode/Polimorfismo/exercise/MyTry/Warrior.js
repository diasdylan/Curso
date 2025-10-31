const Character = require("./Character.js");

class Warrior extends Character {
  constructor(name, hp, atk, def, shield, position = 'atack') {
    super(name, hp, atk, def);
    this.shield = shield;
    this.position = position;
  }
  atack(enemy) {
    if(this.position === 'defense'){
        console.log(this.def, this.shield)
        console.log(this.def);
        return console.log(`Can't attack, must defend since the current position is ${this.position} and now my defense points are ${this.def}`)
    }
    //These two lines below could be and SHOULD this single line:
    //super.attack(enemy)
    //There is no need to rewrite the method if it is the exact same...Just call the super/parent class
    let damage = this.atk - enemy.def;
    let hpLeft = enemy.hp - damage;
    console.log(
      `The damage inflicted to the ${enemy.name} was ${damage} and the enemy hp left is ${hpLeft}`
    );
  }
  changePosition(){
    if(this.position === 'defense'){
        this.position = 'atack';
        this.def -= this.shield
        return console.log(`The position got changed to ${this.position}`)
    } else {
        this.position = 'defense';
        this.def += this.shield
        return console.log(`The position got changed to ${this.position}`)
    }
  }
}
module.exports = Warrior;
// const guts = new Warrior('Guts', 10,10,10,1,'atack');
// const bakihara = new Warrior('Bakihara',10,10,9,9,'defense')

// guts.changePosition()
// guts.atack(bakihara)

// guts.changePosition()
// guts.atack(bakihara)
