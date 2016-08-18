#! /usr/bin/env node

const vorpal = require('vorpal')();
const chalk = vorpal.chalk;
const tasks = require('./tasks/');

tasks.setup(vorpal);

vorpal.delimiter(chalk.magenta.bold('∆'));

vorpal.command('e').action(() => null );

vorpal.show();
