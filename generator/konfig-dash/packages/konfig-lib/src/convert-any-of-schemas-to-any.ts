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
          // If there is only one option, then just use that option
          if (schema[key].anyOf.length === 1) {
            schema[key] = schema[key].anyOf[0]
          } else {
            schema[key] = {}
          }
        }
      }
    }
  })
}
