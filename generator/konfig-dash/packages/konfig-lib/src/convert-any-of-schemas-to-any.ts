import { Spec } from './parseSpec'
import { recurseObject } from './recurseObject'

export function convertAnyOfSchemasToAny({ spec }: { spec: Spec['spec'] }) {
  recurseObject(spec, ({ value: schema }) => {
    if (
      typeof schema === 'object' &&
      !Array.isArray(schema) &&
      schema != null
    ) {
      for (const key in schema) {
        if (
          typeof schema[key] === 'object' &&
          schema[key] !== null &&
          'anyOf' in schema[key]
        ) {
          if (schema[key].anyOf.length > 1) {
            // if all schemas are strings then just use string
            if (
              schema[key].anyOf.every(
                (schema: any) =>
                  typeof schema === 'object' && schema.type === 'string'
              )
            ) {
              schema[key] = { type: 'string' }
            } else {
              schema[key] = {}
            }
          }
        }
      }
    }
  })
}
