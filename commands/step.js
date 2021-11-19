const chalk = require('chalk');
const fs = require('fs');

function addStep(id, name, next) {
    try {
        //Read the content of the file
        let text = fs.readFileSync(`config-filters.json`, 'utf-8', (e)=> { if (e) throw (e); });
        let obj = JSON.parse(text);

        // add the new content
        obj.steps[id] = { filter: `${name}.js`, params: [] }
        if (next !== undefined) obj.steps[id].next = next;

        //Write the new content to the config file
        fs.writeFileSync(`config-filters.json`, JSON.stringify(obj, null, 4), 'utf-8', (e)=>{if(e)throw(e)});

        console.log(chalk.green.bold(`The step "${name}" has been added`));
    } catch (error) {
        console.log(chalk.red.bold(`The step "${name}" could not be added`, error.message));
    }
}
function deleteStep(id) {
    try {
        //Read the content of the file
        let text = fs.readFileSync(`config-filters.json`, 'utf-8', (e)=> { if (e) throw (e); });
        let obj = JSON.parse(text);

        // remove the specified step
        delete obj.steps[id]

        //Write the new content to the config file
        fs.writeFileSync(`config-filters.json`, JSON.stringify(obj, null, 4), 'utf-8', (e)=>{if(e)throw(e)});

        console.log(chalk.green.bold(`The step "${id}" has been deleted`));
    } catch (error) {
        console.log(chalk.red.bold(`The step "${name}" could not be deleted`, error.message));
    }
}

module.exports = {
    addStep,
    deleteStep
}