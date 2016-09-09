#! /usr/bin/env node

const lessons = require('./lessons');
const helpers = require('./helpers');

let startLesson = () => lessons.start();

helpers.setup().then(startLesson);
