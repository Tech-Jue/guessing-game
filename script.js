document.addEventListener('DOMContentLoaded', () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const guessInput = document.getElementById('guess');
    const message = document.getElementById('message');

    document.getElementById('submitGuess').addEventListener('click', () => {
        const guess = parseInt(guessInput.value);
        message.textContent = guess === randomNumber
            ? 'Correct! The number was ' + randomNumber + '.'
            : 'Too ' + (guess > randomNumber ? 'high' : 'low') + '.';
    });

    document.getElementById('exitGame').addEventListener('click', () => {
        message.textContent = 'Game exited. The number was ' + randomNumber + '.';
    });
});
