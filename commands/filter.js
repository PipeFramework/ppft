const chalk = require('chalk');
const fs = require('fs');
const filterContent = 'module.exports = (input) => {\n\t"insert your code here";\n};'

function addFilter(name) {
    try {
        fs.writeFile(`./filters/${name}.js`, filterContent, (e) => {
            if (e) throw (e);
            console.log(chalk.green.bold(`The filter "${name}" has been added`));
        })
    } catch (error) {
        console.log(chalk.red.bold(`The filter "${name}" could not be added`, error.message));
    }
}

function deleteFilter(name) {
    try {
        fs.unlink(`./filters/${name}.js`, (e) => {
            if (e) throw (e);
            console.log(chalk.green.bold(`The filter "${name}" has been deleted`));
        });
    } catch (error) {
        console.log(chalk.red.bold(`The filter "${name}" could not be deleted`, error.message));
    }
}

module.exports = {
    addFilter,
    deleteFilter
}
