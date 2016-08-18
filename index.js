#! /usr/bin/env node

const vorpal = require('vorpal')();
const chalk = vorpal.chalk;
const tasks = require('./tasks/');

var what = tasks.setup(vorpal);
what.then(() => {
    console.log('cool');
});

vorpal.delimiter(chalk.magenta.bold('∆'));

vorpal.command('e').action(() => null );

vorpal.show();
