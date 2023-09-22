import { Command, Flags } from '@oclif/core'
import { executeTestCommand } from '../util/execute-test-command'

export default class Test extends Command {
  static description = 'Execute test script in every SDK directory'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    filter: Flags.string({
      char: 'f',
      description:
        'Comma separated list of SDKs to test (e.g. "-f python,java,go,csharp,objc")',
    }),
    sequence: Flags.boolean({
      char: 's',
      description: 'Run tests in sequence',
    }),
  }

  public async run(): Promise<void> {
    const { flags } = await this.parse(Test)
    executeTestCommand({
      filterInput: flags.filter,
      sequence: flags.sequence,
      cliRoot: this.config.root,
    })
  }
}
