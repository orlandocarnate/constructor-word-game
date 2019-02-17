// import Word that is exported from word.js,
// which imports Letter that is exported from letter.js
var Word = require("./word");
var inquirer = require("inquirer");

var word = new Word;
// randomly choose word and store in Word.letters array

var wordList =
    ['html', 'css', 'alphabet', 'prestige', 'javascript',
        'jquery', 'bootstrap', 'flexbox', 'coding', 'developer',
        'programmer'];

// FROM OLDER HOMEWORK
// Pick random word from wordList
function randomize() {
    // reset already guessed letters
    alreadyGuessedArray = [];
    alreadyGuessedID.textContent = "NONE";

    // pick a random word from the wordList
    randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    console.log("random word: " + randomWord);

    // assign randomWord length to guessCount
    guessCount = 7;
    // guessCount = randomWord.length;
    guessCountID.textContent = guessCount;

    // create a variable with underlines and spaces.
    fillInTheBlank = '';
    for (i = 0; i < randomWord.length; i++) {
        fillInTheBlank += '_';
    }
    fillInTheBlank = fillInTheBlank.split('').join(' ');

    console.log("Word array: " + fillInTheBlank);
    fillInTheBlankID.textContent = fillInTheBlank;
};

// prompt user for each guess and keep track
// of the remaining guesses

inquirer.prompt([

    {
        type: "input",
        name: "userInput",
        message: "Guess a letter: "
    }

    // After the prompt, store the user's response in char.
]).then(function (char) {
    console.log("prompt: ", char.userInput);
    // send input char to Word.checkChar(char)
    word.checkChar(char.userInput);
    // console.log("You entered: ", data);
});
