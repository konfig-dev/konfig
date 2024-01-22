import { Octokit, RestEndpointMethodTypes } from '@octokit/rest'
import {
  getGithubApiCache,
  setGithubApiCache,
} from '@/utils/github-api-redis-cache'

type FileInfo = {
  name: string
  path: string
  url: string
}

type SearchResponse = RestEndpointMethodTypes['search']['code']['response']

function computeCacheKey({
  filename,
  owner,
  repo,
}: {
  filename: string
  owner: string
  repo: string
}): string {
  return `${owner}/${repo}/${filename}`
}

export async function githubSearchFiles({
  filename,
  owner,
  repo,
  octokit,
}: {
  owner: string
  repo: string
  filename: string
  octokit: Octokit
}): Promise<FileInfo[] | null> {
  const cacheKey = computeCacheKey({ filename, owner, repo })
  const cached = await getGithubApiCache({ namespace: 'search', key: cacheKey })
  if (cached) {
    console.debug('using cached search results:', cached)
    return JSON.parse(cached)
  }
  try {
    const query = `filename:${filename} repo:${owner}/${repo}`
    const response: SearchResponse = await octokit.search.code({ q: query })

    console.debug('response.data', response.data)

    if (response.data.total_count === 0) {
      return null
    }

    const result = response.data.items.map((item) => ({
      name: item.name,
      path: item.path,
      url: item.html_url,
    }))
    await setGithubApiCache({
      namespace: 'search',
      key: cacheKey,
      value: JSON.stringify(result),
    })
    return result
  } catch (error) {
    if (error instanceof Error)
      throw new Error(
        `Error occurred while searching for files: ${error.message}`
      )
    throw error
  }
}
