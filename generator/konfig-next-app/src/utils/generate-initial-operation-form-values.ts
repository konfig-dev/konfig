import { Parameter } from '@/components/OperationParameter'
import type { SchemaObject } from 'konfig-lib'
import { JSONValue } from './json-value'
import { generateParameterInputName } from '@/components/ParameterInput'
import { generateParameterFromBodyParameter } from './generate-parameter-from-body-property'

export function generateInitialFormValues({
  parameters,
  requestBodyProperties,
}: {
  parameters: Parameter[]
  requestBodyProperties?: Record<string, SchemaObject> | null
}): Record<string, JSONValue> {
  const initialValues: Record<string, JSONValue> = {}
  for (const parameter of parameters) {
    initialValues[generateParameterInputName(parameter)] = ''
  }
  if (requestBodyProperties != null) {
    for (const [name, schema] of Object.entries(requestBodyProperties)) {
      const parameter = generateParameterFromBodyParameter({
        name,
        schema,
        requestBodyRequired: null,
      })
      initialValues[generateParameterInputName(parameter)] = ''
    }
  }
  return initialValues
}
