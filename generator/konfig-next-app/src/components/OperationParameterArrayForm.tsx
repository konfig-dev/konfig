import { useFormContext } from '@/utils/operation-form-context'
import { Text, Group, Paper, Stack, CloseButton } from '@mantine/core'
import { OperationParameter, Parameter } from './OperationParameter'
import { generateParameterInputName } from './ParameterInput'
import { ReactNode } from 'react'

export function OperationParameterArrayForm({
  param,
  prefix,
  owner,
  repo,
}: {
  param: Parameter
  owner: string
  repo: string
  prefix?: string // for nested forms
}) {
  const form = useFormContext()
  const formInputName = generateParameterInputName(param, prefix)
  const inputProps = form.getInputProps(formInputName)

  // This could happen if value was previously non-array
  if (!Array.isArray(inputProps.value)) return null

  return inputProps.value.map((value, index) => {
    if (param.schema.type !== 'array') {
      return null
    }
    if ('$ref' in param.schema.items) return null
    if (
      param.schema.items.type === 'string' &&
      param.schema.items.format === 'binary'
    ) {
      return (
        <Paper key={index} radius="xs" p="xs" withBorder>
          <Stack spacing="xs">
            <Group position="apart">
              <Text color="dimmed" fw="bold" size="xs">
                file{` ${index + 1}`}
              </Text>
              <CloseButton
                onClick={() => form.removeListItem(formInputName, index)}
                title="Remove file from array"
              />
            </Group>
            <OperationParameter
              noLabel
              owner={owner}
              repo={repo}
              key={index}
              prefix={formInputName}
              param={{
                name: index.toString(),
                in: 'body',
                schema: param.schema.items,
              }}
            />
          </Stack>
        </Paper>
      )
    } else if (
      param.schema.items.type === 'string' ||
      param.schema.items.type === 'number' ||
      param.schema.items.type === 'integer'
    ) {
      return (
        <Paper key={index} radius="xs" p="xs" withBorder>
          <Stack spacing="xs">
            <Group position="apart">
              <Text color="dimmed" fw="bold" size="xs">
                {`${param.schema.items.type}`}
                {` ${index + 1}`}
              </Text>
              <CloseButton
                onClick={() => form.removeListItem(formInputName, index)}
                title={`Remove ${param.schema.items.type} from array`}
              />
            </Group>
            <OperationParameter
              noLabel
              owner={owner}
              repo={repo}
              key={index}
              prefix={formInputName}
              param={{
                name: index.toString(),
                in: 'body',
                schema: param.schema.items,
              }}
            />
          </Stack>
        </Paper>
      )
    } else if (param.schema.items.type === 'object') {
      if (param.schema.items.properties === undefined) return null
      const reactNodes: ReactNode[] = []
      for (const name in param.schema.items.properties) {
        const property = param.schema.items.properties[name]
        if ('$ref' in property) continue
        reactNodes.push(
          <OperationParameter
            owner={owner}
            repo={repo}
            key={name}
            prefix={`${formInputName}.${index}`}
            param={{
              name,
              in: 'body',
              schema: property,
              required: param.schema.items.required?.includes(name) ?? false,
            }}
          />
        )
      }
      return (
        <Paper key={index} radius="xs" p="xs" withBorder>
          <Stack>
            <Group position="apart">
              <Text color="dimmed" fw="bold" size="xs">
                object{` ${index + 1}`}
              </Text>
              <CloseButton
                onClick={() => form.removeListItem(formInputName, index)}
                title="Remove object from array"
              />
            </Group>
            {reactNodes}
          </Stack>
        </Paper>
      )
    }

    return (
      <Paper key={index} radius="xs" p="xs" withBorder>
        {JSON.stringify(value, undefined, 2)}
      </Paper>
    )
  })
}
