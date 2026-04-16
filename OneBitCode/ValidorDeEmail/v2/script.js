const email = document.getElementById('email');
const password = document.getElementById('password');
// const checkBtn = document.getElementById('check');
const modal = document.getElementById('modal')


function checkEmail() {
    let emailQuery = /([a-zA-Z\d_]{2,}(?=@))@([a-zA-Z]{2,}(?!@))\.\w{2,}/;
    email.classList.add('invalidInput')

    try {
        let emailValue = email.value
        let ematch = emailValue.match(emailQuery);
        if (ematch) {
            email.classList.add('validInput')
        }
        if (ematch == null | undefined) {
            email.classList.add('invalidInput')
        }
    } catch (e) {
        email.classList.remove('validInput')
        email.classList.add('invalidInput')
    }
}

function checkPassword() {
    try{
    let passWordValue = password.value;
    let minLenght = /.{8,}/
    let upperCase = /[A-Z]/;
    let lowercase = /[a-z]/;
    let specialChars = /[\/*\-+!@#$%¨&*()_]/;
    let number = /[\d]/;
    let conditions = [
        { regex: minLenght },
        { regex: upperCase },
        { regex: lowercase },
        { regex: specialChars },
        { regex: number },
    ]
    let passwordConditions = document.getElementsByClassName('condition');
    let count = 0;

    password.classList.add('invalidInput')


    for (let i = 0; i < passwordConditions.length; i++) {
        if (passWordValue.match(conditions[i].regex)) {
            passwordConditions[i].classList.add('validText')
        } else {
            passwordConditions[i].classList.remove('validText')
        }

        if (passwordConditions[i].classList.contains('validText')) {
            count++
        }
        if (count >= 4) {
            password.classList.remove('invalidInput');
            password.classList.add('validInput');
        } else {
            password.classList.remove('validInput');
        }
    }
} catch(e){
    alert(e)
}
}
