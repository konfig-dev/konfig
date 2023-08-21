import { _cache } from '@/server/routers/_app'
import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import { githubGetReferenceResources } from '@/utils/github-get-reference-resources'

const requestBodySchema = z.object({
  owner: z.string(),
  repo: z.string(),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { owner, repo } = requestBodySchema.parse(req.body)

  const { navbarData } = await githubGetReferenceResources({ owner, repo })

  const toRevalidate = [`/${owner}/${repo}/reference`]

  navbarData.forEach(({ links }) => {
    links.forEach(({ link }) => {
      toRevalidate.push(link)
    })
  })

  const revalidated: string[] = []

  for (const path of toRevalidate) {
    try {
      await res.revalidate(path)
      revalidated.push(path)
    } catch (e) {
      if (e instanceof Error) {
        if (e.message.includes('404')) {
          console.warn(`Tried to revalidate ${path} but got 404`)
          continue
        }
      }
      throw e
    }
  }

  return res.json({
    revalidated,
  })
}
