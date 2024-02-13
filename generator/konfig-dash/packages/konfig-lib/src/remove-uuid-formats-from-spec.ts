import { Spec } from './parseSpec'
import { recurseObject } from './recurseObject'

// remove uuid format from any "string" type schemas
// Why? Well SnapTrade has the following schema:
/*
        - in: query
          required: false
          name: brokerage_authorizations
          description:
            Optional. Comma seperated list of authorization IDs (only use if
            filtering is needed on one or more authorizations).
          schema:
            type: string
            format: uuid
            example: 917c8734-8470-4a3e-a18f-57c3f2ee6631
    */
// But then I realized the whole use of the "Guid" class in C# is actually a bit annoying when all other languages
// will accept a string type for a UUID. So I decided to remove the format from all string types in C#.
// Update: It was also the case for Swift that the "uuid" format was annoying and a net negative in terms of ergonomics
export function removeUuidFormatsFromSpec({ spec }: { spec: Spec }) {
  recurseObject(spec.spec, ({ value: schema }) => {
    if (schema === null) return
    if (typeof schema !== 'object') return
    if (schema['type'] !== 'string') return
    if (schema['format'] !== 'uuid') return
    delete schema['format']
    // but also preserve it as a vendor extension
    schema['x-uuid'] = true
  })
}
