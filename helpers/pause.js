const readlineSync = require('readline-sync');

let pause = () => {
    readlineSync.keyInPause();
};

module.exports = pause;
