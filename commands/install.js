const chalk = require('chalk');

function install(name) {
    console.log(chalk.green.bold(`Le projet "${name}" a été installé avec succès`));
}

module.exports = install;