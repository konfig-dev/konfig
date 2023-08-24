import {
  Flex,
  Stack,
  Title,
  Group,
  Code,
  Box,
  Divider,
  Badge,
  Button,
  Text,
  useMantineColorScheme,
} from '@mantine/core'
import { HttpMethodBadge } from './components/HttpMethodBadge'
import { OperationForm } from './components/OperationForm'
import { OperationFormGeneratedCode } from './components/OperationFormGeneratedCode'
import { httpResponseCodeMeaning } from './utils/http-response-code-meaning'
import { FormProvider, useForm } from './utils/operation-form-context'
import { generateInitialFormValues } from './utils/generate-initial-operation-form-values'
import { StaticProps } from './pages/[org]/[portal]/reference/[tag]/[operationId]'
import { OperationSecuritySchemeForm } from './components/OperationSecuritySchemeForm'
import { SecurityScheme } from 'konfig-lib'

export function OperationReferenceMain({
  pathParameters,
  queryParameters,
  headerParameters,
  cookieParameters,
  requestBodyProperties,
  requestBodyRequired,
  responses,
  securitySchemes,
  operation,
  konfigYaml,
}: Pick<
  StaticProps,
  | 'pathParameters'
  | 'queryParameters'
  | 'headerParameters'
  | 'cookieParameters'
  | 'requestBodyProperties'
  | 'requestBodyRequired'
  | 'responses'
  | 'securitySchemes'
  | 'operation'
  | 'konfigYaml'
>) {
  const initialValues = generateInitialFormValues({
    parameters: [
      ...pathParameters,
      ...queryParameters,
      ...headerParameters,
      ...cookieParameters,
    ],
    requestBodyProperties,
    securitySchemes,
  })

  const form = useForm({
    initialValues,
  })

  const { colorScheme } = useMantineColorScheme()

  const authorization: [string, SecurityScheme][] = [
    ...(securitySchemes ? [...Object.entries(securitySchemes)] : []),
    ...(konfigYaml.generators.typescript?.clientState
      ? konfigYaml.generators.typescript.clientState.map(
          (clientState): [string, SecurityScheme] => {
            return [
              clientState,
              { type: 'apiKey', in: 'header', name: clientState },
            ]
          }
        )
      : []),
  ]

  return (
    <FormProvider form={form}>
      <form
        onSubmit={form.onSubmit((values) => {
          console.log(values)
        })}
      >
        <Flex justify="space-between">
          <Stack w="55%" spacing="xl">
            <Stack spacing="xs">
              <Title order={2}>
                {operation.operation.summary ?? operation.path}
              </Title>
              <Group>
                <HttpMethodBadge httpMethod={operation.method} />
                <Code>{operation.path}</Code>
              </Group>
              {operation.operation.description && (
                <Text c="dimmed" fz="sm">
                  {operation.operation.description}
                </Text>
              )}
            </Stack>
            <OperationForm
              pathParameters={pathParameters}
              queryParameters={queryParameters}
              headerParameters={headerParameters}
              cookieParameters={cookieParameters}
              requestBodyProperties={requestBodyProperties}
              requestBodyRequired={requestBodyRequired}
            />
            {responses && (
              <Box>
                <Title order={4}>Responses</Title>
                <Divider my="sm" />
                <Stack>
                  {Object.entries(responses).map(([responseCode, response]) => (
                    <Box key={responseCode}>
                      {/* 1. Render response code
                          2. Render meaning of response code like "OK" for 200 and "Not Found" for 404 in same text box as (1)
                          3. Render green "Success" badge next to 2xx codes and red "Error" badge next to 4xx and 5xx codes
                          4. Render response description if it exists under the response code + badge
                       */}

                      <Flex gap="xs" align="center">
                        <Title order={6}>
                          {responseCode} {httpResponseCodeMeaning(responseCode)}
                        </Title>
                        {responseCode.startsWith('2') ? (
                          <Badge
                            variant={
                              colorScheme === 'dark' ? 'light' : 'filled'
                            }
                            radius="xs"
                            color="teal"
                            size="xs"
                          >
                            Success
                          </Badge>
                        ) : (
                          <Badge
                            variant={
                              colorScheme === 'dark' ? 'light' : 'filled'
                            }
                            radius="xs"
                            color="red"
                            size="xs"
                          >
                            Error
                          </Badge>
                        )}
                      </Flex>
                      {response.description && (
                        <Text c="dimmed" fz="sm">
                          {response.description}
                        </Text>
                      )}
                    </Box>
                  ))}
                </Stack>
              </Box>
            )}
          </Stack>
          <Box w="40%">
            <Stack
              pos="sticky"
              top="calc(var(--mantine-header-height, 0px) + 1rem)"
              w="100%"
              spacing="sm"
            >
              {authorization.length > 0 && (
                <>
                  <Title order={5}> Authorization </Title>

                  {authorization.map(([name, scheme]) => {
                    return (
                      <OperationSecuritySchemeForm
                        key={name}
                        name={name}
                        scheme={scheme}
                      />
                    )
                  })}
                </>
              )}
              <OperationFormGeneratedCode
                operation={operation.operation}
                values={form.values}
              />
              <Button
                variant={colorScheme === 'dark' ? 'light' : 'filled'}
                type="submit"
              >
                Request API
              </Button>
            </Stack>
          </Box>
        </Flex>
      </form>
    </FormProvider>
  )
}
