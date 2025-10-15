import { Component } from "./Component";

class Input extends Component{
    constructor(tagInput){
        super(element)
        this.tag = tagInput;
    }
    Create(){
        if(this.tag){return document.createElement(this.tag)}
    }
}

export {Input}