// Global Variables

let currentPlayer = 'X' // Player X always starts first
let gameBoard = ['', '', '', '', '', '', '', '', ''] // 3x3 game board
let gameActive = true

const winningConditions = [ 
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top left to bottom right
    [2, 4, 6]  // Diagonal from top right to bottom left
]


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

// Event Listeners
const cells = document.querySelectorAll('.cell') // Get all cells in the game board
cells.forEach(cell => {
 cell.addEventListener('click', cellClicked, false) 
})

// Function to update the game board
const updateGameBoard = () => {
    // Update the game board with the current player's mark
    for (let i = 0; i < gameBoard.length; i++) { // Loop through the game board
        cells[i].innerText = gameBoard[i] // Update the cell with the current player's mark
    }    
}    

// Function to announce the winner
const announceWinner = (player) => {
    const message = document.getElementById('gameStatus')
    message.innerText = `${player} wins!`
}


// Function to announce a draw
const announceDraw = () => {
    const message = document.getElementById('gameStatus')
    message.innerText = `It is a draw!`
}

// Function to check for a winner
const checkWinner = () => {
    // Check if the current player has won the game
    let roundWon = false
    // Loop through the winning conditions
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i] 
        // Check if the current player has marked all the cells in a winning condition
        if( gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            roundWon = true
            break
        } 
    }
    // Return the result of the check 
    if (roundWon) {
        announceWinner(currentPlayer)
        gameActive = false
        console.log('Player ' + currentPlayer + ' has won!')
        return
    }
    // Check if the game is a draw
    let roundDraw = !gameBoard.includes('')
    // Return the result of the check
    if (roundDraw) {
        announceDraw()
        gameActive = false
        return
    }
}

// Event listener for the reset button
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetGame, false);

// Function to reset the game
function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    cells.forEach(cell => {
        cell.innerText = '';
    });
    document.getElementById('gameStatus').innerText = '';
  }