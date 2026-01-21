class Deposit {
  #value
  #created_at
  constructor(value){
    this.#value = value;
    this.#created_at = new Date().toLocaleDateString();
  }
}

module.exports = Deposit;