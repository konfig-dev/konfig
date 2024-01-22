import { Spec, recurseObject } from 'konfig-lib'

/**
 * OAS 3.1 removed the use of "example" property in favor of "examples" property
 *
 * Konfig's generator does not support this yet, so we need to revert it back to "example".
 * But since the new "examples" is an array and the old "example" is a single value, we preserve "examples"
 * under "x-examples"
 */
export async function fixExamplesUsage({
  spec,
}: {
  spec: Spec
}): Promise<number> {
  let numberOfExamplesUsageRemoved = 0

  recurseObject(spec.spec, ({ value: schema }) => {
    if (schema === null) return
    if (typeof schema !== 'object') return

    // if "examples" is not populated then we can skip
    if (schema['examples'] === undefined) return

    // check if "examples" is an array
    if (!Array.isArray(schema['examples'])) return

    // check if "examples" is empty
    if (schema['examples'].length === 0) return

    // set "example" property using first value of "examples"
    schema['example'] = schema['examples'][0]

    // remove "examples" property and add it to "x-examples"
    schema['x-examples'] = schema['examples']
    delete schema['examples']

    numberOfExamplesUsageRemoved++
  })

  return numberOfExamplesUsageRemoved
}
