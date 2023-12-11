import { IFunctionResult, RulesetFunction } from '@stoplight/spectral-core'
import { OAS3Doc } from './util/OAS3Doc'
import { getOperations } from 'konfig-lib/dist/get-operations'
export const duplicateSdkMethodName: RulesetFunction<string> = (
  input,
  _options,
  context
) => {
  const result: IFunctionResult[] = []
  const spec = context.document.data as OAS3Doc
  const operations = getOperations({ spec })

  // create set method names from operationIds and compare with input
  // method name is lower-cased of suffix after last underscore
  const methodNames = new Map<string, number>()
  for (const { operation } of operations) {
    const operationId = operation.operationId
    if (operationId) {
      const methodName = operationId
        .substring(operationId.lastIndexOf('_') + 1)
        .toLowerCase()
      // increment count for method name
      const count = methodNames.get(methodName) || 0
      methodNames.set(methodName, count + 1)
    }
  }
  const inputMethodName = input
    .substring(input.lastIndexOf('_') + 1)
    .toLowerCase()
  const count = methodNames.get(inputMethodName) || 0
  if (count > 1) {
    result.push({
      message: `Duplicate case-insensitive SDK method name "${inputMethodName}" detected. Please rename one of the operations.`,
    })
  }
  return result
}
