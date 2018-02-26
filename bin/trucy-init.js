#!/usr/bin/env node

const program = require('commander')
const { downloadTemplate } = require('../lib/')


program
    .option('-f, --force', 'fast mode')
    .parse(process.argv)

program.force
    ? downloadTemplate('trucy')
    : require('../commands/init')
