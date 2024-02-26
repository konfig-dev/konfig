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

  const collectPassthroughRefs = (): [string, string][] => {
    if (
      spec.spec.components === undefined ||
      spec.spec.components.schemas === undefined
    )
      return []
    // iterate through all components.schemas and collect list of schemas that are passthrough refs
    // so the map contains values like "Level1" -> "#/components/schemas/Level2"
    // where Level1 is a schema that is just a $ref to Level2
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
    const passthroughRefs = Object.entries(refs)

    // refs contains a mapping of source to destination
    // ex: "Leve1": -> "#/components/schemas/Level2"
    // topologically sort passthrough refs so we can replace them in order
    // ex: [Level1, "#/components/schemas/Level2"], [Level2, "#/components/schemas/Level3"], ...
    const sortedPassthroughRefs: [string, string][] = []
    const visited: Record<string, boolean> = {}
    const visit = (source: string) => {
      if (visited[source]) return
      visited[source] = true
      if (!(source in refs)) return
      const destination = refs[source]
      visit(destination.split('/').pop() || '')
      // prepend source to the list
      sortedPassthroughRefs.unshift([source, destination])
    }
    for (const [source] of passthroughRefs) {
      visit(source)
    }
    return sortedPassthroughRefs
  }

  let passthroughRefs = collectPassthroughRefs()
  console.log(passthroughRefs)
  // iterate through all passthrough refs and replace them with the reffed schema
  for (const [source, destination] of passthroughRefs) {
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
      // check if schemaName matches name of passthrough ref (e.g. "source")
      if (schemaName !== source) return
      // replace schema with reffed schema
      schema['$ref'] = destination
      numberOfPassthroughRefsFixed++
    })
    delete spec.spec.components.schemas[source]
  }

  return numberOfPassthroughRefsFixed
}
