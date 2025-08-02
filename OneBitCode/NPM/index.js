const loadsh = require('lodash');

const salame = loadsh.concat('sal', 'ame', 0);
console.log(salame)
console.log(`Is this the variable an array? ${loadsh.isArray(salame)}`)
let nombre = loadsh.kebabCase('Dylan Dias');
console.log(nombre)

//To run with nodeJS in the terminal:
// CRTL+ALT+N 

//Start project / Create packge file: 
// npm init

// NPM testing and commands: 
// Npm install --save loadash
// To install in a dev env to test or use in NON-PROD envs: Npm install --save-dev package_name
// npm package_name --version
// npm uninstall package_name
// To install withouth a project: npm install --global sass
// To check installed global packages: npx sass --version