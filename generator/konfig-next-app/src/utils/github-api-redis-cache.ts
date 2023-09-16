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

const GITHUB_API_CACHE_NAMESPACE = 'github-api-cache'

export async function clearGithubApiCache() {
  const client = await githubApiRedisCache()
  const keysToDelete = await client.sMembers(GITHUB_API_CACHE_NAMESPACE)
  for (let key of keysToDelete) {
    await client.del(key)
  }
  await client.del(GITHUB_API_CACHE_NAMESPACE)
}

export async function setGithubApiCache({
  namespace,
  key,
  value,
}: {
  namespace: string
  key: string
  value: string
}) {
  const client = await githubApiRedisCache()
  const cacheKey = computeCacheKey({ namespace, key })
  // time in seconds how long it took to cache
  const start = Date.now()
  const cached = await client.set(cacheKey, value)
  await client.sAdd(GITHUB_API_CACHE_NAMESPACE, cacheKey)
  console.log(`Redis cache set ${cacheKey} in ${Date.now() - start}ms`)
  return cached
}

export async function getGithubApiCache({
  namespace,
  key,
}: {
  namespace: string
  key: string
}) {
  const client = await githubApiRedisCache()
  const cacheKey = computeCacheKey({ namespace, key })
  const start = Date.now()
  const cached = await client.get(cacheKey)
  console.log(`Redis cache get ${cacheKey} in ${Date.now() - start}ms`)
  return cached
}
