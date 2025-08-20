class GameField {
    constructor(boardSize) {
        this.boardSize = boardSize;
        this.cells = [];
        this.createBoard();
    }

    createBoard() {
        const gameBoard = document.getElementById('gameField');
        for (let i = 0; i < this.boardSize * this.boardSize; i++) {
            const cell = document.createElement('div');
            cell.classList.add("cell");
            cell.dataset.x = i % this.boardSize;
            cell.dataset.y = Math.floor(i / this.boardSize);
            gameBoard.appendChild(cell);
            this.cells.push(cell);
        }
    }

    render(snakeBody, applePosition) {
        this.cells.forEach(cell => {
            cell.classList.remove('snake-head', 'snake-body', 'snake-tail', 'apple');
            const x = parseInt(cell.dataset.x);
            const y = parseInt(cell.dataset.y);

            if (snakeBody.length > 0) {
                const head = snakeBody[0];
                if (head.x === x && head.y === y) {
                    cell.classList.add('snake-head');
                    return;
                }

                for (let i = 1; i < snakeBody.length; i++) {
                    const segment = snakeBody[i];
                    if (segment.x === x && segment.y === y) {
                        if (i === snakeBody.length - 1) {
                            cell.classList.add('snake-tail');
                        } else {
                            cell.classList.add('snake-body');
                        }
                        return;
                    }
                }
            }

            if (applePosition.x === x && applePosition.y === y) {
                cell.classList.add('apple');
            }
        });
    }
}
export default GameField;
