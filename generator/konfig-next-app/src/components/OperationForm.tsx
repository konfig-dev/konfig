import { Box, Title, Divider, Stack, Button } from '@mantine/core'
import { OperationParameter, Parameter } from './OperationParameter'
import { type SchemaObject } from 'konfig-lib'
import { generateParameterFromBodyParameter } from '@/utils/generate-parameter-from-body-property'

export function OperationForm({
  pathParameters,
  queryParameters,
  headerParameters,
  cookieParameters,
  requestBodyProperties,
  requestBodyRequired,
}: {
  pathParameters: Parameter[]
  queryParameters: Parameter[]
  headerParameters: Parameter[]
  cookieParameters: Parameter[]
  requestBodyProperties: Record<string, SchemaObject> | null
  requestBodyRequired: string[] | null
}) {
  return (
    <>
      {pathParameters.length > 0 && (
        <Box>
          <Title order={4}>Path Parameters</Title>
          <Divider my="sm" />
          <Stack>
            {pathParameters.map((param) => (
              <OperationParameter key={param.name} param={param} />
            ))}
          </Stack>
        </Box>
      )}
      {queryParameters.length > 0 && (
        <Box>
          <Title order={4}>Query Parameters</Title>
          <Divider my="sm" />
          <Stack>
            {queryParameters.map((param) => (
              <OperationParameter key={param.name} param={param} />
            ))}
          </Stack>
        </Box>
      )}
      {headerParameters.length > 0 && (
        <Box>
          <Title order={4}>Header Parameters</Title>
          <Divider my="sm" />
          <Stack>
            {headerParameters.map((param) => (
              <OperationParameter key={param.name} param={param} />
            ))}
          </Stack>
        </Box>
      )}
      {cookieParameters.length > 0 && (
        <Box>
          <Title order={4}>Cookie Parameters</Title>
          <Divider my="sm" />
          <Stack>
            {cookieParameters.map((param) => (
              <OperationParameter key={param.name} param={param} />
            ))}
          </Stack>
        </Box>
      )}
      {requestBodyProperties && (
        <Box>
          <Title order={4}>Request Body Parameters</Title>
          <Divider my="sm" />
          <Stack>
            {Object.entries(requestBodyProperties).map(
              ([propertyName, property]) => (
                <OperationParameter
                  key={propertyName}
                  param={generateParameterFromBodyParameter({
                    name: propertyName,
                    schema: property,
                    requestBodyRequired,
                  })}
                />
              )
            )}
          </Stack>
        </Box>
      )}
    </>
  )
}
