import { Spec, recurseObject } from 'konfig-lib'

/**
 * "additionalProperties: false" causes issue when mocking an API.  The
 * following type of errors will appear for no reason: "✖  error     Request
 * body must NOT have additional properties; found 'userId'" but userId is
 * actually a property in the schema so the error is just wrong.  To get around
 * this I added this rule to remove "additionalProperties: false" from the
 * schema.
 */
export function fixAdditionalPropertiesFalse({ spec }: { spec: Spec }): number {
  let numberOfAdditionalPropertiesFixed = 0
  recurseObject(spec.spec, ({ value: schema }) => {
    if (typeof schema !== 'object') return
    if (schema === null) return
    if (schema.type !== 'object') return
    if (schema.additionalProperties === undefined) return
    if (schema.additionalProperties === true) return
    delete schema.additionalProperties
    numberOfAdditionalPropertiesFixed++
  })
  return numberOfAdditionalPropertiesFixed
}
