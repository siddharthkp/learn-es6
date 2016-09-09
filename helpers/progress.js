const fs = require('fs');

let get = () => {
    try {
        let response = fs.readFileSync(__dirname + '/learn-index.tmp', 'utf8');
        return parseInt(response, 10);
    } catch (err) {
        if (err.code === 'ENOENT') save(0);
        return 0;
    }
};

let save = (index) => {
    try {
        let response = fs.writeFileSync(__dirname + '/learn-index.tmp', index);
    } catch (err) {
        console.log(chalk.yellow(`
            Could not create temp file.
            Your progress will not be saved
        `));
    }
};

module.exports = {get, save};
