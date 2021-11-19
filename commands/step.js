const chalk = require('chalk');
const fs = require('fs');

function addStep(name) {
    try {
        let text = fs.readFileSync(`config-filters.json`, 'utf-8', (e)=> { if (e) throw (e); });
        let obj = JSON.parse(text);
        obj.steps[3] = { filter: `${name}.js`, params: [], next: '2'}

        console.log(obj);


        console.log(chalk.green.bold(`The step "${name}" has been added`));
    } catch (error) {
        console.log(chalk.red.bold(`The step "${name}" could not be added`, error.message));
    }
}
function deleteStep(name) {
    console.log(chalk.red.bold(`The step "${name}" has been deleted`));
}

module.exports = {
    addStep,
    deleteStep
}