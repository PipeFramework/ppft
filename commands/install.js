const chalk = require('chalk');

function install(name) {
    console.log(chalk.green.bold(`Installation réussie de votre projet "${name}"`));
}

module.exports = install;