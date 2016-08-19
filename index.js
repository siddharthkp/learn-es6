#! /usr/bin/env node

const cli = require('vorpal')();
const tasks = require('./tasks/');
const chalk = require('chalk');

let loadLesson = () => {
    console.log('cool');
};

cli.delimiter(chalk.magenta.bold('∆'));
cli.command('e').action(() => null);
cli.show();

tasks.setup().then(loadLesson);
