
module.exports = class Installment {
    #loanValue;
    #installmentValue;
    #installmentNumber;
    #paid = false;
    constructor(loanValue, totalInstallments){
        this.#loanValue = loanValue;
        this.#installmentNumber = totalInstallments; 
    }
}