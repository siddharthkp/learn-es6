const fs = require('fs');
let filename = __dirname + '/index-' + process.cwd().split('/').pop() + '.tmp';

let get = () => {
    try {
        let response = fs.readFileSync(filename, 'utf8');
        return parseInt(response, 10);
    } catch (err) {
        if (err.code === 'ENOENT') save(0);
        return 0;
    }
};

let save = (index) => {
    try {
        let response = fs.writeFileSync(filename, index);
    } catch (err) {
        console.log(chalk.yellow(`
            Could not create temp file.
            Your progress will not be saved
        `));
    }
};

module.exports = {get, save};
