import { CliUx, Command, Flags } from '@oclif/core'
import { parseKonfigYaml } from '../util/parse-konfig-yaml'
import { parseFilterFlag } from '../util/parseFilterFlag'
import humanId from 'human-id'
import * as inquirer from 'inquirer'
import * as fs from 'fs-extra'
import * as path from 'path'
import { KONFIG_FOLDER_NAME } from '../util/get-konfig-folder'

interface Answers {
  sdks: string[]
  message: string
}

export default class Changeset extends Command {
  static description = 'Generate konfig changeset file'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
    '<%= config.bin %> <%= command.id %> -a',
    '<%= config.bin %> <%= command.id %> -a -m "My changeset message"',
    '<%= config.bin %> <%= command.id %> -g python',
  ]

  static flags = {
    all: Flags.boolean({
      char: 'a',
      description: 'Include all SDKs in changeset',
    }),
    message: Flags.string({ char: 'm', description: 'Changeset message' }),
    generator: Flags.string({
      char: 'g',
      name: 'generator',
      description: 'Comma-separated list of generators to add to changeset',
    }),
  }

  static args = []

  public async run(): Promise<void> {
    const { flags } = await this.parse(Changeset)
    const { parsedKonfigYaml } = parseKonfigYaml({ configDir: process.cwd() })
    const bumpType = parsedKonfigYaml.defaultChangesetBumpType
    this.log(`Using bump type: ${bumpType}`)

    const fileName = humanId({ separator: '-', capitalize: false })
    const filter = parseFilterFlag(flags.generator)

    const sdkOptions = []

    for (const [generatorName, generatorConfig] of [
      ...Object.entries(parsedKonfigYaml.generators),
      ...Object.entries(parsedKonfigYaml.additionalGenerators ?? []),
    ]) {
      if (filter !== null && !filter.includes(generatorName)) continue
      if (generatorConfig.disabled) continue
      sdkOptions.push({
        name: generatorName,
        checked: true,
        value: generatorName,
      })
    }

    const answers = await inquirer.prompt<Answers>([
      {
        name: 'sdks',
        message: 'Select SDKs to add to changeset:',
        type: 'checkbox',
        pageSize: sdkOptions.length,
        choices: sdkOptions,
        when: () => !flags.all && !filter,
        validate: (input) =>
          input.length > 0 || 'At least one SDK must be added to changeset',
      },
      {
        name: 'message',
        message: 'Changeset message:',
        type: 'input',
        when: () => !flags.message,
      },
    ])

    let sdkBumpStr = ''
    const sdks =
      flags.all || filter ? sdkOptions.map((s) => s.value) : answers.sdks
    const message = flags.message ? flags.message : answers.message
    for (const sdk of sdks) sdkBumpStr += `${sdk}: ${bumpType}\n`

    const changesetStr = `---\n${sdkBumpStr}---\n\n${message}\n`

    CliUx.ux.action.start('Generating changeset file')
    fs.ensureDirSync(path.join(process.cwd(), KONFIG_FOLDER_NAME, 'changesets'))
    fs.writeFileSync(
      path.join(
        process.cwd(),
        KONFIG_FOLDER_NAME,
        'changesets',
        `${fileName}.md`
      ),
      changesetStr
    )
    CliUx.ux.action.stop()
    this.log(`Created changeset ${fileName}.md`)
  }
}
