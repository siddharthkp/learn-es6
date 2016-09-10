let lesson = {
    title: 'Lesson 4: Property Shorthand',
    transform: 'obj-shorthand',
    prettyName: 'property shorthand'
};

lesson.gyan = [
    {
        type: 'text',
        value: `
This feature is really just a shorthand notation for what you are used to writing for object literals.
When the variable name is the same as the object key, you can use a shorthand notation.
        `
    },
    {
        type: 'break'
    },
    {
        type: 'text',
        value: `
In other words, {first: first, last: last} can be written as {first, last}. Shorthand notation can be mixed with traditional notation: {first, last, isParent: true}.
        `
    },
    {
        type: 'code',
        value: `
    function makeParent(first, last) {
            return {first, last, isParent: true};
    }

    console.log(makeParent('Darth', 'Vader'));
       `
    }
];

module.exports = lesson;
