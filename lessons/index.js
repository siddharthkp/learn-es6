const clear = require('clear');
const helpers = require('../helpers');
const chalk = require('chalk');

let lessonList = [
    'intro',
    'let-const',
    /*'arrow',
    'for-of',
    'template',
    'arg-spread',
    'obj-method',
    'obj-shorthand',
    'no-strict',
    'commonjs',
    'default-param',
    'class',
    'includes'
    */
];

let lessons = [];
for (let name of lessonList) lessons.push (require('./' + name));

let transform = (lesson) => {
    clear();
    console.log(chalk.green(lesson.title));

    console.log();
    console.log(`Let's convert ${chalk.red('var')} to ${chalk.blue('let/const')}`);
    console.log();
    helpers.pause();
    console.log();

    if (lesson.transform) helpers.transform(lesson.transform);

    require('child_process').execSync('git diff --stat', {stdio:[0,1,2]});

    console.log();
    console.log(`Done! Use ${chalk.yellow('git diff')} to see the changes`);
    console.log(`You can commit these changes or you can stash/checkout them.`);
    console.log();
    console.log(`You can continue your lesson by typing ${chalk.yellow('learn')}`);
    console.log();
};

let index = 0;
let start = () => {
    let lesson = lessons[index];
    clear();
    helpers.render(lesson);
    helpers.pause();
    if (lesson.transform) transform(lesson);
    else {
        index++;
        start();
    }
};

module.exports = {
    start
};

