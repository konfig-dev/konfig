import { Octokit } from '@octokit/rest'
import {
  getGithubApiCache,
  setGithubApiCache,
} from '@/utils/github-api-redis-cache'

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

export class FileNotFoundError extends Error {
  innerError: Error
  name = 'FileNotFoundError'

  constructor(innerError: Error) {
    let message =
      "Make sure you've configured 'konfig.yaml' to point to the correct files."
    if (
      'response' in innerError &&
      typeof innerError?.response === 'object' &&
      innerError?.response !== null &&
      'url' in innerError?.response &&
      typeof innerError.response?.url === 'string'
    ) {
      // parse "https://api.github.com/repos/passiv/snaptrade-sdks/contents/docs%2Frecommended-functionality.md" for "docs/recommended-functionality.md"
      const path = innerError.response.url
        .split('repos/')[1]
        .split('/contents/')[1]
      const decoded = decodeURIComponent(path)
      message += ` Could not find file: "${decoded}"`
    }
    super(message)
    this.innerError = innerError
  }
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
  const cached = await getGithubApiCache({
    namespace: 'content',
    key: cacheKey,
  })
  if (cached) {
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
      await setGithubApiCache({
        namespace: 'content',
        key: cacheKey,
        value: content,
      })
      return content
    } else {
      throw new Error('The specified path does not point to a file')
    }
  } catch (e) {
    if (e instanceof Error) {
      if ('status' in e && e.status === 404) {
        throw new FileNotFoundError(e)
      } else {
        console.error(`Error occurred while getting file content: ${e.message}`)
      }
    }
    throw e
  }
}
