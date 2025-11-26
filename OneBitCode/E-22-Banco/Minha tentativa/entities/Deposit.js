class Deposit {
  #value;
  #date;
  constructor(value) {
    this.#value = value;
    this.#date = new Date().toLocaleDateString();
  }
  get showDeposit(){
    console.log(`Deposited value: ${this.#value} 
Deposit date: ${this.#date}`)
  }
}
// const salame = new Deposit(200);
// salame.showDeposit;
module.exports = Deposit;