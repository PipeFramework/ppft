const chalk = require('chalk');

function filter(name) {
    console.log(chalk.green.bold(`Le filtre "${name}" ajouté`));
}

module.exports = filter;