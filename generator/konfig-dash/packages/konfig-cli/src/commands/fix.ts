import { Command, Flags } from '@oclif/core'
import { executeFixCommand } from '../util/execute-fix-command'

export default class Fix extends Command {
  static description = `Tool for automatically fixing an OpenAPI Specification.`

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    format: Flags.boolean({
      name: 'format',
      char: 'f',
      description: 'Formats input specification',
    }),
    specInputPath: Flags.file({
      name: 'specInputPath',
      char: 'i',
      exists: true,
      description: 'Path to input OpenAPI Specification',
    }),
    spec: Flags.file({
      name: 'spec',
      char: 's',
      exists: true,
      description: 'Path to output OpenAPI Specification',
    }),
    auto: Flags.boolean({
      name: 'auto',
      char: 'a',
      allowNo: true,
      default: true,
      description: 'Automatically generate names if asked',
    }),
    konfigDir: Flags.directory({
      name: 'Konfig Directory',
      char: 'k',
      description: 'Directory containing konfig.yaml',
      exists: true,
    }),
    skipMissingResponseDescriptionFix: Flags.boolean({
      name: 'skip missing response description fix',
      default: true,
      allowNo: true,
      description: 'Ignores fixing a missing description in response schema',
    }),
    skipListUsageSecurity: Flags.boolean({
      name: 'skip list usage security',
      description: 'Ignores fixing list usage of security',
      default: true,
      allowNo: true,
    }),
    alwaysYes: Flags.boolean({
      name: 'alwaysYes',
      char: 'Y',
      allowNo: true,
      default: true,
      description: 'Always confirm with "Yes"("Y") when asked',
    }),
  }

  public async run(): Promise<void> {
    const { flags } = await this.parse(Fix)
    await executeFixCommand(flags)
  }
}
