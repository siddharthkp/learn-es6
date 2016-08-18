const series = require('run-series');
const directory = process.cwd();
const git = require('simple-git')(directory);
git.silent(true);

let chalk;


/* initRepo
 * git init and add all the files!
 */

let initRepo = (callback) => {
    git.init();
    git.status((err, response) => git.add(response.not_added, callback));
};

/* Setup repo
 *
 * Check if directory is a repo
 * If it isn't, call init Repo
 */

let setupRepo = (callback) => {
    git.status((err, response) => {
        if (err && err.includes('Not a git repository')) initRepo(callback);
        else callback();
    });
};

/* handleUnsavedChanges
 *
 * If there are unsaved changes, quit.
 */

let handleUnsavedChanges = (callback) => {
    git.status((err, response) => {
        if (response.modified.length) {
            console.log(chalk.red(`
                You have local changes in your repository.
                Please, commit your changes or stash them before you can start learning.`));
            process.exit();
        } else callback();
    });
};

/* Setup
 *
 * Get things ready for lessons
 */

let setup = (vorpal) => {
    chalk = vorpal.chalk;
    return new Promise((resolve) => series([setupRepo, handleUnsavedChanges, () => resolve()]));
};

module.exports = setup;
