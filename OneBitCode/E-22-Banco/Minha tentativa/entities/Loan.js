class Loan {
  #value;
  static #interestRate = 1.99;
  #installment
  #date
  constructor(value, installment) {
    this.#value = value;
    this.#installment = installment;
    this.#date = new Date().toLocaleString;
  }

    get showInsterestRate(){
    return console.log(Loan.#interestRate);
  }

    set modifyInsterestRate(newValue){
    let floatValue = parseFloat(newValue);
    Loan.#interestRate = floatValue;
  }
}

const salame = new Loan(500, 5);
salame.showInsterestRate
salame.modifyInsterestRate = 2.6;
salame.showInsterestRate