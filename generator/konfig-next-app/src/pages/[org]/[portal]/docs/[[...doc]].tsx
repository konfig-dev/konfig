import DemoMarkdown, { DemoState } from '@/components/DemoMarkdown'
import { DemoSocials } from '@/components/DemoSocials'
import { DemoTableOfContents } from '@/components/DemoTableOfContents'
import { DocEditThisPage } from '@/components/DocEditThisPage'
import { DocNavLink } from '@/components/DocNavLink'
import { DocumentationHeader } from '@/components/DocumentationHeader'
import { NAVBAR_WIDTH } from '@/components/ReferenceNavbar'
import { generateShadePalette } from '@/utils/generate-shade-palette'
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
import { OperationObject } from 'konfig-lib'
import { observer } from 'mobx-react'
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetServerSidePropsType,
} from 'next'
import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'
import {
  MarkdownPageProps,
  generatePropsForMarkdownPage,
} from '@/utils/generate-props-for-markdown-page'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<MarkdownPageProps> = async (
  ctx
) => {
  const owner = ctx.params?.org
  const repo = ctx.params?.portal
  if (owner === undefined || repo === undefined)
    throw Error('Missing owner/repo parameters')

  if (Array.isArray(owner) || Array.isArray(repo))
    throw Error('Got unexpected array type for parameters')

  return generatePropsForMarkdownPage({
    owner,
    repo,
    docUrlParam: ctx.params?.doc,
    omitOwnerAndRepo: false,
  })
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
    omitOwnerAndRepo,
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
        omitOwnerAndRepo,
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
          omitOwnerAndRepo,
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
              <Stack>
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
                                omitOwnerAndRepo={omitOwnerAndRepo}
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
              </Stack>
            </Navbar>
          }
          header={
            <DocumentationHeader
              omitOwnerAndRepo={omitOwnerAndRepo}
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
