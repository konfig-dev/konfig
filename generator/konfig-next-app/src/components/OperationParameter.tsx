import {
  Box,
  Code,
  Flex,
  Stack,
  Text,
  rem,
  useMantineTheme,
} from '@mantine/core'
import { type ParameterObject, type SchemaObject } from 'konfig-lib'
import { ParameterInput } from './ParameterInput'
import { schemaTypeLabel } from '@/utils/schema-type-label'
import dynamic from 'next/dynamic'
import { OperationParameterObjectForm } from './OperationParameterObjectForm'
import { getParameterDescription } from '@/utils/get-parameter-description'
import { OperationParameterDocumentation } from './OperationParameterDocumentation'

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
  const description = getParameterDescription(param)
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
          <div className="max-w-[50%]">
            <OperationParameterDocumentation
              name={param.name}
              description={description}
              schema={schemaTypeLabel({ schema: param.schema })}
              required={param.required}
            />
          </div>
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
