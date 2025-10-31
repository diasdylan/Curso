class Character {
  constructor(name, hp, atk, def) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
  }
  atack(enemy) {
    let damage = this.atk - enemy.def;
    let hpLeft = enemy.hp - damage;
    console.log(
      `The damage inflicted to the ${enemy.name} was ${damage} and the enemy hp left is ${hpLeft}`
    );
  }
}

// const geto = new Character("Geto", 10, 10, 10);
// const curse = new Character("Curse", 10, 5, 8);
// console.log(geto);
// console.log(curse);

// geto.atack(curse);

module.exports = Character;
