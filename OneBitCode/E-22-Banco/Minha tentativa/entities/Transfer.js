module.exports = class Transfer {
    #sender
    #receiver
    #value_sent
    #date
    constructor(sender, receiver, value){
        this.#sender = sender;
        this.#receiver = receiver;
        this.#value_sent = value;
        this.#date = new Date().toLocaleDateString();
    }
}

