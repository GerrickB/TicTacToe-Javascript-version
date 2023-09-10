# TicTacToe-Javascript-version
This is a simple implementation of the classic game "Tic Tac Toe". The game has been built using HTML, CSS, and JavaScript. It supports two players, and the game ends either when one player wins or the game is a draw.

## Table of Contents

- [How To Play](#how-to-play)
- [Features](#features)
- [Code Structure](#code-structure)

## How To Play

1. The game board will be displayed with 9 empty tiles.
2. Player One starts with the "X" mark and Player Two uses the "O" mark.
3. Click on an empty tile to mark it.
4. The game will automatically switch turns between the players after each move.
5. The game ends when a player gets three of their marks in a line (horizontally, vertically, or diagonally) or when all tiles are filled and it's a draw.
6. The winner's name will be displayed once the game ends.

## Features

- Responsive design that adapts to different screen sizes.
- Clean and intuitive UI.
- Supports two players on the same device.
- Displays the name of the player whose turn it is.
- Tiles cannot be re-marked once they've been selected.
- Winning combinations and logic are pre-defined to easily detect a win.

## Code Structure

- **HTML Structure**: Basic structure with a container that holds the game board and placeholders for the game status.
- **JavaScript Modules**:
    - `gameBoard`: Responsible for creating and manipulating the game board.
    - `GameController`: Handles the game logic, including player turns and checking for a winner.
    - `displayController`: Manages the game's UI and interactions.
- **Factory Functions**:
    - `GameController`: A factory function to instantiate and manage the game's logic and flow.