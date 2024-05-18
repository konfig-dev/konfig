import { SchemaObject } from 'konfig-lib'
import { pluralize } from './pluralize'

export function schemaTypeLabel({ schema }: { schema: SchemaObject }) {
  const nullable = 'nullable' in schema && schema.nullable ? ' or null' : ''
  if (!('type' in schema)) {
    if ('allOf' in schema) {
      if (schema.allOf?.length === 1) {
        schema = schema.allOf[0] as SchemaObject
      }
    }
  }
  const type = schema.type
    ? schema.type
    : schema.properties !== undefined
    ? 'object'
    : ''
  const innerType =
    schema.type === 'array' ? (schema.items as SchemaObject).type : null
  const arrayOf =
    innerType !== null && typeof innerType === 'string'
      ? ` of ${pluralize(innerType)}`
      : schema.type === 'array'
      ? (schema.items as SchemaObject)?.properties !== undefined
        ? ' of objects'
        : ' of any'
      : ''
  const format = schema.format ? ` (format: ${schema.format})` : ''
  const label = `${type}${format}${arrayOf}${nullable}`
  if (label === 'undefined') return ''
  return label
}
