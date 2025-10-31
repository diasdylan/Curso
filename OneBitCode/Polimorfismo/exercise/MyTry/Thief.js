const Character = require("./Character.js");


class Thief extends Character {
  constructor(name, hp, atk, def) {
    super(name, hp, atk, def);
  }
  atack(enemy) {
    let damageCRT = (this.atk - enemy.def) * 2;
    console.log(`The calc is: Thief damage = ${this.atk} substracs the enemy defense ${enemy.def} then multiply by 2`)
    let hpLeft = enemy.hp - damageCRT;
    console.log(
      `The damage inflicted to the ${enemy.name} was ${damageCRT} because the Thief always crits and the enemy hp left is ${hpLeft}`
    );
  }
}
module.exports = Thief;
// const test = new Thief("Ramon", 10, 10, 5);
// const defensor = new Thief("Salame", 8, 5, 8);
// console.log(test);
// console.log(defensor);

// test.atack(defensor);
