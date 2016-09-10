let lesson = {
    title: 'Lesson 11: Classes',
    transform: 'class',
    prettyName: 'class'
};

lesson.gyan = [
    {
        type: 'text',
        value: `
Classes are now first-class concepts in JavaScript.

Having a syntax for class declaration standardizes the class definition approaches.
It enables extension, super, and static capabilities in a well-defined, expected way.
        `
    },
    {
        type: 'break'
    },
    {
        type: 'text',
        value: `
Classes are mostly made up of a special "constructor" method, and any other method you may need on the class.
Prototypal inheritance will happen to new objects just like the ES5 mechanism of adding functoins to a class's prototype.
        `
    },
    {
        type: 'code',
        value: `
    class Person {
        constructor(first, last) {
            this.first = first;
            this.last = last;
        }

        toString() {
            return \`\$\{this.first\} \$\{this.last\}\`;
        }
    }
       `
    }
];

module.exports = lesson;
