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
    
    // Avvia il conto alla rovescia
    function startCountdown() {
        memorizingInterval = setInterval(updateCountdown, 1000);
    }

    // Aggiorna il timer e gestisce la logica del gioco
    function updateCountdown() {
        if (countdown > 0) {
            timerTag.textContent = `Tempo rimanente: ${countdown} secondi`;
            countdown--;
        } else {
            clearInterval(memorizingInterval);
            hideRandomNumbers();
            setTimeout(promptUserForNumbers, 5000);
        }
    }

    // Nasconde i numeri random dallo schermo
    function hideRandomNumbers() {
        divToMemorize.textContent = '';
        timerTag.textContent = 'Ricorda i numeri...';
    }

    // Chiede all'utente di inserire i numeri tramite prompt
    function promptUserForNumbers() {
        for (let i = 0; i < 5; i++) {
            const userNum = parseInt(prompt(`Inserisci il numero ${i + 1}:`), 10);
            if (!isNaN(userNum)) {
                userNumbers.push(userNum);
            }
        }
        console.log(userNumbers);
        evaluateUserNumbers();
    }
    
    startButton.addEventListener("click", startGame);
});