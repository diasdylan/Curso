import { Component } from "./component.js";
import { Form } from "./form.js";
import { input } from "./input.js";
import { Label } from "./label.js";


const title = new Component('h1', 'body', {textContent: 'hey there'})
console.log(title);

title.render();