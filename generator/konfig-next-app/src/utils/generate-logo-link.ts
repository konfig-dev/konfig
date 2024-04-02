import { KonfigYamlType, Logo } from 'konfig-lib'
import path from 'path'
import { Octokit } from '@octokit/rest'
import { cloudflareImageFromGitHub } from './cloudflare-image-from-github'

export type GenerateLogoLinkResponse = string | Logo | null

export async function generateLogoLink({
  konfigYaml,
  defaultBranch,
  konfigYamlPath,
  owner,
  repo,
  octokit,
}: {
  konfigYaml: KonfigYamlType
  defaultBranch: string
  konfigYamlPath: string
  owner: string
  repo: string
  octokit: Octokit
}): Promise<GenerateLogoLinkResponse> {
  const iconRelativePath = konfigYaml.portal?.logo
  if (iconRelativePath === undefined) {
    return null
  }
  const directory = path.dirname(konfigYamlPath)
  if (typeof iconRelativePath === 'string') {
    const key = path.join(directory, iconRelativePath)
    const image = await cloudflareImageFromGitHub({
      owner,
      repo,
      path: key,
      octokit,
    })
    return image.cdnUrl
  } else {
    const lightKey = path.join(directory, iconRelativePath.light)
    const darkKey = path.join(directory, iconRelativePath.dark)
    const lightImage = await cloudflareImageFromGitHub({
      owner,
      repo,
      path: lightKey,
      octokit,
    })
    const darkImage = await cloudflareImageFromGitHub({
      owner,
      repo,
      path: darkKey,
      octokit,
    })
    return {
      light: lightImage.cdnUrl,
      dark: darkImage.cdnUrl,
    }
  }
}
