const readlineSync = require('readline-sync');

let pause = () => {
    readlineSync.question('Press any key to continue ...');
};

module.exports = pause;
