import {
  Button,
  FileInput,
  Input,
  JsonInput,
  NumberInput,
  SegmentedControl,
  Select,
  TextInput,
  rem,
  useMantineTheme,
} from '@mantine/core'
import { IconPlus, IconUpload } from '@tabler/icons-react'
import { Parameter } from './OperationParameter'
import {
  PARAMETER_FORM_NAME_PREFIX,
  REQUEST_BODY_FORM_NAME_PREFIX,
  generateInitialFormValues,
} from '@/utils/generate-initial-operation-form-values'
import { useFormContext } from '@/utils/operation-form-context'
import { IconCalendar } from '@tabler/icons-react'
import { DatePickerInput, DateTimePicker } from '@mantine/dates'
import { parseDateString } from '@/utils/parse-date-string'
import {
  ParameterFromBodyParameterInput,
  generateParameterFromBodyParameter,
} from '@/utils/generate-parameter-from-body-property'
import type { SchemaObject } from 'konfig-lib'
import { processSchemaExample } from '@/utils/process-schema-example'
import { ReferencePageJsonInput } from './ReferencePageJsonInput'

export function ParameterInput({
  parameter,
  prefix,
  owner,
  repo,
}: {
  parameter: Parameter
  prefix?: string
  owner: string
  repo: string
}) {
  const form = useFormContext()
  const formInputName = generateParameterInputName(parameter, prefix)
  const inputProps = form.getInputProps(formInputName)
  const { colorScheme, colors } = useMantineTheme()
  if (parameter.schema.type === 'object') {
    if (parameter.schema.properties !== undefined) return null
    return (
      <ReferencePageJsonInput parameter={parameter} inputProps={inputProps} />
    )
  }
  if (
    parameter.schema.type === 'string' &&
    parameter.schema.format === 'binary'
  ) {
    const { onChange, ...rest } = inputProps
    return (
      <FileInput
        onChange={(file) => {
          if (file === null) onChange('')
          else onChange(file)
        }}
        {...rest}
        clearable
        placeholder="File"
        icon={<IconUpload size={rem(14)} />}
      />
    )
  }
  if (parameter.schema.type === 'array') {
    return (
      <Input.Wrapper {...inputProps}>
        <Button
          mb="calc(0.625rem / 2);" // taken from Input.Wrapper source code
          size="xs"
          leftIcon={<IconPlus size={'1rem'} />}
          onClick={() => {
            form.clearFieldError(formInputName)
            if (
              !('items' in parameter.schema) ||
              parameter.schema.items === undefined
            )
              return
            const innerType = parameter.schema.items as SchemaObject
            // if the currenty value is not an Array, then we need to convert it to an array
            if (!Array.isArray(inputProps.value)) {
              form.setFieldValue(formInputName, [])
            }
            if (innerType.type === 'number' || innerType.type === 'integer') {
              form.insertListItem(formInputName, '')
            } else if (
              innerType.type === 'string' &&
              innerType.format === 'binary'
            ) {
              // empty file to signify that the user has not selected a file
              form.insertListItem(formInputName, new File([], ''))
            } else if (innerType.type === 'string') {
              form.insertListItem(formInputName, '')
            } else if (innerType.type === 'object') {
              const bodyParameters: ParameterFromBodyParameterInput[] = []
              for (const iterator of Object.entries(
                innerType.properties || {}
              )) {
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
                requestBodyParameter: null,
              })
              const initialValues = formValues.initialValues
              if (initialValues === undefined) return

              form.insertListItem(formInputName, initialValues.parameters)
            }
          }}
          variant={colorScheme === 'dark' ? 'light' : 'filled'}
        >
          Add Item
        </Button>
      </Input.Wrapper>
    )
  }
  if (parameter.schema.type === 'integer') {
    return (
      <NumberInput
        {...inputProps}
        placeholder={processSchemaExample(parameter.schema.example)}
      />
    )
  }
  if (
    parameter.schema.type === 'string' &&
    parameter.schema.enum !== undefined
  ) {
    const { onChange, ...rest } = inputProps
    return (
      <Select
        {...rest}
        onChange={(value) => {
          // Dylan: setting value to null does not make sense if schema is not nullable
          // TODO: handle nullable schema
          return onChange(value === null ? '' : value)
        }}
        clearable={!parameter.required}
        data={parameter.schema.enum}
      />
    )
  }
  if (parameter.schema.type === 'number') {
    return (
      <NumberInput
        {...inputProps}
        precision={2}
        placeholder={processSchemaExample(parameter.schema.example)}
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
  if (
    parameter.schema.type === 'string' &&
    parameter.schema.format === 'date-time'
  ) {
    const { value, onChange, ...rest } = inputProps
    return (
      <DateTimePicker
        icon={<IconCalendar size="1.1rem" stroke={1.5} />}
        clearable
        value={parseDateString(value)}
        onChange={(date) => {
          if (date === null) {
            onChange('')
            return
          }
          if (date instanceof Date) {
            onChange(date.toISOString())
          }
        }}
        {...rest}
      />
    )
  }
  if (parameter.schema.type === 'boolean') {
    return (
      <Input.Wrapper {...inputProps}>
        <SegmentedControl
          mb="calc(0.625rem / 2);" // taken from Input.Wrapper source code
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
          size="xs"
          data={[
            ...(parameter.required ? [] : [{ label: 'Unset', value: '' }]),
            { label: 'False', value: 'false' },
            { label: 'True', value: 'true' },
          ]}
        />
      </Input.Wrapper>
    )
  }
  const { value, ...rest } = inputProps
  return (
    <TextInput
      {...rest}
      // we set default value to '' to avoid warning: "A component is changing an
      // uncontrolled input to be controlled. This is likely caused by the value
      // changing from undefined to a defined value, which should not happen. Decide
      // between using a controlled or uncontrolled input element for the lifetime of
      // the component. More info: https://reactjs.org/link/controlled-components"
      value={value ?? ''}
      placeholder={processSchemaExample(parameter.schema.example)}
    />
  )
}

/**
 * See https://mantine.dev/core/forms/#nested-objects for explanation of "." protocol
 * @param parameter OpenAPI Parameter
 * @param prefix Optional prefix to replace default form prefix (this is used for inner forms)
 * @returns string passed to form.getInputProps
 */
export function generateParameterInputName(
  parameter: Parameter,
  prefix?: string
) {
  if (parameter.isRequestBody) {
    return REQUEST_BODY_FORM_NAME_PREFIX
  }
  return `${prefix !== undefined ? prefix : PARAMETER_FORM_NAME_PREFIX}.${
    parameter.name
  }`
}
