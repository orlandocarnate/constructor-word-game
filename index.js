// import Word that is exported from word.js,
// which imports Letter that is exported from letter.js
var Word = require("./word");
var inquirer = require("inquirer");
var guessedArray = [];
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

// Pick random word from wordList
function randomize() {
    // pick a random word from the wordList and return it
    var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    return randomWord;
};

// assign randomword to currentWord.wordArray
var currentWord = new Word();
currentWord.createObjects(randomize());
// send currentWord to Word
// console.log(currentWord.wordObjects[0]);


// displays game status
function displayStatus(argArray) {
    var displayWordArray = [];
    argArray.wordObjects.forEach(function (arg) {
        displayWordArray.push(arg.showChar());
    });
    var displayWord = displayWordArray.join(" ").toUpperCase();
    console.log('\033[2J'); // clears screen
    console.log("\t" + title.join("\n\t"));
    var statusLine = "\n\n\t" + displayWord + "\n\n";
    statusLine += "\tLetters Guessed: " + guessedArray.join(", ") + "\n";
    statusLine += "\tGuesses left: " + "3" + "\n";
    console.log(statusLine);

}

var game = {
    validInput: function (char) {
        if (char.length === 1 && ((char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) ||
            (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122))) {
            return true;
        } else {
            return false;
        }
    },

    compareInput: function (arg) {
        // validate the input by getting first char
        if (this.validInput(arg)) {
            console.log("You entered a valid character");
            // compare each object in word array with user input
            this.runInquirer();
        } else {
            console.log("Sorry invalid input");
            this.runInquirer();
        }

    },

    runInquirer: function () {
        inquirer.prompt([

            {
                type: "input",
                name: "userInput",
                message: "Guess a letter: "
            }

            // After the prompt, store the user's response in char.
        ]).then(function (char) {
            console.log("prompt: ", char.userInput);
            displayStatus(currentWord);
            // run game logic
            game.compareInput(char.userInput);
        });
    },

    playAgain: function (arg) {
        if (arg.toUpperCase === 'Y') {
            this.runInquirer();
        } else {
            process.exit();
        }
    }

}

displayStatus(currentWord);

game.runInquirer();
// prompt user for each guess and keep track
// of the remaining guesses


