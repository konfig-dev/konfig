import { App } from 'octokit'

export async function findRepository({
  repo,
  owner,
  eachRepository,
}: {
  repo: string
  owner: string
  eachRepository: App['eachRepository']
}) {
  for await (const { octokit, repository } of eachRepository.iterator()) {
    if (!repository.owner.login) continue
    if (repository.owner.login !== owner) continue
    if (repository.name !== repo) continue
    return { owner, repo, octokit, repository }
  }
  return null
}
