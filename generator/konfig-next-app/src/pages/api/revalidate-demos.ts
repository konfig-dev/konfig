import { generateDemosDataFromGithub } from '@/utils/generate-demos-from-github'
import { clearGithubApiCache } from '@/utils/github-api-redis-cache'
import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

const requestBodySchema = z.object({
  organizationId: z.string(),
  portalId: z.string(),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { organizationId, portalId } = requestBodySchema.parse(req.body)

  await clearGithubApiCache()

  const generation = await generateDemosDataFromGithub({
    orgId: organizationId,
    portalId,
  })

  if (generation.result === 'error')
    return res.status(500).send('Error fetching demos')

  const pathsRevalidated: string[] = []
  for (const demo of generation.portal.demos) {
    try {
      const path = `/${organizationId}/${portalId}/${demo.id}`
      await res.revalidate(path)
      pathsRevalidated.push(path)
    } catch (err) {
      // If there was an error, Next.js will continue
      // to show the last successfully generated page
      return res.status(500).send('Error revalidating')
    }
  }

  return res.json({
    revalidated: true,
    demos: generation.portal.demos,
    pathsRevalidated,
  })
}
