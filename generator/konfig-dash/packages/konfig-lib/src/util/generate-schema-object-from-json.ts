import { OpenAPIV3, OpenAPIV3_1 } from 'openapi-types'
import { SchemaObject, Spec } from '../parseSpec'
import { ReferenceObject, resolveRef } from '../resolveRef'
import { OpenApiVersion } from './get-oas-version'
import { Json } from './json-schema'

export function generateSchemaObjectFromJson({
  json,
  version,
  depth = 0,
}: {
  json: Json
  version: OpenApiVersion
  depth?: number
}): SchemaObject {
  if (typeof json === 'number') {
    // TODO: Consider adding option to be more strict by inferring "integer"
    // type
    // if (Number.isInteger(json)) {
    //   return {
    //     type: 'integer',
    //     example: json,
    //   }
    // }
    return {
      type: 'number',
      example: json,
    }
  }
  if (typeof json === 'string') {
    return {
      type: 'string',
      example: json,
    }
  }

  if (typeof json === 'boolean') {
    return {
      type: 'boolean',
      example: json,
    }
  }

  if (json === null) {
    if (version === '3.0.x') {
      return Object.assign(
        {
          type: 'string',
          nullable: true,
        },
        { 'x-konfig-null-placeholder': true }
      ) as SchemaObject
    } else
      return Object.assign(
        {
          type: 'null',
        },
        { 'x-konfig-null-placeholder': true }
      ) as SchemaObject
  }

  if (Array.isArray(json)) {
    if (json.length === 0) {
      return {
        type: 'array',
        items: { type: 'string' },
      }
    }
    return {
      type: 'array',
      items: reduceSchemaObjects({
        schemaObjects: json.map((item) =>
          generateSchemaObjectFromJson({
            json: item,
            version,
            depth: depth + 1,
          })
        ),
      }),
      ...(depth === 0 ? { example: json } : {}),
    }
  }

  return {
    type: 'object',
    properties: Object.fromEntries(
      Object.entries(json).map(([field, json]) => [
        field,
        generateSchemaObjectFromJson({ json, version, depth: depth + 1 }),
      ])
    ),
    ...(depth === 0 ? { example: json } : {}),
  }
}

export type SchemaOrReference = SchemaObject | ReferenceObject
export type NonArraySchemaObject =
  | OpenAPIV3.NonArraySchemaObject
  | OpenAPIV3_1.NonArraySchemaObject
export type ArraySchemaObject =
  | OpenAPIV3.ArraySchemaObject
  | OpenAPIV3_1.ArraySchemaObject

export function reduceSchemaObjects({
  schemaObjects,
}: {
  schemaObjects: OneOf
}): SchemaOrReference {
  const merged = schemaObjects.reduce((a, b) => mergeSchemaObject({ a, b }))
  return merged
}

/**
 * Handle the case where oneOf contains oneOf schemas by merging schemas inside
 * of the inner oneOf into the top-level oneOf
 *
 * Why did Dylan create this function?
 * This was the case in Nuitee's example JSONs because a particular array had
 * objects with fields that produced 3 unique schemas where one of them was a
 * oneOf schema. But thae oneOf schema included schemas that were exactly the
 * same as the other two schemas. Thus causing example values to valid for > 1
 * schema in the oneOf at all times.
 */
export function mergeOneOfsInOneOf({
  schemaObject,
}: {
  schemaObject: SchemaOrReference
}): SchemaOrReference {
  if ('$ref' in schemaObject && schemaObject.$ref !== undefined) {
    return schemaObject
  }
  if (!('oneOf' in schemaObject)) {
    return schemaObject
  }
  if (schemaObject.oneOf === undefined) {
    return schemaObject
  }
  const oneOf = schemaObject.oneOf
  const flattened: OneOf = (oneOf as any[]).reduce(
    (oneOf: OneOf, schemaObject: SchemaOrReference) => {
      if ('oneOf' in schemaObject && schemaObject.oneOf !== undefined) {
        // fold all schemas in schemaObject.oneOf into the top-level oneOf by merging them
        const folded = [...oneOf, ...schemaObject.oneOf].reduce(
          (oneOf, schemaObject) => {
            return mergeOneOfAndSchemaObject({ oneOf, schemaObject })
          },
          [] as OneOf
        )
        return folded
      }
      return [...oneOf, schemaObject] as OneOf
    },
    [] as OneOf
  )

  return {
    oneOf: flattened,
    // add example from the first schemaObject if it is defined
    ...(schemaObject.example !== undefined
      ? { example: schemaObject.example }
      : {}),
  }
}

/**
 * Handle the case where oneOf is an array of 1 element. In that case we should just return the element as the schema.
 */
export function unrollOneOf({
  schemaObject,
  $ref,
}: {
  schemaObject: SchemaOrReference
  $ref?: Spec['$ref']
}): SchemaObject | ReferenceObject {
  if ('oneOf' in schemaObject && schemaObject.oneOf !== undefined) {
    // handle x-konfig-null-placeholder which is essentially a "poison null pill".
    // if any schemaObject has a schema with the extension, remove it and apply "nullable" to all other schemas
    let poisoned = false
    let allPoisoned = true
    for (const schema of schemaObject.oneOf) {
      if ('x-konfig-null-placeholder' in schema) poisoned = true
      else allPoisoned = false
    }
    const oneOf: (SchemaObject | ReferenceObject)[] = []
    for (const schema of schemaObject.oneOf) {
      if ('x-konfig-null-placeholder' in schema) {
        continue
      }
      let resolvedSchema = schema
      if ('$ref' in schema) {
        if ($ref === undefined) {
          throw Error('Not implemented')
        }
        resolvedSchema = resolveRef({ $ref, refOrObject: schema })
      }

      if (poisoned) {
        ;(resolvedSchema as any).nullable = true
      }
      oneOf.push(resolvedSchema)
    }
    schemaObject.oneOf = oneOf

    if (schemaObject.oneOf.length === 1) return schemaObject.oneOf[0]
    if (allPoisoned)
      return {
        type: 'string',
        nullable: true,
        'x-konfig-null-placeholder': true,
      } as SchemaObject
  }

  return schemaObject
}

export function mergeSchemaObject({
  a,
  b,
  $ref,
}: {
  a: SchemaOrReference
  b: SchemaOrReference
  $ref?: Spec['$ref']
}): SchemaOrReference {
  function merge() {
    if (a === undefined) return b
    if (b === undefined) return a
    a = $ref !== undefined ? resolveRef({ $ref, refOrObject: a }) : a
    b = $ref !== undefined ? resolveRef({ $ref, refOrObject: b }) : b
    if ('oneOf' in a) {
      if ('oneOf' in b) {
        if (a.oneOf !== undefined && b.oneOf !== undefined) {
          return {
            oneOf: mergeOneOfs({ a: a.oneOf, b: b.oneOf }),
          }
        }
        if (b.oneOf !== undefined) {
          return {
            oneOf: mergeOneOfAndSchemaObject({
              oneOf: b.oneOf,
              schemaObject: a,
              $ref,
            }),
          }
        }
      }
      if (a.oneOf !== undefined) {
        return {
          oneOf: mergeOneOfAndSchemaObject({
            oneOf: a.oneOf,
            schemaObject: b,
            $ref,
          }),
        }
      }
    }
    return {
      oneOf: mergeOneOfAndSchemaObject({
        oneOf: [a],
        schemaObject: b,
        $ref,
      }),
      ...('example' in b ? { example: b.example } : {}),
    }
  }
  return unrollOneOf({
    schemaObject: mergeOneOfsInOneOf({ schemaObject: merge() }),
    $ref,
  })
}

export type OneOf = SchemaOrReference[]
export function mergeOneOfs({ a, b }: { a: OneOf; b: OneOf }): OneOf {
  return b.reduce((oneOf, schemaObject) => {
    return mergeOneOfAndSchemaObject({ oneOf, schemaObject })
  }, a)
}

export function mergeOneOfAndSchemaObject({
  oneOf,
  schemaObject,
  $ref,
}: {
  oneOf: OneOf
  schemaObject: SchemaOrReference
  $ref?: Spec['$ref']
}): OneOf {
  if ('$ref' in schemaObject) {
    return oneOf.concat(schemaObject)
  }
  if ('x-konfig-null-placeholder' in schemaObject) {
    return oneOf.concat(schemaObject)
  }
  // if schemaObject is primitive then check if oneOf already has that primitive
  if (typeof schemaObject.type === 'string') {
    if (isTypePrimitive(schemaObject.type)) {
      const existingSchemaObject = oneOf
        .map((so) => {
          const resolvedSchemaObject =
            $ref !== undefined ? resolveRef({ $ref, refOrObject: so }) : so
          return resolvedSchemaObject
        })
        .find((so) => {
          return (
            !('$ref' in so) &&
            so.type === schemaObject.type &&
            !('x-konfig-null-placeholder' in so)
          )
        })

      if (existingSchemaObject !== undefined) {
        // Carry nullable over
        if ('nullable' in schemaObject && schemaObject.nullable) {
          if ('$ref' in existingSchemaObject) {
            throw Error('Not implemented')
          } else {
            ;(existingSchemaObject as OpenAPIV3.SchemaObject).nullable = true
          }
        }

        // Carry example over if it doesn't exist
        if (
          'example' in schemaObject &&
          schemaObject.example &&
          (!('example' in existingSchemaObject) ||
            existingSchemaObject.example === undefined)
        ) {
          if ('$ref' in existingSchemaObject) {
            throw Error('Not implemented')
          } else {
            existingSchemaObject.example = schemaObject.example
          }
        }
        return oneOf
      }

      return oneOf.concat(schemaObject)
    }
    if (schemaObject.type === 'array') {
      const existingArraySchemaObject = oneOf.find(
        (so) => !('$ref' in so) && so.type === 'array'
      )
      if (existingArraySchemaObject === undefined)
        return oneOf.concat(schemaObject)
      if ('$ref' in existingArraySchemaObject) return oneOf.concat(schemaObject)
      if (existingArraySchemaObject.type !== 'array')
        throw Error('Schema should be array')
      existingArraySchemaObject.items = mergeSchemaObject({
        a: existingArraySchemaObject.items,
        b: schemaObject.items,
        $ref,
      })
      return oneOf
    }
    // if schemaObject is object then merge the object schemas
    if (schemaObject.type === 'object') {
      if (schemaObject.properties === undefined) return oneOf
      const existingSchemaObject = oneOf
        .map((so) => {
          const resolvedSchemaObject = $ref
            ? resolveRef({ $ref, refOrObject: so })
            : so
          return resolvedSchemaObject
        })
        .find((so) => {
          return !('$ref' in so) && so.type === 'object'
        })
      if (existingSchemaObject === undefined) return oneOf.concat(schemaObject)
      if ('$ref' in existingSchemaObject) return oneOf.concat(schemaObject)
      if (schemaObject.properties === undefined) return oneOf
      if (Object.keys(schemaObject.properties).length === 0) return oneOf

      if (existingSchemaObject.properties === undefined)
        existingSchemaObject.properties = {}

      for (const key of Object.keys(schemaObject.properties)) {
        const existingFieldSchema = existingSchemaObject.properties[key]
        const newFieldSchema = schemaObject.properties[key]
        const mergedSchemaObject = mergeSchemaObject({
          a: existingFieldSchema,
          b: newFieldSchema,
          $ref,
        })
        existingSchemaObject.properties[key] = mergedSchemaObject

        // if schemaObject does not have required field then remove it from
        // existingSchemaObject
        if (
          existingSchemaObject.required !== undefined &&
          !schemaObject.required?.includes(key)
        ) {
          existingSchemaObject.required = existingSchemaObject.required.filter(
            (requiredField) => requiredField !== key
          )
        }
      }
      return oneOf
    }
  }
  return oneOf.concat(schemaObject)
}

function isTypePrimitive(type: string) {
  return (
    type === 'boolean' ||
    type === 'integer' ||
    type === 'null' ||
    type === 'number' ||
    type === 'string'
  )
}
