const Account = require("./Account");

module.exports = class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.account = new Account(this.name);
  }
};

// let salame = new User('dilo', 'email');
// console.log(salame)
