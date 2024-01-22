import { IFunctionResult, RulesetFunction } from '@stoplight/spectral-core'
import { OAS3Doc } from './util/OAS3Doc'
import { getOperations } from 'konfig-lib/dist/get-operations'
import { Operation } from 'konfig-lib'
export const duplicateSdkMethodName: RulesetFunction<Operation> = (
  input,
  _options,
  context
) => {
  const result: IFunctionResult[] = []
  if (input.operationId === undefined) return result
  const spec = context.document.data as OAS3Doc
  const operations = getOperations({ spec })

  // create set method names from operationIds and compare with input
  // method name is lower-cased of suffix after last underscore
  const methodNames = new Map<string, Map<string, number>>()
  for (const { operation } of operations) {
    const operationId = operation.operationId
    if (operationId) {
      const methodName = operationId
        .substring(operationId.lastIndexOf('_') + 1)
        .toLowerCase()

      // initialize map for tag name
      const tag = normalizeTag(operation.tags?.[0] ?? 'default')
      if (!methodNames.has(tag)) {
        methodNames.set(tag, new Map<string, number>())
      }
      const tagMethodNames = methodNames.get(tag)!

      // increment count for method name
      const count = tagMethodNames.get(methodName) || 0
      tagMethodNames.set(methodName, count + 1)
    }
  }
  const tag = normalizeTag(input.tags?.[0] ?? 'default')
  const inputMethodName = input.operationId
    .substring(input.operationId.lastIndexOf('_') + 1)
    .toLowerCase()
  const tagMethodNames = methodNames.get(tag)
  if (tagMethodNames === undefined) return result

  const count = tagMethodNames.get(inputMethodName) || 0
  if (count > 1) {
    result.push({
      message: `Duplicate case-insensitive SDK method name "${inputMethodName}" detected. Please rename one of the operations.`,
    })
  }

  return result
}

function normalizeTag(tag: string) {
  return tag.toLowerCase()
}
