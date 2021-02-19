let dataModel = {
  score: 244,
  bestScore: 244,
  board: [
    [null,    8,    16,   32],
    [null, 4,    2,    16],
    [null, null, null, 2],
    [null, 2,    8, 4]
  ]
} 

// This function gets called after each move, it should add a random tile into an empty space
function addRandomTile() {}

// When any of the move functions are done, they should call this.  
function afterMove() {
  if (checkIfGameHasEnded()) {
    alert("Game Over!")
  } else {
    renderBoard();   
  }
}

// This function will check if there are no empty squares left.
function checkIfGameHasEnded() {
  return false; // It will return a boolean, true or false if the game has ended.
}

// These four functions will get called whenever the user presses the corresponding arrow key.
// Each of these should move all the pieces and combine any pieces which collide that are the same number.
function moveDown() {}
function moveLeft() {}
function moveRight() {}
function moveUp(){}

// This will reset the board to the starting conditions
function resetBoard() {}


// This function will render the game board to the DOM.
// It will completely delete the old DOM and create a new board after each move.  
function renderBoard() {}



function startGame() {
  resetBoard();
  addRandomTile();
  addRandomTile();
  renderBoard();
}
startGame();