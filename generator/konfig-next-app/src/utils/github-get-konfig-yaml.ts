import { Octokit } from '@octokit/rest'
import { githubGetKonfigYamlsSafe } from './github-get-konfig-yamls-safe'

export async function githubGetKonfigYaml({
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
  const konfigYamls = await githubGetKonfigYamlsSafe({
    owner,
    repo,
    octokit,
    defaultBranch,
  })

  // TODO: handle multiple konfig.yaml
  const konfigYaml = konfigYamls[0]

  if (konfigYaml === undefined) throw Error("Couldn't find konfig.yaml")
  return konfigYaml
}
