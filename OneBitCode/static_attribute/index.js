class Reservation {
    constructor(guests, room, days){
        this.guests = guests;
        this.room = room;
        this.days = days;
        this.total = days * Reservation.baseFee; 
    }
    //static is a resever word for statics attributes in classes
    static #baseFee = 150

    static get showFee(){
        return console.log(`The base fee is ${this.#baseFee}`)
    }
    static get premiumFee() {
        return Reservation.baseFee * 1.5
    }
}

Reservation.showFee;
Reservation.baseFee = 200;
Reservation.showFee;
const r1 = new Reservation(3, '201', 5)
console.log(r1)

const r2 = new Reservation(2, '202', 10)
console.log(r2)

console.log(`The premium fee is ${Reservation.premiumFee}`)