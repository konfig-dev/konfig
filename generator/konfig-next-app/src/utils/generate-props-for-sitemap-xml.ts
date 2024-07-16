import path from 'path'
import { githubGetRepository } from './github-get-repository'
import { createOctokitInstance } from './octokit'
import { computeDocumentProps } from './compute-document-props'
import { githubGetKonfigYamlsSafe } from './github-get-konfig-yamls-safe'

export type SitemapXmlProps = {
  slugs: Awaited<ReturnType<typeof computeDocumentProps>>['allMarkdown']
}

export async function generatePropsForSitemapXml({
  owner,
  repo,
}: {
  owner: string
  repo: string
}): Promise<SitemapXmlProps> {
  const octokit = await createOctokitInstance({ owner, repo })

  // get default branch of repo
  const { data: repoData } = await githubGetRepository({
    owner,
    repo,
    octokit,
  })
  const defaultBranch = repoData.default_branch

  console.debug('defaultBranch', defaultBranch)

  // time the next two lines
  const start = Date.now()
  const konfigYamls = await githubGetKonfigYamlsSafe({
    owner,
    repo,
    octokit,
    defaultBranch,
  })
  console.log(`githubGetKonfigYamls took ${Date.now() - start}ms`)

  // TODO: handle multiple konfig.yaml
  const konfigYaml = konfigYamls[0]

  const documentationConfig = konfigYaml?.content.portal?.documentation

  if (konfigYaml?.content.portal === undefined)
    throw Error("Couldn't find portal configuration")

  const { allMarkdown } = await computeDocumentProps({
    documentationConfig,
    owner,
    repo,
    octokit,
    konfigYamlDir: path.dirname(konfigYaml.info.path),
  })

  return {
    slugs: allMarkdown,
  }
}
