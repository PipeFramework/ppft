#!/usr/bin/env node
const { program } = require('commander');

//import functions
const { addFilter, deleteFilter } = require('./commands/filter');
const { addStep, deleteStep } = require('./commands/step');
const install = require('./commands/install');

program
    .command('new <name>')
    .description('Create a project with a template')
    .action(install);

program
    .command('add_filter <name>')
    .description('Add a filter')
    .action(addFilter);

program
    .command('del_filter <name>')
    .description('Delete a filter')
    .action(deleteFilter);

program
    .command('add_step <name>')
    .description('Add a Step')
    .action(addStep);

program
    .command('del_step <name>')
    .description('Delete a Step')
    .action(deleteStep);

program.parse();