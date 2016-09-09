const syncExec = require('sync-exec');
const lebab = require('lebab');
const fs = require('fs');
const chalk = require('chalk');
const readlineSync = require('readline-sync');

let getFiles = () => {
    let command = 'git ls-files | grep .js$';
    let response = syncExec(command).stdout;
    let files = response.split('\n');
    files.pop(); // last element is always ''
    return files;
};

let transform = (type) => {
    let files = getFiles();
    for (let file of files) {
        try {
            let content = fs.readFileSync(file, 'utf8');
            let {code, warnings} = lebab.transform(content, [type]);
            fs.writeFileSync(file, code, 'utf8');
        } catch (err) {
            console.log(err);
            console.log(chalk.yellow(`Could not transform ${file}, ignoring it.`));
        }
    }
};

module.exports = transform;
