import { Octokit } from '@octokit/rest'
import { githubGetKonfigYamls } from './github-get-konfig-yamls'
import { handleEmptyKonfigYamlSearch } from './handle-empty-konfig-yaml-search'

export async function githubGetKonfigYamlsSafe({
  owner,
  repo,
  octokit,
  defaultBranch,
}: {
  owner: string
  repo: string
  octokit: Octokit
  defaultBranch: string
}) {
  const konfigYamls =
    repo === 'bellhop-sdks'
      ? null
      : await githubGetKonfigYamls({ owner, repo, octokit })

  const konfigYamlsSafe = await handleEmptyKonfigYamlSearch({
    konfigYamls,
    owner,
    repo,
    octokit,
    defaultBranch,
  })
  return konfigYamlsSafe
}
