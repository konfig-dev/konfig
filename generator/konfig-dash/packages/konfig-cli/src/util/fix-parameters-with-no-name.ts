import { getOperations, resolveRef, Spec } from 'konfig-lib'

export async function fixParametersWithNoName({
  spec,
}: {
  spec: Spec
}): Promise<number> {
  let numberOfParametersWithNoNameFixed = 0
  if (spec.spec.paths === undefined) return 0
  const operations = getOperations({ spec: spec.spec })
  for (const { operation } of operations) {
    if (operation.parameters === undefined) continue

    const originalLength = operation.parameters.length
    operation.parameters = operation.parameters.filter((parameter) => {
      parameter = resolveRef({ refOrObject: parameter, $ref: spec.$ref })
      return parameter.name !== undefined && parameter.name !== ''
    })
    numberOfParametersWithNoNameFixed +=
      originalLength - operation.parameters.length

    if (operation.parameters.length === 0) {
      delete operation.parameters
    }
  }
  return numberOfParametersWithNoNameFixed
}
