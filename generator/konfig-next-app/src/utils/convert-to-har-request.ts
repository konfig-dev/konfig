import { NonEmptyParameters } from './code-generator'
import type { HarRequest } from 'httpsnippet'

export function convertToHarRequest(
  params: NonEmptyParameters,
  baseUrl: string,
  method: string
): HarRequest {
  const har: HarRequest = {
    method,
    url: baseUrl,
    httpVersion: 'HTTP/1.1',
    cookies: [],
    headers: [],
    queryString: [],
    headersSize: -1,
    bodySize: -1,
    postData: { mimeType: 'application/json', params: [] },
  }

  params.forEach(([{ name, parameter }, value]) => {
    if (parameter.isRequestBody) {
      har.postData = har.postData || {
        mimeType: 'application/json',
        params: [],
      }
      har.postData.params = har.postData.params || []
      har.postData.params.push({ name, value: JSON.stringify(value) }) // Simplified, assumes JSON content.
    } else {
      har.queryString.push({ name, value: String(value) }) // Simplified conversion, can be expanded based on your needs.
    }
  })

  return har
}
