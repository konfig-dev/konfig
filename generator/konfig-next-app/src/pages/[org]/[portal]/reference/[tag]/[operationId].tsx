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
        <Flex>
          <Stack w="60%" spacing="xl">
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
                        param={{
                          name: propertyName,
                          in: 'body',
                          required: requestBodyRequired?.includes(propertyName),
                          schema: property,
                        }}
                      />
                    )
                  )}
                </Stack>
              </Box>
            )}
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
          <Box>Code / Response</Box>
        </Flex>
      </AppShell>
    </MantineProvider>
  )
}
export default Operation
