import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from '@aws-sdk/client-s3'
import { JavaGenerateApiResponse } from 'src/functions/generate/generate'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { v4 as uuid } from 'uuid'

const Bucket = 'konfig-sdks'
const s3Client = new S3Client({ region: 'us-west-1' })

const key = 'qXx6mYhoJgbj8brJe11NeBNsul375Nv3'

type ObjectKey = string
export const uploadFile = async (Body: Buffer): Promise<ObjectKey> => {
  const Key = `${new Date().toISOString()}-${uuid()}.tar.gz`
  const putCommand = new PutObjectCommand({ Body, Key, Bucket })
  await s3Client.send(putCommand)
  return Key
}

export const getSignedGetObjectUrl = async (
  Key: string
): Promise<JavaGenerateApiResponse> => {
  const getCommand = new GetObjectCommand({ Bucket, Key })
  const url = await getSignedUrl(s3Client, getCommand, { expiresIn: 100 })
  return { url, key: Key }
}
