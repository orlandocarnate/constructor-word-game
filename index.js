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
const dash = chalk.red(" ==================================================================================");

// randomly choose word and store in Word.letters array
const wordList =
    ['Ready Player One', 'Star Wars', 'Star Trek', 'Inception', 'The Dark Knight', 'Iron Man', 
    'Captain America', 'Enter the Dragon', 'Wonder Woman', 'Spider-Man', 'The Matrix', 'The Last Starfighter'];
// var wordList =
//     ['one two', 'css'];

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
        console.log('\033[2J'); // clears screen
        console.log("\n" + dash + "\n");
        console.log(
            // chalk module
            chalk.yellow(
                // figlet module
                figlet.textSync('Word Guess Game!', {
                    font: 'Small Slant',
                    kerning: 'fitted',
                    horizontalLayout: 'fitted',
                    verticalLayout: 'default'
                })
            )
        );
        var statusLine = dash + "\n";
        statusLine += "\n\n\t\t" + chalk.green(currentWord.getString()) + "\n\n";
        statusLine += chalk.yellow("\t\tLetters Guessed: ") + chalk.red(guessedArray.join(", ")) + "\n";
        statusLine += chalk.yellow("\t\tGuesses left: ") + chalk.red(guesses) + "\n";
        statusLine += "\n\t\t" + chalk.blue(feedback) + "\n\n"
        console.log(statusLine); // display status section

    },

    validInput: function (char) {
        if (char.length === 1 && ((char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) ||
            (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122))) {
                
            // check if char is in guessedArray
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

            // ******* CONVERT TO .some() OR .find() *******
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

            // see if any matches are found
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
            .then(answer => { game.compareInput(answer.userInput) });
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
            else {
                console.log(chalk.green("Goodbye!"));
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
