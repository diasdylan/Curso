const parseInput = require('./getUserResponse.js');
const customParseFormat = require("dayjs/plugin/customParseFormat");
const relativeTime = require("dayjs/plugin/relativeTime");
const devHelper = require("dayjs/plugin/devHelper");

const dayJS = require('dayjs');
dayJS.extend(customParseFormat);
dayJS.extend(relativeTime);
dayJS.extend(devHelper)

const answer = parseInput();
let userAge = dayJS().diff(answer, 'year')
let spliter = answer.split('-');
spliter.shift();
spliter.unshift(dayJS().year() + 1)

let nextBirthday = dayJS(spliter.join('-'))
let diffDay = dayJS(nextBirthday).diff(dayJS(), 'days');
let formattedNextBirtday = dayJS(nextBirthday).format('DD/MM/YYYY')
let dday = dayJS(nextBirthday).day()
let weekDay = '';
switch (dday) {
    case 0:
        weekDay = 'Sunday'
        break
    case 1:
        weekDay = 'Monday'
        break
    case 2:
        weekDay = 'Tuesday'
        break
    case 3:
        weekDay = 'Wednesday'
        break
    case 4:
        weekDay = 'Thursday'
        break
    case 5:
        weekDay = 'Friday'
        break
    case 6:
        weekDay = 'Saturday'
        break
}

console.log(`
    The user is ${userAge} years old and next year your birthday is going to be on a ${weekDay} - ${formattedNextBirtday} and there is ${diffDay} days until your next birthday
    `)
