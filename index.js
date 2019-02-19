// import Word that is exported from word.js,
// which imports Letter that is exported from letter.js
var Word = require("./word");
var inquirer = require("inquirer");
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
    argArray.wordObjects.forEach(function(arg) {
        displayWordArray.push(arg.showChar());
        console.log(arg.showChar());
    });
    var displayWord = displayWordArray.join(" ").toUpperCase();
    console.log('\033[2J'); // clears screen
    console.log(title.join("\n"));
    var statusLine = "\n\n\t" + displayWord + "\n\n";
    statusLine += "\tLetters used: " + "A, B, C, D, E" + "\n";
    statusLine += "\tGuesses left: " + "3" + "\n";
    console.log(statusLine);
    
}

// test if returns are correct
// for (var i = 0; i < currentWord.wordObjects.length; i++) {
//     console.log("yo: ", currentWord.wordObjects[i].underlyingChar, currentWord.wordObjects[i].guessedChar);
// }

displayStatus(currentWord);


// prompt user for each guess and keep track
// of the remaining guesses
/*
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
    displayStatus(currentWord.wordArray);
    console.log("Current word: ", currentWord.wordArray)
    //    currentWord.checkChar(char.userInput);
    console.log("You entered: ", char.userInput);
});
*/
