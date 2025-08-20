class Apple {
    constructor(boardSize) {
        this.boardSize = boardSize;
        this.position = this.getPosition();
    }

    getPosition(snakeBody = []) {
        let position;
        do {
            position = { 
                x: Math.floor(Math.random() * this.boardSize), 
                y: Math.floor(Math.random() * this.boardSize) 
            };
        } while (snakeBody.some(segment => segment.x === position.x && segment.y === position.y));
        return position;
    }

    spawn(snakeBody) {
        this.position = this.getPosition(snakeBody);
    }
}

export default Apple;