let string = `{
  "name": "Isaac Pontes",
  "job": "Fullstack Developer",
  "technologies": ["HTML", "CSS", "Javascript", "SQL"],
  "working": true,
  "yearsOfExperience": 7,
  "website": null
}`

console.log(typeof(string))
const json_object = JSON.parse(string);
console.log(json_object.name);
console.log(json_object.website);

const string2 = JSON.stringify(json_object);
console.log(typeof(string2));