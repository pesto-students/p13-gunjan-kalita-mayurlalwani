let playerTurn = true;
let computerMoveTimeout = 0;

const gameStatus = {
  HumanWin: 'You win!',
  ComputerWin: 'Computer wins!',
  Draw: 'Draw game',
  Continue: 'Continue playing',
};

function getGameBoardButtons() {
  return Array.from(document.querySelectorAll('#gameBoard button'));
}

function checkForWinner() {
  const buttons = getGameBoardButtons();
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (
      buttons[a].classList.contains('x') &&
      buttons[b].classList.contains('x') &&
      buttons[c].classList.contains('x')
    ) {
      return gameStatus.HumanWin;
    } else if (
      buttons[a].classList.contains('o') &&
      buttons[b].classList.contains('o') &&
      buttons[c].classList.contains('o')
    ) {
      return gameStatus.ComputerWin;
    }
  }

  if (
    buttons.every(
      (button) =>
        button.classList.contains('x') || button.classList.contains('o')
    )
  ) {
    return gameStatus.Draw;
  }

  return gameStatus.Continue;
}

function newGame() {
  clearTimeout(computerMoveTimeout);
  computerMoveTimeout = 0;

  const buttons = getGameBoardButtons();
  buttons.forEach((button) => {
    button.innerHTML = '';
    button.classList.remove('x', 'o');
    button.disabled = false;
  });

  playerTurn = true;
  document.getElementById('turnInfo').textContent = 'Your turn';
}

function boardButtonClicked(button) {
  if (playerTurn) {
    button.innerHTML = 'X';
    button.classList.add('x');
    button.disabled = true;
    switchTurn();
  }
}

function switchTurn() {
  const status = checkForWinner();

  if (status === gameStatus.Continue) {
    playerTurn = !playerTurn;

    const turnInfo = document.getElementById('turnInfo');
    turnInfo.textContent = playerTurn ? 'Your turn' : "Computer's turn";

    if (!playerTurn) {
      computerMoveTimeout = setTimeout(makeComputerMove, 1000);
    }
  } else {
    playerTurn = false;
    const turnInfo = document.getElementById('turnInfo');
    if (status === gameStatus.HumanWin) {
      turnInfo.textContent = 'You win!';
    } else if (status === gameStatus.ComputerWin) {
      turnInfo.textContent = 'Computer wins!';
    } else {
      turnInfo.textContent = 'Draw game';
    }
  }
}

function makeComputerMove() {
  const buttons = getGameBoardButtons();
  const availableButtons = buttons.filter(
    (button) =>
      !button.classList.contains('x') && !button.classList.contains('o')
  );
  const randomIndex = Math.floor(Math.random() * availableButtons.length);
  const randomButton = availableButtons[randomIndex];
  randomButton.innerHTML = 'O';
  randomButton.classList.add('o');
  randomButton.disabled = true;
  switchTurn();
}

function domLoaded() {
  const newGameButton = document.getElementById('newGameButton');
  newGameButton.addEventListener('click', newGame);

  const buttons = getGameBoardButtons();
  buttons.forEach((button) => {
    button.addEventListener('click', () => boardButtonClicked(button));
  });

  newGame();
}

document.addEventListener('DOMContentLoaded', domLoaded);
