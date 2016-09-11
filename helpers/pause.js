const readlineSync = require('readline-sync');

let pause = () => {
    readlineSync.question('Hit enter to continue ...');
};

module.exports = pause;
