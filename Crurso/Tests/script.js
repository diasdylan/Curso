const theme = document.getElementById('themeSwitch');
const player1 = document.getElementById('p1');
const player2 = document.getElementById('p2');
const startBtn = document.getElementById('start');
const tableButtons = document.querySelectorAll('.tableBtn');
const displayPlayerTurn = document.getElementById('pTurn');
let p1Turn = true;
let gameOn = false;
let board = ["", "", "", "", "", "", "", "", ""];
let winner = [
    // Linhas
    [0, 1, 2], // Primeira linha
    [3, 4, 5], // Segunda linha
    [6, 7, 8], // Terceira linha

    // Colunas
    [0, 3, 6], // Primeira coluna
    [1, 4, 7], // Segunda coluna
    [2, 5, 8], // Terceira coluna

    // Diagonais
    [0, 4, 8], // Diagonal principal
    [2, 4, 6]  // Diagonal secundária
];

theme.addEventListener('click', () => {
    let darkMode = document.getElementById('main');
    darkMode.classList.toggle('dark-mode')
})

function gameStart() {
    startBtn.addEventListener('click', function startGame() {
        if (player1.value === '' || player2.value === '') {
            return alert('Two players are required')
        }
        if (gameOn === true) {
            return alert('Please restart the game before starting a new one')
        }
        gameOn = true;
        displayPlayerTurn.value = player1.value;

        tableButtons.forEach((element) => {
            element.removeAttribute('disabled');
            element.addEventListener('click', handleBtnClick);
        });
    }
    )
}

function handleBtnClick() {

    if (p1Turn === false) {
        displayPlayerTurn.value = player1.value;
        this.innerText = 'O';
        this.setAttribute('data-value', 'o');
        p1Turn = true;
        this.setAttribute('disabled', '')
        checkWinner()
    } else {
        displayPlayerTurn.value = player2.value;
        this.innerText = 'X';
        this.setAttribute('data-value', 'X')
        p1Turn = false;
        this.setAttribute('disabled', '')
        checkWinner()
    }
    this.setAttribute('disabled', '');
    this.removeEventListener('click', handleBtnClick);
}

// let xPos = []
function checkWinner() {
    for(let i = 0; i < winner.length; i++){
        const winningCondition = winner[i];

    }
     
    //this is a test change

    //Below works but needs to be finished or better implemented ↓

    // let index = that.dataset.index
 
    // xPos.splice(index, 0, that.dataset.value)
    // console.log(xPos)
    // if(xPos[0] == 'X' && xPos[0] == xPos[1] && xPos[1] == xPos[2]){
    //     tableButtons.forEach(function (elem) {
    //         elem.setAttribute('disabled', '');
    //         elem.removeEventListener('click', handleBtnClick);
    //     })
    //     return alert('winner!')
    // }

    // ↑
}


function restartGame() {
    const rBtn = document.getElementById('restart');
    rBtn.addEventListener('click', function restartHandler() {
        player1.value = '';
        player2.value = '';
        displayPlayerTurn.value = '';
        gameOn = false;
        p1Turn = true;

        tableButtons.forEach(function (elem) {
            elem.innerText = '';
            elem.removeAttribute('data-value');
            elem.setAttribute('disabled', '');
            elem.removeEventListener('click', handleBtnClick);
        })
    }
    )

}

restartGame()
gameStart()