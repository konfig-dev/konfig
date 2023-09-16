import {
  ReferencePageProps,
  generatePropsForReferencePage,
} from '@/utils/generate-props-for-reference-page'
import { GetStaticPaths, GetStaticProps } from 'next'
import Operation from '../../[portal]/reference/[tag]/[operationId]'
import { generateOwnerAndRepoFromDomain } from '@/utils/generate-owner-and-repo-from-domain'

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
  const { owner, repo } = generateOwnerAndRepoFromDomain(ctx.params?.org)
  const tag = ctx.params?.tag
  const operationId = ctx.params?.operationId

  if (tag === undefined || operationId === undefined)
    throw Error('Missing tag/operationId parameters')

  if (Array.isArray(owner) || Array.isArray(repo))
    throw Error('Got unexpected array type for parameters')

  if (Array.isArray(tag) || Array.isArray(operationId))
    throw Error('Got unexpected array type for parameters')

  return generatePropsForReferencePage({
    owner,
    tag,
    repo,
    operationId,
    omitOwnerAndRepo: true,
  })
}

export default Operation
