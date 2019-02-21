var figlet = require('figlet');
const chalk = require('chalk');
 
// console.log(chalk.blue('Hello world!'));


figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.blue(data))
});