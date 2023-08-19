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
import type { Spec } from 'konfig-lib'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<{
  organization: Organization
  portal: Portal
  socials?: SocialObject
  mainBranch: string
  demo?: Demo
  openapi?: Spec['spec']
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

  if (!ctx.params?.demo || !Array.isArray(ctx.params.demo)) {
    return {
      notFound: true,
    }
  }

  const props = await generateDemosDataFromGithub({
    orgId: ctx.params.org,
    portalId: ctx.params.portal,
    demoId: ctx.params.demo[0],
  })

  if (props.result === 'error') return { notFound: true }

  return {
    props,
  }
}

const Demo = observer(
  (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const { organization, portal, mainBranch, socials } = props
    const [state] = useState(
      new PortalState({
        ...portal,
        portalId: portal.id,
        organizationId: organization.id,
        demoId: props.demo?.id,
        mainBranch,
        socials,
      })
    )

    return (
      <>
        <Head>
          <title>{`${organization.organizationName} | Konfig`}</title>
        </Head>
        <DemoPortal state={state} />
      </>
    )
  }
)

export default Demo
