document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.querySelector("button");
    const divToMemorize = document.getElementById("numbersToMemorize");
    const timerTag = document.getElementById("timer");
    const randomNumbers = [];
    const userNumbers = [];
    let countdown = 30;
    let memorizingInterval;
    let gameOver = false;

    // Funzione per generare numeri random
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    // Inizia il gioco
    function startGame() {
        generateRandomNumbers();
        displayRandomNumbers();
        startCountdown();
    }

    // Genera e salva i numeri random
    function generateRandomNumbers() {
        for (let i = 0; i < 5; i++) {
            randomNumbers.push(getRandomInt(100));
        }
        console.log(randomNumbers);
    }

    // Mostra i numeri random sullo schermo
    function displayRandomNumbers() {
        divToMemorize.innerHTML = randomNumbers.map(num => `<p style='margin:15px 5px;'><strong>${num}</strong></p>`).join('');
    }
    
});