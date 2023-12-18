import { FormInputValues } from './generate-initial-operation-form-values'

/**
 * Returns whether or not the parameter is non-empty (i.e. not undefined, not an empty string, not an empty array).
 * Recursively checks if the parameter is an object and checks if any of the values are non-empty
 * @param parameter The parameter to check
 * @returns boolean
 */
export function isNonEmpty(parameter: FormInputValues[string]): boolean {
  if (parameter === undefined) return false
  if (!Array.isArray(parameter)) {
    if (parameter instanceof File) return true
    if (typeof parameter === 'object') {
      return Object.values(parameter).filter((p) => isNonEmpty(p)).length > 0
    }
    return parameter !== ''
  }
  // filter parameter for non-empty filters
  const filtered: FormInputValues[string][] = []
  for (const p of parameter) {
    if (isNonEmpty(p)) filtered.push(p)
  }

  return filtered.length > 0
}
