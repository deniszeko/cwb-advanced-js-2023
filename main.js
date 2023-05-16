/*
 * The current player. Is either 'X' or 'O'.
 */
let player = 'X';

/**
 * Checks a win condition for the current player.
 * Returns true if the player has won.
 */
function checkWinCondition() {
    return checkHorizontalWinCondition() ||
        checkVerticalWinCondition() ||
        checkDiagonalDownWinCondition() ||
        checkDiagonalUpWinCondition();
}

/*
 * Checks all horizontal lines for the current player's win condition.
 * Draws a line on the board if the player has won.
 * Returns true if a player has won.
 */
function checkHorizontalWinCondition() {
    let hasWon = false;
    let winningRow = 0;

    for (let i = 1; i <= 3; i++) {
        const a = getCellAt(i, 1).innerHTML;
        const b = getCellAt(i, 2).innerHTML;
        const c = getCellAt(i, 3).innerHTML;

        hasWon = a && a === b && b === c;
        if (hasWon) {
            winningRow = i;
            break;
        }
    }

    if (hasWon) {
        drawHorizontalLine(winningRow);
    }
    return hasWon;
}

/*
 * Checks all vertical lines for the current player's win condition.
 * Draws a line on the board if the player has won.
 * Returns true if a player has won.
 */
function checkVerticalWinCondition() {
    let hasWon = false;
    let winningColumn = 0;

    for (let i = 1; i <= 3; i++) {
        const a = getCellAt(1, i).innerHTML;
        const b = getCellAt(2, i).innerHTML;
        const c = getCellAt(3, i).innerHTML;

        hasWon = a && a === b && b === c;
        if (hasWon) {
            winningColumn = i;
            break;
        }
    }

    if (hasWon) {
        drawVerticalLine(winningColumn);
    }
    return hasWon;
}

/*
 * Checks the top-left to bottom-right diagonal line
 * for the current player's win condition.
 * Draws a line on the board if the player has won.
 * Returns true if a player has won.
 */
function checkDiagonalDownWinCondition() {
    let hasWon = false;

    const a = getCellAt(1, 1).innerHTML;
    const b = getCellAt(2, 2).innerHTML;
    const c = getCellAt(3, 3).innerHTML;

    hasWon = a && a === b && b === c;

    if (hasWon) {
        drawDiagonalLine(false);
    }
    return hasWon;
}

/*
 * Checks the bottom-left to top-right diagonal line for
 * the current player's win condition.
 * Draws a line on the board if the player has won.
 * Returns true if a player has won.
 */
function checkDiagonalUpWinCondition() {
    let hasWon = false;

    const a = getCellAt(1, 3).innerHTML;
    const b = getCellAt(2, 2).innerHTML;
    const c = getCellAt(3, 1).innerHTML;

    hasWon = a && a === b && b === c;

    if (hasWon) {
        drawDiagonalLine(true);
    }
    return hasWon;
}

/**********************************
 ******** HELPER FUNCTIONS ********
 **********************************/

function switchPlayer() {
    let hasWon = checkWinCondition();
    if (hasWon) {
        // apply the 'set' style to all cells which aren't yet set.
        let unsetCells = document.querySelectorAll('.cell:not(.set)');
        for (cell of unsetCells) {
            cell.classList.add('set');
        }
        // Print the 'Player X/O wins!' message
        document.querySelector('.player').innerHTML = `Player ${player} wins!`;
        return;
    }

    // switch between X and O
    if (player == 'X') {
        player = 'O';
    } else {
        player = 'X';
    }
    updatePlayerName();
}

function updatePlayerName() {
    document.querySelector('.playerName').innerHTML = player;
}

function getCellAt(row, col) {
    return document.querySelector(`div.row[row="${row}"] div.cell[col="${col}"]`);
}

function drawHorizontalLine(rowNr) {
    let length = document.querySelector('#board').offsetWidth;
    let offsetLeft = document.querySelector(`div.row[row="${rowNr}"]`).offsetLeft;
    let offsetTop = document.querySelector(`div.row[row="${rowNr}"]`).offsetTop;

    let line = document.createElement('div');
    line.classList.add('line');
    line.style.width = `${length}px`;
    document.querySelector('#board').prepend(line);
    line.style.left = `${offsetLeft}px`;
    line.style.top = `${offsetTop + 50}px`;
}

function drawVerticalLine(columnNr) {
    let length = document.querySelector('#board').offsetHeight;
    let offsetLeft = document.querySelector(`div.cell[col="${columnNr}"]`).offsetLeft;
    let offsetTop = document.querySelector(`div.cell[col="${columnNr}"]`).offsetTop;

    let line = document.createElement('div');
    line.classList.add('line');
    line.style.width = `${length}px`;
    line.style.transform = 'rotate(90deg)';
    document.querySelector('#board').prepend(line);
    line.style.left = `${offsetLeft + 50}px`;
    line.style.top = `${offsetTop}px`;
}

function drawDiagonalLine(isUpwardSloping) {
    let length = document.querySelector('#board').offsetWidth;
    let angle = 45;
    if (isUpwardSloping) {
        angle = -45;
    }

    let line = document.createElement('div');
    line.classList.add('line');
    line.style.width = `${Math.sqrt(length * length * 2)}px`;
    line.style.transform = `rotate(${angle}deg)`;
    if (isUpwardSloping) {
        document.querySelector('#board').append(line);
    } else {
        document.querySelector('#board').prepend(line);
    }
}

/*
 * This runs once the page has loaded.
 */
document.addEventListener('DOMContentLoaded', () => {

    // set a click action on all squares
    document.querySelector('#board').addEventListener(
        'click', (eventObject) => {
            let col = eventObject.target.getAttribute('col');
            let row = eventObject.target.parentElement.getAttribute('row');

            let cell = getCellAt(row, col);
            // only do something if the square hasn't been set already
            if (!cell.classList.contains('set')) {
                cell.innerHTML = player;
                cell.classList.add('set');
                switchPlayer();
            }
        }
    );

    updatePlayerName();
    console.log("ready!");
});
