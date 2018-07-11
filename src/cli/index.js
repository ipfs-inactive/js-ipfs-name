'use strict'

const {
  print
} = require('./utils')

const command = {
  command: 'name <command>',

  description: 'Publish and resolve IPNS names',

  builder (yargs) {
    return yargs.commandDir('.')
  },

  handler (argv) {
    print('Type `jsipfs name --help` for more instructions')
  }
}

module.exports = (yargs) => {
  return yargs
    .command(command)
}
