import { Octokit } from '@octokit/rest'
import { githubGetKonfigYamls } from './github-get-konfig-yamls'

export async function githubGetKonfigYaml({
  owner,
  repo,
  octokit,
}: {
  owner: string
  repo: string
  octokit: Octokit
}) {
  const konfigYamls = await githubGetKonfigYamls({ owner, repo, octokit })

  // TODO: handle multiple konfig.yaml
  const konfigYaml = konfigYamls?.[0]

  if (konfigYaml === undefined) throw Error("Couldn't find konfig.yaml")
  return konfigYaml
}
