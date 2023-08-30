import { githubGetReferenceResources } from '@/utils/github-get-reference-resources'
import { GetStaticPaths, GetStaticProps } from 'next'
import { default as NextError } from 'next/error'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const owner = ctx.params?.org
  const repo = ctx.params?.portal

  if (owner === undefined || repo === undefined)
    throw new Error('Missing owner/repo parameters')

  if (Array.isArray(owner) || Array.isArray(repo))
    throw new Error('Got unexpected array type for parameters')

  const props = await githubGetReferenceResources({ owner, repo })
  return {
    redirect: {
      destination: props.navbarData[0].links[0].link,
      permanent: false,
    },
  }
}

function Org() {
  return <NextError statusCode={404} />
}

export default Org
