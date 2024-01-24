import { NonArraySchemaObject } from 'konfig-lib'
import { GenerateFormInputValuesInput } from './generate-initial-operation-form-values'
import { Parameter } from '@/components/OperationParameter'

export function generatePropertiesForSchemaObject({
  schema,
  example,
}: {
  schema: NonArraySchemaObject
  example?: any
}): Parameter[] {
  if (schema.properties == undefined) throw new Error('No properties')
  const properties: GenerateFormInputValuesInput['parameters'] = Object.entries(
    schema.properties
  ).map(([name, innerSchema]) => {
    return {
      name,
      in: 'body',
      required: schema.required?.includes(name) ?? false,
      schema: innerSchema,
      example,
    }
  })
  return properties
}
