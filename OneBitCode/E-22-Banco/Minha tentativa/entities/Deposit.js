module.exports = class Deposit {
    value
    date
    constructor(value){
        this.value = value;
        this.date = new Date().toLocaleDateString();
    }
}

// let salame = new Deposit(20);
// console.log(salame)