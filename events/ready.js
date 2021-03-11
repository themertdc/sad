const chalk = require('chalk')
const moment = require('moment')
const kanal = '742043139430285454'
const log = message => {
  
    console.log(`${chalk.magenta(moment().format('Ghost Creative'))} ${message}`)
}

module.exports = async client => {
    client.user.setPresence({activity:{name:`ghostcreative`},status: 'online'})
    log(chalk.green(`Ghost Creative`))
  }