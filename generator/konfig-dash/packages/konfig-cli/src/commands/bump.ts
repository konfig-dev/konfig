import { Command, Flags } from '@oclif/core'
import { parseKonfigYaml } from '../util/parse-konfig-yaml'
import { KonfigYamlType } from 'konfig-lib'
import semver from 'semver'
import { parseFilterFlag } from '../util/parseFilterFlag'
import { detectReleaseType } from '../util/detect-release-type'
import { executeBumpCommand } from '../util/execute-bump-command'

export default class Bump extends Command {
  static description =
    'Automatically bump semantic version of SDKs. If a breaking change is detected then the major version will be bumped. Otherwise a minor version will be bumped.'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    generator: Flags.string({ char: 'g', name: 'generator' }),
    patch: Flags.boolean({
      char: 'p',
      name: 'patch',
      exclusive: ['minor', 'major', 'prerelease'],
    }),
    major: Flags.boolean({
      char: 'M',
      name: 'major',
      exclusive: ['minor', 'patch', 'prerelease'],
    }),
    prerelease: Flags.boolean({
      char: 'r',
      name: 'prerelease',
      exclusive: ['major', 'patch', 'minor'],
    }),
    minor: Flags.boolean({
      char: 'm',
      name: 'minor',
      exclusive: ['major', 'patch', 'prerelease'],
    }),
  }

  public async run(): Promise<void> {
    const { flags } = await this.parse(Bump)

    const { loadedKonfigYaml, konfigYamlPath } = parseKonfigYaml({
      configDir: process.cwd(),
    })

    const releaseType = await getReleaseType({
      major: flags.major,
      minor: flags.minor,
      patch: flags.patch,
      prerelease: flags.prerelease,
      loadedKonfigYaml,
      cwd: this.config.root,
    })

    const filter = parseFilterFlag(flags.generator)
    executeBumpCommand({ filter, releaseType, loadedKonfigYaml, konfigYamlPath })
  }
}

async function getReleaseType({
  cwd,
  loadedKonfigYaml,
  major,
  minor,
  patch,
  prerelease,
}: {
  cwd: string
  loadedKonfigYaml: KonfigYamlType
  major: boolean
  minor: boolean
  patch: boolean
  prerelease: boolean
}): Promise<semver.ReleaseType> {
  if (major) return 'major'
  if (minor) return 'minor'
  if (patch) return 'patch'
  if (prerelease) return 'prerelease'
  return await detectReleaseType({ cwd, specPath: loadedKonfigYaml.specPath })
}
