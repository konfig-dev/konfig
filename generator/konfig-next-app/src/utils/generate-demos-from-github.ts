import { Demo, Organization, Portal } from './demos'
import { generateDemosFromFilenameAndContent } from './generate-demos-from-file-name-and-content'
import { FetchCache } from '@/server/routers/_app'
import { createOctokitInstance } from './octokit'
import { githubGetKonfigYamls } from './github-get-konfig-yamls'
import { githubGetFileContent } from './github-get-file-content'
import { githubGetRepository } from './github-get-repository'
import type { SocialObject } from 'konfig-lib'

/**
 * Custom mappings to preserve existing links for SnapTrade
 */
const _mappings: {
  organization: Record<string, string>
  repository: Record<string, string>
} = {
  organization: {
    snaptrade: 'passiv',
  },
  repository: {
    'snaptrade-demos': 'snaptrade-sdks',
  },
}

export function invalidateDemoGenerationCache({
  orgId,
  portalId,
  _cache,
}: {
  orgId: string
  portalId: string
  _cache: FetchCache
}) {
  delete _cache[computeCacheKey({ orgId, portalId })]
}
export function computeCacheKey({
  orgId,
  portalId,
}: Omit<GenerationInput, 'demoId'>): string {
  return `${orgId}-${portalId}`
}
export type FetchResult = {
  primaryColor?: string
  portalTitle?: string
  organization: Organization
  portal: Portal
  demos: Demo[]
  socials?: SocialObject
  mainBranch: string
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
  _cache?: FetchCache
}

type ReturnTypeOfGenerateDemosDataFromGithub = ReturnType<
  typeof generateDemosDataFromGithub
>
type UnwrapPromise<T> = T extends Promise<infer U> ? U : never
type UnpackedReturnType = UnwrapPromise<ReturnTypeOfGenerateDemosDataFromGithub>

export type GenerationSuccess = Extract<
  UnpackedReturnType,
  { result: 'success' }
>

export async function generateDemosDataFromGithub({
  orgId,
  portalId,
  demoId,
  _cache,
}: GenerationInput): Promise<
  | {
      result: 'success'
      socials?: SocialObject
      organization: Organization
      portal: Portal
      mainBranch: string
      demo: Demo
      /**
       * Have to make this nullable because of the following error:
       * Error: Error serializing `.portalTitle` returned from `getStaticProps` in "/[org]/[portal]/[demo]".
       * Reason: `undefined` cannot be serialized as JSON. Please use `null` or omit this value.
       */
      portalTitle: string | null
      primaryColor: string | null
    }
  | { result: 'error'; reason: 'no demos' }
  | { result: 'error'; reason: 'demo not found' }
> {
  const cacheKey = computeCacheKey({ orgId, portalId })
  const inCache = _cache !== undefined ? cacheKey in _cache : false
  const fetchResult: FetchResult =
    inCache && _cache !== undefined
      ? _cache[cacheKey]
      : await _fetch({ orgId, portalId })
  if (_cache !== undefined) {
    _cache[cacheKey] = fetchResult
  }

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
    demo,
    portalTitle: fetchResult.portalTitle ?? null,
    primaryColor: fetchResult.primaryColor ?? null,
  }
}

async function _fetch({
  orgId,
  portalId,
}: {
  orgId: string
  portalId: string
}): Promise<FetchResult> {
  // Find the SDK repository
  const privateKey = process.env.GITHUB_APP_PRIVATE_KEY
  if (privateKey === undefined)
    throw Error('Missing GITHUB_APP_PRIVATE_KEY Environment Variable')

  const owner =
    orgId in _mappings.organization ? _mappings.organization[orgId] : orgId
  const repo =
    portalId in _mappings.repository ? _mappings.repository[portalId] : portalId

  const octokit = await createOctokitInstance({ owner, repo })

  const repository = await githubGetRepository({
    owner,
    repo,
    octokit,
  })

  const konfigYamls = await githubGetKonfigYamls({ owner, repo, octokit })

  // TODO: handle multiple konfig.yaml files
  const konfigYaml = konfigYamls?.[0]

  if (konfigYaml?.content.portal?.demos === undefined) {
    throw Error('Missing demos in konfig.yaml')
  }

  const markdownFiles = konfigYaml.content.portal.demos

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
    portalTitle: konfigYaml.content.portal.title,
    primaryColor: konfigYaml.content.portal.primaryColor,
    mainBranch: repository.data.default_branch,
    ...(konfigYaml.content.portal.socials
      ? { socials: konfigYaml.content.portal.socials }
      : {}),
  }
}
