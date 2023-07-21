import {
  getOperationParametersDeprecated,
  OperationParameter,
} from './get-operation-parameters-deprecated'
import { getSecurityParameterName } from './get-security-parameter-name'
import { getSecuritySchemes } from './get-security-schemes'
import { hasAny } from './has-any'
import type { Spec } from '../parseSpec'
import type { Operation } from '../forEachOperation'

export async function findRedundantSecurityRequirementAndParameter({
  spec,
  $ref,
  operation,
}: {
  spec: Spec['spec']
  $ref: Spec['$ref']
  operation: Operation
}): Promise<
  | {
      name: string
      parameter: OperationParameter
      found: true
      parameters: OperationParameter[]
    }
  | { found: false }
> {
  const securityRequirements = spec.security ?? operation.security
  if (securityRequirements === undefined) return { found: false }
  const securitySchemes = await getSecuritySchemes({ spec, $ref })
  if (securitySchemes === undefined) return { found: false }
  const parameters = await getOperationParametersDeprecated({
    operation: operation,
    $ref,
  })
  if (parameters === undefined) return { found: false }

  // filter security schemes based on required security
  const requiredSecuritySchemes = securityRequirements.flatMap((requirement) =>
    Object.keys(requirement).map((name) => {
      const scheme = securitySchemes[name]
      if (scheme === undefined) {
        throw Error(
          `Found security requirement ${name} referring to non-existent security scheme`
        )
      }
      return scheme
    })
  )

  let name: string | undefined
  let foundParameter: OperationParameter | undefined
  const anyRedundantSecurityAndParameterNames = hasAny({
    a: parameters,
    b: requiredSecuritySchemes,
    comparator: (parameter, security) => {
      const isSameName =
        parameter.name === getSecurityParameterName({ security })
      if (!isSameName) return false
      name = parameter.name
      foundParameter = parameter
      return isSameName
    },
  })
  if (anyRedundantSecurityAndParameterNames) {
    if (name === undefined)
      throw Error(
        'Name should have been assigned when redundancy was detected.'
      )
    if (foundParameter === undefined)
      throw Error(
        'Parameter should have been assigned when redundancy was detected.'
      )
    return { found: true, name, parameter: foundParameter, parameters }
  }
  return { found: false }
}
