import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import { githubGetReferenceResources } from '@/utils/github-get-reference-resources'
import { clearGithubApiCache } from '@/utils/github-api-redis-cache'
import { generateDemosDataFromGithub } from '@/utils/generate-demos-from-github'
import { createOctokitInstance } from '@/utils/octokit'
import { collectAllDocuments } from '@/utils/collect-all-documents'
import { findDomainsForOwnerAndRepo } from '@/utils/find-domains-for-owner-and-repo'
import { FileNotFoundError } from '@/utils/github-get-file-content'
import { githubGetKonfigYamlsSafe } from '@/utils/github-get-konfig-yamls-safe'
import { githubGetRepository } from '@/utils/github-get-repository'

const requestBodySchema = z.object({
  owner: z.string(),
  repo: z.string(),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { owner, repo } = requestBodySchema.parse(req.body)
  const domains = findDomainsForOwnerAndRepo({ owner, repo })

  /**
   * This has to be cleared before recomputing pages
   * because the pages depend on the cache
   */
  await clearGithubApiCache()

  const toRevalidate = [
    `/${owner}/${repo}/reference`,
    `/${owner}/${repo}/docs`,
    `/${owner}/${repo}/demo`,
    `/${owner}/${repo}`,
    ...domains.flatMap((domain) => [
      `/${domain}/reference`,
      `/${domain}/docs`,
      `/${domain}/demo`,
      `/${domain}`,
    ]),
  ]

  try {
    // revalidate reference page
    const { navbarData } = await githubGetReferenceResources({ owner, repo })
    navbarData.forEach(({ links }) => {
      links.forEach(({ link }) => {
        toRevalidate.push(link)
      })
    })
    const { navbarData: navbarDataWithoutOwnerAndRepo } =
      await githubGetReferenceResources({ owner, repo, omitOwnerAndRepo: true })
    navbarDataWithoutOwnerAndRepo.forEach(({ links }) => {
      links.forEach(({ link }) => {
        for (const domain of domains) {
          toRevalidate.push(`/${domain}${link}`)
        }
      })
    })

    const demos = await generateDemosDataFromGithub({
      orgId: owner,
      portalId: repo,
    })

    if (demos.result !== 'error') {
      for (const demo of demos.portal.demos) {
        const oldDemoPath = `/${owner}/${repo}/${demo.id}`
        const newDemoPath = `/${owner}/${repo}/demo/${demo.id}`
        toRevalidate.push(oldDemoPath)
        toRevalidate.push(newDemoPath)

        for (const domain of domains) {
          const newDomainPath = `/${domain}/demo/${demo.id}`
          toRevalidate.push(newDomainPath)
        }
      }
    }

    const octokit = await createOctokitInstance({ owner, repo })
    const { data: repoData } = await githubGetRepository({
      owner,
      repo,
      octokit,
    })
    const defaultBranch = repoData.default_branch
    const konfigYamls = await githubGetKonfigYamlsSafe({
      owner,
      repo,
      octokit,
      defaultBranch,
    })
    if (konfigYamls !== null) {
      for (const konfigYaml of konfigYamls) {
        if (konfigYaml.content.portal?.documentation !== undefined) {
          const links = collectAllDocuments({
            docConfig: konfigYaml.content.portal.documentation,
          })
          for (const link of links) {
            toRevalidate.push(`/${owner}/${repo}/docs/${link.id}`)
            for (const domain of domains) {
              toRevalidate.push(`/${domain}/docs/${link.id}`)
            }
          }
        }
      }
    }

    const revalidated: string[] = []

    for (const path of toRevalidate) {
      try {
        await res.revalidate(path, { unstable_onlyGenerated: true })
        revalidated.push(path)
      } catch (e) {
        if (e instanceof Error) {
          if (e.message.includes('404')) {
            console.log(`Tried to revalidate ${path} but got 404`)
            continue
          }
        }
        throw e
      }
    }

    return res.json({
      revalidated,
    })
  } catch (e) {
    if (e instanceof FileNotFoundError) {
      return res.status(404).send(e.message)
    }
    throw e
  }
}
