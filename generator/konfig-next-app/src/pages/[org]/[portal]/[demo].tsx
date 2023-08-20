import { DemoPortal, PortalState } from '@/components/DemoPortal'
import { observer } from 'mobx-react'
import { Organization, Portal, Demo, demos } from '@/utils/demos'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { useState } from 'react'
import {
  SocialObject,
  generateDemosDataFromGithub,
} from '@/utils/generate-demos-from-github'
import { MantineProvider, useMantineColorScheme } from '@mantine/core'
import { generateShadePalette } from '@/utils/generate-shade-palette'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<{
  organization: Organization
  portal: Portal
  demo: Demo
  socials?: SocialObject
  mainBranch: string
}> = async (ctx) => {
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

const Demo = observer(
  ({
    organization,
    portal,
    demo,
    mainBranch,
    socials,
  }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [state] = useState(
      new PortalState({
        ...portal,
        portalId: portal.id,
        organizationId: organization.id,
        demoId: demo.id,
        mainBranch,
        socials,
      })
    )
    const { colorScheme } = useMantineColorScheme()

    return (
      <MantineProvider
        theme={{
          colorScheme,
          colors: { brand: generateShadePalette('#9fc1be') },
          primaryColor: 'brand',
        }}
      >
        <Head>
          <title>{`${organization.organizationName} | Konfig`}</title>
        </Head>
        <DemoPortal state={state} />
      </MantineProvider>
    )
  }
)

export default Demo
