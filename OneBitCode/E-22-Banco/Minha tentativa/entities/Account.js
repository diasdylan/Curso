const Deposit = require("./Deposit");
const Loan = require("./Loan");
const Transfer = require("./Transfer");

class Account {
  static #balance = 0;
  deposits = [];
  withdraw = [];
  loans = [];
  transfers = [];
  owner;
  constructor(owner) {
    this.owner = owner;
  }

  deposit(value) {
    this.deposits.push(new Deposit(value));
    Account.#balance += value;
    console.log(this.deposits);
    return console.log(`the deposit of the value ${value} is done.`);
  }
  loan(value, installment) {
    this.loans.push(new Loan(value, installment));
    Account.#balance += value;
    console.log(this.loans);
    return console.log(`the Loan of the value ${value} was sucessful.`);
  }
  transfer(sender, receiver, value) {
    this.transfers.push(new Transfer(sender, receiver, value));

    if (receiver == this.owner) {
      Account.#balance += value;
      return console.log(
        `the transfer sent by ${sender} of value ${value} was received. Account owner: ${receiver}`
      );
    }

    if (sender == this.owner && Account.#balance > 0) {
      Account.#balance -= value;
      return console.log(
        `the transfer you ${sender} sent of ${value} was received. Account owner: ${receiver}`
      );
    } else {
      return console.log(`Balance insufficient - Balance: ${Account.#balance}`);
    }
  }

  static get checkBalance() {
    return console.log(`Your current balance is: ${Account.#balance}`);
  }
  get checkTransfers() {
    return console.log(this.transfers);
  }
   get checkLoan() {
    return console.log(this.loans);
  }
}

module.exports = Account;

// let salame = new Account("Salame");
// salame.deposit(500);
// salame.checkBalance;
// salame.deposit(1500);
// salame.checkBalance;
// salame.checkBalance;
// salame.transfer("Salame", "dilo", 10);
// salame.checkBalance;
// salame.transfer('Raul', 'Salame', 220);
// salame.checkBalance;
// salame.checkTransfers;