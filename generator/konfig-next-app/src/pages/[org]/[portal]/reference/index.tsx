import { _mappings } from '@/utils/generate-demos-from-github'
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
  const ownerInput = ctx.params?.org
  const repoInput = ctx.params?.portal

  if (ownerInput === undefined || repoInput === undefined)
    throw new Error('Missing owner/repo parameters')

  if (Array.isArray(ownerInput) || Array.isArray(repoInput))
    throw new Error('Got unexpected array type for parameters')

  const owner = _mappings.organization[ownerInput] ?? ownerInput
  const repo = _mappings.repository[repoInput] ?? repoInput

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
