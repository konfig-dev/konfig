import { GenerationSuccess } from '@/utils/generate-demos-from-github'
import { generatePropsForDemoPage } from '@/utils/generate-props-for-demo-page'
import { GetStaticPaths, GetStaticProps } from 'next'
import DemoPage from '../[portal]/[demo]'
import { generateOwnerAndRepoFromDomain } from '@/utils/generate-owner-and-repo-from-domain'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<GenerationSuccess> = async (
  ctx
) => {
  const { owner, repo } = generateOwnerAndRepoFromDomain(ctx.params?.org)

  if (!ctx.params?.demo || Array.isArray(ctx.params.demo)) {
    return {
      notFound: true,
    }
  }

  return generatePropsForDemoPage({
    omitOwnerAndRepo: true,
    org: owner,
    repo: repo,
    demoId: ctx.params.demo,
  })
}

export default DemoPage
