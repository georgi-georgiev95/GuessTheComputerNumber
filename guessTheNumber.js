function guessTheNumber() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let computerGuess = Math.floor(Math.random() * 100);

    let recursiveAsyncReadLine = function () {
        readline.question('Guess the number (0-100): ', number => {
            guess = Number(number)
            if (guess <= 100 && guess >= 0) {
                if (guess > computerGuess) {
                    console.log('Too High!');
                } else if (guess < computerGuess) {
                    console.log('Too Low!');
                    recursiveAsyncReadLine();
                } else {
                    console.log('You guess it!');
                    return readline.close();
                    recursiveAsyncReadLine();
                }
            } else {
                console.log('Invalid input! Try again...');
                recursiveAsyncReadLine();
            }
        });
    }
    recursiveAsyncReadLine();
}
guessTheNumber()

