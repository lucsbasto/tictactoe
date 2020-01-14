const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
let circleTurn;

startGame();

function startGame() {
  circleTurn = false;
  cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, {
      once: true
    });
  });
  setBoardHoverClass();
}

function handleClick(event) {
  const cell = event.target
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  //placeMark
  placeMark(cell, currentClass);

  //Chech for Win
  //Check for Draw
  if (checkWin(currentClass)) {
    console.log("wiiiiiiins")
  }
  //Switch turns
  swapTurns();

  //Add hover efects
  setBoardHoverClass();

}

function placeMark(cell, currentClass) {
  console.log("entrou aqui")
  cell.classList.add(currentClass);
}

function swapTurns() {
  circleTurn = !circleTurn;
}

function setBoardHoverClass() {
  board.classList.remove(X_CLASS);
  board.classList.remove(CIRCLE_CLASS);
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS)
  } else {
    board.classList.add(X_CLASS)
  }
}

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      console.log(currentClass, "  --> ", cellElements[index].classList)
      return cellElements[index].classList.contains(currentClass)
    })
  })
}