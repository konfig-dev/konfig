import { Command } from '@oclif/core'
import boxen from 'boxen'
import execa from 'execa'
import { findNodeModulesBinPath } from '../util/find-node-modules-bin-path'
import { getSpecPath } from '../util/get-spec-path'
import * as fs from 'fs'
import { parseKonfigYaml } from '../util/parse-konfig-yaml'
import { executeFixCommand } from '../util/execute-fix-command'

export default class Lint extends Command {
  static description = 'Lint your OpenAPI Spec'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static strict = false

  public async run(): Promise<void> {
    const { argv } = await this.parse(Lint)
    const pathToPrism = await findNodeModulesBinPath({
      name: 'spectral',
      cwd: this.config.root,
    })

    // Support passing nothing and inferring spec path from konfig.yaml
    if (argv.length === 0) {
      const { parsedKonfigYaml } = parseKonfigYaml({ configDir: process.cwd() })
      // First run fix if konfig.yaml has specInputPath and we're linting the specPath
      if (
        parsedKonfigYaml.specInputPath !== undefined &&
        argv[0] === parsedKonfigYaml.specPath
      ) {
        await executeFixCommand({
          spec: parsedKonfigYaml.specPath,
          specInputPath: parsedKonfigYaml.specInputPath,
        })
      }
      argv.push(parsedKonfigYaml.specPath)
    }
    if (!fs.existsSync(argv[0])) throw new Error(`File not found: ${argv[0]}`)

    try {
      execa.sync(pathToPrism, ['lint', '-F', 'warn', ...argv], {
        stdio: 'inherit',
      })
    } catch {
      console.log(
        boxen(
          `Reference of lint rules and their explanations: https://konfigthis.com/docs/lint-rules\nUse "konfig fix" to quickly fix errors: http://konfigthis.com/docs/tutorials/fix-openapi-spec`,
          {
            title: 'What do these errors mean?',
            titleAlignment: 'center',
            padding: 1,
            borderColor: 'blue',
          }
        )
      )
      console.log
      process.exit(1)
    }
  }
}
