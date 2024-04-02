import { createClient } from 'redis'

function redisUrl() {
  if (process.env.GITHUB_API_REDIS_CACHE) {
    return process.env.GITHUB_API_REDIS_CACHE
  }
  return 'redis://127.0.0.1:6379'
}

let globalClient: ReturnType<typeof createClient> | null = null
async function redisCache() {
  if (globalClient != null) return globalClient
  globalClient = createClient({ url: redisUrl() })
  globalClient.on('error', (err) => console.log('Redis Client Error', err))
  await globalClient.connect()
  return globalClient
}

function computeCacheKey({
  namespace,
  key,
}: {
  namespace: string
  key: string
}) {
  return `${namespace}:${key}`
}

export async function clearGithubApiCache() {
  const client = await redisCache()

  // Flush all keys under GitHub Namespaces
  const namespaces = Object.keys(GitHubNamespaces)
  for (const namespace of namespaces) {
    const keys = await client.keys(`${namespace}:*`)
    for (const key of keys) {
      await client.del(key)
    }
  }
}

export async function clearCloudflareImagesRedisCache({
  owner,
  repo,
}: {
  owner: string
  repo: string
}) {
  const client = await redisCache()
  const namespaces = Object.keys(CloudflareNamespaces)
  for (const namespace of namespaces) {
    const keys = await client.keys(`${namespace}:${owner}:${repo}:*`)
    for (const key of keys) {
      await client.del(key)
    }
  }
}

const GitHubNamespaces = {
  search: true,
  content: true,
  'get-files-in-dir': true,
  'get-repository': true,
}

const OpenAINamespaces = {
  'meta-description': true,
}

const CloudflareNamespaces = {
  'cloudflare-images-from-github': true,
}

type GitHubNamespaces = keyof typeof GitHubNamespaces
type OpenAINamespaces = keyof typeof OpenAINamespaces
type CloudflareNamespaces = keyof typeof CloudflareNamespaces

type AllNamespaces = GitHubNamespaces | OpenAINamespaces | CloudflareNamespaces

export async function setOpenAiRedisCache({
  namespace,
  key,
  value,
}: {
  namespace: OpenAINamespaces
  key: string
  value: string
}) {
  await _setCache({ namespace, key, value })
}

export async function setCloudflareImagesRedisCache({
  namespace,
  imagePath,
  value,
  owner,
  repo,
}: {
  namespace: CloudflareNamespaces
  owner: string
  repo: string
  imagePath: string
  value: string
}) {
  await _setCache({
    namespace,
    key: computeCloudflareImagesCacheKey({ imagePath, owner, repo }),
    value,
  })
}

function computeCloudflareImagesCacheKey({
  imagePath,
  owner,
  repo,
}: {
  imagePath: string
  owner: string
  repo: string
}) {
  return `${owner}:${repo}:${imagePath}`
}

export async function setGithubApiCache({
  namespace,
  key,
  value,
}: {
  namespace: GitHubNamespaces
  key: string
  value: string
}) {
  await _setCache({ namespace, key, value })
}

async function _setCache({
  namespace,
  key,
  value,
}: {
  namespace: AllNamespaces
  key: string
  value: string
}) {
  const client = await redisCache()
  const cacheKey = computeCacheKey({ namespace, key })
  // time in seconds how long it took to cache
  const start = Date.now()
  const cached = await client.set(cacheKey, value)
  console.log(`Redis cache set ${cacheKey} in ${Date.now() - start}ms`)
  return cached
}

export async function getGithubApiCache({
  namespace,
  key,
}: {
  namespace: GitHubNamespaces
  key: string
}) {
  return await _getCache({ namespace, key })
}

export async function getOpenAiRedisCache({
  namespace,
  key,
}: {
  namespace: OpenAINamespaces
  key: string
}) {
  return await _getCache({ namespace, key })
}

export async function getCloudflareImagesRedisCache({
  namespace,
  imagePath,
  owner,
  repo,
}: {
  namespace: CloudflareNamespaces
  imagePath: string
  owner: string
  repo: string
}) {
  return await _getCache({
    namespace,
    key: computeCloudflareImagesCacheKey({ imagePath, owner, repo }),
  })
}

async function _getCache({
  namespace,
  key,
}: {
  namespace: AllNamespaces
  key: string
}) {
  const client = await redisCache()
  const cacheKey = computeCacheKey({ namespace, key })
  const start = Date.now()
  const cached = await client.get(cacheKey)
  console.log(`Redis cache get ${cacheKey} in ${Date.now() - start}ms`)
  return cached
}
