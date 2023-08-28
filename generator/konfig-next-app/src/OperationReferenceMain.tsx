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
import { generateInitialFormValues } from './utils/generate-initial-operation-form-values'
import { StaticProps } from './pages/[org]/[portal]/reference/[tag]/[operationId]'
import {
  OperationClientStateForm,
  OperationSecuritySchemeForm,
} from './components/OperationSecuritySchemeForm'
import { SecurityScheme } from 'konfig-lib'
import { generateParametersFromRequestBodyProperties } from './utils/generate-parameters-from-request-body-properties'
import { useEffect, useMemo, useState } from 'react'
import { FormProvider, useForm } from './utils/operation-form-context'
import { useRouter } from 'next/router'
import deepmerge from 'deepmerge'
import { CodeGeneratorConstructorArgs } from './utils/code-generator'
import { CodeGeneratorTypeScript } from './utils/code-generator-typescript'
import { ExecuteOutput } from './components/ExecuteOutput'
import { tryJsonOutput } from './utils/try-json-output'
import { tryTableOutput } from './utils/try-table-output'

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
  basePath,
}: Pick<
  StaticProps,
  | 'pathParameters'
  | 'queryParameters'
  | 'headerParameters'
  | 'cookieParameters'
  | 'requestBodyProperties'
  | 'requestBodyRequired'
  | 'responses'
  | 'basePath'
  | 'securitySchemes'
  | 'operation'
  | 'konfigYaml'
>) {
  const parameters = [
    ...pathParameters,
    ...queryParameters,
    ...headerParameters,
    ...cookieParameters,
    ...generateParametersFromRequestBodyProperties({
      requestBodyProperties,
      requestBodyRequired,
    }),
  ]

  const typecriptConfig = konfigYaml.generators.typescript
  if (!typecriptConfig) {
    throw new Error('TypeScript generator not configured')
  }

  const clientState = useMemo(
    () => typecriptConfig.clientState ?? [],
    [typecriptConfig]
  )

  const formValues = generateInitialFormValues({
    parameters: parameters,
    securitySchemes,
    clientState,
  })

  const form = useForm(formValues)

  const router = useRouter()

  useEffect(() => {
    if (formValues.initialValues)
      form.setValues(deepmerge(formValues.initialValues, form.values))
    setResult(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath])

  const { colorScheme } = useMantineColorScheme()

  const tag = operation.operation.tags?.[0]

  if (tag === undefined) {
    throw new Error('Tag not defined')
  }

  if (operation.operation.operationId === undefined) {
    throw new Error('Operation ID not defined')
  }

  const authorization: [string, SecurityScheme][] = securitySchemes
    ? [...Object.entries(securitySchemes)]
    : []

  const codegenArgs: CodeGeneratorConstructorArgs = {
    parameters: parameters,
    formData: form.values,
    clientName: typecriptConfig.clientName,
    packageName: typecriptConfig.npmName,
    operationId: operation.operation.operationId,
    tag: tag,
    basePath,
  }

  const [requestInProgress, setRequestInProgress] = useState(false)

  const [result, setResult] = useState<any>(null)

  const filter = konfigYaml.portal?.hideSecurity ?? []

  return (
    <FormProvider form={form}>
      <form
        onSubmit={form.onSubmit(async (values) => {
          setRequestInProgress(true)
          try {
            const snippet = await new CodeGeneratorTypeScript({
              mode: 'sandbox',
              ...codegenArgs,
            }).snippet()
            const wrapped = `(async () => {
            ${snippet}
            })()`
            const result = await eval(wrapped)
            console.log(result)
            setResult(result.data)
          } finally {
            setRequestInProgress(false)
          }
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

                  {authorization
                    .filter(([name]) => {
                      return !filter.map(({ name }) => name).includes(name)
                    })
                    .map(([name, scheme]) => {
                      return (
                        <OperationSecuritySchemeForm
                          key={name}
                          name={name}
                          scheme={scheme}
                        />
                      )
                    })}
                  {clientState.map((name) => {
                    return <OperationClientStateForm key={name} name={name} />
                  })}
                </>
              )}
              <OperationFormGeneratedCode {...codegenArgs} />
              <Button
                variant={colorScheme === 'dark' ? 'light' : 'filled'}
                type="submit"
                loading={requestInProgress}
              >
                Request API
              </Button>
              {result && (
                <ExecuteOutput
                  jsonOutput={tryJsonOutput(JSON.stringify(result))}
                  tableOutput={tryTableOutput(JSON.stringify(result))}
                  processedOutput={JSON.stringify(result, null, 2)}
                  disableTable
                  show={true}
                />
              )}
            </Stack>
          </Box>
        </Flex>
      </form>
    </FormProvider>
  )
}
