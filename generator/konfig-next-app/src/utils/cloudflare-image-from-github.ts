import { Octokit } from '@octokit/rest'
import { githubGetFileContent } from './github-get-file-content'
import Cloudflare from 'cloudflare'
import {
  getCloudflareImagesRedisCache,
  setCloudflareImagesRedisCache,
} from './github-api-redis-cache'

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
  const base64 = await githubGetFileContent({
    owner,
    repo,
    path,
    octokit,
    base64: true,
  })
  const cache = await getCloudflareImagesRedisCache({
    namespace: 'cloudflare-images-from-github',
    base64,
    owner,
    repo,
  })
  if (cache !== null) {
    return { cdnUrl: cache }
  }
  const client = new Cloudflare({
    apiToken: process.env.CLOUDFLARE_IMAGES_API_KEY,
  })

  // base64 to File object
  const file = new File([Buffer.from(base64, 'base64')], path)

  const account_id = 'ea6df732f6c006b5d1f0742e77d04bad'
  const image = await client.images.v1.create({
    account_id,
    file,
  })
  if (image.id === undefined) {
    throw new Error('Failed to create image')
  }
  await client.images.v1.edit(image.id, {
    account_id,
    metadata: {
      owner,
      repo,
      path,
    },
  })
  const url = cdnUrl(image.id)
  await setCloudflareImagesRedisCache({
    namespace: 'cloudflare-images-from-github',
    base64,
    owner,
    repo,
    value: url,
  })
  return { cdnUrl: url }
}

function cdnUrl(id: string) {
  return `https://imagedelivery.net/_1crbAaQeumZ563oexraHA/${id}/public`
}
