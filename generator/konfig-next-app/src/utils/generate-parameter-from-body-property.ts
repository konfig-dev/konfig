import { Parameter } from '@/components/OperationParameter'
import type { SchemaObject } from 'konfig-lib'

export type ParameterFromBodyParameterInput = {
  name: string
  schema: SchemaObject
  requestBodyRequired: string[] | null
}
export function generateParameterFromBodyParameter({
  name,
  schema,
  requestBodyRequired,
}: ParameterFromBodyParameterInput) {
  const parameter: Parameter = {
    name,
    in: 'body',
    schema,
    required: requestBodyRequired?.includes(name) ?? false,
  }
  return parameter
}
