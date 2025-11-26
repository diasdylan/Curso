
class Transfer{
    #sender;
    #receiver;
    #value;
    #date;
    constructor(sender, receiver, value){;
        this.#sender = sender;
        this.#receiver = receiver;
        this.#value = value;
        this.#date = new Date().toLocaleDateString();
    }

    get showTransfer(){
        console.log(`Sender: ${this.#sender} / Receiver: ${this.#receiver} / Value: ${this.#value} / Date: ${this.#date}`)
    }
}

// const ramon = new Transfer('Dilo', 'Jesca', 200);
// ramon.showTransfer
module.exports = Transfer;