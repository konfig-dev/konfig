import { KonfigYamlType } from 'konfig-lib'
import path from 'path'

export function generateLogoLink({
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
  const iconRelativePath = konfigYaml.portal?.logo
  if (iconRelativePath === undefined) {
    return null
  }
  const url = `https://raw.githubusercontent.com/${owner}/${repo}/${defaultBranch}/${path.join(
    path.dirname(konfigYamlPath),
    iconRelativePath
  )}`
  return url
}
