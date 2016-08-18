const directory = process.cwd();
const git = require('simple-git')(directory);
let chalk;

git.silent(true);

/* isRepo
 * Check if directory is a git repo
 */

let isRepo = (callback) => {
    git.status((err, response) => {
        if (err && err.includes('Not a git repository')) callback(false);
        else callback(true);
    });
};

let checkUnsavedChanges = (callback) => {
    git.status((err, response) => {
        if (response.modified.length) {
            console.log(chalk.red(`
                You have local changes in your repository.
                Please, commit your changes or stash them before you can start learning.`));
            callback(true);
        } else callback(false);
    });
};

/* add all the files! */

let addAllFiles = (callback) => {
    git.status((err, response) => {
        git.add(response.not_added, callback);
    });
};

/* Setup
 * Get things ready for lessons
 */

let setup = (vorpal) => {
    chalk = vorpal.chalk;
    isRepo(repo => {
        if (!repo) {
            git.init();
            addAllFiles(() => {
                console.log(chalk.green('Initialized git repo'))
                console.log('all clear');
            });
        } else {
            checkUnsavedChanges(unsavedChanges => {
                if (unsavedChanges) process.exit(1);
                else console.log('all clear');
            });
        }
    });
};

module.exports = setup;
