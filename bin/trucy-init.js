#!/usr/bin/env node

const program = require('commander')

program
    .option('-f, --force', 'fast mode')
    .parse(process.argv)

program.force
    ? require('../lib/').downloadTemplate('trucy')
    : require('../commands/init')
