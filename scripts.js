// module
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

  const putMark = (tile, mark) => {
    console.log(`#${tile}`)
    // returns null if no class or id found
    // if (null) is a false condition
    //console.log(document.querySelector('.something'));
    const cellButton = document.querySelector(`#${tile}`);

    if (cellButton.disabled === false) {
      const imgX = document.createElement("img");

      if (mark === 'x') {
        imgX.src = 'icons/close_FILL0_wght400_GRAD0_opsz24.svg';
        imgX.alt = 'X';
        //cellButton.appendChild(imgX);
      }
      if (mark === 'o') {
        imgX.src = 'icons/circle_FILL0_wght400_GRAD0_opsz24.svg';
        imgX.alt = 'O';
        //cellButton.appendChild(imgX);
      }

      cellButton.appendChild(imgX);
      cellButton.disabled = true;
    } else {
      console.log(`${tile} is already marked`)
    }
    
    // let arr = tile.split('-');
    // console.log(arr[1]);
    // // use num to remove choices
    // console.log(parseInt(arr[1]));
    // gameBoard.choices.pop();
    // console.log(gameBoard.choices)
  };

  return { choices, getBoard, putMark };
})();

// factory function
function GameController(playerOneName = "Player One", playerTwoName = "Player Two") {
  const players = [
    {
      name: playerOneName,
      mark: 'x'
    },
    {
      name: playerTwoName,
      mark: 'o'
    }
  ];

  let activePlayer = players[0];

  const switchPlayerTurn = () => {
    if (activePlayer === players[0]) {
      activePlayer = players[1];
    } else {
      activePlayer = players[0];
    }
    
  }

  const getActivePlayer = () => activePlayer;

  const playRound = (tile) => {
    gameBoard.putMark(tile, getActivePlayer().mark);

    switchPlayerTurn();
  };

  return {
    playRound,
    getActivePlayer
  };

}

// module
const displayController = (() => {
  const game = GameController();
  const playerTurnDiv = document.querySelector('.turn')
  const gameboardDiv = document.querySelector('.gameboard');

  const updateDisplay = () => {
    //console.log(`${game.getActivePlayer().name}'s turn`)
    playerTurnDiv.textContent = `${game.getActivePlayer().name}'s turn`;
    
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

    game.playRound(selectedTile);
    //updateDisplay();
    playerTurnDiv.textContent = `${game.getActivePlayer().name}'s turn`;
  }
  gameboardDiv.addEventListener("click", clickHandlerBoard);

  updateDisplay();

})();


// dont need since it's a module
//displayController();