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

export async function fixOas({
  spec,
  progress,
  alwaysYes,
  auto,
  konfigYaml,
}: {
  spec: Spec
  konfigYaml?: KonfigYamlType
  progress: Progress
  alwaysYes: boolean
  auto: boolean
}) {
  /**
   * ---Start fixing OAS---
   * Order matters here! Do not mess with order unless you know what you are
   * doing.
   */

  // Missing OpenAPI description
  const infoDescriptionFixed = await fixMissingInfoDescription({
    spec: spec.spec,
    progress,
    alwaysYes,
  })

  // Missing Operation Response description
  const numberOfMissingResponseDescriptionsAdded =
    await fixMissingResponseObjectDescription({
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
  })

  // Examples
  const numberOfExamplesFixed = fixInvalidExamples({ spec: spec.spec })

  // Trailing Slashes
  const numberOfTrailingSlashesFixed = fixTrailingSlashes({ spec: spec.spec })

  // valid-server-urls-oas3
  const numberOfInvalidServerUrlsFixed = await fixInvalidServerUrlsOas3({
    spec: spec.spec,
    alwaysYes,
    progress,
  })

  // TODO: 9b43e-Some-methods-in-fixoas-cause-readonly-bug-to-occur
  // Redundant security requirement and parameters
  const numberOfRedundantSecurityAndParametersFixed =
    await fixRedundantSecurityAndParameter({ spec: spec.spec })

  const numberOfRedundantSecuritySchemesRemoved =
    await fixRedundantSecuritySchemes({ spec: spec.spec })

  // Fix disallowed header names
  // Note: This must come before parameters are converted to security
  // requirements to avoid having the user say no to parameters like "Accept" in
  // the header
  const numberOfDisallowedHeaderNamesRemoved = await fixDisallowedHeaderNames({
    spec,
  })

  // TODO: 9b43e-Some-methods-in-fixoas-cause-readonly-bug-to-occur
  // Parameters converted to security requirements
  const numberOfParametersConvertedToSecurityRequirements =
    await fixParametersThatShouldBeSecurityRequirements({ spec: spec.spec })

  // Empty request body
  const numberOfEmptyRequestBodiesRemoved = await fixEmptyRequestBodyContent({
    spec,
  })

  // TODO: 9b43e-Some-methods-in-fixoas-cause-readonly-bug-to-occur
  // Remove parameters for security
  const numberOfParametersRemovedForNewSecurityScheme =
    await fixAdvSecuritySchemesDefined({
      spec: spec.spec,
      progress,
      alwaysYes,
    })

  // Empty response body
  // NOTE: This MUST become before ignoring object-with-no-properties rule fix
  // because user could provide "{}" as input
  const numberOfEmptyResponseBodySchemasFixed =
    await fixEmptyResponseBodySchema({
      spec,
      progress,
      alwaysYes,
    })

  // Ignore potential incorrect type
  const numberOfIgnoreObjectsWithNoPropertiesAdded =
    await ignoreObjectsWithNoProperties({
      spec,
      alwaysYes,
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
  const numberOfListUsagesOfSecurityFixed = fixListUsageOfSecurity({
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
  })

  // Ignore potential incorrect type
  const numberOfIgnorePotentialIncorrectTypeAdded =
    await ignorePotentialIncorrectTypeIfConfirmed({
      spec,
      alwaysYes,
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
  const numberOfCustomModifications = fixCustomModifications({
    fixConfig: konfigYaml?.fixConfig,
    spec: spec.spec,
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
  }
  const issuesFixed = Object.values(result).reduce((a, b) => a + b)
  return {
    issuesFixed,
    ...result,
  }
}
