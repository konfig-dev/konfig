import { Octokit, RestEndpointMethodTypes } from '@octokit/rest'

type FileInfo = {
  name: string
  path: string
  url: string
}

type SearchResponse = RestEndpointMethodTypes['search']['code']['response']

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
}): Promise<FileInfo[]> {
  try {
    const query = `filename:${filename} repo:${owner}/${repo}`
    const response: SearchResponse = await octokit.search.code({ q: query })

    if (response.data.total_count === 0) {
      throw new Error(
        `No files found with the name '${filename}' in repository '${owner}/${repo}'`
      )
    }

    return response.data.items.map((item) => ({
      name: item.name,
      path: item.path,
      url: item.html_url,
    }))
  } catch (error) {
    if (error instanceof Error)
      throw new Error(
        `Error occurred while searching for files: ${error.message}`
      )
    throw error
  }
}
