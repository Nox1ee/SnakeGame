class Snake {
    constructor() {
        this.body = [{ x: 6, y: 4 }]; 
        this.direction = { x: -1, y: 0 };
    }

    move(boardSize) {
        const head = {
            x: (this.body[0].x + this.direction.x + boardSize) % boardSize,
            y: (this.body[0].y + this.direction.y + boardSize) % boardSize
        };
        this.body.unshift(head);
        return head;
    }

    changeDirection(newDirection) {
        switch (newDirection) {
            case 'ArrowUp':
                if (this.direction.y !== 1) this.direction = { x: 0, y: -1 };
                break;
            case 'ArrowDown':
                if (this.direction.y !== -1) this.direction = { x: 0, y: 1 };
                break;
            case 'ArrowLeft':
                if (this.direction.x !== 1) this.direction = { x: -1, y: 0 };
                break;
            case 'ArrowRight':
                if (this.direction.x !== -1) this.direction = { x: 1, y: 0 };
                break;
        }
    }

    changeDirectionMobile() {
        const up = document.querySelector(".button__up");
        const down = document.querySelector(".button__down");
        const left = document.querySelector(".button__left");
        const right = document.querySelector(".button__right");

        up.addEventListener("click", () => {
            if (this.direction.y !== 1) this.direction = { x: 0, y: -1 };
        });

        down.addEventListener("click", () => {
            if (this.direction.y !== -1) this.direction = { x: 0, y: 1 };
        });

        left.addEventListener("click", () => {
            if (this.direction.x !== 1) this.direction = { x: -1, y: 0 };
        })

        right.addEventListener("click", () => {
            if (this.direction.x !== -1) this.direction = { x: 1, y: 0 };
        })
    }

    isSelfCollision() {
        const head = this.body[0];
        return this.body.slice(1).some(segment => segment.x === head.x && segment.y === head.y);
    }
}

export default Snake;
