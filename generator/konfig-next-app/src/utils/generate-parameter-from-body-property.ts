import { Parameter } from '@/components/OperationParameter'
import type { SchemaObject } from 'konfig-lib'

export function generateParameterFromBodyParameter({
  name,
  schema,
  requestBodyRequired,
}: {
  name: string
  schema: SchemaObject
  requestBodyRequired: string[] | null
}) {
  const parameter: Parameter = {
    name,
    in: 'body',
    schema,
    required: requestBodyRequired?.includes(name) ?? false,
  }
  return parameter
}
