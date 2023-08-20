import { App } from 'octokit'
import { Demo, Organization, Portal } from './demos'
import * as yaml from 'js-yaml'
import { z } from 'zod'
import { generateDemosFromFilenameAndContent } from './generate-demos-from-file-name-and-content'
import { FetchCache } from '@/server/routers/_app'
import { createOctokitInstance } from './octokit'
import { githubSearchFiles } from './github-search-files'
import { githubGetFileContent } from './github-get-file-content'

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

const socialObjectSchema = z.object({
  website: z.string().optional(),
  documentation: z.string().optional(),
})

export type SocialObject = z.infer<typeof socialObjectSchema>

export const demoYamlSchema = z.object({
  organizationName: z.string(),
  portalName: z.string(),
  socials: socialObjectSchema.optional(),
  demos: z
    .object({
      id: z.string(),
      showCode: z.boolean().optional(),
    })
    .array()
    .optional(),
})

export type DemoYaml = z.infer<typeof demoYamlSchema>

async function _findRepository({
  gitHub,
  eachRepository,
}: {
  gitHub: { owner: string; repo: string }
  eachRepository: App['eachRepository']
}) {
  for await (const { octokit, repository } of eachRepository.iterator()) {
    if (!repository.owner.login) continue
    if (repository.owner.login !== gitHub.owner) continue
    if (repository.name !== gitHub.repo) continue
    return { ...gitHub, octokit, repository }
  }
  return null
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

  const { eachRepository } = new App({
    appId: 276014,
    privateKey,
  })

  const owner =
    orgId in _mappings.organization ? _mappings.organization[orgId] : orgId
  const repo =
    portalId in _mappings.repository ? _mappings.repository[portalId] : portalId

  const gitHub = { owner, repo }
  const repository = await _findRepository({
    gitHub,
    eachRepository,
  })

  const repoFullName = `${gitHub.owner}/${gitHub.repo}`
  if (repository === null)
    throw Error(`Could not find repository under ${repoFullName}`)

  const getFilePaths = async ({
    path,
    ref,
  }: {
    path: string
    ref?: string
  }): Promise<{ path: string; name: string }[]> => {
    const content = await repository.octokit.rest.repos.getContent({
      ...repository,
      path,
      ref,
    })
    if (!Array.isArray(content.data))
      throw Error(`Expected directory at ${path}`)
    return content.data.map((file) => ({ path: file.path, name: file.name }))
  }

  const getContent = async ({ path, ref }: { path: string; ref?: string }) => {
    const metadata = await repository.octokit.rest.repos.getContent({
      ...repository,
      path,
      ref,
    })
    if (typeof metadata !== 'object' || !('content' in metadata.data))
      throw Error('Unexpected type for content object')
    const content = await repository.octokit.rest.repos.getContent({
      ...repository,
      path,
      mediaType: {
        format: 'raw',
      },
      ref,
    })
    if (typeof content.data !== 'string')
      throw Error('Unexpected type for content string')
    return {
      content: content.data,
      sha: metadata.data.sha,
    }
  }

  const { content: demoYaml } = await getContent({ path: 'demos/demo.yaml' })
  const parsedDemoYaml = demoYamlSchema.parse(yaml.load(demoYaml))

  const octokit = await createOctokitInstance({ owner, repo })
  const konfigYamlFiles = await githubSearchFiles({
    filename: 'konfig.yaml',
    owner,
    repo,
    octokit,
  })

  const konfigYamlFile = konfigYamlFiles[0]

  const konfigYamlContent = await githubGetFileContent({
    owner,
    repo,
    path: konfigYamlFile.path,
    octokit,
  })

  const konfigYaml = yaml.load(konfigYamlContent)

  console.log(konfigYaml)

  const files = await getFilePaths({ path: 'demos' })

  const markdownFiles = files.filter(({ name }) => name.endsWith('.md'))

  const content = await Promise.all(
    markdownFiles.map(async ({ path, name: fileName }) => {
      return { content: (await getContent({ path })).content, fileName }
    })
  )

  const demos = generateDemosFromFilenameAndContent({
    demos: content,
    demoYaml: parsedDemoYaml,
  })

  const portal: Portal = {
    id: repo,
    portalName: parsedDemoYaml.portalName,
    demos,
  }

  const organization: Organization = {
    id: owner,
    organizationName: parsedDemoYaml.organizationName,
    portals: [portal],
  }

  return {
    organization,
    portal,
    demos,
    mainBranch: repository.repository.default_branch,
    ...(parsedDemoYaml.socials ? { socials: parsedDemoYaml.socials } : {}),
  }
}
