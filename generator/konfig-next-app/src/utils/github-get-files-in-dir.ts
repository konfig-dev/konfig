import { Octokit, RestEndpointMethodTypes } from '@octokit/rest'
import { getGithubApiCache, setGithubApiCache } from './github-api-redis-cache'

function computeCacheKey({
  owner,
  repo,
  path,
}: {
  owner: string
  repo: string
  path: string
}): string {
  return `${owner}/${repo}/${path}`
}

type ExtractArrayType<T> = T extends any[] ? T : never

type GetContentResponse = ExtractArrayType<
  RestEndpointMethodTypes['repos']['getContent']['response']['data']
>

/**
 * Uses GitHub's getContent API to list files at a provided path
 */
export async function githubGetFilesInDir({
  owner,
  repo,
  octokit,
  path,
}: {
  owner: string
  repo: string
  path: string
  octokit: Octokit
}): Promise<GetContentResponse> {
  const cacheKey = computeCacheKey({ owner, repo, path })
  const cached = await getGithubApiCache({
    namespace: 'get-files-in-dir',
    key: cacheKey,
  })
  if (cached) {
    return JSON.parse(cached)
  }
  const files = await octokit.repos.getContent({
    owner,
    repo,
    path,
  })
  if (!Array.isArray(files.data))
    throw Error(`Error: directory is expected at ${path}`)
  await setGithubApiCache({
    namespace: 'get-files-in-dir',
    key: cacheKey,
    value: JSON.stringify(files.data),
  })
  return files.data
}
