const chalk = require('chalk');

let error = (message) => {
    console.log(chalk.red(message));
    // TODO: This comment is for debugging
    // process.exit(1);
};

module.exports = error;
