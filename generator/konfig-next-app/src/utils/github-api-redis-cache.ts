import { createClient } from 'redis'

function redisUrl() {
  if (process.env.GITHUB_API_REDIS_CACHE) {
    return process.env.GITHUB_API_REDIS_CACHE
  }
  return 'redis://127.0.0.1:6379'
}

async function githubApiRedisCache() {
  const client = createClient({ url: redisUrl() })

  client.on('error', (err) => console.log('Redis Client Error', err))
  await client.connect()
  return client
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
