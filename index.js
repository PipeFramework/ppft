#!/usr/bin/env node
const { program } = require('commander');

//import functions
const filter = require('./commands/filter');
const step = require('./commands/step');
const install = require('./commands/instal');

program
    .command('new')
    .description('Create a project with a template')
    .action(install);

program
    .command('add_filter <name>')
    .description('Add a filter')
    .action(filter);

program
    .command('del_filter <name>')
    .description('Delete a filter')
    .action(filter);

program
    .command('add_step <name>')
    .description('Add a Step')
    .action(step);

program
    .command('del_step <name>')
    .description('Delete a Step')
    .action(step);

program.parse();