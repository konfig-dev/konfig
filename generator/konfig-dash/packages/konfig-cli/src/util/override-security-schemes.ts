import { SecurityRequirementObject } from './fix-list-usage-of-security'
import {
  Spec,
  SecuritySchemeOverride,
  getOperations,
  SecurityScheme,
  getSecuritySchemes,
  getSecurityParameterName,
  getSecurityIn,
  findParameterIndexByNameAndIn,
} from 'konfig-lib'

export async function overrideSecuritySchemes(
  spec: Spec,
  securitySchemeOverride: SecuritySchemeOverride
) {
  if (securitySchemeOverride?.securitySchemes) {
    if (!spec.spec.components) spec.spec.components = {}
    spec.spec.components.securitySchemes =
      securitySchemeOverride.securitySchemes
  }
  if (securitySchemeOverride?.security)
    await fixOperationsSecurity(spec, securitySchemeOverride.security)
}

// For each operation, check if the parameters match one or more security requirements from the securitySchemeOverride
// If so, remove the parameters and add the security requirement to the operation
async function fixOperationsSecurity(
  spec: Spec,
  security: SecurityRequirementObject[]
) {
  const securityGroups = await getSecurityGroups(spec, security)
  const operations = getOperations({ spec: spec.spec })
  for (const { operation } of operations) {
    if (operation.parameters === undefined) continue
    const paramsToDelete: Set<number> = new Set()
    for (const securityGroup of securityGroups) {
      // Check if the operation has ALL of the parameters for the security group
      const potentialParamsToDelete = []
      let hasAllSecurityParams = true
      for (const scheme of securityGroup.securitySchemes) {
        const parameterIn = getSecurityIn({ security: scheme })
        const securityParameterName = getSecurityParameterName({
          security: scheme,
        })
        const index = await findParameterIndexByNameAndIn({
          name: securityParameterName,
          parameterIn,
          operation,
          spec,
        })
        // If any parameter is missing, skip to the next security group
        if (index === -1) {
          hasAllSecurityParams = false
          break
        }
        potentialParamsToDelete.push(index)
      }
      if (!hasAllSecurityParams) continue
      // If all security group parameters are found, mark them for deletion
      for (const index of potentialParamsToDelete) paramsToDelete.add(index)
      // Add security requirement to operation
      if (operation.security === undefined) operation.security = []
      operation.security.push(securityGroup.securityRequirement)
    }
    // Delete marked parameters
    operation.parameters = operation.parameters.filter(
      (_, index) => !paramsToDelete.has(index)
    )
    if (operation.parameters.length === 0) delete operation.parameters
  }
}

type SecurityGroup = {
  securityRequirement: SecurityRequirementObject
  securitySchemes: SecurityScheme[]
}

async function getSecurityGroups(
  spec: Spec,
  security: SecurityRequirementObject[]
): Promise<SecurityGroup[]> {
  const securitySchemes = await getSecuritySchemes({
    spec: spec.spec,
    $ref: spec.$ref,
  })
  if (securitySchemes === undefined)
    throw Error('securitySchemeOverride.security: No security schemes found')

  // Group together security schemes based on securitySchemeOverride.security
  const securityGroups: SecurityGroup[] = []
  for (const securityRequirement of security) {
    const securityGroup: SecurityGroup = {
      securityRequirement: securityRequirement,
      securitySchemes: Object.keys(securityRequirement).map(
        (key) => securitySchemes[key]
      ),
    }
    securityGroups.push(securityGroup)
  }
  return securityGroups
}
