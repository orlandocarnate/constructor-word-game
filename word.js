// import Letter that was exported from letter.js
var Letter = require("./letter");

var Word = function () {
    // array of letter OBJECTS of current word
    this.wordObjects = [];

    this.createObjects = function (word) {
        var tempArray = word.split("");
        this.wordObjects = tempArray.map(item => {
            return new Letter(item);
        });
    }

    // function that returns a string representing the word
    this.getString = function () {
        // use .map() and then .join to return a string
        return this.wordObjects.map(item => item.showChar())
            .join(" ").toUpperCase();
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
// console.log(testWord.wordObjects);
// console.log(testWord.map(item => item.showChar().join(" ").toUpperCase()));
// console.log(testWord.wordObjects.map(item => {
//     return item.showChar()
// }).join(" ").toUpperCase()
// );