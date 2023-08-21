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
  Group,
  MantineProvider,
} from '@mantine/core'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { useState } from 'react'
import type { KonfigYamlType } from 'konfig-lib/dist/KonfigYaml'
import { ReferenceNavbar } from '@/components/ReferenceNavbar'
import { LinksGroupProps } from '@/components/LinksGroup'
import { githubGetReferenceResources } from '@/utils/github-get-reference-resources'
import { DemoYaml } from '@/utils/generate-demos-from-github-utils'

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

  const props = await githubGetReferenceResources({ owner, repo })

  return {
    props,
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
