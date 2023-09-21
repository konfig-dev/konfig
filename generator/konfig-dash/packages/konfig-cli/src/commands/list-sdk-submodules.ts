import { Command } from '@oclif/core'
import { parseKonfigYaml } from '../util/parse-konfig-yaml';
import * as path from 'node:path'
import * as fs from 'fs-extra'

export default class ListSdkSubmodules extends Command {
  static description = 'List paths of all sdks which are git submodules, each on a new line.'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  public async run(): Promise<void> {
    const { generators } = parseKonfigYaml({configDir: process.cwd()});
    Object.values(generators).forEach((generatorConfig) => {
      if (fs.existsSync(path.join(generatorConfig.outputDirectory, ".git"))) {
        this.log(generatorConfig.outputDirectory)
      }
    })
  }
}
