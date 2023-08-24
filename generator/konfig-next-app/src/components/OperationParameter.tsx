import { Box, Code, Flex, Group, Text } from '@mantine/core'
import type {
  OperationParameter,
  ParameterObject,
  SchemaObject,
} from 'konfig-lib'
import { ParameterInput } from './ParameterInput'
import { schemaTypeLabel } from '@/utils/schema-type-label'

export type Parameter = Omit<ParameterObject, 'schema'> & {
  schema: SchemaObject
}

export function OperationParameter({ param }: { param: Parameter }) {
  const description = getDescription(param)
  return (
    <Flex justify="space-between">
      <Box maw="50%" key={param.name}>
        <Group spacing={'xs'}>
          <Code>{param.name}</Code>
          <Text fz="sm">{schemaTypeLabel({ schema: param.schema })}</Text>
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
      <Box w="35%">
        <ParameterInput parameter={param} />
      </Box>
    </Flex>
  )
}

function getDescription(param: Parameter) {
  if (param.description !== undefined) return param.description
  if (param.schema !== undefined) {
    if ('$ref' in param.schema) throw Error('Did not expect $ref in schema')
    return param.schema.description
  }
}
