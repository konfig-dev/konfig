import { Parameter } from '@/components/OperationParameter'

// to ensure required parameters always show up first in the UI
export function sortParametersByRequired(parameters: Parameter[]): Parameter[] {
  return parameters.sort((a, b) => {
    if (a.required && !b.required) {
      return -1
    }
    if (!a.required && b.required) {
      return 1
    }
    return 0
  })
}
