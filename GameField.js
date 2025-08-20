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
        this.cells.forEach(cell => {cell.classList.remove('snake', 'apple');
            const x = parseInt(cell.dataset.x);
            const y = parseInt(cell.dataset.y);

            if (snakeBody.some(segment => segment.x === x && segment.y === y)) {
                cell.classList.add('snake');
            }

            if (x === applePosition.x && y === applePosition.y) {
                cell.classList.add('apple');
            }
        });
    }
}
export default GameField;