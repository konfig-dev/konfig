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
  Flex,
  Code,
} from '@mantine/core'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { useState } from 'react'
import { ReferenceNavbar } from '@/components/ReferenceNavbar'
import {
  GithubResources,
  githubGetReferenceResources,
} from '@/utils/github-get-reference-resources'
import { forEachOperation, type OperationObject } from 'konfig-lib'
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
  GithubResources & {
    operationId: string
    operation: OperationObject
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

  const props = await githubGetReferenceResources({ owner, repo })

  let operation = null
  forEachOperation(props.spec, (op) => {
    if (op.operation.operationId === operationId) operation = op
  })
  if (operation === null)
    throw Error(`Operation with operation ID ${operationId} not found`)

  return {
    props: { ...props, operationId, operation },
  }
}

const Operation = ({
  konfigYaml,
  demoYaml,
  navbarData,
  operationId,
  spec,
  operation,
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
        <SimpleGrid cols={2}>
          <Flex direction="column" gap="sm">
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
          </Flex>
          <Box>Code / Response</Box>
        </SimpleGrid>
      </AppShell>
    </MantineProvider>
  )
}
export default Operation
