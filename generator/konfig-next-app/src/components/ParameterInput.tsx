import { Input, NumberInput, TextInput } from '@mantine/core'
import { Parameter } from './OperationParameter'
import { useFormContext } from '@/utils/operation-form-context'

export function ParameterInput({ parameter }: { parameter: Parameter }) {
  const form = useFormContext()
  if (parameter.schema.type === 'integer') {
    return (
      <NumberInput
        {...form.getInputProps(parameter.name)}
        radius="xs"
        placeholder={example(parameter.schema.example)}
      />
    )
  }
  if (parameter.schema.type === 'number') {
    return (
      <NumberInput
        {...form.getInputProps(parameter.name)}
        radius="xs"
        precision={2}
        placeholder={example(parameter.schema.example)}
      />
    )
  }
  return (
    <TextInput
      {...form.getInputProps(parameter.name)}
      radius="xs"
      placeholder={example(parameter.schema.example)}
    />
  )
}

function example(example: unknown) {
  if (typeof example === 'string') return example
  if (typeof example === 'number') return example.toString()
  if (typeof example === 'boolean') return example.toString()
  if (typeof example === 'object') return JSON.stringify(example)
  return ''
}
