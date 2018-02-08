const path = require('path')
const chalk = require('chalk')
const ncp = require('ncp').ncp

ncp.limit = 36

const source = path.resolve(__dirname, '../templates/base/')

module.exports = function(projectName) {
    console.log('Start copy local template...')

    ncp(source, projectName, err => {
        if (err) {
            console.log('\n')
            return console.log(chalk.red(err))
        }

        console.log(chalk.green(`Success! Created ${projectName} at ${path.resolve(projectName)}`))
    })
}
