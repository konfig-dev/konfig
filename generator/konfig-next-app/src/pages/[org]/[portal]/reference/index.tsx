import { TITLE_OFFSET_PX } from '@/components/DemoTitle'
import { HeaderTabs, TABS } from '@/components/HeaderTabs'
import { LayoutHeader } from '@/components/LayoutHeader'
import { generateShadePalette } from '@/utils/generate-shade-palette'
import {
  AppShell,
  Navbar,
  Text,
  useMantineColorScheme,
  useMantineTheme,
  Header,
  Aside,
  MediaQuery,
  Box,
  Group,
  MantineProvider,
} from '@mantine/core'
import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
} from 'next'
import { useState } from 'react'
import type { KonfigYamlType } from 'konfig-lib/dist/KonfigYaml'
import { createOctokitInstance } from '@/utils/octokit'
import { githubGetKonfigYamls } from '@/utils/github-get-konfig-yamls'
import { githubGetDemoYamls } from '@/utils/github-get-demo-yamls'
import { DemoYaml } from '@/utils/generate-demos-from-github'

/**
 * create a getStaticProps function that gets the konfig.yaml file.
 *
 * 1. Use the first two subpaths as /[owner]/[repo] and the GitHub Search API
 * through githubSearchFiles.
 * 2. Use the githubGetFileContent and KonfigYaml.parse to retrieve the
 * konfig.yaml contents and return it as a props
 */

export const getServerSideProps: GetServerSideProps<{
  konfigYaml: KonfigYamlType
  demoYaml: DemoYaml
}> = async (ctx) => {
  const owner = ctx.params?.org
  const repo = ctx.params?.portal

  if (owner === undefined || repo === undefined)
    throw Error('Missing owner/repo parameters')

  if (Array.isArray(owner) || Array.isArray(repo))
    throw Error('Got unexpected array type for parameters')

  const octokit = await createOctokitInstance({ owner, repo })

  const konfigYamls = await githubGetKonfigYamls({ owner, repo, octokit })
  const demoYamls = await githubGetDemoYamls({ owner, repo, octokit })

  // TODO: handle multiple konfig.yaml / demo.yaml files
  const konfigYaml = konfigYamls[0]
  const demoYaml = demoYamls[0]

  return {
    props: {
      konfigYaml,
      demoYaml,
    },
  }
}

const Reference = ({
  konfigYaml,
  demoYaml,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { colors } = useMantineTheme()
  const { colorScheme } = useMantineColorScheme()
  const [opened, setOpened] = useState(false)
  return (
    <MantineProvider
      theme={{
        colorScheme,
        colors: {
          brand:
            konfigYaml.primaryColor !== undefined
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
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="lg"
        navbar={
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 225, lg: 325 }}
            sx={{ overflowY: 'scroll' }}
          >
            <Text>Application navbar</Text>
          </Navbar>
        }
        aside={
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
              <Text>Application sidebar</Text>
            </Aside>
          </MediaQuery>
        }
        header={
          <Header height={TITLE_OFFSET_PX}>
            <LayoutHeader
              title={konfigYaml.portalTitle ?? demoYaml.portalName}
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
        Test
      </AppShell>
    </MantineProvider>
  )
}
export default Reference
