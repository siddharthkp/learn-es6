let lesson = {
    title: 'Lesson 3: Template strings',
    transform: 'template',
    prettyName: 'template strings'
};

lesson.gyan = [
    {
        type: 'text',
        value: `
Template strings, on the surface, feel just like string interpolation in other languages.
This is a very handy feature, especially if you find yourself concatenating strings a lot.

Instead of using single quote '' or double quote "", template strings use back-ticks \`\` .
        `
    },
    {
        type: 'break'
    },
    {
        type: 'text',
        value: `
Using the replacement syntax, \$\{\} you can evaluate blocks of code within your string.
Usually, this just for variable replacement, but complex expressions can live inside the curly braces.
        `
    },
    {
        type: 'code',
        value: `
    let piecesPerPie = 6;
    let numberOfPies = 3;

    console.log(\`There are \$\{numberOfPies\} pies, so we have \$\{piecesPerPie * numberOfPies\} pieces.\`);
        `
    },
    {
        type: 'break'
    },
    {
        type: 'text',
        value: `
These strings are treated as literals, so they are evaluated at the time of execution.
If one of the references does not exist, the code will throw just like any other block of code.

Unfortunately, there is no way to lazy evaluate these template strings. You can, however, create a function that takes data and renders a string:
        `
    },
    {
        type: 'code',
        value: `
    function renderPerson(person) { return \`
    <dl>
      <dt>First</dt> <dd>\$\{person.first\}</dd>
      <dt>Last</dt> <dd>\$\{person.last\}</dd>
    </dl>
    \`;}

    renderPerson({first: 'Brian', last: 'Genisio'});
        `
    },
    {
        type: 'text',
        value: `
Also, did you notice that you can span multiple lines with template strings?
The carriage return will be added, but if you don't want it, you can use the \ character.
        `
    }
];

module.exports = lesson;
