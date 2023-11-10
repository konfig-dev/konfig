import DemoMarkdown, { DemoState } from '@/components/DemoMarkdown'
import { DemoTableOfContents } from '@/components/DemoTableOfContents'
import { DocEditThisPage } from '@/components/DocEditThisPage'
import { DocNavLink } from '@/components/DocNavLink'
import { DocumentationHeader } from '@/components/DocumentationHeader'
import { NAVBAR_WIDTH } from '@/components/ReferenceNavbar'
import Fuse from 'fuse.js'
import {
  useMantineTheme,
  useMantineColorScheme,
  MantineProvider,
  AppShell,
  Navbar,
  Stack,
  Box,
  rem,
  Text,
  createStyles,
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
import Head from 'next/head'
import { SocialFooter } from '@/components/SocialFooter'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { generateMantineThemeColors } from '@/utils/generate-mantine-theme-colors'
import { proseContainerWidthStyles } from '@/utils/prose-container-width-styles'
import { FlexCenter } from '@/components/FlexCenter'
import { asideOffsetBreakpoint } from '@/utils/aside-offset-breakpoint'
import { navbarOffsetBreakpoint } from '@/utils/navbar-offset-breakpoint'
import { useNavbarStyles } from '@/utils/use-navbar-styles'
import { NavbarSectionLabel } from '@/components/NavbarSectionLabel'
import { GoogleAnalyticsProvider } from '@/components/GoogleAnalyticsProvider'

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

const useStyles = createStyles((theme) => ({
  markdown: {
    // this lives in [[...doc]].tsx as opposed to DemoMarkdown because we want
    // buttons to be close to code in the demos
    '.mantine-Tabs-root': {
      marginBottom: theme.spacing.xl,
    },
  },
}))

const DocumentationPage = observer(
  ({
    konfigYaml,
    title,
    markdown,
    docTitle,
    docId,
    docConfig,
    googleAnalyticsId,
    operations,
    owner,
    defaultBranch,
    idToLabel,
    allMarkdown,
    docPath,
    breadcrumb,
    repo,
    omitOwnerAndRepo,
    demos,
    faviconLink,
    logo,
  }: InferGetServerSidePropsType<typeof getStaticProps>) => {
    const theme = useMantineTheme()
    const { colorScheme } = useMantineColorScheme()

    const [opened, setOpened] = useState(false)

    const { classes } = useStyles()

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

    const navbarClasses = useNavbarStyles()

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
      <GoogleAnalyticsProvider googleAnalyticsId={googleAnalyticsId}>
        <Head>
          <title>{docTitle}</title>
          {faviconLink ? (
            <link rel="icon" href={faviconLink} />
          ) : (
            <link rel="icon" href="/favicon.png" />
          )}
        </Head>
        <MantineProvider
          inherit
          theme={{
            colorScheme,
            ...generateMantineThemeColors({
              primaryColor: konfigYaml.portal?.primaryColor,
              colors: theme.colors,
            }),
            primaryColor: 'brand',
          }}
        >
          <AppShell
            styles={{
              main: {
                background:
                  colorScheme === 'dark' ? theme.colors.dark[8] : undefined,
              },
            }}
            navbarOffsetBreakpoint={navbarOffsetBreakpoint}
            asideOffsetBreakpoint={asideOffsetBreakpoint}
            aside={<DemoTableOfContents demoDiv={state.demoDiv} />}
            navbar={
              <Navbar
                hiddenBreakpoint={navbarOffsetBreakpoint}
                hidden={!opened}
                width={{ [navbarOffsetBreakpoint]: NAVBAR_WIDTH }}
                className={navbarClasses.classes.navbar}
                py="xl"
                px="md"
                sx={{
                  overflowY: 'auto',
                  height:
                    'calc(100% - var(--mantine-header-height, 0rem) - var(--mantine-footer-height, 0rem));',
                }}
              >
                <Stack spacing="xl">
                  {docConfig.sidebar.sections.map((section, i) => {
                    return (
                      <Box key={`${section.label}-${i}`}>
                        <NavbarSectionLabel>{section.label}</NavbarSectionLabel>
                        <Stack spacing={0}>
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
                            throw Error(
                              `Not implemented link type ${link.type}`
                            )
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
                owner={owner}
                repo={repo}
                omitOwnerAndRepo={omitOwnerAndRepo}
                opened={opened}
                setOpened={setOpened}
                allMarkdown={allMarkdown}
                title={title}
                demos={demos}
                logo={logo}
              />
            }
          >
            <OperationsContext.Provider value={operations}>
              {/* for centering Box */}
              <FlexCenter pt="sm">
                <Box
                  className={classes.markdown}
                  {...proseContainerWidthStyles}
                >
                  <Breadcrumbs breadcrumbs={breadcrumb} />
                  <DemoMarkdown state={state} />
                  <Box my={rem(40)}>
                    <DocEditThisPage
                      owner={owner}
                      repo={repo}
                      path={docPath}
                      defaultBranch={defaultBranch}
                    />
                  </Box>
                  <SocialFooter konfigYaml={konfigYaml} />
                </Box>
              </FlexCenter>
            </OperationsContext.Provider>
          </AppShell>
        </MantineProvider>
      </GoogleAnalyticsProvider>
    )
  }
)

export default DocumentationPage
