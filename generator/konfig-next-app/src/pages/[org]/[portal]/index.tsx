import { GetStaticPaths, GetStaticProps } from 'next'
import Error from 'next/error'

import { generateDemosDataFromGithub } from '@/utils/generate-demos-from-github'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const orgId = ctx.params?.org
  if (orgId === undefined || Array.isArray(orgId)) {
    return {
      notFound: true,
    }
  }
  const portalId = ctx.params?.portal
  if (portalId === undefined || Array.isArray(portalId)) {
    return {
      notFound: true,
    }
  }
  const generation = await generateDemosDataFromGithub({ orgId, portalId })
  if (generation.result === 'error') return { notFound: true }
  const { organization } = generation
  if (organization === undefined) {
    return {
      notFound: true,
    }
  }
  if (organization.portals.length < 1) {
    return { notFound: true }
  }
  const portal = organization.portals[0]
  if (portal.demos.length < 1) {
    return { notFound: true }
  }
  const demo = portal.demos[0]
  return {
    redirect: {
      destination: `/${organization.id}/${portal.id}/reference`,
      permanent: false,
    },
  }
}

function Org() {
  return <Error statusCode={404} />
}

export default Org
