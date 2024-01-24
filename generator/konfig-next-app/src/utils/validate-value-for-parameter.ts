import { Parameter } from '@/components/OperationParameter'
import { isNotEmpty } from '@mantine/form'
import { FormInputValue } from './generate-initial-operation-form-values'
import { isUUID } from './is-uuid'

export function validateValueForParameter(parameter: Parameter, name: string) {
  return (value: FormInputValue) => {
    console.debug('Validating parameter:', parameter, name, ', value:', value)
    if (parameter.required) {
      const checkRequired = isNotEmpty(`${name} is required`)(value)
      if (checkRequired) return checkRequired
    }
    if (parameter.schema.format === 'uuid') {
      // Ensures that the value is a valid UUID. Other that are considered:
      // Note that in case of empty string, we don't want to validate
      // it, empty string validation should be handled by the required
      // check.
      if (typeof value === 'string' && value !== '' && !isUUID(value))
        return `${parameter.name} is not a valid UUID`
    }
    return false
  }
}
