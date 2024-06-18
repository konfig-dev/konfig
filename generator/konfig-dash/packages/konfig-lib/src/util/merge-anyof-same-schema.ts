import { recurseObject } from '../recurseObject'
import { Spec, SchemaObject} from '../parseSpec'
import { resolveRef } from '../resolveRef'
import { mergeSchemaObject } from './generate-schema-object-from-json'
import { generateEncapsulatingName } from '../generate-encapsulating-name'

/**
 * Merge anyOf schemas where all schemas are object type schemas
 * Why? Newscatcher's API only returned anyOf schemas and its not good DX
 * to have to deal with anyOf schemas in Java SDK
 */
export function mergeAnyOfSameSchema({ spec }: { spec: Spec }): void {
    recurseObject(spec.spec, ({ value: schema }) => {
        if (schema === null) return
        if (typeof schema !== 'object') return
        if (schema['anyOf'] === undefined) return
        if (!Array.isArray(schema['anyOf'])) return
        if (schema['anyOf'].length === 0) return
  
        // check if all schemas are the same type
        const schemaTypes = schema['anyOf'].map((schemaOrRef) => {
          const schema = resolveRef({
            refOrObject: schemaOrRef,
            $ref: spec.$ref,
          })
          return schema.type
        })
        const allSchemasAreTheSameType = schemaTypes.every(
          (type) => type === schemaTypes[0]
        )
        if (!allSchemasAreTheSameType) return
  
        // merge all schemas into one schema
        const mergedSchema: SchemaObject = schema['anyOf'].reduce(
          (mergedSchema, schemaOrRef) => {
            const schema = resolveRef({
              refOrObject: schemaOrRef,
              $ref: spec.$ref,
            })
            return mergeSchemaObject({
              a: mergedSchema,
              b: schema,
              $ref: spec.$ref,
            })
          }
        )
  
        // ensure all schemas have a $ref property
        const allSchemasAreRefs = schema['anyOf'].every((schemaOrRef) => {
          return schemaOrRef['$ref'] !== undefined
        })
  
        if (!allSchemasAreRefs) {
          // delete all properties on schema
          Object.keys(schema).forEach((key) => delete schema[key])
          // spread mergedSchema onto schema
          Object.assign(schema, mergedSchema)
          return
        }
  
        // Add merged schema to a components.schemas under a name combining all the schema names
        const schemaNames = schema['anyOf'].map((schema: any) => {
          // assume its a JSON Ref and we can extract the component name from it
          const refString = schema['$ref']
          const refStringSplit = refString.split('/')
          const componentNameFromRef = refStringSplit[refStringSplit.length - 1]
  
          const resolvedSchema = resolveRef({
            refOrObject: schema,
            $ref: spec.$ref,
          })
  
          const componentName =
            'title' in resolvedSchema &&
            typeof resolvedSchema['title'] === 'string'
              ? resolvedSchema.title
              : componentNameFromRef
  
          return componentName
        })
        const generatedName = generateEncapsulatingName(
          schemaNames,
          spec.spec.components?.schemas
            ? Object.keys(spec.spec.components.schemas)
            : []
        )
        if (spec.spec.components === undefined) spec.spec.components = {}
        if (spec.spec.components.schemas === undefined)
          spec.spec.components.schemas = {}
        spec.spec.components.schemas[generatedName] = mergedSchema
        delete schema['anyOf']
        schema['$ref'] = `#/components/schemas/${generatedName}`
      })
}