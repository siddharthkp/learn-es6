const cardinal = require('cardinal');
const chalk = require('chalk');
const pause = require('./pause.js');
const clear = require('clear');

let render = (lesson) => {
    clear();
    console.log(chalk.green(lesson.title));
    for (let step of lesson.gyan) {
        if (step.type === 'text') console.log(step.value);
        else if (step.type === 'code') console.log(cardinal.highlight(step.value));
        else if (step.type === 'break') pause();
        else if (step.type === 'clear') clear();
    }
};

module.exports = render;
