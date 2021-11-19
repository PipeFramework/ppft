const chalk = require('chalk');
const fs = require('fs');

function addStep(name) {
    try {
        let text = fs.readFileSync(`config-filters.json`, 'utf-8', (e)=> { if (e) throw (e); });
        let obj = JSON.parse(text);
        obj.steps[3] = { filter: `${name}.js`, params: [], next: '2'}

        console.log(obj);


        console.log(chalk.green.bold(`Le step "${name}" a été ajouté`));
    } catch (error) {
        console.log(chalk.red.bold(`Le step "${name}" n'a pas pu être ajouté à cause d'une erreur`));    
    }
}
function deleteStep(name) {
    console.log(chalk.red.bold(`Le step "${name}" a été supprimé`));
}

module.exports = {
    addStep,
    deleteStep
}