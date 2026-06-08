//Assincronissidade


// Código sincrono, é executado de forma linear. Linha a linha do 0...100, 1 por 1. Algo como: 

function step2(){
    console.log('Passo 2')
}

console.log('passo 1')
step2();
console.log('passo 3')


//Código assincrino, é:

console.log('passo 4')
setTimeout(()=> {
    console.log('passo 5')
},  1000 * 3)
console.log('passo 6')