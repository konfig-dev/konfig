import { Octokit } from '@octokit/rest'
import { githubGetFileContent } from './github-get-file-content'
import { githubSearchFiles } from './github-search-files'
import yaml from 'js-yaml'
import { KONFIG_YAML_NAME } from 'konfig-lib/dist/util/konfig-yaml-name'
import { KonfigYaml } from 'konfig-lib/dist/KonfigYaml'

export async function githubGetKonfigYamls({
  owner,
  repo,
  octokit,
}: {
  owner: string
  repo: string
  octokit: Octokit
}) {
  console.debug('owner', owner)
  console.debug('repo', repo)
  const konfigYamls = await githubSearchFiles({
    filename: KONFIG_YAML_NAME,
    owner,
    repo,
    octokit,
  })
  console.debug('konfigYamls:', konfigYamls)
  if (konfigYamls === null) return null
  return await Promise.all(
    konfigYamls.map(async (konfigYamlInfo) => {
      const konfigYamlContent = yaml.load(
        await githubGetFileContent({
          octokit,
          owner,
          repo,
          path: konfigYamlInfo.path,
        })
      )
      return {
        content: KonfigYaml.parse(konfigYamlContent),
        info: konfigYamlInfo,
      }
    })
  )
}

type PromiseType<T extends Promise<any>> = T extends Promise<infer U>
  ? U
  : never
// infer type of return value from function
// handles promise
export type KonfigYamlsQuery = PromiseType<
  ReturnType<typeof githubGetKonfigYamls>
>
