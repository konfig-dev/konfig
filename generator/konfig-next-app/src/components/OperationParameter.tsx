import {
  Box,
  Code,
  Flex,
  Stack,
  Text,
  rem,
  useMantineTheme,
} from '@mantine/core'
import type { ParameterObject, SchemaObject } from 'konfig-lib'
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
} & {
  // if true, this parameter is the request body schema itself (e.g. raw string, array value, object value, etc.)
  isRequestBody?: boolean
}

export function OperationParameter({
  param,
  prefix,
  owner,
  repo,
  noLabel,
}: {
  param: Parameter
  prefix?: string
  owner: string
  repo: string
  noLabel?: boolean
}) {
  const description = getDescription(param)
  const theme = useMantineTheme()
  return (
    <Stack pb="lg">
      {noLabel ? (
        <ParameterInput
          owner={owner}
          repo={repo}
          prefix={prefix}
          parameter={param}
        />
      ) : (
        <Flex justify="space-between">
          <Box maw="50%" key={param.name}>
            <Flex align="center" wrap="wrap">
              {param.name !== '' && (
                <Code
                  mr={rem(5)}
                  style={{
                    color: theme.colorScheme === 'dark' ? 'white' : 'black',
                    backgroundColor:
                      theme.colorScheme === 'dark'
                        ? theme.colors.gray[9]
                        : theme.colors.gray[0],
                    borderRadius: theme.radius.md,
                    border: `1px solid ${
                      theme.colorScheme === 'dark'
                        ? theme.colors.gray[8]
                        : theme.colors.gray[4]
                    }`,
                  }}
                >
                  {param.name}
                </Code>
              )}
              <Code
                style={{
                  color: theme.colors.gray[6],
                }}
                bg="unset"
                fz={12}
                ml={param.name === '' ? rem(-5) : undefined}
                mr={rem(5)}
              >
                {schemaTypeLabel({ schema: param.schema })}
              </Code>
              {param.required && (
                <Code style={{ color: 'red' }} bg="unset" fz={12}>
                  {'required'}
                </Code>
              )}
            </Flex>
            {description && (
              <Text
                mt="xs"
                c={
                  theme.colorScheme === 'dark'
                    ? theme.colors.gray[5]
                    : theme.colors.gray[7]
                }
                fz="sm"
              >
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
      )}
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
