import { Box, Title, Stack, createStyles } from '@mantine/core'
import { OperationParameter, Parameter } from './OperationParameter'
import { type SchemaObject } from 'konfig-lib'
import { generateParametersFromRequestBodyProperties } from '@/utils/generate-parameters-from-request-body-properties'

export const useBorderStyles = createStyles((theme) => ({
  borderBottom: {
    borderBottom: `1px solid`,
  },
  borderColor: {
    borderColor:
      theme.colorScheme === 'dark'
        ? theme.colors.gray[9]
        : theme.colors.gray[1],
  },
}))

export function OperationForm({
  pathParameters,
  queryParameters,
  headerParameters,
  cookieParameters,
  requestBodyProperties,
  requestBodyRequired,
  requestBody,
  owner,
  repo,
}: {
  requestBody: Parameter | null
  pathParameters: Parameter[]
  queryParameters: Parameter[]
  headerParameters: Parameter[]
  cookieParameters: Parameter[]
  requestBodyProperties: Record<string, SchemaObject> | null
  requestBodyRequired: string[] | null
  owner: string
  repo: string
}) {
  return (
    <Stack spacing="xl">
      <ParameterGroup
        title="Path"
        parameters={pathParameters}
        owner={owner}
        repo={repo}
      />
      <ParameterGroup
        title="Query"
        parameters={queryParameters}
        owner={owner}
        repo={repo}
      />
      <ParameterGroup
        title="Header"
        parameters={headerParameters}
        owner={owner}
        repo={repo}
      />
      <ParameterGroup
        title="Cookie"
        parameters={cookieParameters}
        owner={owner}
        repo={repo}
      />

      {
        // if request body is an array type then render ParameterGroup with title "Request Body" and parameters as [requestBody]
        // else do nothing
        requestBody != null && requestBody.schema.type === 'array' && (
          <ParameterGroup
            title="Request Body"
            parameters={[requestBody]}
            owner={owner}
            repo={repo}
          />
        )
      }
      <ParameterGroup
        title="Request Body"
        parameters={generateParametersFromRequestBodyProperties({
          requestBodyProperties,
          requestBodyRequired,
        })}
        owner={owner}
        repo={repo}
      />
    </Stack>
  )
}

function ParameterGroup({
  parameters,
  title,
  owner,
  repo,
}: {
  parameters: Parameter[]
  title: string
  owner: string
  repo: string
}) {
  const { classes, cx } = useBorderStyles()
  return (
    parameters.length > 0 && (
      <Box>
        <div className="text-xs text-mantine-gray-600 mb-6 font-semibold">
          {title}
        </div>
        <Stack spacing="xl">
          {parameters.map((param, i) => (
            <Box
              key={param.name}
              className={cx(
                {
                  [classes.borderBottom]: i < parameters.length - 1,
                },
                classes.borderColor
              )}
            >
              <OperationParameter owner={owner} repo={repo} param={param} />
            </Box>
          ))}
        </Stack>
      </Box>
    )
  )
}
