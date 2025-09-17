const User = require("./index.js");

class BabyShark extends User {
  constructor(name, tuturutu) {
    super(name);
    this.tuturutu = tuturutu;
  }
  singIt(){return this.tuturutu};
}

let dilo = new User("dilo");
let tututu = new BabyShark("sharkito", "yes tuturutu");

console.log(dilo);
console.log(tututu);

console.log(tututu instanceof BabyShark);
console.log(tututu.singIt())
console.log(tututu.sayMyName('manacing tone'))