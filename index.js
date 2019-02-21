// import Word that is exported from word.js,
// which imports Letter that is exported from letter.js
var Word = require("./word");
var inquirer = require("inquirer");
var figlet = require('figlet');
const chalk = require('chalk');

let currentWord = new Word();
let guessedArray = [];
let randomWord = '';
let guesses = 7;
let feedback = '';
const dash = chalk.red(" =====================================================================================");
const title = [
    " _    _               _   _____                       _____                       ",
    "| |  | |             | | |  __ \\                     |  __ \\                      ",
    "| |  | | ___  _ __ __| | | |  \\/_   _  ___  ___ ___  | |  \\/ __ _ _ __ ___   ___  ",
    "| |/\\| |/ _ \\| '__/ _` | | | __| | | |/ _ \\/ __/ __| | | __ / _` | '_ ` _ \\ / _ \\ ",
    "\\  /\\  / (_) | | | (_| | | |_\\ \\ |_| |  __/\\__ \\__ \\ | |_\\ \\ (_| | | | | | |  __/ ",
    " \\/  \\/ \\___/|_|  \\__,_|  \\____/\\__,_|\\___||___/___/  \\____/\\__,_|_| |_| |_|\\___| "
]

// randomly choose word and store in Word.letters array
const wordList =
    ['word', 'game', 'node', 'react', 'html', 'css', 'alphabet', 'prestige', 'javascript',
        'jquery', 'bootstrap', 'flexbox', 'coding', 'developer', 'programmer', 'computer',
    'keyboard', 'mouse', 'monitor', 'tablet', 'smartphone'];
// var wordList =
//     ['html', 'css'];

const game = {

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
        console.log("\n" + dash + "\n\n");
        console.log(chalk.yellow(figlet.textSync('Word Guess Game!', {
            // font: 'Ghost',
            kerning: 'fitted',
            horizontalLayout: 'default',
            verticalLayout: 'default'
        })));
        // statusLine += "\t" + chalk.yellow(title.join("\n\t"));
        var statusLine = "\n" + dash + "\n";
        statusLine += "\n\n\t\t" + displayWord + "\n\n";
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
            currentWord.wordObjects.forEach(element => {
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

                feedback = "YOU GOT IT! It was " + randomWord.toUpperCase();
                this.displayStatus();
                game.playAgain();
                return;
            }
            if (found === false) {
                // reduce guesses if no match
                guesses--;
                if (guesses === 0) {
                    feedback = "Sorry! Answer is " + randomWord.toUpperCase();
                    this.displayStatus();
                    game.playAgain();
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
        }])
        .then(answer => {game.compareInput(answer.userInput)});
    },

    playAgain: function () {
        inquirer.prompt([
            {
                type: 'confirm',
                name: 'playAgain',
                message: 'Do you want to play again? (press enter for YES)',
                default: true
            }
        ]).then(function (answers) {
            if (answers.playAgain) {

                game.startGame();
            }
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


}

game.startGame();
