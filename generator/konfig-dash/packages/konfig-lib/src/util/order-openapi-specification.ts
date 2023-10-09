import { ApiOrderConfiguration } from '../KonfigYamlCommon'
import { Operation, OperationObject } from '../forEachOperation'
import { getOperations } from '../get-operations'
import { PathsObject, Spec } from '../parseSpec'

/**
 * Order's tags / operations in an OpenAPI specification according to the ApiOrderConfiguration object.
 *
 * Use the following algorithm to order the tags and operations in an OpenAPI specification:
 *
 * Group Configured vs. Unconfigured:
 *
 * Display the tags and operations that the user has configured first, in the
 * order they've specified.  Then, display the unconfigured tags and operations
 * in their original order.  This approach clearly separates what the user has
 * actively configured from what they haven't.
 *
 *
 */
export function orderOpenApiSpecification({
  spec,
  order,
}: {
  spec: Spec['spec']
  order: ApiOrderConfiguration
}): void {
  // first order tags by user configuration
  const tags = spec.tags
  const tagOrder = order.map(({ tag }) => tag)
  if (tags !== undefined) {
    tags.sort((a, b) => {
      const aIndex = tagOrder.indexOf(a.name)
      const bIndex = tagOrder.indexOf(b.name)
      if (aIndex === -1 && bIndex === -1) {
        return 0
      } else if (aIndex === -1) {
        return 1
      } else if (bIndex === -1) {
        return -1
      } else {
        return aIndex - bIndex
      }
    })
  }

  // then order operations by user configuration
  // do this by sorting every operation based on two things in order of priority:
  // 1. tag
  // 2. operationId / subpath + method
  // this will ensure that operations are grouped by tag and then sorted by operationId / subpath + method
  //
  // even thought object keys are unordered in theory, in Node.JS, you can
  // reconstruct the paths object with ordered operations using insertion order.
  // see: https://stackoverflow.com/a/5525820/3068233
  //
  // first we'll extract all the operations and order them by the above priority.
  // then we'll reconstruct the paths object with the ordered operations.
  const paths: PathsObject | undefined = spec.paths
  if (paths !== undefined) {
    const operations: OperationObject[] = getOperations({ spec })

    // sort by order of priority: tags then operationId / subpath + method
    operations.sort((a, b) => {
      const aPath = a.path
      const bPath = b.path
      const aMethod = a.method
      const bMethod = b.method
      const aTags = a.operation.tags
      const aTag = aTags !== undefined && aTags.length > 0 ? aTags[0] : ''
      const aTagIndex = tagOrder.indexOf(aTag)
      const bTags = b.operation.tags
      const bTag = bTags !== undefined && bTags.length > 0 ? bTags[0] : ''
      const bTagIndex = tagOrder.indexOf(bTag)

      // first order by tag if possible
      if (aTagIndex === -1 && bTagIndex === -1) {
        // if neither has a tag, then order by original order
        return 0
      } else if (aTagIndex === -1) {
        // if only a has a tag, then a comes after b
        return 1
      } else if (bTagIndex === -1) {
        // if only b has a tag, then a comes before b
        return -1
      } else if (aTagIndex !== bTagIndex) {
        return aTagIndex - bTagIndex
      }

      // we are now comparing two operations in the same tag
      const operationOrder = order.find(({ tag }) => tag === aTag)?.operations // this will always be defined because we already checked that aTagIndex !== -1

      if (operationOrder === undefined) {
        // if no operation ordering then order by original order
        return 0
      }

      const aOperationId = a.operation.operationId
      const bOperationId = b.operation.operationId

      if (aOperationId === bOperationId) {
        return 0
      }

      const aOperationIndex = operationOrder.findIndex((value) =>
        typeof value === 'string'
          ? value === aOperationId
          : value.path === aPath && value.method === aMethod
      )
      const bOperationIndex = operationOrder.findIndex((value) =>
        typeof value === 'string'
          ? value === bOperationId
          : value.path === bPath && value.method === bMethod
      )

      if (aOperationIndex === -1 && bOperationIndex === -1) {
        // if neither has an operationId, then order by original order
        return 0
      } else if (aOperationIndex === -1) {
        // if only a has an operationId, then a comes after b
        return 1
      } else if (bOperationIndex === -1) {
        // if only b has an operationId, then a comes before b
        return -1
      }

      return aOperationIndex - bOperationIndex
    })

    const paths: PathsObject = {}

    for (const operation of operations) {
      paths[operation.path] = paths[operation.path] ?? {}
      const pathItemObject = paths[operation.path]
      if (pathItemObject === undefined)
        throw Error('pathItemObject should be defined')
      pathItemObject[operation.method] = operation.operation as Operation
    }
    spec.paths = paths
  }
}
