#! /usr/bin/env node

const lessons = require('./lessons');
const helpers = require('./helpers');
const chalk = require('chalk');
const inquirer = require('inquirer');

let startLesson = () => lessons.start();

helpers.setup().then(startLesson);
