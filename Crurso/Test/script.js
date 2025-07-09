// document.getElementById('sessionBtn').addEventListener('click', function () {
//   const input = document.getElementById('session')
//   sessionStorage.setItem('info', input.value)
//   input.value = ''
// })

// document.getElementById('readSesssion').addEventListener('click', function () {
//   const info = sessionStorage.getItem('info')
//   alert('A informação salva é: ' + info)
// })

// document.getElementById('localBtn').addEventListener('click', function () {
//   const input = document.getElementById('local')
//   localStorage.setItem('text', input.value)
//   input.value = ''
// })

// document.getElementById('readLocal').addEventListener('click', function () {
//   const t = localStorage.getItem('text')
//   alert('O texto salvo no local storage é: ' + t)
// })

// document.getElementById('cookieBtn').addEventListener('click', function () {
//   const input = document.getElementById('cookie')
//   // cookieName=value; expires=UTCStringDate; path=/;
//   const cookie = 'info=' + input.value + ';'
//   const expiration = 'expires=' + new Date(2025,9, 9) + ';'
//   const path = 'path=/;'
//   document.cookie = cookie + expiration + path
//   input.value = ''
//   console.log(document.cookie)
// })

// document.getElementById('cookie2Btn').addEventListener('click', function () {
//   const input = document.getElementById('cookie2')
//   // cookieName=value; expires=UTCStringDate; path=/;
//   const cookie = 'text=' + input.value + ';'
//   const expiration = 'expires=' + new Date(2025, 8, 9) + ';'
//   const path = 'path=/;'
//   document.cookie = cookie + expiration + path
//   input.value = ''
//   console.log(document.cookie)
// })

const obj = {
  nome: 'dylan',
  lastName: 'dias',
  job: 'jobless',
  age: 30,
  parents: ['mom', 'dad']
}

const nombre = obj.name;
const {job} = obj;
const {nome, lastName, parents} = obj;

console.log(obj);
console.log(nombre)
console.log(job)
console.log(nome, lastName, parents)

let date1 = Date('2021-07-12')
console.log(date1)