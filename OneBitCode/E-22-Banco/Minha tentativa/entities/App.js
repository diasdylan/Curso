const User = require("./User");
const Account = require('./Account');
const Loan = require('./Loan');

// module.exports = 
class App {
  static #userList = [];
  static createUser(name, email) {
    if (App.findUser(email)){
      return console.log("This email has already been registered");
    }
    // if (App.#userList.includes(email)) {
    //   return console.log("This email has already been registered");
    // }
    let newUser = new User(name, email);
    App.#userList.push(newUser);
    return console.log("User created:  " + newUser.name);
  }

  static findUser(email) {
    let exists = App.#userList.find((e) => {return e.email == email});
    if (exists) {
      // let arrayPosition = App.#userList.indexOf(email);
      let arrayPosition = App.#userList.findIndex((t) => {return t.email == email});
      // console.log(`User found! ${App.#userList[arrayPosition].name}`);
      return exists
    }
  }
  static doDeposit(email, value){
    let user = App.findUser(email); 
    if(user){
      user.account.deposit(value)
    }
  }

   static dotransfer(email, value){
    let user = App.findUser(email); 
    if(user){
      user.account.transfer(user.account.owner, 'Raul', value)
    }
  }

   static doLoan(email, value, installments){
    let user = App.findUser(email); 
    if(user){
      user.account.loan(value, installments)
    }
  }
  static get checkUserList(){
    return console.log(App.#userList);
  }
  static checkUserAccount(email){
    let userAccount = App.findUser(email);
    if(userAccount){
      Account.checkBalance;
      console.log(userAccount.account);
    }
  }

  static changeRate(value){
    Loan.checkRate;
    Loan.newRate = value;
    Loan.checkRate;
    // console.log(newRate);
  }

}

module.exports = App;
// App.createUser('dilo', 'naum')
// App.doDeposit('naum', 200);
// App.dotransfer('naum', 100);
// App.doLoan('naum', 500);
// App.checkUserList;
// App.checkUserAccount('naum')
// App.changeRate(69)