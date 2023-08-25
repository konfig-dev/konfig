import { NumberInput, TextInput } from '@mantine/core'
import { Parameter } from './OperationParameter'
import { useFormContext } from '@/utils/operation-form-context'

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

// You have to use "-" instead of "." because Mantine forms uses "." for nested
// objects. See https://mantine.dev/core/forms/#nested-objects
export function generateParameterInputName(parameter: Parameter) {
  return `parameter/${parameter.in}/${parameter.name}`
}

function example(example: unknown) {
  if (typeof example === 'string') return example
  if (typeof example === 'number') return example.toString()
  if (typeof example === 'boolean') return example.toString()
  if (typeof example === 'object') return JSON.stringify(example)
  return ''
}
