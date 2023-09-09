const gameBoard = (() => {
  const rows = 3;
  const columns = 3;
  const board = [];
  let tile = 0;

  const WIN_COMBO = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  // maybe use for validation, remove used numbers
  // let choices = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(tile);
      tile++;
    }
  }

  const getBoard = () => board;

  return { getBoard };
})();

const displayController = (() => {
  const gameboardDiv = document.querySelector('.gameboard');

  const updateDisplay = () => {
    gameBoard.getBoard().forEach(row => {
      row.forEach((value, index) => {
        const cellButton = document.createElement("button");
        cellButton.classList.add("tile");
        cellButton.id = `position-${value}`;

        gameboardDiv.appendChild(cellButton);

      })
    })
  }

  updateDisplay();
})();