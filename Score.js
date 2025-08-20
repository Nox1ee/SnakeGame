class Score {
    constructor() {
        this._score = 0;
        this._highScore = localStorage.getItem("highScore") || 0;
        this.draw();
    }

    draw() {
        document.getElementById('score').textContent = this._score;

        document.getElementById('highScoreValue').textContent = this._highScore > 0 ? this._highScore : 0;
    }

    increase() {
        this._score += 1;
        this.draw();
    }

    checkHighScore() {
        if (this._score > this._highScore) {
            localStorage.setItem("highScore", this._score);
            document.getElementById("someText").textContent = `Поздравялем! Новый рекорд: ${this._score}`
            this._highScore = this._score;
        } else {
            document.getElementById("someText").textContent = `Игра окончена! Ваш счет: ${this._score}`;        }
    }


}

export default Score;