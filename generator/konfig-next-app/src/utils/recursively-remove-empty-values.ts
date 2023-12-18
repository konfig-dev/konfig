import { FormInputValues } from './generate-initial-operation-form-values'
import { isNonEmpty } from './is-non-empty'

/**
 * Useful for pruning tree of argument values to only those that are
 * significant when constructing the SDK method call
 * @param object  The object to recursively remove empty values from
 * @returns The object with empty values removed
 */
export function recursivelyRemoveEmptyValues(
  object: FormInputValues[string]
): FormInputValues[string] {
  if (typeof object !== 'object') return object

  if (Array.isArray(object)) {
    // remove all empty values from array and return
    const filtered = (object as any)
      .filter((p: any) => isNonEmpty(p))
      .map((p: any) => recursivelyRemoveEmptyValues(p))
    return filtered
  }

  if (object instanceof File) return object

  const clone = { ...object }
  Object.entries(object).forEach(([key, value]) => {
    if (typeof value === 'object') {
      clone[key] = recursivelyRemoveEmptyValues(value)
      if (!isNonEmpty(clone[key])) delete clone[key]
    } else if (!isNonEmpty(value)) {
      delete clone[key]
    }
  })
  return clone
}
