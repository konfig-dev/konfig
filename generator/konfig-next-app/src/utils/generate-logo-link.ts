import { KonfigYamlType, Logo } from 'konfig-lib'
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
}): string | Logo | null {
  const iconRelativePath = konfigYaml.portal?.logo
  if (iconRelativePath === undefined) {
    return null
  }
  const logoUrl = (relativePath: string) => {
    return `https://raw.githubusercontent.com/${owner}/${repo}/${defaultBranch}/${path.join(
      path.dirname(konfigYamlPath),
      relativePath
    )}`
  }
  if (typeof iconRelativePath === 'string') {
    return logoUrl(iconRelativePath)
  }
  return {
    light: logoUrl(iconRelativePath.light),
    dark: logoUrl(iconRelativePath.dark),
  }
}
