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
  let choices = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(tile);
      tile++;
    }
  }

  const getBoard = () => board;

  return { choices, getBoard };
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

  function clickHandlerBoard(e) {
    const selectedTile = e.target.id;
    console.log(selectedTile);
    
    const cellButton = document.querySelector(`#${selectedTile}`);
    const imgX = document.createElement("img")
    imgX.src = 'icons/close_FILL0_wght400_GRAD0_opsz24.svg'
    imgX.alt = 'X'
    //console.log(`selected cellButton on ${cellButton.id}`)
    cellButton.appendChild(imgX);

    let arr = selectedTile.split('-');
    console.log(arr[1]);
    // use num to remove choices
    console.log(parseInt(arr[1]));
    //gameBoard.choices.pop();
    //console.log(gameBoard.choices)
  }
  gameboardDiv.addEventListener("click", clickHandlerBoard);

  updateDisplay();
})();

// Try to split 'position-1' then extract number then parse it