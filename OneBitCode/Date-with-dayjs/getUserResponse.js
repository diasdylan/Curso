const readLineSync = require('readline-sync');

function parseInput() {
    const userAnswer = readLineSync.question(`Please insert your birthday with the following format DD/MM/YYY: `)

    let split = userAnswer.split('/')
    let day = split[0];
    let month = split[1];
    let year = split[2];
    let isoDate = `${year}-${month}-${day}`;
    return isoDate;
}

// parseInput()
// CommonJS export:
module.exports = parseInput;