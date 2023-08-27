import { NumberInput, TextInput } from '@mantine/core'
import { Parameter } from './OperationParameter'
import {
  PARAMETER_FORM_NAME_PREFIX,
  PARAMETER_VALUE_PROPERTY,
} from '@/utils/generate-initial-operation-form-values'
import { useForm, useFormContext } from '@/utils/operation-form-context'

export function ParameterInput({ parameter }: { parameter: Parameter }) {
  const form = useFormContext()
  const formInputName = generateParameterInputName(parameter)
  if (parameter.schema.type === 'integer') {
    return (
      <NumberInput
        {...form.getInputProps(formInputName)}
        radius="xs"
        placeholder={example(parameter.schema.example)}
      />
    )
  }
  if (parameter.schema.type === 'number') {
    return (
      <NumberInput
        {...form.getInputProps(formInputName)}
        radius="xs"
        precision={2}
        placeholder={example(parameter.schema.example)}
      />
    )
  }
  return (
    <TextInput
      {...form.getInputProps(formInputName)}
      radius="xs"
      placeholder={example(parameter.schema.example)}
    />
  )
}

// See https://mantine.dev/core/forms/#nested-objects for explanation of "." protocol
export function generateParameterInputName(parameter: Parameter) {
  return `${PARAMETER_FORM_NAME_PREFIX}.${parameter.name}.${PARAMETER_VALUE_PROPERTY}`
}

function example(example: unknown) {
  if (typeof example === 'string') return example
  if (typeof example === 'number') return example.toString()
  if (typeof example === 'boolean') return example.toString()
  if (typeof example === 'object') return JSON.stringify(example)
  return ''
}
