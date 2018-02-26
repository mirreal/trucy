const inquirer = require('inquirer')
const { downloadTemplate } = require('../lib/')

const question = [
    {
        type: 'input',
        name: 'name',
        message: 'setup project name',
        default: 'trucy'
    },
    {
        type: 'list',
        name: 'template',
        message: 'choose project template',
        choices: ['base', 'react'],
        default: 'base'
    }
]

module.exports = inquirer.prompt(question).then(({
    name,
    template
}) => {
    downloadTemplate(name, template)
})
