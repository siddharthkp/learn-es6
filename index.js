#! /usr/bin/env node

const tasks = require('./tasks/');
const lessons = require('./lessons/');
const helpers = require('./helpers/');
const chalk = require('chalk');
const inquirer = require('inquirer');

let startLesson = () => lessons.start();

tasks.setup().then(startLesson);
