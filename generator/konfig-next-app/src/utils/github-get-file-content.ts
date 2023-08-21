import { Octokit } from '@octokit/rest'

const _cache = new Map<string, string>()

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

export function clearCache() {
  _cache.clear()
}

export async function githubGetFileContent({
  octokit,
  owner,
  repo,
  path,
}: {
  octokit: Octokit
  owner: string
  repo: string
  path: string
}): Promise<string> {
  const cacheKey = computeCacheKey({ owner, repo, path })
  if (_cache.has(cacheKey)) {
    const cached = _cache.get(cacheKey)
    if (cached === undefined) throw new Error('Cache is undefined')
    return cached
  }
  try {
    const response = await octokit.repos.getContent({
      owner,
      repo,
      path,
    })

    // Check if the response data is a file and not a directory or submodule
    if (
      'type' in response.data &&
      response.data.type === 'file' &&
      'content' in response.data
    ) {
      // Decode the file content from Base64
      const content = Buffer.from(response.data.content, 'base64').toString(
        'utf-8'
      )
      _cache.set(cacheKey, content)
      return content
    } else {
      throw new Error('The specified path does not point to a file')
    }
  } catch (error) {
    if (error instanceof Error)
      console.error(
        `Error occurred while getting file content: ${error.message}`
      )
    throw error
  }
}
