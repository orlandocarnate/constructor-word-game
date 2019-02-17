// import Word that is exported from word.js,
// which imports Letter that is exported from letter.js
var Word = require("./word");
var inquirer = require("inquirer");

var word = new Word;
// randomly choose word and store in Word.letters array


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
