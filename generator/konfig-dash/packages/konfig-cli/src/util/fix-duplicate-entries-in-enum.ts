import { Spec, recurseObject } from 'konfig-lib'

/**
 * De-duplicate entries in enum
 */
export async function fixDuplicateEntriesInEnum({
  spec,
}: {
  spec: Spec
}): Promise<number> {
  let numberOfDuplicateEntriesInEnumRemoved = 0

  recurseObject(spec.spec, ({ value: schema }) => {
    if (schema === null) return
    if (typeof schema !== 'object') return

    // if "enum" is not populated then we can skip
    if (schema['enum'] === undefined) return

    // check if "enum" is an array
    if (!Array.isArray(schema['enum'])) return

    // check if "enum" is empty
    if (schema['enum'].length === 0) return

    // remove duplicate entries in "enum"
    schema['enum'] = [...new Set(schema['enum'])]

    numberOfDuplicateEntriesInEnumRemoved++
  })

  return numberOfDuplicateEntriesInEnumRemoved
}
