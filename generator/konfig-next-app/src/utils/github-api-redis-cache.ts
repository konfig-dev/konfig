import { createClient } from 'redis'

function redisUrl() {
  if (process.env.GITHUB_API_REDIS_CACHE) {
    return process.env.GITHUB_API_REDIS_CACHE
  }
  return 'redis://127.0.0.1:6379'
}

let globalClient: ReturnType<typeof createClient> | null = null
async function githubApiRedisCache() {
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
  const client = await githubApiRedisCache()

  // Flush all keys under GitHub Namespaces
  const namespaces = Object.keys(GitHubNamespaces)
  for (const namespace of namespaces) {
    const keys = await client.keys(`${namespace}:*`)
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

type GitHubNamespaces = keyof typeof GitHubNamespaces
type OpenAINamespaces = keyof typeof OpenAINamespaces

type AllNamespaces = GitHubNamespaces | OpenAINamespaces

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
  const client = await githubApiRedisCache()
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

async function _getCache({
  namespace,
  key,
}: {
  namespace: AllNamespaces
  key: string
}) {
  const client = await githubApiRedisCache()
  const cacheKey = computeCacheKey({ namespace, key })
  const start = Date.now()
  const cached = await client.get(cacheKey)
  console.log(`Redis cache get ${cacheKey} in ${Date.now() - start}ms`)
  return cached
}
