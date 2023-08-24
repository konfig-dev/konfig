import { SchemaObject } from 'konfig-lib'

export function schemaTypeLabel({ schema }: { schema: SchemaObject }) {
  const type = schema.type && schema.type
  const nullable = 'nullable' in schema && schema.nullable ? ' or null' : ''
  return `${type}${nullable}`
}
