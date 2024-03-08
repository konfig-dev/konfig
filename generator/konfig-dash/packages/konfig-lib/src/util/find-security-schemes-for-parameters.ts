import { Operation } from '../forEachOperation'
import { getOperationParametersDeprecated } from './get-operation-parameters-deprecated'
import { getSecurityIn } from './get-security-in'
import { getSecurityParameterName } from './get-security-parameter-name'
import { getSecuritySchemes, SecurityScheme } from './get-security-schemes'
import type { Spec } from '../parseSpec'

/**
 * Find security schemes for parameters by matching the parameter name and in to
 * the security scheme name and in.
 */
export async function findSecuritySchemesForParameters({
  spec,
  operation,
  caseInsensitive,
}: {
  spec: Spec
  operation: Operation
  caseInsensitive?: boolean
}): Promise<{ name: string; scheme: SecurityScheme }[] | undefined> {
  caseInsensitive = caseInsensitive ?? true
  const securitySchemes = await getSecuritySchemes({
    spec: spec.spec,
    $ref: spec.$ref,
  })
  if (securitySchemes === undefined) return
  const parameters = await getOperationParametersDeprecated({
    operation,
    $ref: spec.$ref,
  })
  if (parameters === undefined) return
  const matchingSecuritySchemes = Object.entries(securitySchemes).filter(
    ([_name, security]) => {
      const securityName = getSecurityParameterName({ security })
      const securityIn = getSecurityIn({ security })
      const filteredByIn = parameters.filter((p) => p.in === securityIn)
      if (caseInsensitive)
        return !!filteredByIn.find(
          (parameter) =>
            parameter.name.toLowerCase() === securityName.toLowerCase()
        )
      const found = !!filteredByIn.find(
        (parameter) => parameter.name === securityName
      )
      return found
    }
  )
  if (matchingSecuritySchemes.length === 0) return
  return matchingSecuritySchemes.map(([name, scheme]) => ({ name, scheme }))
}
