export type ValidatorFunction = (
  value: unknown
) =>
  | string
  | number
  | true
  | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  | React.ReactFragment
export function isNotEmpty(error?: React.ReactNode): ValidatorFunction {
  const func = (value: unknown) => {
    if (typeof value === 'string' && value.trim().length === 0) {
      return error || 'Value cannot be empty'
    }
    if (typeof value === 'number' && isNaN(value)) {
      return error || 'Value cannot be empty'
    }
    if (Array.isArray(value) && value.length === 0) {
      return error || 'Value cannot be empty'
    }
    if (value === null || value === undefined) {
      return error || 'Value cannot be empty'
    }
    return null
  }
  return func as ValidatorFunction
}
