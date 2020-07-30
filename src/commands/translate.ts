import fanyi from 'fanyi'

export const disabled = false // Set to true to disable this command temporarily
// export const plugin = '' // Set this for importing plugin config
export const command = 'translate [words..]'
export const desc = 'Translate words and sentense'
// export const aliases = ''
// export const middleware = (argv) => {}

export const builder = function (yargs: any) {
  // yargs.option('option', { default, describe, alias })
  // yargs.commandDir('translate')
}

export const handler = async function (argv: any) {
  fanyi(argv.words.join(' '))
}
