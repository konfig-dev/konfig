import { Octokit, RestEndpointMethodTypes } from '@octokit/rest'
import { getGithubApiCache, setGithubApiCache } from './github-api-redis-cache'

function computeCacheKey({
  owner,
  repo,
}: {
  owner: string
  repo: string
}): string {
  return `${owner}/${repo}`
}

export async function githubGetRepository({
  owner,
  repo,
  octokit,
}: {
  owner: string
  repo: string
  octokit: Octokit
}): Promise<RestEndpointMethodTypes['repos']['get']['response']> {
  const cacheKey = computeCacheKey({ owner, repo })
  const cached = await getGithubApiCache({
    namespace: 'get-repository',
    key: cacheKey,
  })
  if (cached) {
    return JSON.parse(cached)
  }
  const repository = await octokit.repos.get({
    owner,
    repo,
  })
  await setGithubApiCache({
    namespace: 'get-repository',
    key: cacheKey,
    value: JSON.stringify(repository),
  })
  return repository
}
