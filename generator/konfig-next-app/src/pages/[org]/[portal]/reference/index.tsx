import { TITLE_OFFSET_PX } from '@/components/DemoTitle'
import { HeaderTabs, TABS } from '@/components/HeaderTabs'
import { LayoutHeader } from '@/components/LayoutHeader'
import { generateShadePalette } from '@/utils/generate-shade-palette'
import { parseSpec } from 'konfig-lib/dist/parseSpec'
import {
  AppShell,
  Navbar,
  useMantineColorScheme,
  useMantineTheme,
  Header,
  Box,
  Group,
  MantineProvider,
} from '@mantine/core'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { useState } from 'react'
import type { KonfigYamlType } from 'konfig-lib/dist/KonfigYaml'
import { createOctokitInstance } from '@/utils/octokit'
import { githubGetKonfigYamls } from '@/utils/github-get-konfig-yamls'
import { githubGetDemoYamls } from '@/utils/github-get-demo-yamls'
import { DemoYaml } from '@/utils/generate-demos-from-github'
import { ReferenceNavbar } from '@/components/ReferenceNavbar'
import { githubGetFileContent } from '@/utils/github-get-file-content'
import path from 'path'
import { LinksGroupProps } from '@/components/LinksGroup'
import { generateNavbarLinks } from '@/utils/generate-navbar-links'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export interface NavbarDataItem {
  label: LinksGroupProps['label']
  links: NonNullable<LinksGroupProps['links']>
}

/**
 * create a getStaticProps function that gets the konfig.yaml file.
 *
 * 1. Use the first two subpaths as /[owner]/[repo] and the GitHub Search API
 * through githubSearchFiles.
 * 2. Use the githubGetFileContent and KonfigYaml.parse to retrieve the
 * konfig.yaml contents and return it as a props
 */

export const getStaticProps: GetStaticProps<{
  konfigYaml: KonfigYamlType | null
  demoYaml: DemoYaml | null
  navbarData: NavbarDataItem[]
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
  const konfigYaml = konfigYamls?.[0]
  const demoYaml = demoYamls?.[0]

  if (konfigYaml === undefined) throw Error("Couldn't find konfig.yaml")

  const specPath = konfigYaml.content.specPath

  const openapi = await githubGetFileContent({
    owner,
    repo,
    octokit,
    path: path.join(path.dirname(konfigYaml.info.path), specPath),
  })

  const spec = await parseSpec(openapi)

  const navbarData = generateNavbarLinks({ spec: spec.spec, owner, repo })

  return {
    props: {
      konfigYaml: konfigYaml.content,
      demoYaml: demoYaml ?? null,
      navbarData,
    },
  }
}

const Reference = ({
  konfigYaml,
  demoYaml,
  navbarData,
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
        Test
      </AppShell>
    </MantineProvider>
  )
}
export default Reference
