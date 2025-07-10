const currTime = document.getElementById('currTime');
const timerButton = document.getElementById('timerButton')
let showTime = document.getElementById('st');
const option = document.getElementById('time');

setInterval(money, 1000)

function money() {
    const d = new Date();
    currTime.innerText = d.toLocaleTimeString();
}

timerButton.addEventListener('click', timer);

function timer(ev) {
    ev.preventDefault();

    switch (option.value) {
        case '3':
            // alert('3')
            let timer3 = 30
            let time3 = setInterval(() => {
                if (timer3 <= 0) {
                    clearInterval(time3)
                    showTime.innerText = 0;
                    let salame3 = setInterval(() => { clearInterval(salame3); alert('done'); }, 500);
                } else {
                    showTime.innerText = timer3;
                    timer3--;
                }
            }, 1000)
            break;
        case '6':
            let timer6 = 60
            let time6 = setInterval(() => {
                if (timer6 <= 0) {
                    clearInterval(time6)
                    showTime.innerText = 0;
                    let salame6 = setInterval(() => { clearInterval(salame6); alert('done'); }, 500);
                } else {
                    showTime.innerText = timer6;
                    timer6--;
                }
            }, 1000)
            break;
        case '9':
            let timer9 = 90;
            let time9 = setInterval(() => {
                if (timer9 <= 0) {
                    clearInterval(time9);
                    showTime.innerText = 0;
                    let salame9 = setInterval(() => { clearInterval(salame9); alert('done'), 500 })
                }
                else {
                    showTime.innerText = timer9
                    timer9--;
                }
            }, 1000)
            break;
        case '12':
            let timer12 = 120;
            let time12 = setInterval(() => {
                if (timer12 <= 0) {
                    clearInterval(time12);
                    showTime.innerText = 0;
                    let salame12 = setInterval(() => { clearInterval(salame12); alert('done'), 500 })
                }
                else {
                    showTime.innerText = timer12
                    timer12--;
                }
            }, 1000)
            break;
        case 'c':
            let choice = parseInt(prompt('Input the time for the timer'));
            if (isNaN(choice)) {
                return alert('Please insert a number');
            }

            let timerManual = setInterval(() => {
                if (choice <= 0) {
                    clearInterval(timerManual);
                    showTime.innerText = choice;
                    let salameManual = setInterval(() => { clearInterval(salameManual); alert('Done'), 500 })
                }
                else {
                    showTime.innerText = choice;
                    choice--
                }
            }, 1000)
            break;
        default:
            alert('select a value')
            break;
    }
}