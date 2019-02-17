// import Letter that was exported from letter.js
var Letter = require("./letter");

var Word = function () {
    // array of letter OBJECTS of current word
    this.letters = [{}]; 
    
    this.getChar = function(arg) {
        // call the showChar()
        Letter.showChar(arg);
    }
    this.checkChar = function(arg) {
        //check each char in word from 
        // Letter.checkChar() using recursion
    }

};

// export
module.exports = Word;