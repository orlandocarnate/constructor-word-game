// import Letter that was exported from letter.js
var Letter = require("./letter");


var Word = function (word) {
    // array of letter OBJECTS of current word
    this.wordArray = word.split("");
    
    // function that returns a string representing the word
    this.showString = function() {
        // call function on each letter object that displays 
        // a char or underscore and concatenate them together.
        // for each Letter.showChar();

    }
    // takes char argument and calls guess function on each letter
    this.guessChar =  function (char) {
        Letter.checkChar(char);
    }
};

// export
module.exports = Word;