import { KonfigYamlType, KONFIG_YAML_NAME } from 'konfig-lib'
import * as fs from 'fs-extra'
import { KonfigYaml } from 'konfig-lib'
import { load } from 'js-yaml'
import { CliUx } from '@oclif/core'

export const missingKonfigYamlErrorMsg = `Make sure you are in same directory as '${KONFIG_YAML_NAME}'`

export const parseKonfigYaml = ({ configDir }: { configDir: string }) => {
  const konfigYamlPath = `${configDir}/${KONFIG_YAML_NAME}`
  if (!fs.existsSync(konfigYamlPath)) CliUx.ux.error(missingKonfigYamlErrorMsg)
  const konfigYamlRaw = fs.readFileSync(konfigYamlPath, 'utf-8')
  const loadedKonfigYaml: KonfigYamlType = load(konfigYamlRaw) as KonfigYamlType
  const parsedKonfigYaml = KonfigYaml.parse(loadedKonfigYaml)
  const { generators, additionalGenerators, ...common } = parsedKonfigYaml
  const allGenerators = [
    ...Object.entries(generators),
    ...(additionalGenerators ? Object.entries(additionalGenerators) : []),
  ]
  return {
    allGenerators,
    generators,
    additionalGenerators,
    common,
    konfigYamlPath,
    konfigYamlRaw,
    parsedKonfigYaml,
    loadedKonfigYaml,
  }
}
