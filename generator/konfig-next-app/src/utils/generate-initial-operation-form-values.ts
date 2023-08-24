import { Parameter } from '@/components/OperationParameter'
import type { SchemaObject } from 'konfig-lib'
import { JSONValue } from './json-value'

export function generateInitialFormValues({
  parameters,
  requestBodyProperties,
}: {
  parameters: Parameter[]
  requestBodyProperties?: Record<string, SchemaObject> | null
}): Record<string, JSONValue> {
  const initialValues: Record<string, JSONValue> = {}
  for (const parameter of parameters) {
    initialValues[parameter.name] = ''
  }
  if (requestBodyProperties != null) {
    for (const [name] of Object.entries(requestBodyProperties)) {
      initialValues[name] = ''
    }
  }
  return initialValues
}
