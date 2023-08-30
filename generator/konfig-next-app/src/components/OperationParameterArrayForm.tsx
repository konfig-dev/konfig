import { useFormContext } from '@/utils/operation-form-context'
import { Paper } from '@mantine/core'
import { Parameter } from './OperationParameter'
import { generateParameterInputName } from './ParameterInput'

export function OperationParameterArrayForm({
  param,
  prefix,
}: {
  param: Parameter
  prefix?: string
}) {
  const form = useFormContext()
  const formInputName = generateParameterInputName(param)
  const inputProps = form.getInputProps(formInputName)
  param.schema.type === 'array'
  return (
    Array.isArray(inputProps.value) &&
    inputProps.value.map((value, index) => (
      <Paper key={index} radius="xs" p="xs" withBorder>
        {JSON.stringify(value, undefined, 2)}
      </Paper>
    ))
  )
}
