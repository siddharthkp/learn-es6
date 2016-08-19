const cardinal = require('cardinal');
const chalk = require('chalk');

module.exports = {
    gyan: [
chalk.green(`
Block Scope (let keyword)
`),
`
Up until ES6, variables (var) are always function scoped.

It doesn't matter where you define your variable -- the variable is available anywhere within the function.
This allows you to write code that you wouldn't expect to work.
`,
cardinal.highlight(`
    function fnScoped() {
        if(true) {
            var zed = 'alive'; // zed is "hoisted" to the function block
        }

        if(true) {
            console.log('zed is ' + zed); // zed is visible
        }
    }
`),

`
In ES6, the let keyword allows you to define variables within the scope of the block (block scoping).
This makes variables behave more like what you might expect.
`,
cardinal.highlight(`
    function blockScoped() {
        if(true) {
            let zed = 'alive'; // zed is not "hoisted" out of this block
        }

        console.log('zed is ' + zed); // zed is not visible
    }
`),
`
In addition to the let keyword which is block scoped, there is another new way to declare values in ES6: const.
Like most languages, const values cannot be changed at runtime. Any code which trys to do this will fail when the code is evaluated.
`,
cardinal.highlight(`
    const foo = "bar";
    console.log(foo);

    foo = "baz"; // evalutation error
`)
    ]
};
