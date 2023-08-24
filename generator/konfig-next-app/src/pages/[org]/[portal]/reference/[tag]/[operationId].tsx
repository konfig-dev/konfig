import { TITLE_OFFSET_PX } from '@/components/DemoTitle'
import { HeaderTabs, TABS } from '@/components/HeaderTabs'
import { LayoutHeader } from '@/components/LayoutHeader'
import { generateShadePalette } from '@/utils/generate-shade-palette'
import {
  AppShell,
  Navbar,
  useMantineColorScheme,
  useMantineTheme,
  Header,
  Box,
  Title,
  Group,
  Text,
  MantineProvider,
  Code,
  Stack,
  Flex,
  Divider,
  Badge,
  Button,
} from '@mantine/core'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { useState } from 'react'
import { ReferenceNavbar } from '@/components/ReferenceNavbar'
import {
  GithubResources,
  githubGetReferenceResources,
} from '@/utils/github-get-reference-resources'
import {
  ParameterObject,
  type OperationObject,
  Spec,
  getOperations,
  RequestBodyObject,
  SchemaObject,
  ResponseObject,
} from 'konfig-lib'
import { HttpMethodBadge } from '@/components/HttpMethodBadge'
import { OperationParameter, Parameter } from '@/components/OperationParameter'
import { httpResponseCodeMeaning } from '@/utils/http-response-code-meaning'
import { sortParametersByRequired } from '@/utils/sort-parameters-by-required'
import { NavbarDataItem } from '@/components/LinksGroup'
import { OperationForm } from '@/components/OperationForm'
import { FormProvider, useForm } from '@/utils/operation-form-context'
import { generateInitialFormValues } from '@/utils/generate-initial-operation-form-values'
import { OperationFormGeneratedCode } from '@/components/OperationFormGeneratedCode'
import { useRouter } from 'next/router'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

/**
 * create a getStaticProps function that gets the konfig.yaml file.
 *
 * 1. Use the first two subpaths as /[owner]/[repo] and the GitHub Search API
 * through githubSearchFiles.
 * 2. Use the githubGetFileContent and KonfigYaml.parse to retrieve the
 * konfig.yaml contents and return it as a props
 */

export const getStaticProps: GetStaticProps<
  Omit<GithubResources, 'spec'> & {
    spec: Spec['spec']
    operationId: string
    operation: OperationObject
    pathParameters: Parameter[]
    queryParameters: Parameter[]
    headerParameters: Parameter[]
    cookieParameters: Parameter[]
    requestBodyProperties: Record<string, SchemaObject> | null
    requestBodyRequired: string[] | null
    responses: Record<string, ResponseObject>
  }
> = async (ctx) => {
  const owner = ctx.params?.org
  const repo = ctx.params?.portal
  const tag = ctx.params?.tag
  const operationId = ctx.params?.operationId

  if (owner === undefined || repo === undefined)
    throw Error('Missing owner/repo parameters')

  if (tag === undefined || operationId === undefined)
    throw Error('Missing tag/operationId parameters')

  if (Array.isArray(owner) || Array.isArray(repo))
    throw Error('Got unexpected array type for parameters')

  if (Array.isArray(tag) || Array.isArray(operationId))
    throw Error('Got unexpected array type for parameters')

  const { spec, ...props } = await githubGetReferenceResources({ owner, repo })

  if (spec.specDereferenced === null) throw Error('specDereferenced is null')

  let operation: OperationObject | null = null
  const operations = getOperations({ spec: spec.specDereferenced })
  for (const op of operations) {
    if (op.operation.operationId === operationId) operation = op
  }
  if (operation === null)
    throw Error(`Operation with operation ID ${operationId} not found`)

  // find links group with operation id that matches operation in metadata.operationId and set initiallyOpened to true
  // if not found then set initiallyOpened to false
  // also sets "active" to true to make it highlighted in the navbar
  props.navbarData = props.navbarData.map(
    (item: NavbarDataItem): NavbarDataItem => {
      const hasOperation = item.links.find((link) => {
        if (link.metadata?.operationId === operationId) {
          link.active = true
          return true
        }
        return false
      })
      item.initiallyOpened = hasOperation ? true : false
      return item
    }
  )

  const requestBody = (operation.operation.requestBody ??
    null) as RequestBodyObject | null

  // extract all properties from requestBody schema for every media type into a map of media type -> properties
  const allRequestBodyProperties: Record<
    string,
    Record<string, SchemaObject>
  > = {}
  if (requestBody?.content) {
    for (const mediaType in requestBody.content) {
      const mediaTypeObject = requestBody.content[mediaType]
      if (mediaTypeObject.schema === undefined) continue
      if ('$ref' in mediaTypeObject.schema)
        throw Error('Spec should be dereferenced')
      if (mediaTypeObject.schema?.properties) {
        allRequestBodyProperties[mediaType] = mediaTypeObject.schema
          .properties as Record<string, SchemaObject>
      }
    }
  }

  // put all required properties into a map of media type -> required properties
  const allRequestBodyRequired: Record<string, string[]> = {}
  if (requestBody?.content) {
    for (const [mediaType, mediaTypeObject] of Object.entries(
      requestBody.content
    )) {
      if (mediaTypeObject.schema?.required) {
        allRequestBodyRequired[mediaType] = mediaTypeObject.schema.required
      }
    }
  }

  // extract the first mediaType from requestBody and create two variables: requestBodyProperties and requestBodyRequired
  // if no requestBody then set requestBodyProperties and requestBodyRequired to null
  let requestBodyProperties: Record<string, SchemaObject> | null = null
  let requestBodyRequired: string[] | null = null
  if (requestBody?.content) {
    const firstMediaType = Object.keys(requestBody.content)[0]
    requestBodyProperties = allRequestBodyProperties[firstMediaType] ?? null
    requestBodyRequired = allRequestBodyRequired[firstMediaType] ?? null
  }

  // put responses into a map of response code -> response object
  const responses: Record<string, ResponseObject> = {}
  if (operation.operation.responses) {
    for (const [responseCode, responseObject] of Object.entries(
      operation.operation.responses
    )) {
      responses[responseCode] = responseObject as ResponseObject
    }
  }
  const operationParameters = (operation.operation?.parameters ??
    []) as Parameter[]

  const pathParameters = sortParametersByRequired(
    operationParameters.filter((param) => param.in === 'path')
  )
  const queryParameters = sortParametersByRequired(
    operationParameters.filter((param) => param.in === 'query')
  )
  const headerParameters = sortParametersByRequired(
    operationParameters.filter((param) => param.in === 'header')
  )
  const cookieParameters = sortParametersByRequired(
    operationParameters.filter((param) => param.in === 'cookie')
  )

  return {
    props: {
      ...props,
      operationId,
      operation,
      spec: spec.spec,
      requestBody,
      pathParameters,
      queryParameters,
      headerParameters,
      cookieParameters,
      requestBodyProperties,
      requestBodyRequired,
      responses,
    },
  }
}

const Operation = ({
  konfigYaml,
  demoYaml,
  navbarData,
  pathParameters,
  queryParameters,
  headerParameters,
  cookieParameters,
  requestBodyProperties,
  requestBodyRequired,
  operation,
  responses,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { colors } = useMantineTheme()
  const { colorScheme } = useMantineColorScheme()
  const initialValues = generateInitialFormValues({
    parameters: [
      ...pathParameters,
      ...queryParameters,
      ...headerParameters,
      ...cookieParameters,
    ],
    requestBodyProperties,
  })

  const form = useForm({
    initialValues,
  })

  const [opened, setOpened] = useState(false)
  return (
    <MantineProvider
      theme={{
        colorScheme,
        colors: {
          brand:
            konfigYaml?.primaryColor !== undefined
              ? generateShadePalette(konfigYaml.primaryColor)
              : colors.blue,
        },
        primaryColor: 'brand',
      }}
    >
      <AppShell
        styles={{
          main: {
            background: colorScheme === 'dark' ? colors.dark[8] : undefined,
          },
        }}
        navbarOffsetBreakpoint="lg"
        asideOffsetBreakpoint="lg"
        navbar={
          <Navbar
            p="md"
            pb={0}
            hiddenBreakpoint="lg"
            hidden={!opened}
            width={{ base: 350 }}
            sx={{ overflowY: 'scroll' }}
          >
            <ReferenceNavbar navbarData={navbarData} />
          </Navbar>
        }
        header={
          <Header height={TITLE_OFFSET_PX}>
            <LayoutHeader
              title={
                konfigYaml?.portalTitle ?? demoYaml?.portalName ?? 'API Portal'
              }
            />
            <Box
              px="md"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                height: '45%',
              }}
            >
              <HeaderTabs currentTab={TABS.reference} />
              <Group h="100%"></Group>
            </Box>
          </Header>
        }
      >
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
                      {Object.entries(responses).map(
                        ([responseCode, response]) => (
                          <Box key={responseCode}>
                            {/* 1. Render response code
                          2. Render meaning of response code like "OK" for 200 and "Not Found" for 404 in same text box as (1)
                          3. Render green "Success" badge next to 2xx codes and red "Error" badge next to 4xx and 5xx codes
                          4. Render response description if it exists under the response code + badge
                       */}

                            <Flex gap="xs" align="center">
                              <Title order={6}>
                                {responseCode}{' '}
                                {httpResponseCodeMeaning(responseCode)}
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
                        )
                      )}
                    </Stack>
                  </Box>
                )}
              </Stack>
              <Box w="40%">
                <Stack
                  pos="sticky"
                  top="calc(var(--mantine-header-height, 0px) + 1rem)"
                  w="100%"
                  spacing="xs"
                >
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
      </AppShell>
    </MantineProvider>
  )
}
export default Operation
