const cardinal = require('cardinal');
const chalk = require('chalk');
const inquirer = require('inquirer');
const readlineSync = require('readline-sync');

let render = (lesson) => {
    console.log(chalk.green(lesson.title));
    for (let step of lesson.gyan) {
        if (step.type === 'text') console.log(step.value);
        else if (step.type === 'code') console.log(cardinal.highlight(step.value));
        else if (step.type === 'break') readlineSync.question('Press any key to continue ...');
    }
};

module.exports = render;
