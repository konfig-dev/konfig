import { generateShadePalette } from '@/utils/generate-shade-palette'
import {
  AppShell,
  Navbar,
  useMantineColorScheme,
  useMantineTheme,
  MantineProvider,
} from '@mantine/core'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { useState } from 'react'
import { NAVBAR_WIDTH, ReferenceNavbar } from '@/components/ReferenceNavbar'
import { OperationReferenceMain } from '@/OperationReferenceMain'
import Script from 'next/script'
import Head from 'next/head'
import { ReferenceHeader } from '@/components/ReferenceHeader'
import {
  ReferencePageProps,
  generatePropsForReferencePage,
} from '@/utils/generate-props-for-reference-page'

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

export const getStaticProps: GetStaticProps<ReferencePageProps> = async (
  ctx
) => {
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

  return generatePropsForReferencePage({ owner, tag, repo, operationId })
}

const Operation = ({
  konfigYaml,
  navbarData,
  pathParameters,
  queryParameters,
  headerParameters,
  cookieParameters,
  title,
  requestBodyProperties,
  demos,
  requestBodyRequired,
  securityRequirements,
  securitySchemes,
  servers: initialServers,
  operation,
  owner,
  faviconLink,
  hasDocumentation,
  repo,
  oauthTokenUrl: originalOauthTokenUrl,
  omitOwnerAndRepo,
  responses,
  logo,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { colors } = useMantineTheme()
  const { colorScheme } = useMantineColorScheme()

  const [basePath, setBasePath] = useState<string | null>(initialServers[0])
  const [servers, setServers] = useState(initialServers)
  const [oauthTokenUrl, setOauthTokenUrl] = useState(originalOauthTokenUrl)
  const [oauthTokenUrls, setOauthTokenUrls] = useState<string[]>(
    originalOauthTokenUrl ? [originalOauthTokenUrl] : []
  )

  const [opened, setOpened] = useState(false)
  const theme = useMantineTheme()
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
      <Head>
        <title>
          {operation.operation.summary ??
            `${operation.method} ${operation.path}`}
        </title>
        {faviconLink ? (
          <link rel="icon" href={faviconLink} />
        ) : (
          <link rel="icon" href="/favicon.png" />
        )}
      </Head>
      <Script
        src={`https://unpkg.com/${konfigYaml.generators.typescript?.npmName}@${konfigYaml.generators.typescript?.version}/dist/browser.js`}
      />
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
            <ReferenceNavbar
              setOauthTokenUrl={setOauthTokenUrl}
              oauthTokenUrls={oauthTokenUrls}
              originalOauthTokenUrl={originalOauthTokenUrl}
              setOauthTokenUrls={setOauthTokenUrls}
              servers={servers}
              setServers={setServers}
              owner={owner}
              repo={repo}
              basePath={basePath}
              setBasePath={setBasePath}
              oauthTokenUrl={oauthTokenUrl}
              setOpened={setOpened}
              navbarData={navbarData}
              originalServers={initialServers}
            />
          </Navbar>
        }
        header={
          <ReferenceHeader
            owner={owner}
            repo={repo}
            hasDocumentation={hasDocumentation}
            opened={opened}
            setOpened={setOpened}
            title={title}
            demos={demos}
            logo={logo}
            omitOwnerAndRepo={omitOwnerAndRepo}
          />
        }
      >
        <OperationReferenceMain
          originalOauthTokenUrl={originalOauthTokenUrl}
          owner={owner}
          servers={servers}
          repo={repo}
          konfigYaml={konfigYaml}
          oauthTokenUrl={oauthTokenUrl}
          pathParameters={pathParameters}
          queryParameters={queryParameters}
          headerParameters={headerParameters}
          cookieParameters={cookieParameters}
          requestBodyProperties={requestBodyProperties}
          requestBodyRequired={requestBodyRequired}
          responses={responses}
          securitySchemes={securitySchemes}
          operation={operation}
          basePath={basePath ?? servers[0]}
        />
      </AppShell>
    </MantineProvider>
  )
}
export default Operation
