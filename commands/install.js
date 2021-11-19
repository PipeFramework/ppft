const chalk = require('chalk');
const clone = require('git-clone');
const { exec } = require("child_process");

const filterContent = 'module.exports = (input) => {\n\t"insert your code here";\n};';
const configContent = `{ "steps": { "3": { "filter": "test.js", "params": [], "next": "5" } } }`;

function install(name) {
    try {
        clone('https://github.com/PipeFramework/core.git', `./${name}`, (e)=>{if(e)throw(e)})
        console.log(`cd ${process.cwd()}/${name}`);
        exec(`npm i --prefix ./${name}`, (error, stdout, stderr) => {
            if (error) {
                console.log(process.cwd);
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });

    } catch (error) {
        console.log(chalk.red.bold(`The project "${name}" could not be installed`, error.message));
    }

    console.log(chalk.green.bold(`The projet "${name}" has been successfully installed`));
}

module.exports = install;