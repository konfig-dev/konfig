import { _cache } from '@/server/routers/_app'
import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import { clearCache as clearSearchFilesCache } from '@/utils/github-search-files'
import { clearCache as clearGetFileContentCache } from '@/utils/github-get-file-content'
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

  clearSearchFilesCache()
  clearGetFileContentCache()

  const { navbarData } = await githubGetReferenceResources({ owner, repo })

  res.revalidate('/${owner}/${repo}/reference')

  navbarData.forEach(({ links }) => {
    links.forEach(({ link }) => {
      res.revalidate(link)
    })
  })

  return res.json({
    revalidated: true,
  })
}
