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

module.exports = lessons;

