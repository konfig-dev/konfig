import {
  ReferencePageProps,
  generatePropsForReferencePage,
} from '@/utils/generate-props-for-reference-page'
import { GetStaticPaths, GetStaticProps } from 'next'
import Operation from '../../[portal]/reference/[tag]/[operationId]'
import { domainToRepoMappings } from '@/utils/domain-to-repo-mappings'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

/**
 * create a getStaticProps function that gets the konfig.yaml file.
 *
 * 1. Use the first two subpaths as /[owner]/[repo] and the GitHub Search API
 * through githubSearchFiles.
 * 2. Use the githubGetFileContent and KonfigYaml.parse to retrieve the
 * konfig.yaml contents and return it as a props
 */

export const getStaticProps: GetStaticProps<ReferencePageProps> = async (
  ctx
) => {
  const domain = ctx.params?.org
  if (domain === undefined) throw Error('Missing domain parameter')
  if (Array.isArray(domain))
    throw Error('Got unexpected array type for parameters')
  const mapping = domainToRepoMappings[domain]
  if (mapping === undefined)
    throw Error(`No mapping found for domain: ${domain}`)

  const { owner, repo } = mapping
  const tag = ctx.params?.tag
  const operationId = ctx.params?.operationId

  if (tag === undefined || operationId === undefined)
    throw Error('Missing tag/operationId parameters')

  if (Array.isArray(owner) || Array.isArray(repo))
    throw Error('Got unexpected array type for parameters')

  if (Array.isArray(tag) || Array.isArray(operationId))
    throw Error('Got unexpected array type for parameters')

  return generatePropsForReferencePage({ owner, tag, repo, operationId })
}

export default Operation
