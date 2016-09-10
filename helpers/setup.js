const directory = process.cwd();

const git = require('simple-git')(directory);
const series = require('run-series');
const chalk = require('chalk');
const argv = require('yargs').argv;

git.silent(true);

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
    git.status((err) => {
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
            if (argv.clean) {
                git.checkout('.');
            } else {
                console.log(chalk.red(`
    You have local changes in your repository.
    This will interfere with the lesson.

    Please commit your changes or stash them and try again.

    You can also use ${chalk.yellow('es6 --clean')} if you want to remove local changes.
                `));
                process.exit();
            }
            // TODO: This callback is for debugging
            callback();
        } else callback();
    });
};

/* Setup
 *
 * Get things ready for lessons
 */

let setup = () => new Promise((resolve) => series([
    setupRepo,
    handleUnsavedChanges,
    resolve
]));

module.exports = setup;
