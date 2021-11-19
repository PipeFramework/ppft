const chalk = require('chalk');

function addStep(name) {
    console.log(chalk.green.bold(`The step "${name}" has been added`));
}
function deleteStep(name) {
    console.log(chalk.red.bold(`The step "${name}" has been deleted`));
}

module.exports = {
    addStep,
    deleteStep
}