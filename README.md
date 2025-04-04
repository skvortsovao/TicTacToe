# Tic Tac Toe Game 🕹️
Live Demo: https://skvortsova-tic-tac-toe.netlify.app/
A fun and interactive **Tic Tac Toe** game built using **HTML**, **CSS**, and **JavaScript**. Play as **Player X** (❌) or **Player O** (⭕) and try to win by aligning three of your symbols horizontally, vertically, or diagonally. The game automatically detects when a player wins and displays the winner message. Restart the game with a click of a button. 🔄

## Features ✨

- **Two players:** Player X ❌ and Player O ⭕ take turns to mark their symbols.
- **Interactive gameplay:** Click on the grid to place your symbol.
- **Winning logic:** The game checks for a win after each move.
- **Reset button:** Click to reset the game to its initial state.

## How It Works 🧠

### HTML Structure 🏗️
- The **game board** consists of **9 clickable cells** arranged in a **3x3 grid**.
- Each cell can be clicked to mark an **X** or **O**.
- Below the board, a **status display** shows the current player's turn.
- A **reset button** is provided to restart the game after a win.

### CSS Styling 🎨
- The **board cells** are styled to appear as square-shaped boxes.
- Each player's **symbol** (X or O) is displayed using **background images** (`cross.png` for X and `circle.png` for O).

### JavaScript Logic 💻

- **Turn Logic:** The game alternates between **Player X** and **Player O** after each move.
- **Win Detection:** The `checkWin()` function checks all possible winning conditions (rows, columns, and diagonals) after each move.
- **Game Over:** The game stops when a player wins, and the winner is displayed on the screen.
- **Reset Button:** The reset button clears the board and allows the game to restart.

### Key Functions 🔑

- **`startGame()`**: Initializes the game, sets **Player X** as the first player, and prepares the board for play.
- **`checkWin()`**: Checks for winning conditions on the board (horizontal, vertical, and diagonal). It updates the display to show the winner when a player wins.
- **`resetGame()`**: Clears all symbols from the board and resets the game state, allowing a new game to start.
