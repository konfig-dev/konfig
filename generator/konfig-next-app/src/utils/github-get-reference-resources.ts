import { generateNavbarLinks } from './generate-navbar-links'
import { createOctokitInstance } from './octokit'
import { UnwrapPromise } from 'next/dist/lib/coalesced-function'
import { githubGetRepository } from './github-get-repository'
import { generateFaviconLink } from './generate-favicon-link'
import { generateLogoLink } from './generate-logo-link'
import { githubGetOpenApiSpec } from './github-get-openapi-spec'
import { githubGetKonfigYaml } from './github-get-konfig-yaml'
import * as nodePath from 'path'

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
  const konfigYaml = await githubGetKonfigYaml({ owner, repo, octokit })
  console.log(`githubGetKonfigYamls took ${Date.now() - start}ms`)

  // get default branch of repo
  const { data: repoData } = await githubGetRepository({
    owner,
    repo,
    octokit,
  })

  const faviconLink = await generateFaviconLink({
    konfigYaml: konfigYaml.content,
    konfigYamlPath: konfigYaml.info.path,
    owner,
    repo,
    octokit,
  })
  const logoLink = await generateLogoLink({
    konfigYaml: konfigYaml.content,
    defaultBranch: repoData.default_branch,
    konfigYamlPath: konfigYaml.info.path,
    owner,
    repo,
    octokit,
  })

  // time the next three lines
  const start2 = Date.now()
  const spec = await githubGetOpenApiSpec({
    owner,
    repo,
    octokit,
    konfigYaml,
  })

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
    faviconLink,
    logo: logoLink,
    spec,
    konfigYaml: konfigYaml.content,
    konfigYamlDir: nodePath.dirname(konfigYaml.info.path),
  }
}
