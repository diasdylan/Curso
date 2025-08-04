// NPX 
// is a way to create shortcuts for calling 
// the executables in the packages if the package has a executable
// and along with that we can create custom commands by
// changing the package.json file of the project
// in the SCRIPT section of the package file

const helloWorld = require('hello-world-npm')

console.log(`yet another way to execute the command:  ${helloWorld()}`)