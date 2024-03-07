import {
  disallowedHeadersRegex,
  getOperations,
  isParameterDisallowed,
  ParameterObject,
  ReferenceObject,
  resolveRef,
  Spec,
} from 'konfig-lib'

export async function fixDisallowedHeaderNames({
  spec,
}: {
  spec: Spec
}): Promise<number> {
  let numberOfDisallowedHeaderNamesRemoved = 0
  const operations = getOperations({ spec: spec.spec })

  // Request
  for (const { operation } of operations) {
    if (operation.parameters === undefined) continue
    const newParameters: (ReferenceObject | ParameterObject)[] = []
    for (const parameter of operation.parameters) {
      try {
        const resolvedParameter = resolveRef({
          refOrObject: parameter,
          $ref: spec.$ref,
        })
        if (await isParameterDisallowed({ parameter: resolvedParameter }))
          numberOfDisallowedHeaderNamesRemoved++
        else newParameters.push(parameter)
      } catch (e) {
        if (e instanceof Error) {
          if (
            e.name === 'MissingPointerError' &&
            process.env.ALLOW_INVALID_REF !== undefined
          )
            continue
        }
        throw e
      }
    }
    operation.parameters = newParameters
  }

  // Request
  for (const { operation } of operations) {
    for (const statusCode of Object.keys(operation.responses)) {
      const response = operation.responses[statusCode]
      const resolvedResponse = resolveRef({
        refOrObject: response,
        $ref: spec.$ref,
      })
      if (resolvedResponse.headers === undefined) continue
      for (const header of Object.keys(resolvedResponse.headers)) {
        if (!disallowedHeadersRegex.test(header)) continue
        numberOfDisallowedHeaderNamesRemoved++
        delete resolvedResponse.headers[header]
      }
    }
  }

  return numberOfDisallowedHeaderNamesRemoved
}
