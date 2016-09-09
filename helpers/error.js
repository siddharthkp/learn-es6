const chalk = require('chalk');

let error = (message) => {
    // TODO: This comment is for debugging
    console.log(chalk.red(message));
    // process.exit(1);
};

module.exports = error;
