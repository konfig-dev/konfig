import { GetStaticProps, GetStaticPropsResult } from 'next'
import {
  GenerationSuccess,
  generateDemosDataFromGithub,
} from './generate-demos-from-github'

export async function generatePropsForDemoPage({
  org,
  repo,
  demoId,
  omitOwnerAndRepo,
}: {
  org: string
  repo: string
  demoId: string
  omitOwnerAndRepo: boolean
}): Promise<GetStaticPropsResult<GenerationSuccess>> {
  const props = await generateDemosDataFromGithub({
    orgId: org,
    portalId: repo,
    demoId: demoId,
  })

  if (props.result === 'error') return { notFound: true }

  return {
    props: { ...props, omitOwnerAndRepo, owner: org, repo: repo },
  }
}
