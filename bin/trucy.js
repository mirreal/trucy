#!/usr/bin/env node

const program = require('commander')
const pkg = require('../package.json')
// const { downloadTemplate } = require('../lib/')

// program
//     .version(pkg.version)
//     .usage('[options] <project-name>')
//     .arguments('<project-name>')
//     .action(name => {
//         downloadTemplate(name)
//     })

program
    .version(pkg.version)
    .command('init', 'initialze a project')


program.parse(process.argv)

// if (!program.args.length) {
//     program.help()
// }
