import {
  Button,
  NumberInput,
  SegmentedControl,
  Select,
  TextInput,
  useMantineTheme,
} from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import { Parameter } from './OperationParameter'
import {
  PARAMETER_FORM_NAME_PREFIX,
  generateInitialFormValues,
} from '@/utils/generate-initial-operation-form-values'
import { useFormContext } from '@/utils/operation-form-context'
import { IconCalendar } from '@tabler/icons-react'
import { DatePickerInput } from '@mantine/dates'
import { parseDateString } from '@/utils/parse-date-string'
import {
  ParameterFromBodyParameterInput,
  generateParameterFromBodyParameter,
} from '@/utils/generate-parameter-from-body-property'
import type { SchemaObject } from 'konfig-lib'

export function ParameterInput({ parameter }: { parameter: Parameter }) {
  const form = useFormContext()
  const formInputName = generateParameterInputName(parameter)
  const inputProps = form.getInputProps(formInputName)
  const { colorScheme, colors } = useMantineTheme()
  if (parameter.schema.type === 'array') {
    return (
      <Button
        radius="xs"
        size="xs"
        leftIcon={<IconPlus size={'1rem'} />}
        onClick={() => {
          if (
            !('items' in parameter.schema) ||
            parameter.schema.items === undefined
          )
            return
          const innerType = parameter.schema.items as SchemaObject
          if (innerType.type === 'object') {
            const bodyParameters: ParameterFromBodyParameterInput[] = []
            for (const iterator of Object.entries(innerType.properties || {})) {
              const [key, value] = iterator
              bodyParameters.push({
                name: key,
                schema: value,
                requestBodyRequired: innerType.required ?? null,
              })
            }
            const parameters = bodyParameters.map((parameter) =>
              generateParameterFromBodyParameter(parameter)
            )
            const formValues = generateInitialFormValues({
              parameters,
              securitySchemes: {},
              hideSecurity: [],
              clientState: [],
              doNotRestoreFromStorage: true,
            })
            const initialValues = formValues.initialValues
            if (initialValues === undefined) return

            // if the currenty value is not an Array, then we need to convert it to an array
            if (!Array.isArray(inputProps.value)) {
              form.setFieldValue(formInputName, [])
            }
            form.insertListItem(formInputName, initialValues.parameters)
          }
        }}
        variant={colorScheme === 'dark' ? 'light' : 'filled'}
      >
        Add Item
      </Button>
    )
  }
  if (parameter.schema.type === 'integer') {
    return (
      <NumberInput
        {...inputProps}
        radius="xs"
        placeholder={example(parameter.schema.example)}
      />
    )
  }
  if (
    parameter.schema.type === 'string' &&
    parameter.schema.enum !== undefined
  ) {
    return (
      <Select
        {...inputProps}
        clearable={!parameter.required}
        radius="xs"
        data={parameter.schema.enum}
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
        radius="xs"
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
        bg={colorScheme === 'dark' ? colors.dark[6] : undefined}
        color="brand"
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
  return `${PARAMETER_FORM_NAME_PREFIX}.${parameter.name}`
}

function example(example: unknown) {
  if (typeof example === 'string') return example
  if (typeof example === 'number') return example.toString()
  if (typeof example === 'boolean') return example.toString()
  if (typeof example === 'object') return JSON.stringify(example)
  return ''
}
