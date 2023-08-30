import { SchemaObject } from 'konfig-lib'
import { pluralize } from './pluralize'

export function schemaTypeLabel({ schema }: { schema: SchemaObject }) {
  const type = schema.type && schema.type
  const nullable = 'nullable' in schema && schema.nullable ? ' or null' : ''
  const innerType =
    schema.type === 'array' ? (schema.items as SchemaObject).type : null
  const arrayOf =
    innerType !== null && typeof innerType === 'string'
      ? ` of ${pluralize(innerType)}`
      : ''
  const format = schema.format ? ` (format: ${schema.format})` : ''
  return `${type}${format}${arrayOf}${nullable}`
}
