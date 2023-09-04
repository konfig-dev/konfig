import { Box, Code, Flex, Group, Stack, Text, rem } from '@mantine/core'
import type {
  OperationParameter,
  ParameterObject,
  SchemaObject,
} from 'konfig-lib'
import { ParameterInput } from './ParameterInput'
import { schemaTypeLabel } from '@/utils/schema-type-label'
import dynamic from 'next/dynamic'
import { OperationParameterObjectForm } from './OperationParameterObjectForm'

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
  owner,
  repo,
}: {
  param: Parameter
  prefix?: string
  owner: string
  repo: string
}) {
  const description = getDescription(param)
  return (
    <Stack>
      <Flex justify="space-between">
        <Box maw="50%" key={param.name}>
          <Flex align="center" wrap="wrap">
            <Code>{param.name}</Code>
            <Text ml={rem(5)} fz="sm">
              {schemaTypeLabel({ schema: param.schema })}
            </Text>
            {param.required && (
              <Text ml={rem(5)} fz="xs" color="red">
                {'required'}
              </Text>
            )}
          </Flex>
          {description && (
            <Text c="dimmed" fz="sm">
              {description}
            </Text>
          )}
        </Box>
        <Box ta="right" w="40%">
          <ParameterInput
            owner={owner}
            repo={repo}
            prefix={prefix}
            parameter={param}
          />
        </Box>
      </Flex>
      <OperationParameterArrayForm
        owner={owner}
        repo={repo}
        prefix={prefix}
        param={param}
      />
      <OperationParameterObjectForm
        param={param}
        owner={owner}
        repo={repo}
        prefix={prefix}
      />
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
