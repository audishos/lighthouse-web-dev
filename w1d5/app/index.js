const stringManipulation = require('./stringManipulation');
const chalk = require("chalk");

// console.log(stringManipulation.camelCase("this is an example of camelcase"));

let message = "Hello " + chalk.yellow("World"); // makes "world" yellow
console.log(message);

// Nest styles of the same type even (color, underline, background)
console.log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

// ES2015 template literal
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

// Use RGB colors in terminal emulators that support it.
console.log(chalk.keyword('orange')('Yay for orange colored text!'));
console.log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
console.log(chalk.hex('#DEADED').bold('Bold gray!'));


const error = chalk.bold.red;
const warning = chalk.keyword('orange');

console.log(error('Error!'));
console.log(warning('Warning!'));

console.log(chalk.inverse('inverse'));
console.log(chalk.bgBlueBright.redBright('My eyes!!!'));