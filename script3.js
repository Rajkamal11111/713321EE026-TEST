document.addEventListener('DOMContentLoaded', () => {
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const resultDisplay = document.getElementById('result');
    const restartButton = document.getElementById('restartButton');
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    const checkGuess = () => {
        const userGuess = Number(guessInput.value);
        if (userGuess > randomNumber) {
            resultDisplay.textContent = 'Too high! MEENDUM ORU MURAI..';
        } else if (userGuess < randomNumber) {
            resultDisplay.textContent = 'Too low! MUYARCHI SEYUNGAL..';
        } else {
            resultDisplay.textContent = 'Congratulations! You guessed the correct number!';
        }
    };

    const restartGame = () => {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        guessInput.value = '';
        resultDisplay.textContent = '';
    };

    guessButton.addEventListener('click', checkGuess);
    restartButton.addEventListener('click', restartGame);
});
