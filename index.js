// import Word that is exported from word.js,
// which imports Letter that is exported from letter.js
var Word = require("./word");
var currentWord = new Word();
var inquirer = require("inquirer");
var inquirer2 = require("inquirer");
var guessedArray = [];
var randomWord = '';
var guesses = 7;
var feedback = '';
var title = [
    "=================================================================================",
    " _    _               _   _____                       _____                       ",
    "| |  | |             | | |  __ \\                     |  __ \\                      ",
    "| |  | | ___  _ __ __| | | |  \\/_   _  ___  ___ ___  | |  \\/ __ _ _ __ ___   ___  ",
    "| |/\\| |/ _ \\| '__/ _` | | | __| | | |/ _ \\/ __/ __| | | __ / _` | '_ ` _ \\ / _ \\ ",
    "\\  /\\  / (_) | | | (_| | | |_\\ \\ |_| |  __/\\__ \\__ \\ | |_\\ \\ (_| | | | | | |  __/ ",
    " \\/  \\/ \\___/|_|  \\__,_|  \\____/\\__,_|\\___||___/___/  \\____/\\__,_|_| |_| |_|\\___| ",
    "================================================================================="
]

// randomly choose word and store in Word.letters array
var wordList =
    ['html', 'css', 'alphabet', 'prestige', 'javascript',
        'jquery', 'bootstrap', 'flexbox', 'coding', 'developer',
        'programmer'];
// var wordList =
//     ['html', 'css'];

var game = {

    startGame: function () {
        guessedArray = [];
        randomWord = '';
        guesses = 7;
        currentWord.wordObjects = [];
        currentWord.createObjects(this.randomize());
        this.displayStatus();
        this.runInquirer();
    },

    randomize: function () {
        // pick a random word from the wordList and return it
        randomWord = wordList[Math.floor(Math.random() * wordList.length)];
        return randomWord;
    },

    displayStatus: function () {
        var displayWordArray = [];
        currentWord.wordObjects.forEach(function (arg) {
            displayWordArray.push(arg.showChar());
        });
        var displayWord = displayWordArray.join(" ").toUpperCase();
        console.log('\033[2J'); // clears screen
        console.log("\t" + title.join("\n\t"));
        var statusLine = "\n\n\t\t" + displayWord + "\n\n";
        statusLine += "\t\tLetters Guessed: " + guessedArray.join(", ") + "\n";
        statusLine += "\t\tGuesses left: " + guesses + "\n";
        statusLine += "\n\t\t" + feedback + "\n\n"
        console.log(statusLine);

    },

    validInput: function (char) {
        if (char.length === 1 && ((char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) ||
            (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122))) {
            // check if char is already guessed
            if (guessedArray.indexOf(char.toUpperCase()) === -1) {
                return true;
            } else {
                feedback = "You picked that letter already!"
                return false;
            }
        } else {
            feedback = "Sorry, invalid entry."
            return false;
        }
    },

    compareInput: function (arg) {
        // validate the input by getting first char
        if (this.validInput(arg)) {
            feedback = "You entered a valid character";

            var found = false;
            // compare each object in word array with user input
            currentWord.wordObjects.forEach(function (element) {
                // skip existing letters that are true
                if (element.guessedChar === false) {
                    element.checkChar(arg);
                    // set found to true if match is found
                    if (element.guessedChar) {
                        found = true;
                    }
                }
            });

            // check if player got all the letters using .every()
            if (currentWord.wordObjects.every(function (element) { return element.guessedChar })) {
                
                feedback = "YOU WON!";
                game.startGame();
                return;
            }
            if (found === false) {
                // reduce guesses if no match
                guesses--;
                if (guesses === 0) {
                    feedback = "Sorry! Answer is " + randomWord.toUpperCase();
                    game.startGame();
                    return;
                }
            } else {
                found = false; // reset flag
            }

            // if arg is not in guessedArray then add to guess array
            guessedArray.push(arg.toUpperCase());
            this.displayStatus();
            this.runInquirer();

        } else {
            this.displayStatus();
            this.runInquirer();
        }

    },

    runInquirer: function () {
        inquirer.prompt([{
            type: "input",
            name: "userInput",
            message: "Guess a letter: "
        }]).then(function (answer) {
            game.compareInput(answer.userInput);
        });
    },

    gameOver: function () {
        feedback = "Game Over! Answer is " + randomWord.toUpperCase();
        this.displayStatus();
        game.startGame();
        // process.exit();
    },

    youWon: function () {
        feedback = "YOU WON!";
        this.displayStatus();
        game.startGame();
        // process.exit();
    },

    playAgain: function () {
        inquirer2.prompt([
            {
                type: 'confirm',
                name: 'playAgain',
                message: 'Do you want to play again? (press enter for YES)',
                default: true
            }
        ]).then(function (answers) {
            if (answers.playAgain === true) {

                game.startGame();
            }
        });
    }

}

// displayStatus();
// console.log(currentWord);
game.startGame();
// prompt user for each guess and keep track
// of the remaining guesses


