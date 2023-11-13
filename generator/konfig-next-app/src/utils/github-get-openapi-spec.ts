import { Octokit } from '@octokit/rest'
import { githubGetFileContent } from './github-get-file-content'
import * as path from 'path'
import { orderOpenApiSpecification, parseSpec } from 'konfig-lib'
import { githubGetKonfigYaml } from './github-get-konfig-yaml'

export async function githubGetOpenApiSpec({
  owner,
  repo,
  octokit,
  konfigYaml,
}: {
  owner: string
  repo: string
  octokit: Octokit
  konfigYaml: Awaited<ReturnType<typeof githubGetKonfigYaml>>
}) {
  const specPath = konfigYaml.content.specPath
  const openapi = await githubGetFileContent({
    owner,
    repo,
    octokit,
    path: path.join(path.dirname(konfigYaml.info.path), specPath),
  })

  const spec = await parseSpec(openapi)

  if (konfigYaml.content.order !== undefined) {
    orderOpenApiSpecification({
      spec: spec.spec,
      order: konfigYaml.content.order,
    })
  }

  return spec
}
