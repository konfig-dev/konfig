import { KonfigYamlType } from 'konfig-lib'
import path from 'path'

export function generateFaviconLink({
  konfigYaml,
  defaultBranch,
  konfigYamlPath,
  owner,
  repo,
}: {
  konfigYaml: KonfigYamlType
  defaultBranch: string
  konfigYamlPath: string
  owner: string
  repo: string
}): string | null {
  const faviconRelativePath = konfigYaml.portal?.favicon
  if (faviconRelativePath === undefined) {
    return null
  }
  const url = `https://raw.githubusercontent.com/${owner}/${repo}/${defaultBranch}/${path.join(
    path.dirname(konfigYamlPath),
    faviconRelativePath
  )}`
  return url
}
