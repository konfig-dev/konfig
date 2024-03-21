import { Spec } from './parseSpec'
import equals from 'deep-equal'
import { recurseObject } from './recurseObject'
import { resolveRef } from './resolveRef'

export function handleAllOfWithNullable({ spec }: { spec: Spec }): void {
  // find any object that has "nullable: true" and "allOf" with a single $ref and
  // create a new schema that is the name of the referenced schema suffixed with "Nullable"
  // and replace all objects that are exactly the same as the referenced schema with the new schema
  // the "Nullable" version should be an exact copy of the referenced schema except with "nullable: true"
  recurseObject(spec.spec, ({ value: schema, path }) => {
    if (schema === null) return
    if (typeof schema !== 'object') return
    if (schema['nullable'] !== true) return
    if (schema['allOf'] === undefined) return
    if (!Array.isArray(schema['allOf'])) return
    if (schema['allOf'].length !== 1) return
    const allOfSchemaOrRef = schema['allOf'][0]
    const refString = allOfSchemaOrRef['$ref']
    const refStringSplit = refString.split('/')
    const componentNameFromRef = refStringSplit[refStringSplit.length - 1]
    const resolvedSchema = resolveRef({
      refOrObject: allOfSchemaOrRef,
      $ref: spec.$ref,
    })

    /**
     * Preserve descriptions and other stuff like deprecated: true
     * Copied & modified directly from fix-flatten-singleton-all-of.ts
     */
    let parent: any = spec.spec
    for (let i = 0; i < path.length - 2; i++) {
      parent = parent[path[i]]
    }
    const propertyName = path[path.length - 1]

    console.log(schema)
    console.log(parent)

    if (parent.type === 'object') {
      const parentSchema = parent
      if (parentSchema['x-konfig-properties'] === undefined) {
        parentSchema['x-konfig-properties'] = {}
      }
      for (const key in schema) {
        if (key !== 'allOf') {
          if (parentSchema['x-konfig-properties'][propertyName] === undefined) {
            parentSchema['x-konfig-properties'][propertyName] = {}
          }
          parentSchema['x-konfig-properties'][propertyName][key] = schema[key]
        }
      }
      console.log(parentSchema)
    }

    const componentName =
      'title' in resolvedSchema && typeof resolvedSchema['title'] === 'string'
        ? resolvedSchema.title
        : componentNameFromRef
    const nullableComponentName = `${componentName}Nullable`
    if (spec.spec.components === undefined) spec.spec.components = {}
    if (spec.spec.components.schemas === undefined)
      spec.spec.components.schemas = {}
    if (nullableComponentName in spec.spec.components.schemas) return
    const nullableSchema = { ...resolvedSchema }
    nullableSchema['nullable'] = true
    spec.spec.components.schemas[nullableComponentName] = nullableSchema
    // replace all objects that are exactly the same as the referenced schema (the one with allOf)
    const schemaCopy = { ...schema } // copy the object since it will get mutated below
    recurseObject(spec.spec, ({ value: matchingSchema }) => {
      if (matchingSchema === null) return
      if (typeof matchingSchema !== 'object') return
      if (equals(matchingSchema, schemaCopy)) {
        // remove all properties and assign $ref to nullableComponentName
        Object.keys(matchingSchema).forEach((key) => delete matchingSchema[key])
        matchingSchema['$ref'] = `#/components/schemas/${nullableComponentName}`
      }
    })
  })
}
