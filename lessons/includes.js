let lesson = {
    title: 'Lesson 12: Includes',
    transform: 'includes',
    prettyName: 'includes'
};

lesson.gyan = [
    {
        type: 'text',
        value: `
Since every application deals with arrays, it's a common task to verify if an element exists within a collection.

In ES5 the usual solution was to use Array.prototype.indexOf(element, [fromIndex]) method and verify the returned value to be different than -1,
which indicates the missing element.
        `
    },
    {
        type: 'break'
    },
    {
        type: 'text',
        value: `
Such verification is using a side effect of the .indexOf() method.
This returns the index of an element in array, and simply -1 when its not found.
        `
    },
    {
        type: 'code',
        value: `
    let months = ['January', 'March', 'July'];

    months.indexOf('March') !== -1;  // true
    months.indexOf('August') !== -1; // false
       `
    },
    {
        type: 'break'
    },
    {
        type: 'text',
        value: `
ECMAScript 2016 introduces a new method Array.prototype.includes(element, [fromIndex]).

It returns a boolean that indicates the existence of element in array.
        `
    },
    {
        type: 'code',
        value: `
    let months = ['January', 'March', 'July'];

    months.includes('March');  // true
    months.includes('August'); // false
       `
    }
];

module.exports = lesson;
