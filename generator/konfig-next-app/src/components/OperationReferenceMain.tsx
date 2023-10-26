import {
  Flex,
  Stack,
  Title,
  Group,
  Code,
  Box,
  Divider,
  Badge,
  Text,
  useMantineColorScheme,
  Paper,
  MediaQuery,
  Alert,
  useMantineTheme,
} from '@mantine/core'
import { HttpMethodBadge } from './HttpMethodBadge'
import { OperationForm } from './OperationForm'
import {
  FORM_VALUES_LOCAL_STORAGE_KEY,
  generateInitialFormValues,
  generateInitialFormValuesWithStorage,
} from '../utils/generate-initial-operation-form-values'
import {
  OperationClientStateForm,
  OperationSecuritySchemeForm,
} from './OperationSecuritySchemeForm'
import type { SecurityScheme, RequestBodyObject } from 'konfig-lib'
import { generateParametersFromRequestBodyProperties } from '../utils/generate-parameters-from-request-body-properties'
import { useEffect, useMemo, useState } from 'react'
import { FormProvider, useForm } from '../utils/operation-form-context'
import { useRouter } from 'next/router'
import { CodeGeneratorConstructorArgs } from '../utils/code-generator'
import { CodeGeneratorTypeScript } from '../utils/code-generator-typescript'
import { ExecuteOutput } from './ExecuteOutput'
import { tryJsonOutput } from '../utils/try-json-output'
import { tryTableOutput } from '../utils/try-table-output'
import { IconAlertCircle } from '@tabler/icons-react'
import { deepmerge } from '../utils/deepmerge'
import { notifications } from '@mantine/notifications'
import localforage from 'localforage'
import { ReferencePageProps } from '../utils/generate-props-for-reference-page'
import { SocialFooter } from './SocialFooter'
import { Breadcrumbs } from './Breadcrumbs'
import { OperationReferenceResponses } from './OperationReferenceResponses'
import { Language } from './DemoCode'
import { OperationRequest } from './OperationRequest'

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
  requestBodyParameter,
}: Pick<
  ReferencePageProps,
  | 'pathParameters'
  | 'queryParameters'
  | 'headerParameters'
  | 'cookieParameters'
  | 'requestBodyParameter'
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

  const theme = useMantineTheme()

  const typecriptConfig = konfigYaml.generators.typescript
  if (!typecriptConfig) {
    throw new Error('TypeScript generator not configured')
  }

  const pythonConfig = konfigYaml.generators.python

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
      console.debug(initialValues)
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
    requestBody: requestBodyParameter,
    securitySchemes,
    formData: form.values,
    languageConfigurations: {
      typescript: {
        clientName: typecriptConfig.clientName,
        packageName: typecriptConfig.npmName,
      },
      ...(pythonConfig && {
        python: {
          clientName: pythonConfig.clientName,
          packageName: pythonConfig.packageName,
        },
      }),
    },
    servers,
    operationId: operation.operation.operationId,
    tag: tag,
    basePath,
    oauthTokenUrl,
    originalOauthTokenUrl,
    requestBodyRequired:
      (operation.operation.requestBody as RequestBodyObject)?.required ?? false,
  }

  console.debug('codegenArgs:', codegenArgs)

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

  const [language, setLanguage] = useState<Language>('typescript')

  const header = operation.operation.summary ?? operation.path
  return (
    <FormProvider form={form}>
      <form
        onSubmit={form.onSubmit(async (values) => {
          setRequestInProgress(true)
          try {
            // IMPORTANT: files is used by the code generator so its fine that this is not used
            // the IDE will complain that it is not used but it is used by the code generator
            // see implementation of .setupFiles() and .snippet()
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
          justify={{ base: undefined, sm: 'space-around' }}
          pt="sm"
        >
          <Stack px="sm" w={{ base: '100%', sm: '55%' }} spacing="md">
            <Stack mb="lg" spacing="xs">
              <Breadcrumbs breadcrumbs={[tag, header]} />
              <Title
                color={colorScheme === 'dark' ? theme.white : undefined}
                order={2}
              >
                {header}
              </Title>
              <Group spacing="xs">
                <HttpMethodBadge httpMethod={operation.method} />
                <Box
                  h={2}
                  w={2}
                  style={{
                    backgroundColor:
                      theme.colorScheme === 'dark'
                        ? theme.colors.dark[3]
                        : theme.colors.gray[5],
                    borderRadius: theme.radius.xl,
                  }}
                />
                <Code style={{ backgroundColor: 'unset' }}>
                  {operation.path}
                </Code>
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
              requestBody={requestBodyParameter}
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
              <OperationReferenceResponses
                operation={operation}
                responses={responses}
              />
            )}
            <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
              <Box>
                <SocialFooter konfigYaml={konfigYaml} />
              </Box>
            </MediaQuery>
          </Stack>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Divider my="xl" />
          </MediaQuery>
          <Box
            className="flex flex-col gap-6"
            px="sm"
            w={{ base: '100%', sm: '40%' }}
          >
            {authorization.length > 0 && (
              <div className="space-y-2">
                <Title order={6}>Authorization</Title>
                {authorization
                  .filter(([name]) => {
                    return !hideSecurity.map(({ name }) => name).includes(name)
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
              </div>
            )}
            <div className="sticky top-[calc(var(--mantine-header-height,0px)+1rem)] space-y-4">
              <OperationRequest
                codegenArgs={codegenArgs}
                requestInProgress={requestInProgress}
              />
              {result?.data != null && (
                <Paper shadow="sm" radius="xs" p={0} withBorder>
                  <Box p="sm">
                    {/* if status is not successful (e.g. 4xx or 5xx), the badge is red */}
                    <Badge
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
            </div>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Box>
                <SocialFooter konfigYaml={konfigYaml} />
              </Box>
            </MediaQuery>
          </Box>
        </Flex>
      </form>
    </FormProvider>
  )
}
