import { DocumentationHeader } from '@/components/DocumentationHeader'
import { NAVBAR_WIDTH } from '@/components/ReferenceNavbar'
import { findDocumentInConfiguration } from '@/utils/find-document-in-configuration'
import { findFirstDocumentInConfiguration } from '@/utils/find-first-document-in-configuration'
import { generateDemosDataFromGithub } from '@/utils/generate-demos-from-github'
import { generateShadePalette } from '@/utils/generate-shade-palette'
import { githubGetFileContent } from '@/utils/github-get-file-content'
import { githubGetKonfigYamls } from '@/utils/github-get-konfig-yamls'
import { createOctokitInstance } from '@/utils/octokit'
import {
  useMantineTheme,
  useMantineColorScheme,
  MantineProvider,
  AppShell,
  Navbar,
} from '@mantine/core'
import { KonfigYamlType } from 'konfig-lib'
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetServerSidePropsType,
} from 'next'
import { useState } from 'react'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export type StaticProps = {
  konfigYaml: KonfigYamlType
  demos: string[] // demo ids
  title: string
  markdown: string
}
export const getStaticProps: GetStaticProps<StaticProps> = async (ctx) => {
  const owner = ctx.params?.org
  const repo = ctx.params?.portal
  if (owner === undefined || repo === undefined)
    throw Error('Missing owner/repo parameters')

  if (Array.isArray(owner) || Array.isArray(repo))
    throw Error('Got unexpected array type for parameters')

  const octokit = await createOctokitInstance({ owner, repo })

  // time the next two lines
  const start = Date.now()
  const konfigYamls = await githubGetKonfigYamls({ owner, repo, octokit })
  console.log(`githubGetKonfigYamls took ${Date.now() - start}ms`)

  // TODO: handle multiple konfig.yaml
  const konfigYaml = konfigYamls?.[0]

  const documentationConfig = konfigYaml?.content.portal?.documentation
  if (documentationConfig === undefined)
    throw Error("Couldn't find documentation configuration")

  // if no document is specified, redirect to first document
  if (ctx.params?.document === undefined) {
    const doc = findFirstDocumentInConfiguration({
      docConfig: documentationConfig,
    })
    return {
      redirect: {
        destination: `/${owner}/${repo}/docs/${doc.id}`,
        permanent: false,
      },
    }
  }

  const document = ctx.params?.document ?? []
  if (!Array.isArray(document)) throw Error("Couldn't parse document parameter")
  const documentId = document.join('/')

  const doc = findDocumentInConfiguration({
    docId: documentId,
    docConfig: documentationConfig,
  })

  const markdown = await githubGetFileContent({
    octokit,
    owner,
    repo,
    path: doc.path,
  })

  const demos = await generateDemosDataFromGithub({
    orgId: owner,
    portalId: repo,
  })

  if (konfigYaml?.content.portal === undefined)
    throw Error("Couldn't find portal configuration")

  if (konfigYaml === undefined) throw Error("Couldn't find konfig.yaml")
  return {
    props: {
      title: konfigYaml.content.portal?.title,
      konfigYaml: konfigYaml.content,
      markdown,
      demos:
        demos.result === 'error'
          ? []
          : demos.portal.demos.map((demo) => demo.id),
    },
  }
}

const DocumentationPage = ({
  konfigYaml,
  title,
  markdown,
  demos,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const { colors } = useMantineTheme()
  const { colorScheme } = useMantineColorScheme()

  const [opened, setOpened] = useState(false)

  return (
    <MantineProvider
      theme={{
        colorScheme,
        colors: {
          brand:
            konfigYaml.portal?.primaryColor !== undefined
              ? generateShadePalette(konfigYaml.portal?.primaryColor)
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
            hiddenBreakpoint="lg"
            hidden={!opened}
            width={{ lg: NAVBAR_WIDTH }}
            sx={{
              overflowY: 'scroll',
              height:
                'calc(100% - var(--mantine-header-height, 0rem) - var(--mantine-footer-height, 0rem));',
            }}
          >
            test
          </Navbar>
        }
        header={
          <DocumentationHeader
            opened={opened}
            setOpened={setOpened}
            title={title}
            demos={demos}
          />
        }
      >
        test
      </AppShell>
    </MantineProvider>
  )
}

export default DocumentationPage
