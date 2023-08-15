import { CliUx, Command, Flags } from '@oclif/core'
import { parseKonfigYaml } from '../util/parse-konfig-yaml'
import {
  getPackageVersion,
  KonfigYamlType,
  setPackageVersion,
} from 'konfig-lib'
import semver from 'semver'
import * as fs from 'fs-extra'
import { parseFilterFlag } from '../util/parseFilterFlag'
import { generateKonfigYamlString } from '../util/generate-konfig-yaml-string'
import { detectReleaseType } from '../util/detect-release-type'
import { incrementVersionWithPreservedTag } from '../util/increment-version-with-preserved-tag'

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
    if (filter !== null)
      CliUx.ux.info(`Performing ${releaseType} bump of ${filter.join(', ')}`)
    else CliUx.ux.info(`Performing "${releaseType}" bump`)

    for (const [generatorName, generatorConfig] of [
      ...Object.entries(loadedKonfigYaml.generators),
      ...Object.entries(loadedKonfigYaml.additionalGenerators ?? []),
    ]) {
      if (filter !== null && !filter.includes(generatorName)) continue
      if ('disabled' in generatorConfig && generatorConfig.disabled) continue
      const currentVersion = getPackageVersion({ generatorConfig })
      const newVersion = incrementVersionWithPreservedTag(
        currentVersion,
        releaseType
      )
      CliUx.ux.info(
        `Bumping ${generatorName} SDK from ${currentVersion} --> ${newVersion}`
      )
      if (newVersion === null)
        CliUx.ux.error(
          `Could not compute new version for ${generatorName} SDK currently at ${currentVersion}`
        )
      setPackageVersion({ generatorConfig, version: newVersion })
    }
    CliUx.ux.action.start('Writing new version to konfig.yaml')
    fs.writeFileSync(konfigYamlPath, generateKonfigYamlString(loadedKonfigYaml))
    CliUx.ux.action.stop()
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
