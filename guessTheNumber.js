function guessTheNumber() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let computerGuess = Math.floor(Math.random() * 100);
    let counter = 0;

    let choseDifficulty = function () {
        readline.question('Chose the difficulty u want to play /easy, medium, hard/: ', string => {
            difficulty = string.toString();
            if (difficulty === 'easy') {
                console.log('Game difficulty: Easy');
                console.log('You have 10 tries. Good Luck!');
                counter = 10;
                recursiveAsyncReadLine();
            } else if (difficulty === 'medium') {
                console.log('Game difficulty: Medium');
                console.log('You have 5 tries. Good Luck!');
                counter = 5;
                recursiveAsyncReadLine();
            } else if (difficulty === 'hard') {
                console.log('Game difficulty: Hard');
                console.log('You have 3 tries. Good Luck!');
                counter = 3;
                recursiveAsyncReadLine();
            } else {
                console.log('Invalid input!');
                choseDifficulty();
            }
        })
    }
    choseDifficulty();

    let recursiveAsyncReadLine = function () {
        readline.question('Guess the number (0-100): ', number => {
            guess = Number(number);
            if (guess <= 100 && guess >= 0) {
                if (guess > computerGuess) {
                    counter--;
                    console.log('Too High!');
                    if (counter !== 0) {
                        console.log(`${counter} more tries...`);
                    }
                    if (counter === 0) {
                        wrongAnswer();
                    }
                    recursiveAsyncReadLine();
                } else if (guess < computerGuess) {
                    counter--;
                    console.log('Too Low!');
                    if (counter !== 0) {
                        console.log(`${counter} more tries...`);
                    }
                    if (counter === 0) {
                        wrongAnswer();
                    }
                    recursiveAsyncReadLine();
                } else {
                    console.log('You guess it!');
                    return readline.close();
                }
            } else {
                console.log('Invalid input! Try again...');
                recursiveAsyncReadLine();
            }
        });
    }
    recursiveAsyncReadLine();

    let wrongAnswer = function () {
        console.log('No more tries left... :(');
        readline.question('Do you want to play again (yes or no) ? ', string => {
            userAnswer = string.toString();
            if (userAnswer === 'yes') {
                choseDifficulty();
                //recursiveAsyncReadLine();
            } else if (userAnswer === 'no') {
                console.log('See you again!');
                return readline.close();
            } else {
                console.log('Can`t understand the answer, please try again!');
                wrongAnswer();
            }
        });
    }
}
guessTheNumber()

