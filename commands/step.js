const chalk = require('chalk');

function addStep(name) {
    console.log(chalk.green.bold(`Le step "${name}" a été ajouté`));
}
function deleteStep(name) {
    console.log(chalk.red.bold(`Le step "${name}" a été supprimé`));
}

module.exports = {
    addStep,
    deleteStep
}