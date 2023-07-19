import { Spec } from '../parseSpec'
import { resolveRef } from '../resolveRef'
import camelcase from './camelcase'
import {
  ArraySchemaObject,
  NonArraySchemaObject,
} from './generate-schema-object-from-json'

/**
 * Iteratively transforms all inner object or array type schemas into their own schema
 * in an OpenAPI Specification.
 * @param openApiDoc - The OpenAPI document to transform.
 * @returns The transformed OpenAPI document.
 */
export function transformInnerSchemas({ spec }: { spec: Spec }) {
  while (complexInnerSchemaDetected({ spec })) {
    extractComplexInnerSchema({ spec })
  }
}

function extractComplexInnerSchema({ spec }: { spec: Spec }) {
  visitComplexInnerSchema({
    spec,
    visit: ({ schemaName, schema, innerSchema, property }) => {
      if (spec.spec.components === undefined) return
      if (spec.spec.components.schemas === undefined) return
      const newSchemaName = generateNewSchemaName({ schemaName, property })
      const newSchemaRef = {
        $ref: `#/components/schemas/${newSchemaName}`,
      }
      // create new schema on #/components/schemas
      spec.spec.components.schemas[newSchemaName] = innerSchema
      // replace inner schema with $ref
      if (property) {
        if (schema.properties === undefined) return
        schema.properties[property] = newSchemaRef
      } else if (property === undefined) {
        schema.items = newSchemaRef
      }
    },
  })
}

function generateNewSchemaName({
  schemaName,
  property,
}: {
  schemaName: string
  property?: string
}) {
  if (property !== undefined)
    return `${schemaName}${camelcase(property, { pascalCase: true })}`
  return `${schemaName}Item`
}

function complexInnerSchemaDetected({ spec }: { spec: Spec }): boolean {
  return visitComplexInnerSchema({ spec, visit: () => true })
}

function visitComplexInnerSchema({
  spec: { spec, $ref },
  visit,
}: {
  spec: Spec
  visit: (
    args:
      | {
          innerSchema: NonArraySchemaObject | ArraySchemaObject
          property: string
          schema: NonArraySchemaObject
          schemaName: string
        }
      | {
          innerSchema: NonArraySchemaObject | ArraySchemaObject
          schema: ArraySchemaObject
          schemaName: string
          property: undefined
        }
  ) => boolean | void
}): boolean {
  if (spec.components === undefined) return false
  if (spec.components.schemas === undefined) return false
  for (const schemaName in spec.components.schemas) {
    const schema = resolveRef({
      refOrObject: spec.components.schemas[schemaName],
      $ref,
    })
    if (schema.type !== 'array' && schema.type !== 'object') continue
    if (schema.type === 'array') {
      const refOrObject = schema.items
      if ('$ref' in refOrObject) continue
      const innerSchema = resolveRef({
        refOrObject,
        $ref,
      })
      if (innerSchema.type === 'array' || innerSchema.type === 'object') {
        const visited = visit({
          innerSchema,
          schema,
          property: undefined,
          schemaName,
        })
        if (visited) return visited
      }
    }
    if (schema.type === 'object') {
      for (const property in schema.properties) {
        const refOrObject = schema.properties[property]
        if ('$ref' in refOrObject) continue
        const innerSchema = resolveRef({
          refOrObject,
          $ref,
        })
        if (innerSchema.type === 'array' || innerSchema.type === 'object') {
          const visited = visit({
            innerSchema,
            schema,
            property,
            schemaName,
          })
          if (visited) return visited
        }
      }
    }
  }
  return false
}
