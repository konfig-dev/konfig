import { Octokit } from '@octokit/rest'

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
