// Global Variables

let currentPlayer = 'X' // Player X always starts first
let gameBoard = ['', '', '', '', '', '', '', '', ''] // 3x3 game board
let gameActive = true


// Functions

// Function to handle player turn
const playerTurn = () => {
    // Check if the game is still active and if the clicked cell is empty
    if (gameBoard[clickCellIndex] !== '' || !gameActive) {
        return;
    }
    // Update the clicked cell with the current player's mark and switch to the other player
    gameBoard[clickCellIndex] = currentPlayer
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
}

