/*
Site: https://regex101.com/

## Regex Flags:

g = Global = dont return after first match
m = multi line = ^ and $ match start/end of line
i = insensitive = case insensitive match

## Useful commands:

Find lower and upper case from A to Z:
[a-zA-Z]

Find digits: 
\d matches a digit (equivalent to [0-9])

look ahead: 
(?=)

Negative look ahead:
(?!)

Look behind:
(?<=)

Negative Look behind:
(?<!)

find space: 
\s

OR is a single pipe: 
|

*/

function PhoneNumber(numberString){
    const fixedString = numberString.replace(/[\sa-zA-Z]/g, '') // <----- How to write a regEx
    this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0];
    this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0];
    this.numberRaw = fixedString.match(/(?<=\)).+/)[0].replace(/-/g,'')
}

console.log(new PhoneNumber('+55 (51) 9 8011-1806'))
console.log(new PhoneNumber('+666 (51) 9 8011-1806'))