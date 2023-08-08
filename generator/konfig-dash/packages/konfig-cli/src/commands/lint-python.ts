import {Command, Flags} from '@oclif/core'
import * as path from 'node:path'
import * as fs from 'fs-extra'
import execa from 'execa'

export default class LintPython extends Command {
  static description = 'Lint your python SDK with ruff linter'

  static examples = [
    '<%= config.bin %> <%= command.id %> -f -p test/**/*test*.py',
  ]

  static flags = {
    fix: Flags.boolean({char: 'f', description: 'fix linting errors which ruff marks as fixable'}),
    path: Flags.string({char: 'p', description: 'lint only specified path (file or directory) within python sdk directory. Glob patterns are allowed.'}),
  }

  static args = []

  public async run(): Promise<void> {
    const {flags} = await this.parse(LintPython)

    let pySdkPath = path.join(process.cwd(), 'python')

    if (!fs.existsSync(pySdkPath)) {
      pySdkPath = path.join(process.cwd(), 'sdks', 'python')
      if (!fs.existsSync(pySdkPath))
        this.error('Could not find ./python or ./sdks/python directory. Please make sure such a directory exists.')
    }

    const filepath = flags.path ? path.join(pySdkPath, flags.path) : '.'
    this.log('Running linter at: ' + filepath)
    const command = ['check', filepath, '--exit-zero']
    if (flags.fix) command.push('--fix')
    
    execa.sync('ruff', command, {cwd: pySdkPath, stdio: 'inherit'})
  }
}
