# constructor-word-game
A Word Guess command-line game using constructor functions using Node.js with Inquirer or Prompt NPMs installed.

## Programmer's Notes
* using `.forEach()` for array of objects:
```
function displayStatus(argArray) {
    var displayWordArray = [];
    argArray.wordObjects.forEach(function(arg) {
        displayWordArray.push(arg.showChar());
        console.log(arg.showChar());
    });
...
}
```
## Special Characters [w3schools](https://www.w3schools.com/js/js_strings.asp)
* `\t` addes a horizontal tab to a string.
* `console.log('\033[2J');` clears the console.
* 
## Links
* [Text to ASCII Art Generator](http://www.patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20) Here is an ASCII Word Art Generator.
    * to show `\` you need to do double backslash, `\\`