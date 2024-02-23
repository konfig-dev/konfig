import * as fs from 'fs-extra'
import {
  isJsonString,
  OBJECT_WITH_NO_PROPERTIES_RULE_NAME,
  parseSpec,
  filterSpecPaths,
  POTENTIAL_INCORRECT_DATA_TYPE_RULE_NAME,
  KonfigYamlType,
} from 'konfig-lib'
import boxen from 'boxen'
import { Progress } from './fix-progress'
import { oasYamlDump } from './oas-yaml-dump'
import { fixOas } from './fix-oas'
import path from 'path'
import { oasJsonDump } from './oas-json-dump'
import { parseKonfigYaml, missingKonfigYamlErrorMsg } from './parse-konfig-yaml'

interface FixOptions {
  format?: boolean
  specInputPath?: string
  spec?: string
  auto?: boolean
  konfigDir?: string
  skipMissingResponseDescriptionFix?: boolean
  skipListUsageSecurity?: boolean
  alwaysYes?: boolean
  ci?: boolean
  useAIForOperationId?: boolean
  useAIForTags?: boolean
  progressYamlOverridePath?: string
  noInput?: boolean
}

export async function executeFixCommand(options: FixOptions): Promise<void> {
  const flags = {
    ...options,
    auto: (options.auto || options.noInput) ?? true,
    alwaysYes: !!(
      options.alwaysYes == null ||
      options.alwaysYes ||
      options.ci ||
      options.noInput
    ), // ci & noInput modes should always confirm with yes
    ci: (options.ci || options.noInput) ?? false,
    useAIForOperationId:
      (options.useAIForOperationId || options.noInput) ?? false,
    useAIForTags: (options.useAIForTags || options.noInput) ?? false,
    noInput: options.noInput ?? false,
    skipListUsageSecurity: options.skipListUsageSecurity ?? true,
  }

  if (flags.useAIForOperationId && process.env.OPENAI_API_KEY === undefined) {
    throw Error(
      `OPENAI_API_KEY environment variable must be set to use AI for operationId`
    )
  }

  let parsedKonfigYaml: KonfigYamlType | undefined = undefined
  try {
    ;({ parsedKonfigYaml } = parseKonfigYaml({
      configDir: flags.konfigDir ?? process.cwd(),
    }))
  } catch (e) {
    if (e instanceof Error && !e.message.includes(missingKonfigYamlErrorMsg))
      throw e
  }

  const prependKonfigDir = ({ specPath }: { specPath: string }) => {
    return flags.konfigDir !== undefined
      ? path.join(flags.konfigDir, specPath)
      : specPath
  }

  let specInputPath = flags.specInputPath ?? parsedKonfigYaml?.specInputPath
  let specOutputPath = flags.spec ?? parsedKonfigYaml?.specPath

  if (specOutputPath === undefined) {
    throw Error(
      `Spec output path must be specified in konfig.yaml (specPath) or with -s flag`
    )
  }
  if (specInputPath === undefined) {
    if (flags.ci) {
      console.log(`No specInputPath specified, skipping fix`)
      return
    }
    specInputPath = specOutputPath
  }

  specInputPath = prependKonfigDir({ specPath: specInputPath })
  specOutputPath = prependKonfigDir({ specPath: specOutputPath })

  const rawSpec = fs.readFileSync(specInputPath, 'utf-8')
  let spec = await parseSpec(rawSpec)

  // if konfig yaml filters any paths from the spec, remove them now
  if (parsedKonfigYaml?.filterPaths) {
    filterSpecPaths({ spec: spec.spec, filter: parsedKonfigYaml.filterPaths })
  }

  if (flags.format) {
    fs.writeFileSync(specOutputPath, oasYamlDump(spec))
    return
  }

  const progressYamlPathOverride =
    flags.progressYamlOverridePath ?? parsedKonfigYaml?.progressYamlPath

  const progress: Progress = Progress.getSaved({
    konfigDir: flags.konfigDir ?? process.cwd(),
    progressYamlPathOverride: progressYamlPathOverride,
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
    numberOfAnyOfTypeNullUsagesReverted,
    numberOfOas31UsagesFixed,
    numberOfExamplesUsageRemoved,
    numberOfAdditionalPropertiesFixed,
    numberOfSingletonAllOfUsagesFlattened,
    numberOfPassthroughRefsFixed,
  } = await fixOas({
    spec,
    progress,
    konfigYaml: parsedKonfigYaml,
    alwaysYes: flags.alwaysYes,
    auto: flags.auto,
    ci: flags.ci,
    skipMissingResponseDescription: flags.skipMissingResponseDescriptionFix,
    skipFixListUsageSecurity: flags.skipListUsageSecurity,
    useAIForOperationId: flags.useAIForOperationId,
    useAIForTags: flags.useAIForTags,
    noInput: flags.noInput,
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
Added ${numberOfIgnoreObjectsWithNoPropertiesAdded} ${OBJECT_WITH_NO_PROPERTIES_RULE_NAME} ignore rule
Added ${numberOfIgnorePotentialIncorrectTypeAdded} ${POTENTIAL_INCORRECT_DATA_TYPE_RULE_NAME} ignore rule
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
Fixed ${numberOfAdditionalPropertiesFixed} additional properties = false
Removed ${numberOfTrailingSlashesFixed} trailing slashes
Removed ${numberOfRedundantSecurityAndParametersFixed} redundant security requirement and parameters
Removed ${numberOfRedundantSecuritySchemesRemoved} redundant security schemes
Removed ${numberOfParametersRemovedForNewSecurityScheme} parameters replace with security requirement
Removed ${numberOfEmptyRequestBodiesRemoved} empty request bodies
Fixed ${numberOfAnyOfTypeNullUsagesReverted} anyOf type null usages
Fixed ${numberOfOas31UsagesFixed} OAS 3.1.x usages
Fixed ${numberOfExamplesUsageRemoved} "examples" usage
Fixed ${numberOfSingletonAllOfUsagesFlattened} length 1 allOf usages
Fixed ${numberOfPassthroughRefsFixed} passthrough refs`,
      {
        title: `Fixed ${issuesFixed} Issues`,
        borderColor: issuesFixed === 0 ? 'gray' : 'green',
        padding: 1,
      }
    )
  )
}
