import { Octokit } from '@octokit/rest'
import { githubGetFileContent } from './github-get-file-content'
import { KonfigYamlsQuery } from './github-get-konfig-yamls'
import { KonfigYaml } from 'konfig-lib'
import * as yaml from 'js-yaml'

export async function handleEmptyKonfigYamlSearch({
  konfigYamls,
  octokit,
  owner,
  repo,
  defaultBranch,
}: {
  konfigYamls: KonfigYamlsQuery
  octokit: Octokit
  owner: string
  repo: string
  defaultBranch: string
}): Promise<NonNullable<KonfigYamlsQuery>> {
  const firstKonfigYaml = konfigYamls?.[0]
  if (firstKonfigYaml !== undefined) {
    return [firstKonfigYaml]
  }
  // couldn't find konfigYamls, lets just assume its at konfig.yaml at top of repo
  const konfigYamlContent = await githubGetFileContent({
    octokit,
    owner,
    repo,
    path: 'konfig.yaml',
  })
  return [
    {
      content: KonfigYaml.parse(yaml.load(konfigYamlContent)),
      info: {
        name: 'konfig.yaml',
        path: 'konfig.yaml',
        url: `https://github.com/${owner}/${repo}/blob/${defaultBranch}/konfig.yaml`,
      },
    },
  ]
}
