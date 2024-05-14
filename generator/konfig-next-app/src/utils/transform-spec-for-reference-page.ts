import { Spec, recurseObject, resolveRef } from 'konfig-lib'

/**
 * Handle the quirks that come with OpenAPI specification so the rest of the
 * front-end React code isn't so convoluted. Instead all the convoluted junk can
 * be handled here.
 *
 * 5/14/2024 (Dylan): Fixing a bug with grabbing the schema and description from
 * an allOf schema for SnapTrade and saw that I commented out code here that
 * converts allOf to a nicer schema so the React code is less convoluted. I am
 * not sure what is the best way moving forward but for now i'll just edit the
 * places that need to handle the complexity such as grabbing the schema name
 * and move on.
 */
export function transformSpecForReferencePage({ spec }: { spec: Spec }) {
  if (spec.specDereferenced === null) throw Error("This shouldn't happen")

  /**
   * Find all circular dependencies and remove them by replacing the "$ref" object that causes the circular dependency
   * with a placeholder object: { description: "Circular reference" }.
   *
   * To detect a circular dependency, we track path --> $ref with a map and if
   * we traverse a path that starts with a path in the map and $ref values
   * match, we know we have a circular dependency and we should replace the $ref
   * with a placeholder object.
   */
  const circularDependencies: Record<string, string> = {}
  recurseObject(spec.specDereferenced, ({ value: schema, path }) => {
    if (schema === null) return
    if (typeof schema !== 'object') return

    if (!('$ref' in schema)) return

    const pathKey = path.join('.')
    const matchingPaths = Object.keys(circularDependencies).filter((p) =>
      pathKey.startsWith(p)
    )

    for (const p of matchingPaths) {
      const ref = circularDependencies[p]
      if (ref === schema['$ref']) {
        schema.description = `Circular reference to ${ref} removed by Konfig`
        delete schema['$ref']
      }
    }

    const resolved = resolveRef({ refOrObject: schema, $ref: spec.$ref })
    Object.assign(schema, resolved)
    circularDependencies[pathKey] = schema['$ref']
    delete schema['$ref']
  })

  /**
   * Turn allOf / oneOf / anyOf with a single item into a regular schema
   */
  // recurseObject(spec.specDereferenced, ({ value: schema }) => {
  //   if (schema === null) return
  //   if (typeof schema !== 'object') return

  //   if ('$ref' in schema) {
  //     throw Error(`$ref should not be in schema: ${JSON.stringify(schema)}`)
  //   }

  //   const schemas = getPolyMorphic(schema)
  //   if (!Array.isArray(schemas)) return

  //   if (schemas.length !== 1) return
  //   const singleSchema = schemas[0]
  //   if (singleSchema === undefined) throw Error("This shouldn't happen")

  //   console.log('transforming:', schema)

  //   // delete allOf / oneOf / anyOf
  //   delete schema.oneOf
  //   delete schema.anyOf
  //   delete schema.allOf

  //   // assign singleSchema to schema
  //   Object.assign(schema, singleSchema)
  // })
}

// function getPolyMorphic(schema: SchemaObject) {
//   if (schema.oneOf !== undefined) {
//     return schema.oneOf
//   } else if (schema.anyOf !== undefined) {
//     return schema.anyOf
//   } else if (schema.allOf !== undefined) {
//     return schema.allOf
//   } else {
//     return undefined
//   }
// }
