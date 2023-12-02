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
    noMockServer: Flags.boolean({
      description: 'Disable mock server from running',
      char: 'x',
      default: false,
    }),
    mockServerPort: Flags.integer({
      description: 'Port to run mock server on',
      char: 'p',
      default: 4010,
    }),
    useDynamicResponseConfiguration: Flags.boolean({
      description:
        'Use dynamic response configuration when mocking API for testing',
      char: 'd',
    }),
  }

  public async run(): Promise<void> {
    const { flags } = await this.parse(Test)
    await executeTestCommand({
      filterInput: flags.filter,
      sequence: flags.sequence,
      cliRoot: this.config.root,
      noMockServer: flags.noMockServer,
      mockServerPort: flags.mockServerPort,
      useDynamicResponseConfiguration: flags.useDynamicResponseConfiguration,
    })
  }
}
