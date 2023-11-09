import { Demo, Organization, Portal } from './demos'
import { generateDemosFromFilenameAndContent } from './generate-demos-from-file-name-and-content'
import { createOctokitInstance } from './octokit'
import { githubGetKonfigYamls } from './github-get-konfig-yamls'
import { githubGetFileContent } from './github-get-file-content'
import { githubGetRepository } from './github-get-repository'
import type { KonfigYamlType, SocialObject } from 'konfig-lib'
import { Octokit } from '@octokit/rest'
import { generateFaviconLink } from './generate-favicon-link'
import { generateLogoLink } from './generate-logo-link'

/**
 * Custom mappings to preserve existing links for SnapTrade
 */
export const _mappings: {
  organization: Record<string, string | undefined>
  repository: Record<string, string | undefined>
} = {
  organization: {
    snaptrade: 'passiv',
  },
  repository: {
    'snaptrade-demos': 'snaptrade-sdks',
  },
}

export type FetchResult = {
  primaryColor?: string
  portalTitle?: string
  googleAnalyticsId: string | null
  organization: Organization
  portal: Portal
  demos: Demo[]
  socials?: SocialObject
  mainBranch: string
  hasDocumentation: boolean
  faviconLink: string | null
  logo: ReturnType<typeof generateLogoLink>
}

export type GenerationResult =
  | {
      result: 'success'
      organization: Organization
      portal: Portal
      demo: Demo
    }
  | { result: 'error'; reason: 'no demos' }
  | { result: 'error'; reason: 'demo not found' }

export type GenerationInput = {
  orgId: string
  portalId: string
  demoId?: string
}

type ReturnTypeOfGenerateDemosDataFromGithub = ReturnType<
  typeof generateDemosDataFromGithub
>
type UnwrapPromise<T> = T extends Promise<infer U> ? U : never
type UnpackedReturnType = UnwrapPromise<ReturnTypeOfGenerateDemosDataFromGithub>

export type GenerationSuccess = Extract<
  UnpackedReturnType,
  { result: 'success' }
> & { omitOwnerAndRepo: boolean; owner: string; repo: string }

export async function generateDemosDataFromGithub({
  orgId,
  portalId,
  demoId,
}: GenerationInput): Promise<
  | {
      result: 'success'
      socials?: SocialObject
      organization: Organization
      portal: Portal
      mainBranch: string
      googleAnalyticsId: string | null
      demo: Demo
      /**
       * Have to make this nullable because of the following error:
       * Error: Error serializing `.portalTitle` returned from `getStaticProps` in "/[org]/[portal]/[demo]".
       * Reason: `undefined` cannot be serialized as JSON. Please use `null` or omit this value.
       */
      portalTitle: string | null
      primaryColor: string | null
      hasDocumentation: boolean
      faviconLink: string | null
      logo: ReturnType<typeof generateLogoLink>
    }
  | { result: 'error'; reason: 'no demos' }
  | { result: 'error'; reason: 'demo not found' }
> {
  const fetchResult: FetchResult = await _fetch({ orgId, portalId })

  const { demos, organization, portal, socials, mainBranch } = fetchResult

  if (demos.length < 1) return { result: 'error', reason: 'no demos' }

  let demo: Demo | undefined
  if (demoId) {
    demo = demos.find((demo) => demo.id === demoId)
  } else {
    demo = demos[0]
  }
  if (demo === undefined) return { result: 'error', reason: 'demo not found' }

  return {
    result: 'success',
    ...(socials ? { socials } : {}),
    mainBranch,
    organization,
    portal,
    googleAnalyticsId: fetchResult.googleAnalyticsId,
    demo,
    portalTitle: fetchResult.portalTitle ?? null,
    faviconLink: fetchResult.faviconLink,
    primaryColor: fetchResult.primaryColor ?? null,
    hasDocumentation: fetchResult.hasDocumentation,
    logo: fetchResult.logo ?? null,
  }
}

async function _fetch({
  orgId,
  portalId,
}: {
  orgId: string
  portalId: string
}): Promise<FetchResult> {
  const owner = _mappings.organization[orgId] ?? orgId
  const repo = _mappings.repository[portalId] ?? portalId

  const octokit = await createOctokitInstance({ owner, repo })

  const repository = await githubGetRepository({
    owner,
    repo,
    octokit,
  })

  const konfigYamls = await githubGetKonfigYamls({ owner, repo, octokit })

  // TODO: handle multiple konfig.yaml files
  const konfigYaml = konfigYamls?.[0]

  if (konfigYaml === undefined) throw Error('No konfig.yaml file found')
  if (konfigYaml.content.portal === undefined)
    throw Error('No portal configuration found')

  const faviconLink = generateFaviconLink({
    konfigYaml: konfigYaml.content,
    defaultBranch: repository.data.default_branch,
    konfigYamlPath: konfigYaml.info.path,
    owner,
    repo,
  })
  const logoLink = generateLogoLink({
    konfigYaml: konfigYaml.content,
    defaultBranch: repository.data.default_branch,
    konfigYamlPath: konfigYaml.info.path,
    owner,
    repo,
  })

  const demos =
    (await getDemos({
      octokit,
      repo,
      owner,
      konfigYaml: konfigYaml.content,
    })) ?? []

  const portal: Portal = {
    id: repo,
    portalName: konfigYaml.content.portal.title,
    demos,
  }

  const organization: Organization = {
    id: owner,
    organizationName: konfigYaml.content.portal.title,
    portals: [portal],
  }

  return {
    organization,
    portal,
    demos,
    hasDocumentation: konfigYaml.content.portal.documentation !== undefined,
    googleAnalyticsId: konfigYaml.content.portal?.googleAnalyticsId ?? null,
    portalTitle: konfigYaml.content.portal.title,
    primaryColor: konfigYaml.content.portal.primaryColor,
    mainBranch: repository.data.default_branch,
    logo: logoLink,
    faviconLink,
    ...(konfigYaml.content.portal.socials
      ? { socials: konfigYaml.content.portal.socials }
      : {}),
  }
}

async function getDemos({
  konfigYaml,
  repo,
  owner,
  octokit,
}: {
  konfigYaml: KonfigYamlType
  repo: string
  owner: string
  octokit: Octokit
}) {
  if (konfigYaml?.portal?.demos === undefined) {
    return null
  }

  const markdownFiles = konfigYaml.portal.demos

  const content = await Promise.all(
    markdownFiles.map(async ({ path, ...rest }) => {
      return {
        content: await githubGetFileContent({ path, repo, owner, octokit }),
        ...rest,
      }
    })
  )

  const demos = generateDemosFromFilenameAndContent({
    demos: content,
  })

  return demos
}
