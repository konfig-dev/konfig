import { Parameter } from '@/components/OperationParameter'
import type { SchemaObject, SecurityScheme } from 'konfig-lib'
import { JSONValue } from './json-value'
import { generateParameterInputName } from '@/components/ParameterInput'
import { generateParameterFromBodyParameter } from './generate-parameter-from-body-property'
import { generateSecurityFormInputName } from '@/components/OperationSecuritySchemeForm'

export function generateInitialFormValues({
  parameters,
  requestBodyProperties,
  securitySchemes,
}: {
  parameters: Parameter[]
  requestBodyProperties?: Record<string, SchemaObject> | null
  securitySchemes: Record<string, SecurityScheme> | null
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
  if (securitySchemes != null) {
    for (const [name] of Object.entries(securitySchemes)) {
      initialValues[generateSecurityFormInputName({ name })] = ''
    }
  }
  return initialValues
}
