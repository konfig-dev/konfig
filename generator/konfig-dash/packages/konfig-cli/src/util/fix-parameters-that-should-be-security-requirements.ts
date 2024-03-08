import {
  findParameterIndexByNameAndIn,
  findSecuritySchemesForParameters,
  getSecurityIn,
  getSecurityParameterName,
  getOperations,
  Spec,
  resolveRef,
} from 'konfig-lib'

export async function fixParametersThatShouldBeSecurityRequirements({
  spec,
}: {
  spec: Spec
}): Promise<number> {
  let numberOfParametersConvertedToSecurityRequirements = 0

  const operations = getOperations({ spec: spec.spec })

  for (const { operation } of operations) {
    const securitySchemes = await findSecuritySchemesForParameters({
      spec,
      operation,
    })
    if (securitySchemes === undefined) continue

    if (operation.parameters === undefined)
      throw Error(
        'Parameters should have existed for security schemes to be found'
      )

    const parametersToRemove: Record<string, { name: string; in: string }> = {}
    // Remove parameters from operation that have case insensitive match to any of the security scheme
    for (const { name: securityName, scheme } of securitySchemes) {
      const securityParameterName = getSecurityParameterName({
        security: scheme,
      })
      const parameterIn = getSecurityIn({ security: scheme })
      const index = await findParameterIndexByNameAndIn({
        name: securityParameterName,
        parameterIn,
        operation,
        spec,
      })
      if (index === -1) {
        console.error(
          `Tried to find parameter with name "${securityParameterName}" and in "${parameterIn}" but it was not found.`
        )
        throw Error('Every security should match a parameter.')
      }
      parametersToRemove[`${securityParameterName}-${parameterIn}`] = {
        name: securityParameterName,
        in: parameterIn,
      }

      const securityRequirements = operation.security ?? []
      // Add new SecurityRequirement object
      if (securityRequirements.length === 0)
        securityRequirements.push({ [securityName]: [] })
      // Update existing SecurityRequirement object
      else {
        // find first SecurityRequirement object that does not have matching
        // securityName and add it to that securityRequirement object. If
        // all security requirements have matching "name" and "in", then
        // create a new SecurityRequirement object.
        let foundNonConflictingSecurityRequirementObject = false
        for (const securityRequirement of securityRequirements) {
          if (foundNonConflictingSecurityRequirementObject) break
          const securitySchemeNames = Object.keys(securityRequirement)
          for (const securitySchemeName of securitySchemeNames) {
            const securitySchemeOrRef =
              spec.spec.components?.securitySchemes?.[securitySchemeName]
            if (securitySchemeOrRef === undefined) {
              throw Error(
                `Could not find security scheme with name "${securitySchemeName}"`
              )
            }
            const securityScheme = resolveRef({
              $ref: spec.$ref,
              refOrObject: securitySchemeOrRef,
            })
            const existingParameterName = getSecurityParameterName({
              security: securityScheme,
            })
            const existingParameterIn = getSecurityIn({
              security: securityScheme,
            })

            if (
              existingParameterName !== securityParameterName ||
              existingParameterIn !== parameterIn
            ) {
              foundNonConflictingSecurityRequirementObject = true
              // add to existing securityRequirement object
              securityRequirement[securityName] = []
              break
            }
          }
        }
        if (!foundNonConflictingSecurityRequirementObject) {
          securityRequirements.push({ [securityName]: [] })
        }
      }
      operation.security = securityRequirements
      numberOfParametersConvertedToSecurityRequirements++
    }

    for (const parameter of Object.values(parametersToRemove)) {
      const index = await findParameterIndexByNameAndIn({
        name: parameter.name,
        parameterIn: parameter.in,
        operation,
        spec,
      })
      if (index === -1) {
        console.error(
          `Tried to find parameter with name "${parameter.name}" and in "${parameter.in}" but it was not found.`
        )
        throw Error('Every parameter to be removed should exist.')
      }
      operation.parameters.splice(index, 1)
    }
  }

  return numberOfParametersConvertedToSecurityRequirements
}
