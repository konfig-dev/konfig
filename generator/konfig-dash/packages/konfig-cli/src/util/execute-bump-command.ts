import { CliUx } from '@oclif/core'
import { getPackageVersion, setPackageVersion, KonfigYamlType } from 'konfig-lib'
import { generateKonfigYamlString } from '../util/generate-konfig-yaml-string'
import { incrementVersionWithPreservedTag } from '../util/increment-version-with-preserved-tag'
import semver from 'semver'
import * as fs from 'fs-extra'

export async function executeBumpCommand({
  filter,
  releaseType,
  loadedKonfigYaml,
  konfigYamlPath,
}: {
  filter: string[] | null
  releaseType: semver.ReleaseType
  loadedKonfigYaml: KonfigYamlType
  konfigYamlPath: string
}): Promise<void> {

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
    const newVersion = incrementVersionWithPreservedTag(currentVersion, releaseType)
    CliUx.ux.info(`Bumping ${generatorName} SDK from ${currentVersion} --> ${newVersion}`)
    if (newVersion === null)
      CliUx.ux.error(`Could not compute new version for ${generatorName} SDK currently at ${currentVersion}`)
    setPackageVersion({ generatorConfig, version: newVersion })
  }
  CliUx.ux.action.start('Writing new version to konfig.yaml')
  fs.writeFileSync(konfigYamlPath, generateKonfigYamlString(loadedKonfigYaml))
  CliUx.ux.action.stop()
}
