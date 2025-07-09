const theme = document.getElementById('themeSwitch');
const player1 = document.getElementById('p1');
const player2 = document.getElementById('p2');
const startBtn = document.getElementById('start');
const tableButtons = document.querySelectorAll('.tableBtn');
const displayPlayerTurn = document.getElementById('pTurn');
let p1Turn = true;
let gameOn = false;
let board = ['', '', '', '', '', '', '', '', ''];
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
        if (player1.value === player2.value) {
            return alert('The players can\'t have the same name')
        }
        gameOn = true;
        displayPlayerTurn.value = player1.value;

        tableButtons.forEach((element) => {
            element.removeAttribute('disabled');
            element.addEventListener('click', handleBtnClick);
        })
    })
}

function handleBtnClick() {
    if (p1Turn === false) {
        displayPlayerTurn.value = player1.value;
        this.innerText = 'O';
        this.setAttribute('data-value', 'o');
        p1Turn = true;
        this.setAttribute('disabled', '');
        let position = this.dataset.index;
        board[position] = this.dataset.value;
        checkWinner(this)
    } else {
        displayPlayerTurn.value = player2.value;
        this.innerText = 'X';
        this.setAttribute('data-value', 'x')
        p1Turn = false;
        this.setAttribute('disabled', '')
        let position = this.dataset.index;
        board[position] = this.dataset.value;
        // console.log(board[position])
        checkWinner(this)
    }

    this.setAttribute('disabled', '');
    this.removeEventListener('click', handleBtnClick);
}

function checkWinner(that) {
    
    
    for (let i = 0; i < winner.length; i++) {
        const condition = winner[i];
        let pos1 = board[condition[0]]
        let pos2 = board[condition[1]]
        let pos3 = board[condition[2]]
        

        if (pos1 && pos1 === pos2 && pos2 === pos3) {
            if (p1Turn === false) {
                alert(player1.value + ' victory!')
                gameOn = false;
                displayPlayerTurn.value = '';
            }
            if (p1Turn === true) {
                alert(player2.value + ' victory!')
                displayPlayerTurn.value = '';
                gameOn = false;
            }
            tableButtons.forEach(function (elem) {
                elem.removeAttribute('data-value');
                elem.setAttribute('disabled', '');
                elem.removeEventListener('click', handleBtnClick);
            })
            return true;
        }
    }

    //Draw
    if (!board.includes('')) {
        gameOn = false;
        displayPlayerTurn.value = '';


        tableButtons.forEach(function (elem) {
            elem.removeAttribute('data-value');
            elem.setAttribute('disabled', '');
            elem.removeEventListener('click', handleBtnClick);
        })
        tableButtons.forEach((btn) => {
            btn.setAttribute('data-draw', 'true')
        })
        return alert('Draw!')
    }
}

function restartGame() {
    const rBtn = document.getElementById('restart');
    rBtn.addEventListener('click', function restartHandler() {
        player1.value = '';
        player2.value = '';
        displayPlayerTurn.value = '';
        gameOn = false;
        p1Turn = true;
        board = ['', '', '', '', '', '', '', '', ''];

        tableButtons.forEach(function (elem) {
            elem.innerText = '';
            elem.removeAttribute('data-value');
            elem.setAttribute('disabled', '');
            elem.removeEventListener('click', handleBtnClick);
            elem.removeAttribute('data-draw');
        })
    }
    )

}

function forceDraw() {
    for(let i = 0; i < board.length; i++){
        let counter = 0;
        board[i] = counter++
    }
    tableButtons.forEach((elem) =>{
        elem.innerText = 'Draw'
    })
    checkWinner()
}

// forceDraw();
restartGame();
gameStart();
