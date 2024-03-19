import { Octokit } from '@octokit/rest'
import { githubGetFileContent } from './github-get-file-content'
import { KonfigYamlType } from 'konfig-lib'

export async function githubGetCustomSnippet({
  owner,
  repo,
  octokit,
  konfigYaml,
}: {
  owner: string
  repo: string
  octokit: Octokit
  konfigYaml: KonfigYamlType
}): Promise<string | null> {
  const customSnippetPath = konfigYaml?.portal?.customSnippet

  const customSnippet = customSnippetPath
    ? await githubGetFileContent({
        owner,
        repo,
        path: customSnippetPath,
        octokit,
      })
    : null

  return customSnippet
}
