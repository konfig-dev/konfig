import { GetStaticPaths, GetStaticProps } from 'next'
import Error from 'next/error'

import { generateDemosDataFromGithub } from '@/utils/generate-demos-from-github'
import { generateOwnerAndRepoFromDomain } from '@/utils/generate-owner-and-repo-from-domain'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { owner, repo } = generateOwnerAndRepoFromDomain(ctx.params?.org)
  const demos = await generateDemosDataFromGithub({
    orgId: owner,
    portalId: repo,
  })
  if (demos.result === 'error')
    return {
      redirect: {
        destination: `/reference`,
        permanent: false,
      },
    }

  return {
    redirect: {
      destination: `/demo/${demos.portal.demos[0].id}`,
      permanent: false,
    },
  }
}

function Demo() {
  return <Error statusCode={404} />
}

export default Demo
