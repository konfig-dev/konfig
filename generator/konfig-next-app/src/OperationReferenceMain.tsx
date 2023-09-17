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
  Paper,
  MediaQuery,
  Alert,
} from '@mantine/core'
import { HttpMethodBadge } from './components/HttpMethodBadge'
import { OperationForm } from './components/OperationForm'
import { OperationFormGeneratedCode } from './components/OperationFormGeneratedCode'
import { httpResponseCodeMeaning } from './utils/http-response-code-meaning'
import {
  FORM_VALUES_LOCAL_STORAGE_KEY,
  generateInitialFormValues,
  generateInitialFormValuesWithStorage,
} from './utils/generate-initial-operation-form-values'
import {
  OperationClientStateForm,
  OperationSecuritySchemeForm,
} from './components/OperationSecuritySchemeForm'
import type { SecurityScheme, RequestBodyObject } from 'konfig-lib'
import { generateParametersFromRequestBodyProperties } from './utils/generate-parameters-from-request-body-properties'
import { useEffect, useMemo, useState } from 'react'
import { FormProvider, useForm } from './utils/operation-form-context'
import { useRouter } from 'next/router'
import { CodeGeneratorConstructorArgs } from './utils/code-generator'
import { CodeGeneratorTypeScript } from './utils/code-generator-typescript'
import { ExecuteOutput } from './components/ExecuteOutput'
import { tryJsonOutput } from './utils/try-json-output'
import { tryTableOutput } from './utils/try-table-output'
import { IconAlertCircle, IconTerminal } from '@tabler/icons-react'
import { deepmerge } from './utils/deepmerge'
import { notifications } from '@mantine/notifications'
import localforage from 'localforage'
import { ReferencePageProps } from './utils/generate-props-for-reference-page'

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
  owner,
  oauthTokenUrl,
  repo,
  servers,
  originalOauthTokenUrl,
}: Pick<
  ReferencePageProps,
  | 'pathParameters'
  | 'queryParameters'
  | 'headerParameters'
  | 'cookieParameters'
  | 'owner'
  | 'repo'
  | 'requestBodyProperties'
  | 'requestBodyRequired'
  | 'responses'
  | 'securitySchemes'
  | 'servers'
  | 'operation'
  | 'oauthTokenUrl'
  | 'konfigYaml'
> & { basePath: string; originalOauthTokenUrl: string | null }) {
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

  const hideSecurity = konfigYaml.portal?.hideSecurity ?? []

  const formValues = generateInitialFormValues({
    parameters: parameters,
    securitySchemes,
    clientState,
    hideSecurity,
  })

  const form = useForm(formValues)

  const router = useRouter()

  /**
   * In an effort to ensure that there are no React hydration issues (e.g.
   * server rendering does not match client rendering), we delay the setting of
   * the form values until the next tick. We do this by using setTimeout with a
   * timeout of 0.
   */
  useEffect(() => {
    setTimeout(async () => {
      const { initialValues } = await generateInitialFormValuesWithStorage({
        parameters: parameters,
        securitySchemes,
        clientState,
        owner,
        repo,
        hideSecurity,
      })
      console.log(initialValues)
      if (initialValues) {
        form.setValues(initialValues)
      }
    }, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (formValues.initialValues) {
      form.setValues(deepmerge(formValues.initialValues, form.values))
    }
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
    servers,
    packageName: typecriptConfig.npmName,
    operationId: operation.operation.operationId,
    tag: tag,
    basePath,
    oauthTokenUrl,
    originalOauthTokenUrl,
    requestBodyRequired:
      (operation.operation.requestBody as RequestBodyObject)?.required ?? false,
  }

  const [requestInProgress, setRequestInProgress] = useState(false)

  const [result, setResult] = useState<{
    data: unknown
    status: number
    statusText: string
  } | null>(null)

  const handleError = (errors: typeof form.errors) => {
    for (const [id, message] of Object.entries(errors)) {
      notifications.show({ message, color: 'red', id })
    }
  }

  return (
    <FormProvider form={form}>
      <form
        onSubmit={form.onSubmit(async (values) => {
          setRequestInProgress(true)
          try {
            // IMPORTANT: files is used by the code generator so its fine that this is not used
            const files = CodeGeneratorTypeScript.setupFiles(values)

            const snippet = await new CodeGeneratorTypeScript({
              mode: 'sandbox',
              ...codegenArgs,
            }).snippet()

            const wrapped = `(async () => {
            ${snippet}
            })()`
            const result = await eval(wrapped)
            setResult(result)
          } catch (e) {
            console.error(e)
            if (
              typeof e === 'object' &&
              e !== null &&
              'status' in e &&
              typeof e.status === 'number' &&
              'statusText' in e &&
              typeof e.statusText === 'string' &&
              'responseBody' in e
            ) {
              setResult({
                data: e.responseBody,
                status: e.status,
                statusText: e.statusText,
              })
            }
          } finally {
            if (typeof window !== 'undefined') {
              await localforage.setItem(
                FORM_VALUES_LOCAL_STORAGE_KEY({ owner, repo }),
                values
              )
            }
            setRequestInProgress(false)
          }
        }, handleError)}
      >
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          justify={{ base: undefined, sm: 'space-between' }}
        >
          <Stack w={{ base: '100%', sm: '55%' }} spacing="xl">
            <Stack spacing="xs">
              <Title order={2}>
                {operation.operation.summary ?? operation.path}
              </Title>
              <Group>
                <HttpMethodBadge httpMethod={operation.method} />
                <Code>{operation.path}</Code>
              </Group>
              {operation.operation.deprecated && (
                <Alert
                  p="xs"
                  radius="xs"
                  icon={<IconAlertCircle size="1rem" />}
                  title="Deprecated"
                  color="red"
                >
                  Refrain from usage of this operation
                </Alert>
              )}
              {operation.operation.description && (
                <Text c="dimmed" fz="sm">
                  {operation.operation.description}
                </Text>
              )}
            </Stack>
            <OperationForm
              owner={owner}
              repo={repo}
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
                            color="blue"
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
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Divider my="sm" />
          </MediaQuery>
          <Box w={{ base: '100%', sm: '40%' }}>
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
                      return !hideSecurity
                        .map(({ name }) => name)
                        .includes(name)
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
                leftIcon={<IconTerminal size="1rem" />}
              >
                Request API
              </Button>
              {result?.data != null && (
                <Paper shadow="sm" radius="xs" p={0} withBorder>
                  <Box p="sm">
                    {/* if status is not successful (e.g. 4xx or 5xx), the badge is red */}
                    <Badge
                      variant={colorScheme === 'dark' ? 'light' : 'filled'}
                      color={result.status >= 300 ? 'red' : 'blue'}
                    >{`${result.status} ${result.statusText}`}</Badge>
                  </Box>
                  <ExecuteOutput
                    jsonOutput={tryJsonOutput(JSON.stringify(result.data))}
                    tableOutput={tryTableOutput(JSON.stringify(result.data))}
                    processedOutput={JSON.stringify(result.data, null, 2)}
                    disableTable
                    show={true}
                  />
                </Paper>
              )}
            </Stack>
          </Box>
        </Flex>
      </form>
    </FormProvider>
  )
}
