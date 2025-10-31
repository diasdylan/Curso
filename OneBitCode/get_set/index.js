class Wallet {
  #amount;
  #name;
  constructor() {
    this.#amount = 100.99 * 100; // multiple by 100 To save a INTEGER instead of float
  }

  get amount() {
    return this.#amount / 100;
  }

  set owner(name) {
    // console.log(typeof(name))
    if (typeof name === "string") {
      this.#name = name;
    } else {
      console.log("Error, name needs to be a string");
    }
  }
  get owner() {
    return this.#name;
  }
}

let carteira = new Wallet();
carteira.owner = "Drilo";
console.log(carteira.amount);
console.log(carteira.owner);
