import { domainToRepoMappings } from './domain-to-repo-mappings'

export function generateOwnerAndRepoFromDomain(
  domain: string | string[] | undefined
): { owner: string; repo: string } {
  if (domain === undefined) throw Error('Missing domain parameter')
  if (Array.isArray(domain))
    throw Error('Got unexpected array type for parameters')
  const mapping = domainToRepoMappings[domain]
  if (mapping === undefined)
    throw Error(`No mapping found for domain: ${domain}`)

  return mapping
}
