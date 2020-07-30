export = (Utils) => {
  return {
    hook_repl_command: new Utils.Hook('semo', () => {
      return {
        translate: {
          help: 'Translate words and sentense.',
          async action(input) {
            if (!input) {
              Utils.warn('keyword is required')
            } else {
              let parseInput = Utils.yParser(input)
              let words = parseInput._.join(' ')
              // @ts-ignore
              this.clearBufferedCommand()

              Utils.exec(`semo translate ${words}`)

              // @ts-ignore
              this.displayPrompt()
            }
          }
        }
      }
    })
  }
}