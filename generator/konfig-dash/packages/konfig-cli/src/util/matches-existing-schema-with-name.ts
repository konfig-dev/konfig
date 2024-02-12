import { SchemaObject, Spec } from 'konfig-lib'
import deepEqual from 'deep-equal'

export function matchesExistingSchemaWithName({
  name,
  spec,
  schema,
}: {
  name: string
  spec: Spec['spec']
  schema: SchemaObject
}) {
  const matchesName =
    spec.components !== undefined &&
    spec.components.schemas !== undefined &&
    name in spec.components.schemas
  if (!matchesName) return false
  // if existing schema matches new schema, return true
  const existingSchema = spec.components?.schemas?.[name]
  if (existingSchema === undefined) return false
  return deepEqual(existingSchema, schema)
}
