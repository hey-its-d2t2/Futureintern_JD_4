document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('game-board');
    const scoreDisplay = document.querySelector('.score');
    const boardSize = 400;
    const boxSize = 20;
    let snake = [{x: 160, y: 160}];
    let food = {x: 100, y: 100};
    let direction = 'RIGHT';
    let newDirection = 'RIGHT';
    let score = 0;
    let interval = setInterval(updateGame, 200);

    const eatSound = new Audio('/sounds/eat.mp3');
    const gameoverSound = new Audio('/sounds/gameover.mp3');

    function createDiv(className, x, y) {
        const div = document.createElement('div');
        div.className = className;
        div.style.left = `${x}px`;
        div.style.top = `${y}px`;
        board.appendChild(div);
        return div;
    }

    function updateGame() {
        const head = { ...snake[0] };
        if (direction === 'RIGHT') head.x += boxSize;
        if (direction === 'LEFT') head.x -= boxSize;
        if (direction === 'UP') head.y -= boxSize;
        if (direction === 'DOWN') head.y += boxSize;

        snake.unshift(head);
        if (head.x === food.x && head.y === food.y) {
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
            eatSound.play();
            generateFood();
        } else {
            snake.pop();
        }

        board.innerHTML = '';

        snake.forEach(segment => createDiv('snake', segment.x, segment.y));
        createDiv('food', food.x, food.y);

        if (head.x < 0 || head.x >= boardSize || head.y < 0 || head.y >= boardSize ||
            snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)) {
            clearInterval(interval);
            gameoverSound.play();
            showGameOverPopup();
        }

        direction = newDirection;
    }

    function generateFood() {
        food.x = Math.floor(Math.random() * (boardSize / boxSize)) * boxSize;
        food.y = Math.floor(Math.random() * (boardSize / boxSize)) * boxSize;
    }

    function showGameOverPopup() {
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.innerHTML = `
                <div class="popup-content">
                    <h2>Game Over</h2>
                    <p>Your Score: ${score}</p>
                    <button onclick="restartGame()">Restart</button>
                </div>
            `;
        document.body.appendChild(popup);
    }

    window.restartGame = function() {
        document.querySelector('.popup').remove();
        snake = [{x: 160, y: 160}];
        direction = 'RIGHT';
        newDirection = 'RIGHT';
        score = 0;
        scoreDisplay.textContent = `Score: ${score}`;
        generateFood();
        interval = setInterval(updateGame, 200);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp' && direction !== 'DOWN') newDirection = 'UP';
        if (e.key === 'ArrowDown' && direction !== 'UP') newDirection = 'DOWN';
        if (e.key === 'ArrowLeft' && direction !== 'RIGHT') newDirection = 'LEFT';
        if (e.key === 'ArrowRight' && direction !== 'LEFT') newDirection = 'RIGHT';
    });

    generateFood();
});
