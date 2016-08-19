const chalk = require('chalk');

let error = (message) => {
    console.log(chalk.red(message));
    process.exit(1);
};

module.exports = error;
