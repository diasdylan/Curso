console.log('programa iniciado')

const timeoutID = setTimeout(() => {console.log('3 segundos passaram agora')}, 1000 * 3)
// clearTimeout(timeoutID) // Evita de rodar a fundação
const final = setTimeout(() =>{console.log('programa finalizado')}, 1000 * 5)
