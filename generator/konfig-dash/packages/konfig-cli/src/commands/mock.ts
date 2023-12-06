import { Command } from '@oclif/core'
import execa from 'execa'
import { findNodeModulesBinPath } from '../util/find-node-modules-bin-path'
export default class Mock extends Command {
  static description = 'Start a mock server from your OpenAPI Spec'
  static examples = ['<%= config.bin %> <%= command.id %>']

  static strict = false

  public async run(): Promise<void> {
    const { argv } = await this.parse(Mock)
    const pathToPrism = await findNodeModulesBinPath({
      name: 'prism',
      cwd: this.config.root,
    })
    try {
      execa.sync(pathToPrism, ['mock', ...argv], { stdio: 'inherit' })
    } catch (e) {
      if (e instanceof Error) {
        this.error(e.message)
      }
      process.exit(1)
    }
  }
}
