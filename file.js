let playerX; //declaring a variable for player X
let playerO; //declaring a variable for player O
let currentPlayer = document.querySelector('h1 span'); //declaring a variable for current player
let gameOver = false; //declaring a variable for game over
let board = []; 

function startGame() {
    currentPlayer.innerHTML = 'X';
    for (let i = 0; i < 9; i++) {
        board[i] = document.getElementById('cell' + i); //getting the cell id
        board[i].addEventListener('click', function() {
            if (!gameOver && !board[i].style.backgroundImage) { //checking if the game is over and if the cell is empty for preventing clicking on the same cell
                if (currentPlayer.innerHTML === 'X') {
                    board[i].style.backgroundImage = "url('images/cross.png')";
                    currentPlayer.innerHTML = 'O';
                } else {
                    board[i].style.backgroundImage = "url('images/circle.png')";
                    currentPlayer.innerHTML = 'X';
                }
                
            }    
            checkWin();  
    });
}
}
function checkWin(){
    if(
        board[0].style.backgroundImage === board[1].style.backgroundImage && board[1].style.backgroundImage === board[2].style.backgroundImage && board[0].style.backgroundImage !== ""
        || board[3].style.backgroundImage === board[4].style.backgroundImage && board[4].style.backgroundImage === board[5].style.backgroundImage && board[3].style.backgroundImage !== ""
        || board[6].style.backgroundImage === board[7].style.backgroundImage && board[7].style.backgroundImage === board[8].style.backgroundImage && board[6].style.backgroundImage !== ""
        || board[0].style.backgroundImage === board[3].style.backgroundImage && board[3].style.backgroundImage === board[6].style.backgroundImage && board[0].style.backgroundImage !== ""
        || board[1].style.backgroundImage === board[4].style.backgroundImage && board[4].style.backgroundImage === board[7].style.backgroundImage && board[1].style.backgroundImage !== ""
        || board[2].style.backgroundImage === board[5].style.backgroundImage && board[5].style.backgroundImage === board[8].style.backgroundImage && board[2].style.backgroundImage !== ""
        || board[0].style.backgroundImage === board[4].style.backgroundImage && board[4].style.backgroundImage === board[8].style.backgroundImage && board[0].style.backgroundImage !== ""
        || board[2].style.backgroundImage === board[4].style.backgroundImage && board[4].style.backgroundImage === board[6].style.backgroundImage && board[2].style.backgroundImage !== ""
    ) {
        if(currentPlayer.innerHTML === 'O') { 
            currentPlayer.innerHTML = 'X'; 
            let winnerText = `Player ${currentPlayer.innerHTML} wins!`;
        document.querySelector('#status').innerHTML = winnerText;
        gameOver = true; //setting the game over to true
        } else{
            currentPlayer.innerHTML = 'O';
            let winnerText = `Player ${currentPlayer.innerHTML} wins!`;
        document.querySelector('#status').innerHTML = winnerText;
        gameOver = true;
        }
        
    }
    
}
function resetGame() {
    window.location.reload();
    gameOver = false;
}
window.onload = startGame;