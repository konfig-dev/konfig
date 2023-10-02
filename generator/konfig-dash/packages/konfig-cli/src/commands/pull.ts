import { Command, CliUx, Flags } from '@oclif/core'
import { parseKonfigYaml } from '../util/parse-konfig-yaml'
import axios from 'axios'
import * as fs from 'fs-extra'
import { oasYamlDump } from '../util/oas-yaml-dump'
import yaml from 'js-yaml'

export default class Pull extends Command {
  static description = 'describe the command here'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    input: Flags.string({
      name: 'input',
      char: 'i',
      description: 'input URL to poll',
    }),
    output: Flags.string({
      name: 'output',
      char: 'o',
      description: 'Path to output spec file',
    }),
  }

  static args = []

  public async run(): Promise<void> {
    const { flags } = await this.parse(Pull)

    const remote = getUrl({ urlOverride: flags.input })

    CliUx.ux.action.start(`Fetching spec from ${remote}`)
    const response = await axios.get<object>(remote)
    CliUx.ux.action.stop()
    const spec = response.data

    this.debug(spec)
    this.debug('typeof spec: ', typeof spec)

    // if spec is a string, then it is probably a yaml string
    // in that case, we need to parse the yaml string into an object
    const parsedSpec = typeof spec === 'string' ? yaml.load(spec) : spec

    const outputPath = getOutputPath({ pathOverride: flags.output })

    const isOutputJson = outputPath.endsWith('json')
    CliUx.ux.action.start(`Writing spec to ${outputPath}`)
    fs.writeFileSync(
      outputPath,
      isOutputJson
        ? JSON.stringify(parsedSpec, undefined, 2)
        : oasYamlDump(parsedSpec)
    )
    CliUx.ux.action.stop()
  }
}

/**
 * If urlOverride is provided, then return urlOverride
 * Otherwise, return specRemotePath from konfig.yaml
 */
function getUrl({ urlOverride }: { urlOverride?: string }) {
  if (urlOverride !== undefined) {
    return urlOverride
  }

  const { parsedKonfigYaml } = parseKonfigYaml({
    configDir: process.cwd(),
  })

  if (parsedKonfigYaml.specRemotePath === undefined) {
    throw new Error('specRemotePath is not defined in konfig.yaml')
  }

  return parsedKonfigYaml.specRemotePath
}

/**
 * If pathOverride is provided, then return pathOverride
 * Otherwise, return path from konfig.yaml
 */
function getOutputPath({ pathOverride }: { pathOverride?: string }) {
  if (pathOverride !== undefined) {
    return pathOverride
  }

  const { parsedKonfigYaml } = parseKonfigYaml({
    configDir: process.cwd(),
  })

  const outputPath = parsedKonfigYaml.specInputPath
    ? parsedKonfigYaml.specInputPath
    : parsedKonfigYaml.specPath
  return outputPath
}
