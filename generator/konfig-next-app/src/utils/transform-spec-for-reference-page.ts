import { SchemaObject, Spec, recurseObject } from 'konfig-lib'

/**
 * Handle the quirks that come with OpenAPI specification so the rest of the
 * front-end React code isn't so convoluted. Instead all the convoluted junk can
 * be handled here.
 */
export function transformSpecForReferencePage({ spec }: { spec: Spec }) {
  if (spec.specDereferenced === null) throw Error("This shouldn't happen")

  /**
   * Turn allOf / oneOf / anyOf with a single item into a regular schema
   */
  recurseObject(spec.specDereferenced, ({ value: schema }) => {
    if (schema === null) return
    if (typeof schema !== 'object') return

    if ('$ref' in schema) throw Error("This shouldn't happen")

    const schemas = getPolyMorphic(schema)
    if (!Array.isArray(schemas)) return

    if (schemas.length !== 1) return
    const singleSchema = schemas[0]
    if (singleSchema === undefined) throw Error("This shouldn't happen")

    console.log('transforming:', schema)

    // delete allOf / oneOf / anyOf
    delete schema.oneOf
    delete schema.anyOf
    delete schema.allOf

    // assign singleSchema to schema
    Object.assign(schema, singleSchema)
  })
}

function getPolyMorphic(schema: SchemaObject) {
  if (schema.oneOf !== undefined) {
    return schema.oneOf
  } else if (schema.anyOf !== undefined) {
    return schema.anyOf
  } else if (schema.allOf !== undefined) {
    return schema.allOf
  } else {
    return undefined
  }
}
