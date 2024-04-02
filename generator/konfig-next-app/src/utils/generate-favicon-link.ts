import { KonfigYamlType } from 'konfig-lib'
import path from 'path'
import { cloudflareImageFromGitHub } from './cloudflare-image-from-github'
import { Octokit } from '@octokit/rest'

export async function generateFaviconLink({
  konfigYaml,
  konfigYamlPath,
  owner,
  repo,
  octokit,
}: {
  konfigYaml: KonfigYamlType
  konfigYamlPath: string
  owner: string
  repo: string
  octokit: Octokit
}): Promise<string | null> {
  const faviconRelativePath = konfigYaml.portal?.favicon
  if (faviconRelativePath === undefined) {
    return null
  }
  const konfigYamlDir = path.dirname(konfigYamlPath)
  const image = await cloudflareImageFromGitHub({
    owner,
    repo,
    path: path.join(konfigYamlDir, faviconRelativePath),
    octokit,
  })
  return image.cdnUrl
}
