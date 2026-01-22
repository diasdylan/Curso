const Installment = require("./Installment");

class Loan {
  static #rate = 1.99;
  installmentArray = [];
  constructor(value, installments) {
    this.loan = value;
    this.date = new Date().toLocaleDateString();
    //Calc for installment
    let installmentValue = Math.fround((value / installments) * Loan.#rate);
    this.installmentArray.push(`Loan original value: ${value} - Total Installments: ${installments} - Total after interest: ${Math.fround(installmentValue * installments)}`)
    for (let i = 0; i < installments; i++) {
      this.installmentArray.push(new Installment(installmentValue, i+1));
    }
  }
  static get checkRate() {
    return console.log(`This is the current interest rate: ${Loan.#rate}`);
  }
  static set newRate(value) {
    const percentage = value / 100 + 1;
    Loan.#rate = percentage;
  }
  static get checkLoan() {
    return console.log(this.installmentArray);
  }
}

module.exports = Loan; 

// it works
// let salame = new Loan(500, 8);
// salame.checkLoan;
// salame.checkRate;
// salame.newRate = 100
// salame.checkRate;
