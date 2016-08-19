#! /usr/bin/env node

const vorpal = require('vorpal')();
const tasks = require('./tasks/');
const chalk = require('chalk');

var what = tasks.setup(vorpal);
what.then(() => {
    console.log('cool');
});

vorpal.delimiter(chalk.magenta.bold('∆'));

vorpal.command('e').action(() => null );

vorpal.show();
