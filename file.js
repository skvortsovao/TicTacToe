let playerX; //declaring a variable for player X
let playerO; //declaring a variable for player O
let currentPlayer = document.querySelector('h1 span'); //declaring a variable for current player
let gameOver = false; //declaring a variable for game over
let board = []; 
const sound = new Audio('sounds/sound.mp3');
const soundWin = new Audio('sounds/win.mp3');
function startGame() {
    currentPlayer.innerHTML = 'X';
    for (let i = 0; i < 9; i++) {
        board[i] = document.getElementById('cell' + i); //getting the cell id
        board[i].addEventListener('click', function() {
            if (!gameOver && !board[i].style.backgroundImage) { //checking if the game is over and if the cell is empty for preventing clicking on the same cell
                if (currentPlayer.innerHTML === 'X') {
                    board[i].style.backgroundImage = "url('images/cross.png')";
                    sound.play();
                    currentPlayer.innerHTML = 'O';
                } else {
                    board[i].style.backgroundImage = "url('images/circle.png')";
                    sound.play();
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
            
        soundWin.play(); //playing the sound for winning
        document.querySelector('#status').innerHTML = winnerText;
        gameOver = true; //setting the game over to true
        } else{
            currentPlayer.innerHTML = 'O';
            let winnerText = `Player ${currentPlayer.innerHTML} wins!`;
        soundWin.play(); //playing the sound for winning
        document.querySelector('#status').innerHTML = winnerText;
        gameOver = true;
        }
        
    }
    else{
        let draw = true; //setting the draw to true
        for(let i = 0; i < 9; i++){
            if(board[i].style.backgroundImage === ""){ //checking if the cell is empty
                draw = false; //setting the draw to false
            }
        }
        if(draw){
            document.querySelector('#status').innerHTML = "It's a draw!"; //setting the status to draw
            gameOver = true; //setting the game over to true
        }
    }
    
}
function resetGame() {
    window.location.reload();
    gameOver = false;
}
window.onload = startGame;