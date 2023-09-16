import { GetStaticProps, GetStaticPropsResult } from 'next'
import {
  GenerationSuccess,
  generateDemosDataFromGithub,
} from './generate-demos-from-github'

export async function generatePropsForDemoPage({
  org,
  repo,
  demoId,
}: {
  org: string
  repo: string
  demoId: string
}): Promise<GetStaticPropsResult<GenerationSuccess>> {
  const props = await generateDemosDataFromGithub({
    orgId: org,
    portalId: repo,
    demoId: demoId,
  })

  if (props.result === 'error') return { notFound: true }

  return {
    props,
  }
}
