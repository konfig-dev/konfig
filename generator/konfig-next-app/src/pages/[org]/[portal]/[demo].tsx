import { DemoPortal, PortalState } from '@/components/DemoPortal'
import { observer } from 'mobx-react'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { useMemo } from 'react'
import {
  GenerationSuccess,
  generateDemosDataFromGithub,
} from '@/utils/generate-demos-from-github'
import { MantineProvider, useMantineTheme } from '@mantine/core'
import { generateShadePalette } from '@/utils/generate-shade-palette'

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

  const props = await generateDemosDataFromGithub({
    orgId: ctx.params.org,
    portalId: ctx.params.portal,
    demoId: ctx.params.demo,
  })

  if (props.result === 'error') return { notFound: true }

  return {
    props,
  }
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
        }),
      [demo.id, mainBranch, organization.id, portal, socials, portalTitle]
    )
    const { colorScheme, colors } = useMantineTheme()

    return (
      <MantineProvider
        theme={{
          colorScheme,
          colors: {
            brand:
              primaryColor !== null
                ? generateShadePalette(primaryColor)
                : colors.blue,
          },
          primaryColor: 'brand',
        }}
      >
        <DemoPortal state={state} />
      </MantineProvider>
    )
  }
)

export default DemoPage
