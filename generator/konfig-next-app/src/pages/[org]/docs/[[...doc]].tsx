import { GetStaticPaths, GetStaticProps } from 'next/types'
import DocumentationPage from '../[portal]/docs/[[...doc]]'
import {
  MarkdownPageProps,
  generatePropsForMarkdownPage,
} from '@/utils/generate-props-for-markdown-page'
import { generateOwnerAndRepoFromDomain } from '@/utils/generate-owner-and-repo-from-domain'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<MarkdownPageProps> = async (
  ctx
) => {
  const { owner, repo } = generateOwnerAndRepoFromDomain(ctx.params?.org)
  return generatePropsForMarkdownPage({
    owner,
    repo,
    docUrlParam: ctx.params?.doc,
    omitOwnerAndRepo: true,
  })
}

export default DocumentationPage
