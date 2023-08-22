import { Box, Code, Text } from '@mantine/core'
import type { OperationParameter, ParameterObject } from 'konfig-lib'

export function OperationParameter({ param }: { param: ParameterObject }) {
  const description = getDescription(param)
  return (
    <Box key={param.name}>
      <Code>{param.name}</Code>
      {description && (
        <Text c="dimmed" fz="sm">
          {description}
        </Text>
      )}
    </Box>
  )
}

function getDescription(param: ParameterObject) {
  if (param.description !== undefined) return param.description
  if (param.schema !== undefined) {
    if ('$ref' in param.schema) throw Error('Did not expect $ref in schema')
    return param.schema.description
  }
}
