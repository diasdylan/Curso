let seconds = 0;

const intervalId = setInterval(() => {
    seconds += 3;
    console.log(`Time is passing... ${seconds}`)
    if(seconds > 15){
        clearInterval(intervalId)
        console.log('Tempo acabou!')
    }
}, 1000 * 3)

console.log(intervalId)
