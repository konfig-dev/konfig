import { ReactNode } from 'react'
import { Parameter, OperationParameter } from './OperationParameter'
import { Paper, Stack, Text, Group, CloseButton, rem } from '@mantine/core'
import { generateParameterInputName } from './ParameterInput'

export function OperationParameterObjectForm({
  param,
  owner,
  repo,
  prefix,
}: {
  param: Parameter
  owner: string
  repo: string
  prefix?: string
}) {
  if (param.schema.type !== 'object') return null
  if ('$ref' in param.schema) return null
  if (param.schema.properties === undefined) return null
  const formInputName = generateParameterInputName(param, prefix)
  const reactNodes: ReactNode[] = []
  for (const name in param.schema.properties) {
    const property = param.schema.properties[name]
    if ('$ref' in property) continue
    reactNodes.push(
      <OperationParameter
        owner={owner}
        repo={repo}
        key={name}
        prefix={formInputName}
        param={{
          name,
          in: 'body',
          schema: property,
          required: param.schema.required?.includes(name) ?? false,
        }}
      />
    )
  }
  return (
    <Paper mt={rem(-10)} radius="xs" p="xs" withBorder>
      <Stack>{reactNodes}</Stack>
    </Paper>
  )
}
