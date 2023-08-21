import { Octokit, RestEndpointMethodTypes } from '@octokit/rest'

type FileInfo = {
  name: string
  path: string
  url: string
}

type SearchResponse = RestEndpointMethodTypes['search']['code']['response']

const _cache: Map<string, FileInfo[] | null> = new Map()

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

export function clearCache() {
  _cache.clear()
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
  if (_cache.has(cacheKey)) {
    const cached = _cache.get(cacheKey)
    if (cached === undefined) return null
    return cached
  }
  try {
    const query = `filename:${filename} repo:${owner}/${repo}`
    const response: SearchResponse = await octokit.search.code({ q: query })

    if (response.data.total_count === 0) {
      return null
    }

    const result = response.data.items.map((item) => ({
      name: item.name,
      path: item.path,
      url: item.html_url,
    }))
    _cache.set(cacheKey, result)
    return result
  } catch (error) {
    if (error instanceof Error)
      throw new Error(
        `Error occurred while searching for files: ${error.message}`
      )
    throw error
  }
}
