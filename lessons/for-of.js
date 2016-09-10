let lesson = {
    title: 'Lesson 3: for-of',
    transform: 'for-of',
    experimental: true,
    prettyName: 'for-of'
};

lesson.gyan = [
    {
        type: 'text',
        value: `
How do you loop over the elements of an array?
        `
    },
    {
        type: 'code',
        value: `
    for (var i = 0; i < fruits.length; i++) {
        var fruit = fruits[i];
        console.log(fruit);
    }
        `
    },
    {
        type: 'break'
    },
    {
        type: 'text',
        value: `
As you see, the syntax is too verbose.

That's where for-in comes in handy.
        `
    },
    {
        type: 'code',
        value: `
    for (var i in fruits) {
        var fruit = fruits[i];
        console.log(fruit);
    }
       `
    },
    {
        type: 'break'
    },
    {
        type: 'text',
        value: `
But, this is a bad idea for several reasons:

1. The values assigned to index in this code are the strings "0", "1", "2" and so on, not actual numbers.
Since you probably don't want string arithmetic ("2" + 1 == "21"), this is inconvenient at best.

2. Astonishingly, in some circumstances, this code can loop over the array elements in an arbitrary order.
        `
    },
    {
        type: 'break'
    },
    {
        type: 'clear'
    },
    {
        type: 'text',
        value: `
for-of to the rescue!

The principal is the same : run across any type of iterable object.

But,
        `
    },
    {
        type: 'break'
    },
    {
        type: 'text',
        value: `

1. This is the most concise, direct syntax yet for looping through array elements

2. It avoids all the pitfalls of for-in

3. Unlike forEach(), it works with break, continue, and return
        `
    },
    {
        type: 'code',
        value: `
    for (var fruit of fruits) {
        console.log(fruit);
    }
       `
    },
    {
        type: 'break'
    },
    {
        type: 'text',
        value: `
In a nutshell,

for-of comes to address for-in loop gaps and allow a simplified iteration over iterable objects such as array, string, etc.
        `
    }
];

module.exports = lesson;
