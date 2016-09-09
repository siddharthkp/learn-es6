const clear = require('clear');
const helpers = require('../helpers');

let lessonList = [
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

let index = 0;
let start = () => {
    clear();
    helpers.render(lessons[index]);
};

module.exports = {
    start
};

