import { NumberInput, SegmentedControl, TextInput } from '@mantine/core'
import { Parameter } from './OperationParameter'
import {
  PARAMETER_FORM_NAME_PREFIX,
  PARAMETER_VALUE_PROPERTY,
} from '@/utils/generate-initial-operation-form-values'
import { useForm, useFormContext } from '@/utils/operation-form-context'
import { IconCalendar } from '@tabler/icons-react'
import { DatePickerInput } from '@mantine/dates'
import { parseDateString } from '@/utils/parse-date-string'

export function ParameterInput({ parameter }: { parameter: Parameter }) {
  const form = useFormContext()
  const formInputName = generateParameterInputName(parameter)
  const inputProps = form.getInputProps(formInputName)
  if (parameter.schema.type === 'integer') {
    return (
      <NumberInput
        {...inputProps}
        radius="xs"
        placeholder={example(parameter.schema.example)}
      />
    )
  }
  if (parameter.schema.type === 'number') {
    return (
      <NumberInput
        {...inputProps}
        radius="xs"
        precision={2}
        placeholder={example(parameter.schema.example)}
      />
    )
  }
  if (
    parameter.schema.type === 'string' &&
    parameter.schema.format === 'date'
  ) {
    const { value, onChange, ...rest } = inputProps
    return (
      <DatePickerInput
        icon={<IconCalendar size="1.1rem" stroke={1.5} />}
        clearable
        value={parseDateString(value)}
        onChange={(date) => {
          if (date === null) {
            onChange('')
            return
          }
          if (date instanceof Date) {
            // converts date to YYYY-MM-DD format
            onChange(date.toISOString().split('T')[0])
          }
        }}
        {...rest}
      />
    )
  }
  if (parameter.schema.type === 'boolean') {
    return (
      <SegmentedControl
        value={
          inputProps.value === true
            ? 'true'
            : inputProps.value === false
            ? 'false'
            : ''
        }
        onChange={(value) => {
          if (value === 'true') {
            inputProps.onChange(true)
            return
          }
          if (value === 'false') {
            inputProps.onChange(false)
            return
          }
          inputProps.onChange('')
        }}
        onError={inputProps.error}
        onFocus={inputProps.onFocus}
        onBlur={inputProps.onBlur}
        size="xs"
        data={[
          ...(parameter.required ? [] : [{ label: 'Unset', value: '' }]),
          { label: 'False', value: 'false' },
          { label: 'True', value: 'true' },
        ]}
      />
    )
  }
  return (
    <TextInput
      {...inputProps}
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
