import { recurseObject } from '../recurseObject'
import { Spec } from '../parseSpec'

export function transformSingletonAnyOfSchema({ spec }: { spec: Spec }): void {
  recurseObject(spec.spec, ({ value: schema }) => {
    if (schema === null) return
    if (typeof schema !== 'object') return
    if (schema['anyOf'] === undefined) return
    if (!Array.isArray(schema['anyOf'])) return
    if (schema['anyOf'].length !== 1) return
    if ('description' in schema) return

    // pull the single anyOf schema out of the array
    const anyOfSchema = schema['anyOf'][0]
    if (typeof anyOfSchema !== 'object') return
    if (anyOfSchema === null) return

    // delete all properties on schema
    Object.keys(schema).forEach((key) => delete schema[key])
    // spread anyOfSchema onto schema
    Object.assign(schema, anyOfSchema)
  })
}