import { domainToRepoMappings } from './domain-to-repo-mappings'

export function findDomainsForOwnerAndRepo({
  owner,
  repo,
}: {
  owner: string
  repo: string
}): string[] {
  const entries = Object.entries(domainToRepoMappings)
  const domains: string[] = []
  for (const entry of entries) {
    if (entry[1] === undefined) continue
    const [domain, { owner: ownerFromMapping, repo: repoFromMapping }] = entry
    if (owner === ownerFromMapping && repo === repoFromMapping) {
      domains.push(domain)
    }
  }
  return domains
}
