import { Command, CliUx } from '@oclif/core'
import { parseKonfigYaml } from '../util/parse-konfig-yaml'
import axios from 'axios'
import * as fs from 'fs-extra'
import { oasYamlDump } from '../util/oas-yaml-dump'
import yaml from 'js-yaml'

export default class Pull extends Command {
  static description = 'describe the command here'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {}

  static args = []

  public async run(): Promise<void> {
    await this.parse(Pull)

    const { parsedKonfigYaml } = parseKonfigYaml({
      configDir: process.cwd(),
    })

    if (parsedKonfigYaml.specRemotePath === undefined) {
      throw new Error('specRemotePath is not defined in konfig.yaml')
    }

    CliUx.ux.action.start(
      `Fetching spec from ${parsedKonfigYaml.specRemotePath}`
    )
    const response = await axios.get<object>(parsedKonfigYaml.specRemotePath)
    CliUx.ux.action.stop()
    const spec = response.data

    this.debug(spec)
    this.debug('typeof spec: ', typeof spec)

    // if spec is a string, then it is probably a yaml string
    // in that case, we need to parse the yaml string into an object
    const parsedSpec = typeof spec === 'string' ? yaml.load(spec) : spec

    const outputPath = parsedKonfigYaml.specInputPath
      ? parsedKonfigYaml.specInputPath
      : parsedKonfigYaml.specPath

    const isOutputJson = parsedKonfigYaml.specRemotePath.endsWith('json')
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
