import { DemoPortal, PortalState } from '@/components/DemoPortal'
import { observer } from 'mobx-react'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { useMemo } from 'react'
import { GenerationSuccess } from '@/utils/generate-demos-from-github'
import { MantineProvider, useMantineTheme } from '@mantine/core'
import { generatePropsForDemoPage } from '@/utils/generate-props-for-demo-page'
import { generateMantineThemeColors } from '@/utils/generate-mantine-theme-colors'
import { GoogleAnalyticsProvider } from '@/components/GoogleAnalyticsProvider'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<GenerationSuccess> = async (
  ctx
) => {
  if (!ctx.params?.org || Array.isArray(ctx.params.org)) {
    return {
      notFound: true,
    }
  }

  if (!ctx.params?.portal || Array.isArray(ctx.params.portal)) {
    return {
      notFound: true,
    }
  }

  if (!ctx.params?.demo || Array.isArray(ctx.params.demo)) {
    return {
      notFound: true,
    }
  }

  return generatePropsForDemoPage({
    omitOwnerAndRepo: false,
    org: ctx.params.org,
    repo: ctx.params.portal,
    demoId: ctx.params.demo,
  })
}

const DemoPage = observer(
  ({
    organization,
    portal,
    demo,
    mainBranch,
    socials,
    portalTitle,
    primaryColor,
    omitOwnerAndRepo,
    googleAnalyticsId,
    customSnippet,
    hasDocumentation,
    allMarkdown,
    owner,
    repo,
    faviconLink,
    logo,
  }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const state = useMemo(
      () =>
        new PortalState({
          ...portal,
          portalId: portal.id,
          organizationId: organization.id,
          demoId: demo.id,
          mainBranch,
          socials,
          portalTitle,
          omitOwnerAndRepo,
        }),
      [
        demo.id,
        mainBranch,
        organization.id,
        portal,
        socials,
        portalTitle,
        omitOwnerAndRepo,
      ]
    )
    const { colorScheme, colors } = useMantineTheme()

    return (
      <MantineProvider
        inherit
        theme={{
          colorScheme,
          ...generateMantineThemeColors({
            primaryColor,
            colors,
          }),
          primaryColor: 'brand',
        }}
      >
        <GoogleAnalyticsProvider
          customSnippet={customSnippet}
          googleAnalyticsId={googleAnalyticsId}
        />
        <Head>
          {faviconLink ? (
            <link rel="icon" href={faviconLink} />
          ) : (
            <link rel="icon" href="/favicon.png" />
          )}
        </Head>
        <DemoPortal
          omitOwnerAndRepo={omitOwnerAndRepo}
          hasDocumentation={hasDocumentation}
          state={state}
          allMarkdown={allMarkdown}
          owner={owner}
          repo={repo}
          logo={logo}
        />
      </MantineProvider>
    )
  }
)

export default DemoPage
