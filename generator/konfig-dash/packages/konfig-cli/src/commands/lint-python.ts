import {Command, Flags} from '@oclif/core'
import { parseKonfigYaml } from '../util/parse-konfig-yaml'
import * as path from 'node:path'
import execa from 'execa'

export default class LintPython extends Command {
  static description = 'Lint your python SDK with ruff linter'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
    '<%= config.bin %> <%= command.id %> -p test/',
    '<%= config.bin %> <%= command.id %> -f -p test/**/*test*.py',
    '<%= config.bin %> <%= command.id %> -f -p test/simple_test.py'
  ]

  static flags = {
    fix: Flags.boolean({char: 'f', description: 'fix linting errors which ruff marks as fixable'}),
    path: Flags.string({char: 'p', description: 'lint only specified path (file or directory) within python sdk directory. Glob patterns are allowed.'}),
  }

  static args = []

  public async run(): Promise<void> {
    const {flags} = await this.parse(LintPython)

    // Ensure that ruff is installed
    try {
      execa.sync('ruff', ['--version'], { stdio: 'ignore' })
    } catch (error) {
      this.error('"ruff" is not installed. Please install it before running this command. Use `pip install ruff` or see https://github.com/astral-sh/ruff for alternative installation instructions.');
    }

    const {generators} = parseKonfigYaml({configDir: process.cwd()});

    if (generators.python === undefined || generators.python.disabled)
      this.error('Could not find python generator in konfig.yaml, or it was disabled. Please make sure it exists and is enabled.')

    const filepath = flags.path ? path.join(process.cwd(), generators.python.outputDirectory, flags.path) : '.'
    this.log('Running linter at: ' + (filepath === '.' ?  path.join(process.cwd(), generators.python.outputDirectory) : filepath))
    const command = ['check', filepath, '--exit-zero']
    if (flags.fix) command.push('--fix')
    
    execa.sync('ruff', command, {cwd: generators.python.outputDirectory, stdio: 'inherit'})
  }
}
