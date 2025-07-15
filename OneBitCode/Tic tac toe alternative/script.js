let xPlayer = document.getElementById("X");
let circlePlayer = document.getElementById("O");
let currentPlayer = document.getElementById("currentPlayer");
currentPlayer.innerText = "Your name will show here once the game starts :)";
let cells = document.querySelectorAll(".cell");
console.log(cells);
let gameOn = false;
let roundWon = false;
let draw = false;
let xTurn = true;
let count = 0;
let win = false;
let options = ["", "", "", "", "", "", "", "", ""];
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//W3Schools for the win
function WinnerModal(WinnerName) {
  let modal = document.getElementById("modal");
  let closeModal = document.getElementById("close");
  let winner = document.getElementById("winner-name");
  winner.innerHTML = "Congratulations " + WinnerName + "!";
  modal.style.display = "block";
  closeModal.onclick = () => {
    modal.style.display = "none";
  };
  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

function drawModal() {
  let drawmodal = document.getElementById("drawModal");
  let drawcloseModal = document.getElementById("drawclose");
  drawmodal.style.display = "block";
  drawcloseModal.onclick = () => {
    drawmodal.style.display = "none";
  };
  window.onclick = (event) => {
    if (event.target == modal) {
      drawmodal.style.display = "none";
    }
  };
}


function winner() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const condition = winningCombinations[i];
    // console.log(condition)
    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];
    if (cellA == "" || cellB == "" || cellC == "") {
      continue;
    }
    if (cellA == cellB && cellB == cellC) {
      if (cellA == "X") {
        roundWon = true;
        gameOn = false;
        //implement modal later
        //instead of alert
        // alert(xPlayer.value + " wins!");
        WinnerModal((WinnerName = xPlayer.value));
        disableButtons();
        gameOn = false;
      } else if (cellA == "O") {
        roundWon = true;
        // alert(circlePlayer.value + " wins!");
        WinnerModal((WinnerName = circlePlayer.value));
        disableButtons();
      }
    }
  }
}

//called on a win or a draw
function disableButtons() {
  document.getElementById('startButton').style.pointerEvents = 'none';
  cells.forEach((cell) => {
    cell.style.pointerEvents = "none";
  });
}

//start game listenner
document.getElementById("startButton").addEventListener("click", StartGame);

//start game function:
function StartGame() {
  if (xPlayer.value == "" || circlePlayer.value == "") {
    alert("Two players are required");
  } else if (xPlayer.value == circlePlayer.value) {
    alert(
      "X player cannot be the same as circle player, please change the name"
    );
  } else {
    cells.forEach((cell) => {
      cell.style.pointerEvents = "";
    });
    xPlayer.toggleAttribute("readonly");
    circlePlayer.toggleAttribute("readonly");
    currentPlayer.innerText = xPlayer.value;
    gameOn = true;
    cellEvent();
  }
}

//Restart listenner
document
  .getElementById("restartButton")
  .addEventListener("click", restartButton);

//Restart game:
function restartButton() {
  // cells.forEach((cell) => {
  //     cell.toggleAttribute('disabled')
  // })
  options = ["", "", "", "", "", "", "", "", ""];
  roundWon = false;
  gameOn = false;
  count = 0;
  xTurn = true;
  xPlayer.removeAttribute("readonly");
  circlePlayer.removeAttribute("readonly");
  document.getElementById("startButton").style.pointerEvents = '';  //removing the 'none' attribute granted in line 89
  // console.clear();
  xPlayer.value = "";
  circlePlayer.value = "";

  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
    currentPlayer.innerText = "";
    // cells[i].removeEventListener('click', cellEvent)
    if (currentPlayer.innerText == "") {
      currentPlayer.innerText =
        "Your name will show here once the game starts :)";
    }
  }
}

//note for my future self:
//the CELL here on the arrow function is just a name for the elements inside of the CELLS nodelist returned on the line 5
function cellEvent() {
  if (gameOn == true && roundWon == false && draw == false) {
    cells.forEach((cell) => {
      cell.addEventListener("click", () => {
        cellClicked(cell);
      });
    });
  } else {
    return;
  }
}

function cellClicked(cell) {
  if (xTurn && cell.innerText == "") {
    const indexCell = cell.getAttribute("cellIndex");

    if (options[indexCell] != "") {
      return;
    } else {
      options[indexCell] = "X";
      changePlayer(cell);
      // console.log(
      //   "this value was added to the array options: ",
      //   cell.innerText
      // );
      count += 1;
      winner();
    }
  } else if (cell.innerText == "") {
    indexCell = cell.getAttribute("cellIndex");

    if (options[indexCell] != "") {
      return;
    } else {
      options[indexCell] = "O";
      changePlayer(cell);
      // console.log(
      //   "this value was added to the array options: ",
      //   cell.innerText
      // );
      count += 1;
      winner();
    }
  }
  if (count == 9 && roundWon == false) {
    drawModal()
    
    disableButtons()
    restartButton()
    draw = true;
    return;
  }
}


function changePlayer(cell) {
  if (xTurn) {
    cell.innerText = "X";
    currentPlayer.innerText = circlePlayer.value;
    xTurn = false;
  } else {
    cell.innerText = "O";
    currentPlayer.innerText = xPlayer.value;
    xTurn = true;
  }
}