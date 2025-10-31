const Character = require("./Character.js");


class Mage extends Character {
  constructor(name, hp, atk, def, mp) {
    super(name, hp, atk, def);
    this.mp = mp;
  }
  atack(enemy) {
    let damageMP = (this.atk + this.mp) - enemy.def;
    let hpLeft = enemy.hp - damageMP;
    if(hpLeft < 0){
         return console.log(`The ${enemy.name} fell in battle, be quick and go for the spoils, you murder`)
    }
    console.log(
      `The damage inflicted to the ${enemy.name} was ${damageMP} and the enemy hp left is ${hpLeft}`
    );
  }
  heal(target){
    let healingPoints = this.mp*2;
    console.log(`You killed, stole and now you brought ${target.name} back to life. U r sick ${this.name}`)
    target.hp += healingPoints;
    console.log(`You have healed ${target.name} for ${healingPoints} and now his total life points are ${target.hp}`);
  }
}
module.exports = Mage;
// const mago = new Mage('pato', 2,2,1,8)
// const darkMage = new Mage('lino', 1,1,4,6)
// console.log(mago)
// console.log(darkMage)

// mago.atack(darkMage)
// mago.heal(darkMage)