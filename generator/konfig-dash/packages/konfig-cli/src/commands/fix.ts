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
    ci: Flags.boolean({
      name: 'ci',
      default: false,
      description:
        'Run in CI mode: answers default for all prompts if applicable',
    }),
    useAIForOperationId: Flags.boolean({
      name: 'useAIForOperationId',
      char: 'A',
      default: false,
      description:
        'Use openAI API to generate operationIds based on rules defined here: https://konfigthis.com/docs/tutorials/naming-operation-ids. Requires OPENAI_API_KEY to be set in environment.',
    }),
    progressYamlOverridePath: Flags.file({
      name: 'progressYamlOverridePath',
      char: 'p',
      description: 'Override path to read and write progress.yaml file.',
    }),
    noInput: Flags.boolean({
      name: 'noInput',
      char: 'n',
      default: false,
      description:
        'Run in a mode which requires no input whatsoever from the user. \
        This flag will enable --alwaysYes, --auto, --ci, and --useAIForOperationId flags; \
        any other rules which attempt to prompt for input will be ignored.',
    }),
  }

  public async run(): Promise<void> {
    const { flags } = await this.parse(Fix)
    await executeFixCommand(flags)
  }
}
