const chalk = require('chalk');

function install(name) {
    console.log(chalk.green.bold(`The projet "${name}" has been successfully installed`));
}

module.exports = install;