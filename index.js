#!/usr/bin/env node

import { Command } from 'commander/esm.mjs'
import { logger, require } from './global.js'
import createProject from './commands/create.js'
import viewList from './commands/list.js'
import addTemplate from './commands/add.js'
import removeTemplate from './commands/remove.js'

const program = new Command();

program.version(`tm ${require('./package.json').version}`).usage('<command> [options]')

program
  .command('create <name>')
  .description('Create a template project directory')
  // .option('-c', 'Clone the template to project directory')
  .action(createProject)

program
  .command('list')
  .alias('ls')
  .description('View the template list')
  .action(viewList)

program
  .command('add <name>')
  .description('add a template into the template list')
  .action(addTemplate)


program
  .command('remove <name>')
  .alias('rm')
  .description('remove a template from the template list')
  .action(removeTemplate)

program.on('command:*', ([cmd]) => {
  program.outputHelp()
  logger.error(`\nUnknown command ${cmd}.\n`)
  process.exitCode = 1
})



program.parse()