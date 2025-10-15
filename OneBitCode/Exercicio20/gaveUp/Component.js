class Component{
    #privateElement
    constructor(element){
        this.#privateElement = element; 
    }
    checkElement(){
        let elem = this.#privateElement;
        if(elem){
            console.log(elem)
            return alert('Element is valid and is logged in the console')
        } else {
            console.log(elem); 
            return alert('There is problem')
        }
    }
    Build(){
        const docreate = document.createElement(this.#privateElement);
        docreate.setAttribute('style', 'color:pink;border:dashed;padding:0.5rem; margin:3px')
        docreate.innerText = 'Salame';
        return docreate;
    }

    Render(eleToRender, renderArea){
        return renderArea.append(eleToRender);
    }
}
export {Component}