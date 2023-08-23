import { Box, Code, Group, Text } from '@mantine/core'
import type {
  OperationParameter,
  ParameterObject,
  SchemaObject,
} from 'konfig-lib'

export type Parameter = Omit<ParameterObject, 'schema'> & {
  schema: SchemaObject
}

export function OperationParameter({ param }: { param: Parameter }) {
  const description = getDescription(param)
  return (
    <Box key={param.name}>
      <Group spacing={'xs'}>
        <Code>{param.name}</Code>
        <Text fz="sm">{param.schema.type && param.schema.type}</Text>
        {param.required && (
          <Text fz="xs" color="red">
            {'required'}
          </Text>
        )}
      </Group>
      {description && (
        <Text c="dimmed" fz="sm">
          {description}
        </Text>
      )}
    </Box>
  )
}

function getDescription(param: Parameter) {
  if (param.description !== undefined) return param.description
  if (param.schema !== undefined) {
    if ('$ref' in param.schema) throw Error('Did not expect $ref in schema')
    return param.schema.description
  }
}
