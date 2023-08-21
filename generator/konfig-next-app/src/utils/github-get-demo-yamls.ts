import { Octokit } from '@octokit/rest'
import { githubGetFileContent } from './github-get-file-content'
import { githubSearchFiles } from './github-search-files'
import yaml from 'js-yaml'
import {
  DEMO_YAML_FILE_NAME,
  demoYamlSchema,
} from './generate-demos-from-github-utils'

export async function githubGetDemoYamls({
  owner,
  repo,
  octokit,
}: {
  owner: string
  repo: string
  octokit: Octokit
}) {
  const demoYamls = await githubSearchFiles({
    filename: DEMO_YAML_FILE_NAME,
    owner,
    repo,
    octokit,
  })
  if (demoYamls === null) return null
  return await Promise.all(
    demoYamls.map(async (demoYamlInfo) => {
      const konfigYamlContent = yaml.load(
        await githubGetFileContent({
          octokit,
          owner,
          repo,
          path: demoYamlInfo.path,
        })
      )
      return demoYamlSchema.parse(konfigYamlContent)
    })
  )
}
