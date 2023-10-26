import { NonEmptyParameters, NonEmptySecurity } from './code-generator'
import type { HarRequest } from 'httpsnippet'
import {
  API_KEY_IN_PROPERTY,
  API_KEY_NAME_PROPERTY,
  API_KEY_VALUE_PROPERTY,
  OAUTH2_CLIENT_ID_PROPERTY,
  OAUTH2_CLIENT_SECRET_PROPERTY,
  SECURITY_TYPE_PROPERTY,
} from './generate-initial-operation-form-values'

export function convertToHarRequest(
  params: NonEmptyParameters,
  securities: NonEmptySecurity,
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

  for (const security of securities) {
    if (security[1][SECURITY_TYPE_PROPERTY] === 'apiKey') {
      const key = security[1]
      if (key[API_KEY_IN_PROPERTY] === 'header') {
        har.headers.push({
          name: key[API_KEY_NAME_PROPERTY],
          value: key[API_KEY_VALUE_PROPERTY],
        })
      } else if (key[API_KEY_IN_PROPERTY] === 'query') {
        har.queryString.push({
          name: key[API_KEY_NAME_PROPERTY],
          value: key[API_KEY_VALUE_PROPERTY],
        })
      } else if (key[API_KEY_IN_PROPERTY] === 'cookie') {
        har.cookies.push({
          name: key[API_KEY_NAME_PROPERTY],
          value: key[API_KEY_VALUE_PROPERTY],
        })
      }
    } else if (security[1][SECURITY_TYPE_PROPERTY] === 'bearer') {
      har.headers.push({
        name: 'Authorization',
        value: `Bearer ${security[1][API_KEY_VALUE_PROPERTY]}`,
      })
    } else if (
      security[1][SECURITY_TYPE_PROPERTY] === 'oauth2-client-credentials'
    ) {
      har.headers.push({
        name: 'Authorization',
        value:
          'Basic ' +
          btoa(
            `${security[1][OAUTH2_CLIENT_ID_PROPERTY]}:${security[1][OAUTH2_CLIENT_SECRET_PROPERTY]}`
          ),
      })
    }
  }

  params.forEach(([{ name, parameter }, value]) => {
    if (parameter.isRequestBody) {
      har.postData = {
        mimeType: 'application/json',
        text: JSON.stringify(value),
      }
    } else {
      har.queryString.push({ name, value: String(value) }) // Simplified conversion, can be expanded based on your needs.
    }
  })

  return har
}
