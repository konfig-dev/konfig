import DemoMarkdown, { DemoState } from '@/components/DemoMarkdown'
import { DemoSocials } from '@/components/DemoSocials'
import { DemoTableOfContents } from '@/components/DemoTableOfContents'
import { DocEditThisPage } from '@/components/DocEditThisPage'
import { DocNavLink } from '@/components/DocNavLink'
import { DocumentationHeader } from '@/components/DocumentationHeader'
import { NAVBAR_WIDTH } from '@/components/ReferenceNavbar'
import { collectAllDocuments } from '@/utils/collect-all-documents'
import { findDocumentInConfiguration } from '@/utils/find-document-in-configuration'
import { findFirstDocumentInConfiguration } from '@/utils/find-first-document-in-configuration'
import { findFirstHeadingText } from '@/utils/find-first-heading-text'
import { generateDemosDataFromGithub } from '@/utils/generate-demos-from-github'
import { generateShadePalette } from '@/utils/generate-shade-palette'
import { githubGetFileContent } from '@/utils/github-get-file-content'
import { githubGetKonfigYamls } from '@/utils/github-get-konfig-yamls'
import { githubGetRepository } from '@/utils/github-get-repository'
import { createOctokitInstance } from '@/utils/octokit'
import { transformInternalLinks } from '@/utils/transform-internal-links'
import { transformImageLinks } from '@/utils/transform-image-links'
import {
  useMantineTheme,
  useMantineColorScheme,
  MantineProvider,
  AppShell,
  Navbar,
  Stack,
  Box,
  Title,
  rem,
  Divider,
} from '@mantine/core'
import {
  DocumentationConfig,
  KonfigYamlType,
  OperationObject,
  getOperations,
  parseSpec,
} from 'konfig-lib'
import { observer } from 'mobx-react'
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetServerSidePropsType,
} from 'next'
import { useRouter } from 'next/router'
import path from 'path'
import { createContext, useEffect, useState } from 'react'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export type StaticProps = {
  konfigYaml: KonfigYamlType
  demos: string[] // demo ids
  docId: string
  docPath: string
  docConfig: DocumentationConfig
  docTitle: string
  title: string
  owner: string
  repo: string
  operations: OperationObject[]
  markdown: string
  defaultBranch: string
  idToLabel: Record<string, string | undefined>
}
export const getStaticProps: GetStaticProps<StaticProps> = async (ctx) => {
  const owner = ctx.params?.org
  const repo = ctx.params?.portal
  if (owner === undefined || repo === undefined)
    throw Error('Missing owner/repo parameters')

  if (Array.isArray(owner) || Array.isArray(repo))
    throw Error('Got unexpected array type for parameters')

  const octokit = await createOctokitInstance({ owner, repo })

  // get default branch of repo
  const { data: repoData } = await githubGetRepository({
    owner,
    repo,
    octokit,
  })
  const defaultBranch = repoData.default_branch

  // time the next two lines
  const start = Date.now()
  const konfigYamls = await githubGetKonfigYamls({ owner, repo, octokit })
  console.log(`githubGetKonfigYamls took ${Date.now() - start}ms`)

  // TODO: handle multiple konfig.yaml
  const konfigYaml = konfigYamls?.[0]

  if (konfigYaml === undefined) throw Error("Couldn't find konfig.yaml")

  const documentationConfig = konfigYaml?.content.portal?.documentation
  if (documentationConfig === undefined)
    throw Error("Couldn't find documentation configuration")

  // if no document is specified, redirect to first document
  if (ctx.params?.doc === undefined) {
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

  const docParam = ctx.params?.doc ?? []
  if (!Array.isArray(docParam)) throw Error("Couldn't parse document parameter")
  const documentId = docParam.join('/')

  const doc = findDocumentInConfiguration({
    docId: documentId,
    docConfig: documentationConfig,
  })

  const originalMarkdown = await githubGetFileContent({
    octokit,
    owner,
    repo,
    path: doc.path,
  })

  const specPath = konfigYaml.content.specPath

  // time the next three lines
  const openapi = await githubGetFileContent({
    owner,
    repo,
    octokit,
    path: path.join(path.dirname(konfigYaml.info.path), specPath),
  })

  const spec = await parseSpec(openapi)
  const operations = getOperations({ spec: spec.spec })

  const markdown = transformImageLinks({
    markdown: transformInternalLinks({
      markdown: originalMarkdown,
      owner,
      repo,
      operations: operations.map((op) => op.operation),
    }),
    owner,
    repo,
    docPath: doc.path,
    defaultBranch,
  })

  const demos = await generateDemosDataFromGithub({
    orgId: owner,
    portalId: repo,
  })

  if (konfigYaml?.content.portal === undefined)
    throw Error("Couldn't find portal configuration")

  const docTitle = findFirstHeadingText({ markdown })

  // get all docs with collectAllDocumentation and generate a map of id to label from first heading text
  const docs = collectAllDocuments({ docConfig: documentationConfig })
  const idToLabel: Record<string, string | undefined> = {}
  for (const { id, path } of docs) {
    const content = await githubGetFileContent({
      octokit,
      owner,
      repo,
      path,
    })
    const docTitle = findFirstHeadingText({ markdown: content })
    idToLabel[id] = docTitle
  }

  return {
    props: {
      title: konfigYaml.content.portal?.title,
      konfigYaml: konfigYaml.content,
      markdown,
      docTitle,
      docId: documentId,
      docPath: doc.path,
      docConfig: documentationConfig,
      owner,
      repo,
      operations,
      defaultBranch,
      idToLabel,
      demos:
        demos.result === 'error'
          ? []
          : demos.portal.demos.map((demo) => demo.id),
    },
  }
}

export const OperationsContext = createContext<OperationObject[]>([])

const DocumentationPage = observer(
  ({
    konfigYaml,
    title,
    markdown,
    docTitle,
    docId,
    docConfig,
    operations,
    owner,
    defaultBranch,
    idToLabel,
    docPath,
    repo,
    demos,
  }: InferGetServerSidePropsType<typeof getStaticProps>) => {
    const { colors } = useMantineTheme()
    const { colorScheme } = useMantineColorScheme()

    const [opened, setOpened] = useState(false)

    const [state, setState] = useState(() => {
      return new DemoState({
        markdown,
        name: docTitle,
        id: docId.replace('/', '-'),
        showCode: true,
        owner,
        repo,
      })
    })

    const router = useRouter()

    useEffect(() => {
      setState(
        new DemoState({
          markdown,
          name: docTitle,
          id: docId.replace('/', '-'),
          showCode: true,
          owner,
          repo,
        })
      )
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.asPath])

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
          aside={<DemoTableOfContents demoDiv={state.demoDiv} />}
          navbar={
            <Navbar
              hiddenBreakpoint="lg"
              hidden={!opened}
              width={{ lg: NAVBAR_WIDTH }}
              py="md"
              sx={{
                overflowY: 'scroll',
                height:
                  'calc(100% - var(--mantine-header-height, 0rem) - var(--mantine-footer-height, 0rem));',
              }}
            >
              {docConfig.sidebar.sections.map((section, i) => {
                return (
                  <Box key={`${section.label}-${i}`}>
                    <Title pb="xs" px="md" order={5}>
                      {section.label}
                    </Title>
                    <Stack spacing={rem(3)}>
                      {section.links.map((link) => {
                        if (link.type === 'link') {
                          const label = idToLabel[link.id]
                          if (label === undefined)
                            throw Error(
                              `Couldn't find label for link with ID: ${link.id}`
                            )
                          return (
                            <DocNavLink
                              key={link.id}
                              id={link.id}
                              label={link.label ?? label}
                              docId={docId}
                              setOpened={setOpened}
                            />
                          )
                        }
                        throw Error(`Not implemented link type ${link.type}`)
                      })}
                    </Stack>
                  </Box>
                )
              })}
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
          <OperationsContext.Provider value={operations}>
            <DemoMarkdown state={state} />
            <Box my={rem(40)}>
              <DocEditThisPage
                owner={owner}
                repo={repo}
                path={docPath}
                defaultBranch={defaultBranch}
              />
            </Box>
            <Divider mt={rem(60)} />
            <Box my={rem(20)}>
              <DemoSocials socials={konfigYaml.portal?.socials} />
            </Box>
          </OperationsContext.Provider>
        </AppShell>
      </MantineProvider>
    )
  }
)

export default DocumentationPage
