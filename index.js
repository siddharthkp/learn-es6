#! /usr/bin/env node

const tasks = require('./tasks/');
const lessons = require('./lessons/');
const chalk = require('chalk');
const clear = require('clear');
const inquirer = require('inquirer');

let loadLesson = () => {
    let lesson = lessons[0];
    clear();
    for (let gyan of lesson.gyan) console.log(gyan);
};

tasks.setup().then(loadLesson);
