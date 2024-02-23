import { Spec, recurseObject } from 'konfig-lib'

export async function fixPassthroughRefs({
  spec,
}: {
  spec: Spec
}): Promise<number> {
  let numberOfPassthroughRefsFixed = 0
  if (
    spec.spec.components === undefined ||
    spec.spec.components.schemas === undefined
  )
    return numberOfPassthroughRefsFixed

  const collectPassthroughRefs = (): Record<string, string> => {
    if (
      spec.spec.components === undefined ||
      spec.spec.components.schemas === undefined
    )
      return {}
    // iterate through all components.schemas and collect list of schemas that are passthrough refs
    const refs: Record<string, string> = {}
    for (const schemaName in spec.spec.components.schemas) {
      const schema = spec.spec.components.schemas[schemaName]
      if (schema === null || schema === undefined) continue
      // if schema is an object with one property that is just a $ref
      if (
        Object.keys(schema).length === 1 &&
        '$ref' in schema &&
        typeof schema['$ref'] === 'string'
      ) {
        refs[schemaName] = schema['$ref']
      }
    }
    return refs
  }

  let passthroughRefs = collectPassthroughRefs()
  while (Object.keys(passthroughRefs).length > 0) {
    // iterate through all passthrough refs and replace them with the reffed schema
    recurseObject(spec.spec, ({ value: schema }) => {
      // check if schema has $ref that is a passthrough ref
      if (
        schema === null ||
        schema === undefined ||
        typeof schema !== 'object' ||
        !('$ref' in schema) ||
        typeof schema['$ref'] !== 'string'
      )
        return

      // get name of schema from ref
      const ref = schema['$ref']
      const schemaName = ref.split('/').pop()
      if (schemaName === undefined) return
      // check if schemaName is in refs
      if (!(schemaName in passthroughRefs)) return
      // replace schema with reffed schema
      schema['$ref'] = passthroughRefs[schemaName]
      numberOfPassthroughRefsFixed++
    })

    // delete all schemas that are passthrough refs
    for (const schemaName in passthroughRefs) {
      delete spec.spec.components.schemas[schemaName]
    }

    passthroughRefs = collectPassthroughRefs()
  }

  return numberOfPassthroughRefsFixed
}
