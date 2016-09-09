let lesson = {
    title: 'Lesson 2: Arrow Functions',
    transform: 'arrow',
    prettyName: 'arrow functions'
};

lesson.gyan = [
    {
        type: 'text',
        value: `
Arrow Functions are a shorthand for anonymous functions in JavaScript.
For the most part, they behave just like normal, anonymous functions but with a lighter syntax.
        `
    },
    {
        type: 'break'
    },
    {
        type: 'text',
        value: `
A standard function can be described as
        `
    },
    {
        type: 'code',
        value: `
    var myFunction = function(arg) {
        return arg.toUpperCase();
    };
        `
    },
    {
        type: 'break'
    },
    {
        type: 'text',
        value: `
With Arrow Functions, you can write the same thing:
        `
    },
    {
        type: 'code',
        value: `
    var myFunction = (arg) => arg.toUpperCase();
        `
    },
    {
        type: 'break'
    },
    {
        type: 'text',
        value: `
Arrow Functions are particularly useful when passing anonymous functions into other functions.
For instance, the syntax for filtering and mapping values becomes much more terse.
        `
    },
    {
        type: 'code',
        value: `
    var values = [1, 2, 3, 4, 5, 6];

    var even = values.filter(x => x % 2 === 0);
    var evenSquares = even.map(x => x * x);
        `
    }
];

module.exports = lesson;
