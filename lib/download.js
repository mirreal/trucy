const path = require('path')
const download = require('download-git-repo')
const ora = require('ora')
const chalk = require('chalk')

const template = require('../config/template')
const copy = require('./copy')

module.exports = function(projectName, templateName = 'base') {
    const selectedTemplate = template[templateName]
    const downloadUrl = `${selectedTemplate.name}#${selectedTemplate.branch}`

    const spinner = ora('Downloading template...')
    spinner.start()

    download(downloadUrl, projectName, err => {
        spinner.stop()

        if (err) {
            console.log('\n')
            console.log(chalk.red(err))

            return copy(projectName)
        }

        console.log(chalk.green(`Success! Created ${projectName} at ${path.resolve(projectName)}`))
    })
}
