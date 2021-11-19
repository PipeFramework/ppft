const chalk = require('chalk');
const clone = require('git-clone');
const { exec } = require("child_process");

const filterContent = 'module.exports = (input) => {\n\t"insert your code here";\n};';
const configContent = `{ "steps": { "3": { "filter": "test.js", "params": [], "next": "5" } } }`;

function install(name) {
    try {
        clone('https://github.com/PipeFramework/core.git', `./${name}`, (e)=>{
            if(e) {
                console.log(chalk.red.bold('The directory already exist'));
            } else {
                console.log(chalk.green.bold(`The projet "${name}" has been successfully installed`));
                console.log(chalk.yellow('===Installation Guide==='));
                console.log(chalk.yellow('To start the projet move to the directory \nthen use the command "npm start"'));
                console.log(chalk.yellow('========================'));
            }
            })
        exec(`npm i --prefix ./${name}`, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
        });

    } catch (error) {
        console.log(chalk.red.bold(`The filter "${name}" could not be added`, error.message));
    }

}

module.exports = install;