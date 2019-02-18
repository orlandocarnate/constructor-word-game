// import Letter that was exported from letter.js
var Letter = require("./letter");


var Word = function () {
    // array of letter OBJECTS of current word
    this.wordObjects = [];

    this.createObjects = function (word) {
        var tempArray = word.split("");
        for (var i = 0; i < tempArray.length; i++) {
            this.wordObjects[i] = new Letter(tempArray[i]);
            // console.log(tempArray[i]);
            // console.log(this.wordObjects[i].underlyingChar, this.wordObjects.guessChar);
        }
        // console.log("wordObjects: ", this.wordObjects);
        return;
    }

    // function that returns a string representing the word
    this.showString = function () {
        // call function on each letter object that displays 
        // a char or underscore and concatenate them together.
        // for each Letter.showChar();

    }
    // takes char argument and calls guess function on each letter
    this.guessChar = function (char) {
        Letter.checkChar(char);
    }
};

// export
module.exports = Word;
// testWord = new Word();
// testWord.createObjects("test");