import { Spec, recurseObject, resolveRef } from 'konfig-lib'

/**
 * OAS 3.1 removed the use of "nullable": true in favor of "anyOf": [{type: "null"}, {type: "string"}]
 *
 * Konfig's generator does not support this yet, so we need to revert it back to "nullable": true
 */
export async function fixAnyOfTypeNullUsage({
  spec,
}: {
  spec: Spec
}): Promise<number> {
  let numberOfAnyOfTypeNullUsagesReverted = 0

  recurseObject(spec.spec, ({ value: schema }) => {
    if (schema === null) return
    if (typeof schema !== 'object') return
    if (schema['anyOf'] === undefined) return
    if (!Array.isArray(schema['anyOf'])) return

    // check if anyOf is size 2 meaning it is a schemas + "type": "null"
    if (schema['anyOf'].length !== 2) return

    // ensure that one of the schemas is a "type": "null"
    const hasNullType = schema['anyOf'].some((schemaOrRef) => {
      const schema = resolveRef({
        refOrObject: schemaOrRef,
        $ref: spec.$ref,
      })
      if (schema === null) return false
      if (typeof schema !== 'object') return false
      if (schema['type'] !== 'null') return false
      return true
    })
    if (!hasNullType) return

    // check if the schema that is not "type": "null" is a "$ref" or inline schema that has a "type" property
    const nonNullSchema = schema['anyOf'].find((schemaOrRef) => {
      const schema = resolveRef({
        refOrObject: schemaOrRef,
        $ref: spec.$ref,
      })
      if (schema === null) return false
      if (typeof schema !== 'object') return false
      if (schema['type'] === 'null') return false
      return true
    })

    // expected to find a nonNullSchema
    if (nonNullSchema === undefined) return

    // check if nonNullSchema is a "$ref"
    const isRef = '$ref' in nonNullSchema

    // if it is a ref then we need to create a new schema for that ref with the "nullable": true property
    // since we can't add "nullable": true to a ref
    if (isRef) {
      const ref = nonNullSchema['$ref']
      const refSchema = resolveRef({
        refOrObject: nonNullSchema,
        $ref: spec.$ref,
      })

      // remove anyOf from schema
      delete schema['anyOf']

      // create copy of referenced schema but also override and extra properties
      // that were on the anyOf schema
      const copyOfSchema = { ...refSchema, ...schema }

      copyOfSchema['nullable'] = true

      const titleFromRef = ref.split('/').pop()

      const newSchemaName = `${titleFromRef}Nullable`

      if (spec.spec.components === undefined) spec.spec.components = {}
      if (spec.spec.components.schemas === undefined)
        spec.spec.components.schemas = {}

      spec.spec.components.schemas[newSchemaName] = copyOfSchema

      // delete all properties on schema to fix "no-$ref-siblings" rule
      Object.keys(schema).forEach((key) => delete schema[key])

      // replace anyOf with ref to new schema
      schema['$ref'] = `#/components/schemas/${newSchemaName}`
    } else {
      // if it is not a ref we can just add the "nullable": true property to the non null schema object
      // and replace the anyOf with the modified non null schema object
      delete schema['anyOf']
      // add all properties from nonNullSchema to schema
      nonNullSchema['nullable'] = true
      Object.assign(schema, nonNullSchema)
    }
    numberOfAnyOfTypeNullUsagesReverted++
  })

  return numberOfAnyOfTypeNullUsagesReverted
}
