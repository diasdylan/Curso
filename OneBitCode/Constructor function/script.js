// Constructor function
// Default Paramenter

function Dog(breed, name, age, barks = 'yes') {
    this.breed = breed;
    this.name = name;
    this.age = age;
    this.barks = barks;
}


const myDog = new Dog('shitzu', 'Theo', 6, 'A lot');
const newDog = new Dog('vira-lata', 'Chichico', 2, 'idk yet')
const fatty = new Dog(undefined, 'Fatty', undefined)
console.log(myDog)
console.log(newDog)
console.log(fatty)

