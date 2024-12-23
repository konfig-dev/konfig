import type { NextApiRequest, NextApiResponse } from 'next'
import axios, { AxiosRequestConfig } from 'axios'
import { URL } from 'url'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const targetUrl = req.headers['x-proxy-target']

  if (!targetUrl || typeof targetUrl !== 'string') {
    return res
      .status(400)
      .json({ error: 'Missing or invalid x-proxy-target header' })
  }

  // Construct the full URL including any subpaths and query parameters
  const url = new URL(targetUrl)
  const extraPath = ((req.query.path as string[]) || []).join('/') // Added check for undefined
  if (extraPath) {
    url.pathname += '/' + extraPath
  }
  // ensure no double slashes in url
  url.pathname = url.pathname.replace(/\/\//g, '/')

  // Append any query parameters
  if (req.url) {
    url.search = req.url.split('?')[1] || ''
  }

  // Fixes: Hostname/IP does not match certificate's altnames: Host: localhost.
  // is not in the cert's altnames: DNS:*.passiv.com, DNS:passiv.com"
  delete req.headers['host']

  // remove other headers that should be generated when making request by axios
  // delete req.headers['accept-encoding']
  // delete req.headers['content-length']
  delete req.headers['transfer-encoding']
  // delete req.headers['content-type']
  // delete req.headers['user-agent']
  // delete req.headers['sec-ch-ua']
  // delete req.headers['sec-ch-ua-mobile']
  // delete req.headers['sec-ch-ua-platform']
  // delete req.headers['sec-ch-fetch-dest']
  // delete req.headers['sec-ch-fetch-site']
  // delete req.headers['sec-ch-fetch-mode']
  // delete req.headers['referer']

  try {
    const requestConfig: AxiosRequestConfig = {
      method: req.method as any,
      url: url.toString(),
      headers: req.headers,
      data: req.body,
      validateStatus: () => true, // ensure all responses are forwarded, not just successful ones
    }

    const response = await axios(requestConfig)

    // Forward status code
    res.status(response.status)

    // Forward headers
    for (const [key, value] of Object.entries(response.headers)) {
      // skip content-length
      if (key === 'content-length') continue
      if (key === 'transfer-encoding') continue

      res.setHeader(key, value as any)
    }

    // Forward response
    res.send(response.data)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        error: `Fetching from the target URL failed with message: ${error.message}`,
      })
    } else {
      return res.status(500).json({ error: 'An unknown error occurred.' })
    }
  }
}
