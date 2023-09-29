import { Command, Flags } from '@oclif/core'
import { parseFilterFlag } from '../util/parseFilterFlag'
import { parseKonfigYaml } from '../util/parse-konfig-yaml'
import * as fs from 'fs'
import { KonfigYamlGeneratorNames, parseSpec } from 'konfig-lib'
import {
  generatorNameAsDisplayName,
  getPublishedPackageUrl,
} from '../util/generate-readme'
import clipboard from 'clipboardy'

export default class SlackMsg extends Command {
  static description = 'Generates a slack message '

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    generator: Flags.string({
      name: 'generator',
      char: 'g',
      exclusive: ['all'],
    }),
    all: Flags.boolean({
      name: 'all',
      char: 'a',
      description: 'Specify all generators',
      exclusive: ['generator'],
    }),
  }

  static args = [{ name: 'file' }]

  public async run(): Promise<void> {
    const { flags } = await this.parse(SlackMsg)
    const { generators, parsedKonfigYaml, additionalGenerators } =
      parseKonfigYaml({
        configDir: process.cwd(),
      })
    if (flags.generator === undefined)
      flags.generator = [
        ...Object.keys(generators),
        ...(additionalGenerators ? Object.keys(additionalGenerators) : []),
      ].join(',')
    const filteredGenerators = parseFilterFlag(flags.generator)
    if (filteredGenerators === null)
      this.error('Either -g or -a should have been specified')

    const specString = fs.readFileSync(parsedKonfigYaml.specPath, 'utf-8')
    const { spec } = await parseSpec(specString)
    const title = spec.info.title

    const generatorConfigs = filteredGenerators
      .map((generator) => {
        if (additionalGenerators && generator in additionalGenerators) {
          const generatorConfig = additionalGenerators[generator]
          if (generatorConfig === undefined)
            throw Error('Generator config undefined')
          return {
            generatorName: additionalGenerators[generator].generator,
            generatorConfig,
          }
        }

        const generatorConfig =
          generators[generator as KonfigYamlGeneratorNames]
        if (generatorConfig === undefined)
          throw Error('Generator config undefined')
        return {
          generatorName: generator,
          generatorConfig,
        }
      })
      .filter(({ generatorConfig }) => {
        return !generatorConfig?.disabled
      })

    const firstLine = `@here ${title}'s ${generatorConfigs
      .map(({ generatorConfig }) =>
        generatorNameAsDisplayName({
          generatorConfig,
        })
      )
      .join(', ')} ${generatorConfigs.length > 1 ? 'SDKs' : 'SDK'} ${
      generatorConfigs.length > 1 ? 'have' : 'has'
    } been published :tada:`

    const linksToSdks = (
      await Promise.all(
        generatorConfigs.map(async ({ generatorName, generatorConfig }) => {
          if (generatorConfig === undefined)
            this.error('Error: generator config undefined')
          const pkg = await getPublishedPackageUrl({
            generatorName,
            generatorConfig,
            konfigYaml: parsedKonfigYaml,
          })
          const version: string = generatorConfig.version
          return `- ${generatorNameAsDisplayName({
            generatorConfig,
          })} - ${version} (${pkg.packageManagerName}): ${pkg.url}`
        })
      )
    ).join('\n')
    const msg = firstLine + '\n\n' + linksToSdks
    this.log(msg)
    this.log('\n------------------------------------\n')
    clipboard.writeSync(msg)
    this.log('Copied to clipboard 📋')
  }
}
