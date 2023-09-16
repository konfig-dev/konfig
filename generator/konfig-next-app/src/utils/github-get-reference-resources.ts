import path from 'path'
import { generateNavbarLinks } from './generate-navbar-links'
import { githubGetFileContent } from './github-get-file-content'
import { githubGetKonfigYamls } from './github-get-konfig-yamls'
import { createOctokitInstance } from './octokit'
import { parseSpec } from 'konfig-lib/dist/parseSpec'
import { UnwrapPromise } from 'next/dist/lib/coalesced-function'

export type GithubResources = UnwrapPromise<
  ReturnType<typeof githubGetReferenceResources>
>

export async function githubGetReferenceResources({
  owner,
  repo,
  omitOwnerAndRepo,
}: {
  owner: string
  repo: string
  omitOwnerAndRepo?: boolean
}) {
  const octokit = await createOctokitInstance({ owner, repo })

  // time the next two lines
  const start = Date.now()
  const konfigYamls = await githubGetKonfigYamls({ owner, repo, octokit })
  console.log(`githubGetKonfigYamls took ${Date.now() - start}ms`)

  // TODO: handle multiple konfig.yaml
  const konfigYaml = konfigYamls?.[0]

  if (konfigYaml === undefined) throw Error("Couldn't find konfig.yaml")

  const specPath = konfigYaml.content.specPath

  // time the next three lines
  const start2 = Date.now()
  const openapi = await githubGetFileContent({
    owner,
    repo,
    octokit,
    path: path.join(path.dirname(konfigYaml.info.path), specPath),
  })

  const spec = await parseSpec(openapi)

  const navbarData = generateNavbarLinks({
    spec: spec.spec,
    owner,
    repo,
    konfigYaml: konfigYaml.content,
    omitOwnerAndRepo,
  })
  console.log(`generation of navbarLinks took ${Date.now() - start2}ms`)
  return {
    navbarData,
    spec,
    konfigYaml: konfigYaml.content,
  }
}
