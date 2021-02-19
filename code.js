let dataModel = {
  score: 0,
  bestScore: 0,
  board: [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null]
  ]
} 

// These four functions will get called whenever the user presses the corresponding arrow key.
// Each of these should move all the pieces and combine any pieces which collide that are the same number.
function moveLeft() {}
function moveRight() {}
function moveUp(){}
function moveDown() {}

document.addEventListener("keypress", function(event) {
  let key = event.keyCode;
  if (key == "38") {
    moveUp();
  } else if (key == "40") {
    moveDown();
  } else if (key == "37") {
    moveLeft();
  } else if (key == "39") {
    moveRight();
  }
})

// This function gets called after each move, it should add a random tile into an empty space
function addRandomTile() {
  let emptyCoordinates = [];

  for (let row = 0; row < dataModel.board.length; row++) {
    for (let column = 0; column < dataModel.board[row].length; column++) {
      let value = dataModel.board[row][column];
      if (value == null) {
        emptyCoordinates.push([row, column]);
      }
    }
  }
  let randomIndex = Math.floor(Math.random() * emptyCoordinates.length);
  let coordinates = emptyCoordinates[randomIndex];
  dataModel.board[coordinates[0]][coordinates[1]] = 2;
}

// This function will check if there are no empty squares left.
function checkIfGameHasEnded() {
  for (let row = 0; row < dataModel.board.length; row++) {
    for (let column = 0; column < dataModel.board[row].length; column++) {
      let value = dataModel.board[row][column];
      if (value == null) {
        return false;
      }
    }
  }
  return true;
}

// This will reset the board to the starting conditions
function resetBoard() {}

// This function will render the game board to the DOM.
// It will completely delete the old DOM and create a new board after each move.  
function renderBoard() {}

// When any of the move functions are done, they should call this.  
function afterMove() {
  if (checkIfGameHasEnded()) {
    alert("Game Over!")
  } else {
    renderBoard();   
  }
}

function startGame() {
  resetBoard();
  addRandomTile();
  addRandomTile();
  renderBoard();
}
startGame();