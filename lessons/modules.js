let lesson = {
    title: 'Lesson 13: ES6 modules',
    transform: 'commonjs',
    prettyName: 'ES6 modules'
};

lesson.gyan = [
    {
        type: 'text',
        value: `
The goal for ECMAScript 6 modules was to create a format that both users of CommonJS and of AMD are happy with.

There are two kinds of exports:
        `
    },
    {
        type: 'break'
    },
    {
        type: 'text',
        value: `

1. Named exports (several per module)

A module can export multiple things by prefixing their declarations with the keyword export.

These exports are distinguished by their names and are called named exports.
        `
    },
    {
        type: 'code',
        value: `
    /* lib.js */

    export const sqrt = Math.sqrt;
    export function square(x) {
        return x * x;
    }
    export function diag(x, y) {
        return sqrt(square(x) + square(y));
    }

    /* main.js */

    import { square, diag } from 'lib';
       `
    },
    {
        type: 'break'
    },
    {
        type: 'text',
        value: `
2. Default exports (one per module)

Modules that only export single values are very popular in the Node.js community.

An ES6 module can pick a default export, the most important exported value.
Default exports are especially easy to import.
        `
    },
    {
        type: 'code',
        value: `
    /* myFunc.js */

    export default function () { ... };

    /* main.js */
    import myFunc from 'myFunc';
       `
    }
];

module.exports = lesson;
