// Global Variables

let currentPlayer = 'X' // Player X always starts first
let gameBoard = ['', '', '', '', '', '', '', '', ''] // 3x3 game board
let gameActive = true


// Functions

// Function to handle player turn
const playerTurn = (clickCellIndex) => {
    // Check if the game is still active and if the clicked cell is empty
    if (gameBoard[clickCellIndex] !== '' || !gameActive) {
        return
    }    
    // Update the clicked cell with the current player's mark and switch to the other player
    gameBoard[clickCellIndex] = currentPlayer
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
}    

// Event Listeners
const cells = document.querySelectorAll('.cell') // Get all cells in the game board
cells.forEach(cell => {
 cell.addEventListener('click', cellClicked, false)   
})

// Function to handle cell click event
const cellClicked = (clickedCellEvent) => { 
    const clickedCell = clickedCellEvent.target // Get the clicked cell
    const clickCellIndex = parseInt(clickedCell.id.replace('cell-', '')) - 1 // Get the index of the clicked cell
    
    if (gameBoard[clickCellIndex] !== '' || !gameActive) {
        return
    }    
    
    playerTurn(clickCellIndex)
    updateGameBoard()
}    

// Function to update the game board
const updateGameBoard = () => {
    // Update the game board with the current player's mark
    for (let i = 0; i < gameBoard.length; i++) {
        cells[i].innerText = gameBoard[i]
    }    
}    

