import { CliUx, Command, Flags } from '@oclif/core'
import * as fs from 'fs-extra'
import {
  isJsonString,
  OBJECT_WITH_NO_PROPERTIES_RULE_NAME,
  parseSpec,
  POTENTIAL_INCORRECT_DATA_TYPE_RULE_NAME,
} from 'konfig-lib'
import boxen from 'boxen'
import { Progress } from '../util/fix-progress'
import { oasYamlDump } from '../util/oas-yaml-dump'
import { getSpecPath } from '../util/get-spec-path'
import { fixOas } from '../util/fix-oas'
import path from 'path'
import { oasJsonDump } from '../util/oas-json-dump'
import { getSpecInputPath } from '../util/get-spec-input-path'
import { parseKonfigYaml } from '../util/parse-konfig-yaml'

export default class Fix extends Command {
  static description = 'Tool for fixing an OpenAPI Spec'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    format: Flags.boolean({
      name: 'format',
      char: 'f',
      description: 'Formats input specification',
    }),
    specInputPath: Flags.file({
      name: 'specInputPath',
      char: 'i',
      exists: true,
      description: 'Path to input OpenAPI Specification',
    }),
    spec: Flags.file({
      name: 'spec',
      char: 's',
      exists: true,
      description: 'Path to output OpenAPI Specification',
    }),
    auto: Flags.boolean({
      name: 'auto',
      char: 'a',
      description: 'Automatically generate names if asked',
    }),
    konfigDir: Flags.directory({
      name: 'Konfig Directory',
      char: 'k',
      description: 'Directory containing konfig.yaml',
      exists: true,
    }),
    alwaysYes: Flags.boolean({
      name: 'alwaysYes',
      char: 'Y',
      description: 'Always confirm with "Yes"("Y") when asked',
    }),
  }

  public async run(): Promise<void> {
    const { flags } = await this.parse(Fix)

    CliUx.ux.debug(`alwaysYes: ${flags.alwaysYes}`)

    if (flags.spec === undefined) {
      flags.spec = getSpecPath({ konfigDir: flags.konfigDir })
      flags.specInputPath =
        getSpecInputPath({ konfigDir: flags.konfigDir }) ?? flags.spec
    }
    if (flags.spec === undefined)
      throw Error(
        `Either specify path to OAS with -s flag or assign "specPath" field in "konfig.yaml"`
      )

    if (flags.specInputPath === undefined) throw Error(`This shouldn't happen`)

    const prependKonfigDir = ({ specPath }: { specPath: string }) => {
      return flags.konfigDir !== undefined
        ? path.join(flags.konfigDir, specPath)
        : specPath
    }

    const { parsedKonfigYaml } = parseKonfigYaml({
      configDir: flags.konfigDir ?? process.cwd(),
    })
    const specInputPath = prependKonfigDir({ specPath: flags.specInputPath })
    const specOutputPath = prependKonfigDir({ specPath: flags.spec })
    const rawSpec = fs.readFileSync(specInputPath, 'utf-8')
    let spec = await parseSpec(rawSpec)
    CliUx.ux.debug('Successfully parsed input spec')

    // Just format and exit
    if (flags.format) {
      fs.writeFileSync(flags.spec, oasYamlDump(spec))
      return
    }

    const progress: Progress = Progress.getSaved({
      konfigDir: flags.konfigDir ?? process.cwd(),
      progressYamlPathOverride: parsedKonfigYaml.progressYamlPath,
    })

    const {
      issuesFixed,
      infoDescriptionFixed,
      numberOfMissingResponseDescriptionsAdded,
      numberOfExamplesFixed,
      numberOfUpdatedOperationIds,
      numberOfMissingTags,
      numberOfTrailingSlashesFixed,
      numberOfMissing200ResponsesAdded,
      numberOfParametersConvertedToSecurityRequirements,
      numberOfEmptyRequestBodiesRemoved,
      numberOfListUsagesOfSecurityFixed,
      numberOfImproperlyNamedTags,
      numberOfRedundantSecurityAndParametersFixed,
      numberOfObjectsWithNoPropertiesFixed,
      numberOfSchemasDefined,
      numberOfParametersRemovedForNewSecurityScheme,
      numberOfUnstructuredRequestBodiesFixed,
      numberOfIgnorePotentialIncorrectTypeAdded,
      numberOfCustomModifications,
      numberOfIgnoreObjectsWithNoPropertiesAdded,
      numberOfEmptyResponseBodySchemasFixed,
      numberOfDuplicateTagNamesFixed,
      numberOfInvalidServerUrlsFixed,
      numberOfRedundantSecuritySchemesRemoved,
      numberOfExampleAndExamplesFixed,
      numberOfDisallowedHeaderNamesRemoved,
      numberOfNewTagNames,
    } = await fixOas({
      spec,
      progress,
      konfigYaml: parsedKonfigYaml,
      alwaysYes: flags.alwaysYes,
      auto: flags.auto,
    })

    fs.writeFileSync(
      specOutputPath,
      isJsonString(rawSpec) ? oasJsonDump(spec.spec) : oasYamlDump(spec.spec)
    )
    console.log(
      boxen(
        `Updated ${numberOfUpdatedOperationIds} operation IDs
Made ${numberOfCustomModifications} custom modifications
Renamed ${numberOfImproperlyNamedTags} improperly named tags
Removed ${numberOfDisallowedHeaderNamesRemoved} disallowed headers removed
Added ${numberOfIgnorePotentialIncorrectTypeAdded} ${POTENTIAL_INCORRECT_DATA_TYPE_RULE_NAME} ignore rule
Added ${numberOfIgnoreObjectsWithNoPropertiesAdded} ${OBJECT_WITH_NO_PROPERTIES_RULE_NAME} ignore rule
Added ${infoDescriptionFixed} missing info description
Added ${numberOfMissingResponseDescriptionsAdded} missing response descriptions
Added ${numberOfMissingTags} missing tags
Added ${numberOfEmptyResponseBodySchemasFixed} empty response body schemas
Added ${numberOfSchemasDefined} named schemas
Added ${numberOfMissing200ResponsesAdded} missing 2xx responses
Added ${numberOfNewTagNames} new tag names
Fixed ${numberOfDuplicateTagNamesFixed} duplicate tag names fixed
Fixed ${numberOfInvalidServerUrlsFixed} invalid server URLs fixed
Fixed ${numberOfUnstructuredRequestBodiesFixed} unstructured request bodies
Fixed ${numberOfObjectsWithNoPropertiesFixed} objects with no properties
Fixed ${numberOfExampleAndExamplesFixed} redundant "example" & "examples" fields
Fixed ${numberOfExamplesFixed} examples with invalid schemas
Fixed ${numberOfParametersConvertedToSecurityRequirements} parameters that should be security requirements
Fixed ${numberOfListUsagesOfSecurityFixed} list usages of security
Removed ${numberOfTrailingSlashesFixed} trailing slashes
Removed ${numberOfRedundantSecurityAndParametersFixed} redundant security requirement and parameters
Removed ${numberOfRedundantSecuritySchemesRemoved} redundant security schemes
Removed ${numberOfParametersRemovedForNewSecurityScheme} parameters replace with security requirement
Removed ${numberOfEmptyRequestBodiesRemoved} empty request bodies`,
        {
          title: `Fixed ${issuesFixed} Issues`,
          borderColor: issuesFixed === 0 ? 'gray' : 'green',
          padding: 1,
        }
      )
    )
  }
}
