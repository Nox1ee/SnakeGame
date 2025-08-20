import GameField from "./GameField.js";
import Snake from "./Snake.js"
import Apple from "./Apple.js";
import Score from "./Score.js"

class Main {
    constructor() {
        this.boardSize = 10;

        this.gameField = new GameField(this.boardSize);
        this.snake = new Snake();
        this.apple = new Apple(this.boardSize);
        this.score = new Score();

        // При нажатие на экран, начинается игра
        document.getElementById("gameInfo").addEventListener("click", () => this.startGame());

        // При нажатии на кнопку Restart, перезагружается страница(игра начинается заново)
        document.getElementById('restartButton').addEventListener('click', () => {  
        location.reload();
        });

        this.verifyHighScore();
    }

    verifyHighScore() {
        if (this.score._highScore === 0) {
            document.getElementById("highScore").style.display = "none";
        } else {
            document.getElementById("highScore").style.display = "block";
        }
    }

    startGame() {
        document.getElementById("gameInfo").style.display = "none";

        document.addEventListener('keydown', (event) => {
            this.snake.changeDirection(event.key);
        });

        this.gameInterval = setInterval(() => this.gameLoop(), 500);
    }

    gameLoop() {
        const head = this.snake.move(this.boardSize);

        if (head.x === this.apple.position.x && head.y === this.apple.position.y) {
            this.score.increase();
            this.apple.spawn(this.snake.body);
        } else {
            this.snake.body.pop();
        }

        if (this.snake.isSelfCollision()) {
            this.endGame();
            return;
        }

        this.gameField.render(this.snake.body, this.apple.position);
    }

    endGame() {
        clearInterval(this.gameInterval); 
        this.score.checkHighScore();
        document.getElementById('restartButton').style.display = 'block';
        document.getElementById("gameInfo").style.display = "flex"
    }
}

window.onload = () => new Main();

export default Main;
