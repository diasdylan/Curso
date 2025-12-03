const Installment = require("./Installment");

class Loan {
    static #interestRate = 1.9;
    #loan;
    #date;
    #totalInstallments;
    #installments = [];
    constructor(loanValue, totalInstallments){
        this.#loan = loanValue;
        this.#date = new Date().toLocaleDateString();
        this.#totalInstallments = totalInstallments
        for(let i = 1; i <= totalInstallments; i++){
            let getValue = this.instValueCalculation;
            this.#installments.push({Value: getValue, installment: i});
        }

    }

    get instValueCalculation(){
        let installmentValue = Math.round((this.#loan / this.#totalInstallments) * Loan.#interestRate);
        return installmentValue;
    }

    static get getRate(){
        return Loan.#interestRate;
    }
    static get checkInterestRate(){
        console.log(`The current interest rate for a loan is: ${Loan.#interestRate}`)
    }

    get getLoan(){
        console.log({
            'Loan': this.#loan,
            'Interest Rate:': Loan.#interestRate,
            'Number of installments:': this.#totalInstallments,
            'Date': this.#date,
            'Installements': this.#installments,
            'Total with interest:': this.#installments[0].Value * this.#totalInstallments
        })
    }

    static set changeInterestRate(newValue){
        Loan.#interestRate = newValue;
    }
}

const salame = new Loan(100, 2);
salame.getLoan;