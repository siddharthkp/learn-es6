#! /usr/bin/env node

const cli = require('vorpal')();
const tasks = require('./tasks/');
const lessons = require('./lessons/');
const chalk = require('chalk');

let loadLesson = () => {
    console.log(lessons);
};

cli.delimiter(chalk.magenta.bold('∆'));
cli.command('e').action(() => null);
cli.show();

tasks.setup().then(loadLesson);
