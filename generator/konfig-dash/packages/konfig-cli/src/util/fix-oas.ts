import {
  fixCustomModifications,
  fixMissingGlobalTags,
  KonfigYamlType,
  Spec,
} from 'konfig-lib'
import { fixAdvSecuritySchemesDefined } from './fix-adv-security-schemes-defined'
import { fixComponentsSchemasDefinedOas3 } from './fix-components-schemas-defined-oas3'
import { fixDisallowedHeaderNames } from './fix-disallowed-header-names'
import { fixDuplicateTagNames } from './fix-duplicate-tag-names'
import { fixEmptyRequestBodyContent } from './fix-empty-request-body-content'
import { fixEmptyResponseBodySchema } from './fix-empty-response-body-schema'
import { fixFalseOas3ValidSchemaExample } from './fix-false-oas3-valid-schema-example-error'
import { fixImproperlyNamedTags } from './fix-improperly-named-tags'
import { fixInvalidExamples } from './fix-invalid-examples'
import { fixListUsageOfSecurity } from './fix-list-usage-of-security'
import { fixMissing2xxResponse } from './fix-missing-2xx-response'
import { fixMissingInfoDescription } from './fix-missing-info-description'
import { fixMissingResponseObjectDescription } from './fix-missing-response-object-description'
import { fixOas3SchemaExampleAndExamples } from './fix-oas3-schema-example-and-examples'
import { fixObjectWithNoProperties } from './fix-object-with-no-properties'
import { fixOnlyOneTagName } from './fix-only-one-tag-name'
import { fixOperationIds } from './fix-operation-ids'
import { fixParametersThatShouldBeSecurityRequirements } from './fix-parameters-that-should-be-security-requirements'
import { fixTrailingSlashes } from './fix-paths-trailing-slash'
import { Progress } from './fix-progress'
import { fixRedundantSecurityAndParameter } from './fix-redundant-security-and-parameter'
import { fixRedundantSecuritySchemes } from './fix-redundant-security-schemes'
import { fixUnstructuredRequestBody } from './fix-unstructured-request-body'
import { ignoreObjectsWithNoProperties } from './ignore-objects-with-no-properties'
import { ignorePotentialIncorrectTypeIfConfirmed } from './ignore-potential-incorrect-type-if-confirmed'
import { fixInvalidServerUrlsOas3 } from './fix-invalid-server-urls-oas3'
import { fixOas31Usage } from './fix-oas-3-1-usage'
import { fixAnyOfTypeNullUsage } from './fix-any-of-type-null-usage'
import { fixExamplesUsage } from './fix-examples-usage'
import { overrideSecuritySchemes } from './override-security-schemes'

export async function fixOas({
  spec,
  progress,
  alwaysYes,
  auto,
  ci,
  konfigYaml,
  skipMissingResponseDescription,
  skipFixListUsageSecurity,
  useAIForOperationId,
  noInput,
}: {
  spec: Spec
  konfigYaml?: KonfigYamlType
  progress: Progress
  alwaysYes: boolean
  auto: boolean
  ci: boolean
  skipMissingResponseDescription?: boolean
  skipFixListUsageSecurity?: boolean
  useAIForOperationId: boolean
  noInput: boolean
}) {
  /**
   * ---Start fixing OAS---
   * Order matters here! Do not mess with order unless you know what you are
   * doing.
   */

  await overrideSecuritySchemes(spec, konfigYaml?.securitySchemeOverride)

  const numberOfOas31UsagesFixed = await fixOas31Usage({ spec })

  const numberOfAnyOfTypeNullUsagesReverted = await fixAnyOfTypeNullUsage({
    spec,
  })

  const numberOfExamplesUsageRemoved = await fixExamplesUsage({ spec })

  // Missing OpenAPI description
  const infoDescriptionFixed = await fixMissingInfoDescription({
    spec: spec.spec,
    progress,
    alwaysYes,
    noInput,
  })

  // Missing Operation Response description
  const numberOfMissingResponseDescriptionsAdded =
    skipMissingResponseDescription
      ? 0
      : await fixMissingResponseObjectDescription({
          spec,
          progress,
          alwaysYes,
        })

  // Missing Tags
  const numberOfMissingTags = fixMissingGlobalTags({ spec: spec.spec })

  // Fix Improper Tag Names
  const numberOfImproperlyNamedTags = await fixImproperlyNamedTags({
    spec: spec.spec,
    progress,
    alwaysYes,
  })

  // Fix only one tag name
  const numberOfNewTagNames = await fixOnlyOneTagName({
    spec: spec.spec,
    progress,
    alwaysYes,
  })

  // Operation IDs
  const numberOfUpdatedOperationIds = await fixOperationIds({
    spec: spec.spec,
    progress,
    alwaysYes,
    useAIForOperationId,
    noInput,
  })

  // Examples
  const numberOfExamplesFixed = fixInvalidExamples({ spec: spec.spec, noInput })

  // Trailing Slashes
  const numberOfTrailingSlashesFixed = fixTrailingSlashes({ spec: spec.spec })

  // valid-server-urls-oas3
  const numberOfInvalidServerUrlsFixed = await fixInvalidServerUrlsOas3({
    spec: spec.spec,
    alwaysYes,
    progress,
    noInput,
  })

  // Redundant security requirement and parameters
  const numberOfRedundantSecurityAndParametersFixed =
    await fixRedundantSecurityAndParameter({ spec })

  const numberOfRedundantSecuritySchemesRemoved =
    await fixRedundantSecuritySchemes({ spec: spec.spec })

  // Fix disallowed header names
  // Note: This must come before parameters are converted to security
  // requirements to avoid having the user say no to parameters like "Accept" in
  // the header
  const numberOfDisallowedHeaderNamesRemoved = await fixDisallowedHeaderNames({
    spec,
  })

  // Parameters converted to security requirements
  const numberOfParametersConvertedToSecurityRequirements =
    await fixParametersThatShouldBeSecurityRequirements({ spec })

  // Empty request body
  const numberOfEmptyRequestBodiesRemoved = await fixEmptyRequestBodyContent({
    spec,
  })

  // Remove parameters for security
  const numberOfParametersRemovedForNewSecurityScheme =
    await fixAdvSecuritySchemesDefined({
      spec,
      progress,
      alwaysYes,
      ci,
    })

  // Empty response body
  // NOTE: This MUST become before ignoring object-with-no-properties rule fix
  // because user could provide "{}" as input
  const numberOfEmptyResponseBodySchemasFixed =
    await fixEmptyResponseBodySchema({
      spec,
      progress,
      alwaysYes,
      ci,
    })

  // Dylan: this auto-fix was commented because there is a case where you want a
  // free-form object with no properties so we relaxed this inquiry and made the
  // lint rule a "Hint" as opposed to "Warning"

  // Dylan Update 1: I forgot that the rule has functional implication besides
  // linting in that its value is used to determine whether or not to generate
  // properties in the case that you intentionally want a free-form object
  // schema. I also realize that this fix rule must come before fixing objects
  // with no properties because a value of "true" means we don't try to fix
  // those objects with no properties

  // Ignore potential incorrect type
  const numberOfIgnoreObjectsWithNoPropertiesAdded =
    await ignoreObjectsWithNoProperties({
      spec,
      alwaysYes,
      noInput,
      progress,
    })
  // Objects with no properties
  const numberOfObjectsWithNoPropertiesFixed = await fixObjectWithNoProperties({
    spec,
  })

  // Unstructured request bodies
  const numberOfUnstructuredRequestBodiesFixed =
    await fixUnstructuredRequestBody({ spec })

  // List usage of security
  const numberOfListUsagesOfSecurityFixed = skipFixListUsageSecurity
    ? 0
    : fixListUsageOfSecurity({
        spec: spec.spec,
      })

  // Defining Schemas
  // Important: This should come last to allow for previous passes to define
  // schemas before extracting them to refs
  const numberOfSchemasDefined = await fixComponentsSchemasDefinedOas3({
    spec,
    progress,
    alwaysYes,
    auto,
    noInput,
  })

  // Ignore potential incorrect type
  const numberOfIgnorePotentialIncorrectTypeAdded =
    await ignorePotentialIncorrectTypeIfConfirmed({
      spec,
      alwaysYes,
      noInput,
      progress,
    })

  // Missing 200 response
  const numberOfMissing200ResponsesAdded = await fixMissing2xxResponse({
    spec: spec.spec,
  })

  // Fix duplicate tag names
  const numberOfDuplicateTagNamesFixed = await fixDuplicateTagNames({
    spec: spec.spec,
  })

  // Fix oas3-schema example & examples mutual exclusiveness
  const numberOfExampleAndExamplesFixed = await fixOas3SchemaExampleAndExamples(
    { spec }
  )

  // Make fixConfig modification from konfig.yaml
  const numberOfCustomModifications = await fixCustomModifications({
    fixConfig: konfigYaml?.fixConfig,
    spec,
    isCLI: true,
  })

  // Monkey patch here!
  fixFalseOas3ValidSchemaExample({ spec: spec.spec })

  /**
   * ---End fixing OAS---
   */

  const result = {
    infoDescriptionFixed,
    numberOfMissingResponseDescriptionsAdded,
    numberOfExamplesFixed,
    numberOfDisallowedHeaderNamesRemoved,
    numberOfUpdatedOperationIds,
    numberOfMissingTags,
    numberOfTrailingSlashesFixed,
    numberOfMissing200ResponsesAdded,
    numberOfParametersConvertedToSecurityRequirements,
    numberOfEmptyRequestBodiesRemoved,
    numberOfListUsagesOfSecurityFixed,
    numberOfCustomModifications,
    numberOfImproperlyNamedTags,
    numberOfObjectsWithNoPropertiesFixed,
    numberOfSchemasDefined,
    numberOfParametersRemovedForNewSecurityScheme,
    numberOfRedundantSecurityAndParametersFixed,
    numberOfRedundantSecuritySchemesRemoved,
    numberOfUnstructuredRequestBodiesFixed,
    numberOfIgnorePotentialIncorrectTypeAdded,
    numberOfIgnoreObjectsWithNoPropertiesAdded,
    numberOfEmptyResponseBodySchemasFixed,
    numberOfDuplicateTagNamesFixed,
    numberOfExampleAndExamplesFixed,
    numberOfInvalidServerUrlsFixed,
    numberOfNewTagNames,
    numberOfOas31UsagesFixed,
    numberOfAnyOfTypeNullUsagesReverted,
    numberOfExamplesUsageRemoved,
  }
  const issuesFixed = Object.values(result).reduce((a, b) => a + b)
  return {
    issuesFixed,
    ...result,
  }
}
