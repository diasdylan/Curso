function tellMeWhy() {
    console.log(
        `the below is a utilization of CommonJS modules:
        
        `,
        `Tell me why aint nothing but a heart break
        
        `,

        `The file CommonJS.js holds the function and exports
         The file mainScript.js imports the function
         This won't work in the browser console
         
         Code to export: module.exports = function_name
         Code to import: const tellMeWhy = require('./CommonJs.js');`
    )
}

module.exports = tellMeWhy;