// Start CommonJS
//This won't work in the browser console
//To run press CRTL+ALT+N
//it will run with nodeJS in the VSCODE terminal
// const tellMeWhy = require('./CommonJs.js');
// tellMeWhy()
const test = document.getElementById('test')

test.addEventListener('click', (ev) => {
    ev.preventDefault();
    console.log(ev)
    if (ev.type == 'click') {
        let user = prompt(`Using the number of the option, select how to open the link:
                1. New tab
                2. Same tab
                3. Third option`)

        switch (user) {
            case '1':
                open(test.getAttribute('href'), '_blank', 'popup')
                break;
            case '2':
                  open(test.getAttribute('href'), '_self')
                break;
            case '3':
                  open(test.getAttribute('href'), '_parent')
                break;
            default:
                alert('fuck u')
                break;
        }

    }
});
// End CommonJS