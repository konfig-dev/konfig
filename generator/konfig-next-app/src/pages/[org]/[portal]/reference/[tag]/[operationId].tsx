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
  SimpleGrid,
  Code,
  Stack,
} from '@mantine/core'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { useState } from 'react'
import { ReferenceNavbar } from '@/components/ReferenceNavbar'
import {
  GithubResources,
  githubGetReferenceResources,
} from '@/utils/github-get-reference-resources'
import { getOperationParameters } from 'konfig-lib/dist/util/get-operation-parameters'
import {
  ParameterObject,
  type OperationObject,
  Spec,
  getOperations,
} from 'konfig-lib'
import { HttpMethodBadge } from '@/components/HttpMethodBadge'

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
    operationParameters: ParameterObject[]
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

  let operation: OperationObject | null = null
  const operations = getOperations({ spec: spec.spec })
  for (const op of operations) {
    if (op.operation.operationId === operationId) operation = op
  }
  if (operation === null)
    throw Error(`Operation with operation ID ${operationId} not found`)

  const operationParameters =
    getOperationParameters({
      operation: operation.operation,
      spec,
    }) ?? []

  return {
    props: {
      ...props,
      operationId,
      operation,
      operationParameters,
      spec: spec.spec,
    },
  }
}

const Operation = ({
  konfigYaml,
  demoYaml,
  navbarData,
  operationId,
  spec,
  operationParameters,
  operation,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { colors } = useMantineTheme()
  const { colorScheme } = useMantineColorScheme()
  const [opened, setOpened] = useState(false)
  const pathParameters = operationParameters.filter(
    (param) => param.in === 'path'
  )
  const queryParameters = operationParameters.filter(
    (param) => param.in === 'query'
  )
  const headerParameters = operationParameters.filter(
    (param) => param.in === 'header'
  )
  const cookieParameters = operationParameters.filter(
    (param) => param.in === 'cookie'
  )
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
        <SimpleGrid cols={2}>
          <Stack spacing="xl">
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
                <Stack>
                  {pathParameters.map((param) => (
                    <Box key={param.name}>
                      <Code>{param.name}</Code>
                      <Text c="dimmed" fz="sm">
                        {param.description}
                      </Text>
                    </Box>
                  ))}
                </Stack>
              </Box>
            )}
            {queryParameters.length > 0 && (
              <Box>
                <Title order={4}>Query Parameters</Title>
                <Stack>
                  {queryParameters.map((param) => (
                    <Box key={param.name}>
                      <Code>{param.name}</Code>
                      <Text c="dimmed" fz="sm">
                        {param.description}
                      </Text>
                    </Box>
                  ))}
                </Stack>
              </Box>
            )}
            {headerParameters.length > 0 && (
              <Box>
                <Title order={4}>Header Parameters</Title>
                <Stack>
                  {headerParameters.map((param) => (
                    <Box key={param.name}>
                      <Code>{param.name}</Code>
                      <Text c="dimmed" fz="sm">
                        {param.description}
                      </Text>
                    </Box>
                  ))}
                </Stack>
              </Box>
            )}
            {cookieParameters.length > 0 && (
              <Box>
                <Title order={4}>Cookie Parameters</Title>
                <Stack>
                  {cookieParameters.map((param) => (
                    <Box key={param.name}>
                      <Code>{param.name}</Code>
                      <Text c="dimmed" fz="sm">
                        {param.description}
                      </Text>
                    </Box>
                  ))}
                </Stack>
              </Box>
            )}
          </Stack>
          <Box>Code / Response</Box>
        </SimpleGrid>
      </AppShell>
    </MantineProvider>
  )
}
export default Operation
