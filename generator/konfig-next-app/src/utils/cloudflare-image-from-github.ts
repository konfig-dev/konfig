import { Octokit } from '@octokit/rest'
import { githubGetFileContent } from './github-get-file-content'
import Cloudflare from 'cloudflare'

export async function cloudflareImageFromGitHub({
  owner,
  repo,
  path,
  octokit,
}: {
  owner: string
  repo: string
  path: string
  octokit: Octokit
}): Promise<{ cdnUrl: string }> {
  const client = new Cloudflare({
    apiToken: process.env.CLOUDFLARE_IMAGES_API_KEY,
  })
  console.log('cloudfiare-images-from-github/path:', path)
  const file = await githubGetFileContent({
    owner,
    repo,
    path,
    octokit,
  })

  const image = await client.images.v1.create({
    account_id: 'ea6df732f6c006b5d1f0742e77d04bad',
    file: file,
  })
  if (image.id === undefined) {
    throw new Error('Failed to create image')
  }
  return { cdnUrl: cdnUrl(image.id) }
}

function cdnUrl(id: string) {
  return `https://imagedelivery.net/_1crbAaQeumZ563oexraHA/${id}/public`
}
