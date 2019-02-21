// import Letter that was exported from letter.js
var Letter = require("./letter");


var Word = function () {
    // array of letter OBJECTS of current word
    this.wordObjects = [];

    this.createObjects = word => {
        var tempArray = word.split("");
        this.wordObjects = tempArray.map(item => {
            return new Letter(item);
            // console.log(item.underlyingChar);
            // return;
        });
        // console.log(tempArray[i]);
        // console.log(this.wordObjects[i].underlyingChar, this.wordObjects.guessChar);
        // console.log("wordObjects: ", this.wordObjects);
        // return;
    }

    // function that returns a string representing the word
    this.getString = function () {
        // call function on each letter object that displays 
        // a char or underscore and concatenate them together.
        // for each :
        // this.wordObjects.forEach(function (arg) {
        //     displayWordArray.push(arg.showChar());
        // });
        // return displayWordArray.join(" ").toUpperCase();
        return this.wordObjects.map(item => item.showChar()).join(" ").toUpperCase();

        // use .map()
        // var word = this.wordObjects.map(Letter.showChar());
        // return word.join(" ").toUpperCase();

    }
    // takes char argument and calls guess function on each letter
    this.guessChar = function (char) {
        Letter.checkChar(char);
    }
};

// export
module.exports = Word;
testWord = new Word();
testWord.createObjects("test");

// console.log(testWord.wordObjects);
// console.log(testWord.map(item => item.showChar().join(" ").toUpperCase()));
console.log(testWord.wordObjects.map(item => {
    return item.showChar()
}).join(" ").toUpperCase()
);