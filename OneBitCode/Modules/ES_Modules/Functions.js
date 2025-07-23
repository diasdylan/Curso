export function isSalame() {
    const rn = Math.floor(Math.random() * 11)
    const askUser = parseInt(prompt(`You've just called the isSalame function, now pick a number between 0 and 10:`))


    if (isNaN(askUser)) {
        alert('Your forgot the number or you typed a letter dumbass, click again')   
    }
    else if (askUser === rn) {
        alert(`The old gods of luck heard your button click. You are not SALAME!
             Your choice: ${askUser}
             The old gods choice: ${rn}`)

        console.log(`rn = ${rn}, prompt = ${askUser}`)
    }
    else {
        alert(`The old gods of luck heard your button click and answered. YOU ARE SALAME!
            Your choice: ${askUser}
            The old gods choice: ${rn}`)
    }

}

export function xplain(){
    alert(`Check the console`)
    console.log(`
        ESM so far looks quite simple, just use the EXPORT key word before a variable or function in the file
        And then import it the file that you call the function or use the variable

        Sample code for ES Modules or ESM:
         Main script file:
          import { function_1, function_2, function_3, function_4  } from "../function_file.js"
         
         Function_file:
          export function_Name(){//code here}`)
}