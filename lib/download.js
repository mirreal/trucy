const path = require('path')
const download = require('download-git-repo')
const ora = require('ora')
const chalk = require('chalk')

const template = require('./template')
const copy = require('./copy')

module.exports = function(projectName) {
    const downloadUrl = `${template.name}#${template.branch}`

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
