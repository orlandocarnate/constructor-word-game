// import Letter that was exported from letter.js
var Letter = require("./letter");

var Word = function (arg) {
    // array of letter OBJECTS of current word
    console.log(arg);
    /*
    this.letters = [{}]; 
    
    this.getChar = function(arg) {
        // call the showChar()
        Letter.showChar(arg);
    }
    */
    this.checkChar = function (arg) {
        console.log("checkChar:", arg);
        //check each char in word from 
        // Letter.checkChar() using recursion
    }

};

// export
module.exports = Word;