# constructor-word-game
A Word Guess command-line game using constructor functions using Node.js with Inquirer or Prompt NPMs installed.

# NPM Modules Used
* [Inquirer](https://www.npmjs.com/package/inquirer) A collection of common interactive command line user interfaces.
* [Figlet](https://www.npmjs.com/package/figlet) for creating FIGfonts or ASCII art [Check online demo](http://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20)
* [Chalk](https://www.npmjs.com/package/chalk) adds color to the console.

## Programmer's Notes

* .every() [w3schools](https://www.w3schools.com/jsref/jsref_every.asp)
    * If every word letter object is *TRUE* then you win.
    EX:
        `array.object.every(true);`

        ```
        // check if player got all the letters
        if (currentWord.wordObjects.every(function(element) {
            return element.guessedChar;
        })) {
            game.youWon();
            };
        ```

...

* using `.forEach()` for array of objects:
```
function displayStatus(argArray) {
    var displayWordArray = [];      
    argArray.wordObjects.forEach(function(arg) {
        displayWordArray.push(arg.showChar());
        console.log(arg.showChar());
    });
}
```
### Other higher order methods to try:
* .map(), .filter(), .find(), .some(), .every(), .findIndex()

## Other methods to try:

* `%s` string formatting. Ex: `console.log("%s was born last year", (name))`


## Special Characters [w3schools](https://www.w3schools.com/js/js_strings.asp)
* `\t` addes a horizontal tab to a string.
* `console.log('\033[2J');` clears the console.
* 
## Links
* [Text to ASCII Art Generator](http://www.patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20) Here is an ASCII Word Art Generator.
    * to show `\` you need to do double backslash, `\\`