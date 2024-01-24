import { FormDataType } from '@/utils/generate-initial-operation-form-values'
import { processSchemaExample } from '@/utils/process-schema-example'
import { JsonInput } from '@mantine/core'
import { GetInputProps } from '@mantine/form/lib/types'
import { Parameter } from './OperationParameter'
import { useEffect, useState } from 'react'

export function ReferencePageJsonInput({
  inputProps,
  parameter,
}: {
  inputProps: ReturnType<GetInputProps<FormDataType>>
  parameter: Parameter
}) {
  const { onChange, onBlur, value, ...rest } = inputProps
  const [jsonInput, setJsonInput] = useState('')
  useEffect(() => {
    if (value === '') setJsonInput('')
    else setJsonInput(JSON.stringify(value, null, 2))
  }, [value])
  return (
    <JsonInput
      onChange={(value) => setJsonInput(value)}
      value={jsonInput}
      onBlur={(input) => {
        if (input.target.value === '') {
          onChange('')
        }
        // set form value using onChange if "value" is a valid JSON string
        try {
          const parsed = JSON.parse(input.target.value)
          onChange(parsed)
        } catch (e) {}
        onBlur(input)
      }}
      {...rest}
      placeholder={processSchemaExample(parameter.schema.example)}
      validationError="Invalid JSON"
      formatOnBlur
      autosize
      minRows={4}
    />
  )
}
