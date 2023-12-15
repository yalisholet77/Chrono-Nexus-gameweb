// JavaScript logic for the upgraded game with character controls

// JavaScript logic for the upgraded game with character controls and coins

const gameBoard = document.getElementById('game-board');
const startButton = document.getElementById('start-btn');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const character = document.getElementById('character');

let score = 0;
let timeLeft = 60;
let timerId;

// Function to create a coin
function createCoin() {
    const coin = document.createElement('div');
    coin.classList.add('coin');
    coin.style.left = `${Math.floor(Math.random() * (gameBoard.offsetWidth - 20))}px`;
    coin.style.top = `${Math.floor(Math.random() * (gameBoard.offsetHeight - 20))}px`;

    coin.addEventListener('click', () => {
        if (timeLeft > 0) {
            score++;
            scoreDisplay.textContent = score;
            coin.style.display = 'none';
        }
    });

    return coin;
}

// Function to populate the game board with coins
function populateCoins() {
    for (let i = 0; i < 10; i++) {
        const coin = createCoin();
        gameBoard.appendChild(coin);
    }
}

// Function to move the character (same as provided previously)

// Function to start the game
function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    timeLeft = 60;
    timeDisplay.textContent = timeLeft;

    populateCoins();

    document.addEventListener('keydown', moveCharacter);

    timerId = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerId);
            document.removeEventListener('keydown', moveCharacter);
            alert(`Game over! Your final score is ${score}.`);
            gameBoard.innerHTML = '<div id="character"></div>';
        }
    }, 1000);
}

// Event listener for the Start Game button
startButton.addEventListener('click', startGame);