class User{
    constructor(name){
        this.name = name
    }
    sayMyName(){return 'you goddamn right'}
}

let Raul = new User('Raul');
// console.log(Raul)

module.exports = User;