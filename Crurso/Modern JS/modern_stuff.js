//Deconstruct objects and arrays
console.log(`START DESCONSTRUCT
    `)
let me = {
    name: 'Dylan',
    lastName: 'Dias',
    age: 'Too old',
    spouse: 'Jesca'
}
let us = [me.name, me.spouce, 'yay!']

//Deconstructing an obj
let { name, spouse } = me;
console.log('→ ' + name + ' y ' + spouse + ' ←');

//Deconstructing an array
let parents = ['cleber', 'marilia', 'ozeias', 'claudia']

let [jescaDad] = parents;
console.log(jescaDad)

console.log(`END DECONSTRUCT
    `)
//End deconstruct objects and arrays


//spread operator
console.log(`START SPREAD OPERATOR
    `)
const towns = ['poa', 'alvorada', 'são leo', 'vinhedos', 'el guapo']
console.log(towns)
console.log(...towns)
console.log(...towns[0])

//This is not a copy
//This is only a reference to the original array
//hence the original array will be changed by the methods
const townsCopy = towns

townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')

// console.log({ towns, townsCopy })

//Now this is a real copy
//And by doing like this, this doesnt change the original array
const townsClone = [...towns]

townsClone.push('Aldebaran')

console.log({ towns, townsCopy, townsClone, })

const townsObj = { ...towns }
const townsObjClone = { ...townsObj }

townsObjClone.test = 'Test'

console.log({ townsObj, townsObjClone })

console.log(`END SPREAD OPERATOR
    `)
//End spread operator


// Rest Params
console.log(`START REST PARAMS
    `)
function sum(...numbers) {
    return numbers.reduce((accum, num) => accum + num, 0)
}

console.log(sum(1, 1))
console.log(sum(2, 2, 2, 2, 2))
console.log(sum(32, 5, 74, 7, 1, 9, 90))

console.log(`END REST PARAMS
    `)
// End Rest Params

//Start Optional chaining
console.log(`START OPTIONAL CHAINING
    `)
let user = {
  name: "John Doe",
  email: "doejohn@email.com",
  friends: [{
    name: "Mary",
    address: {
      street: "Some Street",
      number: 89,
      salame: 0
    }
  }],
  age: 42,
  phone: {
    countryCode: "+55",
    ddd: "22",
    number: "998765432"
  }
}

//The line below throws an error
// console.log(user.friends[0].phone.ddd)

//So using the option chaining method '?.' question mark followed by a dot
//JS doesn't return an error so its not a shows stopper and it only returns a undefined
console.log(user.friends[0].phone?.ddd)
console.log(user?.brothers?.length)

console.log(user.brothers?.[5].name)

console.log(`
END OPTIONAL CHAINING`)
//End optional chaining



// Null coaslescence
// https://www.w3schools.com/js/js_2020.asp#mark_assign_nullish ← best site for learning

console.log(`START NULL COASLESCING
    `)

let a = 0 // 0 = FALSY

let b = a || 42 // Will be always 42 since OR(||) operator short circuits

console.log({ a, b })

b = a ?? 42 // will be 0, since 0 is FALSY and not NULLISH

console.log({a, b})

let c = false ?? 42

console.log({c})

console.log(`END NULL COASLESCING
    `)