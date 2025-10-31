class Veiculo {
    move() {
        console.log('Veiculo está andando')
    }
}

class Carro extends Veiculo {
    move(){
        console.log('Carro está andando')
    }
}


class Navio extends Veiculo {
    move(){
        console.log('Navio está navegando')
    }
}


class Moto extends Veiculo {
    move(speed){
        console.log(`moto está indo rapidao. ${speed}km/h`)
    }
}

const uno = new Carro();
// uno.move()
const cb650r = new Moto();
// cb650r.move(145)
const barco = new Navio()
// barco.move();

//polimorfimos ainda mais aplicado

function gogogo(automotor){
    console.log('ready, set, go!\n')
    automotor.move();
}

gogogo(uno);
gogogo(cb650r);
gogogo(barco);