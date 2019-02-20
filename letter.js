var Letter = function (underlyingChar) {
    // either a char or blank placeholder
    this.underlyingChar = underlyingChar; 
    this.guessedChar = false;
    this.showChar = function(arg) {
        // if correct then show
        if (this.guessedChar) {
            return this.underlyingChar;
        }
        else {
            return "_";
        }
    };
    this.checkChar = function(arg) {
        // if the guessed char === wordChar
        if (arg) {
            this.guessedChar = true;
        }
    }


};

// export
module.exports = Letter;