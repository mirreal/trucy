const path = require('path')
const download = require('download-git-repo')
const ora = require('ora')
const chalk = require('chalk')

const template = {
    name: 'trucyx/base-template',
    branch: 'master'
}

module.exports = function(projectName) {
    const downloadUrl = `${template.name}#${template.branch}`
    const projectPath = `./${projectName}`

    const spinner = ora('Downloading template...')
    spinner.start()

    download(downloadUrl, projectPath, err => {
        if (err) {
            console.log('\n')
            console.log(chalk.red(err))
            process.exit()
        }

        spinner.stop()
        console.log(chalk.green(`Success! Created ${projectName} at ${path.resolve(projectPath)}`))
    })
}
