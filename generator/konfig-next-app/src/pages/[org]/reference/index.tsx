import { domainToRepoMappings } from '@/utils/domain-to-repo-mappings'
import { _mappings } from '@/utils/generate-demos-from-github'
import { githubGetReferenceResources } from '@/utils/github-get-reference-resources'
import { GetStaticPaths, GetStaticProps } from 'next'
import NextError from 'next/error'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const domain = ctx.params?.org
  if (domain === undefined) throw Error('Missing domain parameter')
  if (Array.isArray(domain))
    throw Error('Got unexpected array type for parameters')
  const mapping = domainToRepoMappings[domain]
  if (mapping === undefined)
    throw Error(`No mapping found for domain: ${domain}`)

  const { owner, repo } = mapping

  const props = await githubGetReferenceResources({
    owner,
    repo,
    omitOwnerAndRepo: true,
  })
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
