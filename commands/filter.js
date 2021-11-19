const chalk = require('chalk');

function addFilter(name) {
    console.log(chalk.green.bold(`Le filtre "${name}" a été ajouté`));
}
function deleteFilter(name) {
    console.log(chalk.red.bold(`Le filtre "${name}" a été supprimé`));
}

module.exports = {
    addFilter,
    deleteFilter
}
