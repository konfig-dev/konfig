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
  const demos = await generateDemosDataFromGithub({ orgId, portalId })
  if (demos.result === 'error')
    return {
      redirect: {
        destination: `/${orgId}/${portalId}/reference`,
        permanent: false,
      },
    }

  return {
    redirect: {
      destination: `/${orgId}/${portalId}/demo/${demos.portal.demos[0].id}`,
      permanent: false,
    },
  }
}

function Demo() {
  return <Error statusCode={404} />
}

export default Demo
