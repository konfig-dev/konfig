import { Box, Code, Flex, Group, Stack, Text } from '@mantine/core'
import type {
  OperationParameter,
  ParameterObject,
  SchemaObject,
} from 'konfig-lib'
import { ParameterInput } from './ParameterInput'
import { schemaTypeLabel } from '@/utils/schema-type-label'
import dynamic from 'next/dynamic'

/**
 * dynamic import to avoid SSR hydration errors where server-rendered HTML does not match client-rendered HTML
 */
const OperationParameterArrayForm = dynamic(
  () =>
    import('./OperationParameterArrayForm').then(
      (mod) => mod.OperationParameterArrayForm
    ),
  { ssr: false }
)

export type Parameter = Omit<ParameterObject, 'schema'> & {
  schema: SchemaObject
}

export function OperationParameter({
  param,
  prefix,
}: {
  param: Parameter
  prefix?: string
}) {
  const description = getDescription(param)
  return (
    <Stack>
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
        <Box ta="right" w="35%">
          <ParameterInput prefix={prefix} parameter={param} />
        </Box>
      </Flex>
      <OperationParameterArrayForm prefix={prefix} param={param} />
    </Stack>
  )
}

function getDescription(param: Parameter) {
  if (param.description !== undefined) return param.description
  if (param.schema !== undefined) {
    if ('$ref' in param.schema) throw Error('Did not expect $ref in schema')
    return param.schema.description
  }
}
