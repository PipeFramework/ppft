const chalk = require('chalk');
const fs = require('fs');

function addFilter(name) {
    try {
        fs.writeFile(name, )

        console.log(chalk.green.bold(`Le filtre "${name}" a été ajouté`));
    } catch (error) {
        console.log(chalk.red.bold(`Le filtre "${name}" n'a pas pu être crée à cause d'une erreur`));    
    }
}
function deleteFilter(name) {
    console.log(chalk.green.bold(`Le filtre "${name}" a été supprimé`));
}

module.exports = {
    addFilter,
    deleteFilter
}
