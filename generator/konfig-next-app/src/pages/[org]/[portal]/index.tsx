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
  return {
    redirect: {
      destination: `/${orgId}/${portalId}/reference`,
      permanent: false,
    },
  }
}

function Org() {
  return <Error statusCode={404} />
}

export default Org
