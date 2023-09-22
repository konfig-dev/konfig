import { Spec } from './parseSpec'
import { recurseObject } from './recurseObject'

export function convertOneOfSchemasToAny({ spec }: { spec: Spec['spec'] }) {
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
          'oneOf' in schema[key]
        ) {
          schema[key] = {}
        }
      }
    }
  })
}
