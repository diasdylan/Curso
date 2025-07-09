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
            let timer = setInterval(() => {
                if (timer3 <= 0) {
                    clearInterval(timer)
                    showTime.innerText = 0;
                    let salame = setInterval(()=>{clearInterval(salame); alert('done');},500);
                } else {
                    showTime.innerText = timer3;
                    timer3--;
                }
            }, 1000)
            break;
        case '6':
            let timer6 = 60
            setInterval(() => {
                if (timer6 == 0) {
                    showTime.inert = 0;
                    return alert('Done!')
                } else {
                    showTime.innerText = timer6--;
                }
            }, 1000)
            break;
        case '9':
            alert('9')
            break;
        case '12':
            alert('12')
            break;
        default:
            alert('select a value')
            break;
    }
}