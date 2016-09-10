let lesson = {
    title: 'Lesson 5: Default Parameters',
    transform: 'default-param',
    prettyName: 'default parameters'
};

lesson.gyan = [
    {
        type: 'text',
        value: `
You have probably wanted it for a long time.
FINALLY! You can define default values for parameters.

Defaults can be assigned to any parameter.
        `
    },
    {
        type: 'break'
    },
    {
        type: 'code',
        value: `
    function logDefaults(a = 1, b = 2, c = 3) {
        console.log({a, b, c}); // 5, 5, 3
    }

    logDefaults(5, 5);
        `
    }
];

module.exports = lesson;
