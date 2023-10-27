import { NonEmptyParameters, NonEmptySecurity } from './code-generator'
import type { HarRequest } from 'httpsnippet'
import {
  API_KEY_IN_PROPERTY,
  API_KEY_NAME_PROPERTY,
  API_KEY_VALUE_PROPERTY,
  FormInputValue,
  OAUTH2_CLIENT_ID_PROPERTY,
  OAUTH2_CLIENT_SECRET_PROPERTY,
  SECURITY_TYPE_PROPERTY,
} from './generate-initial-operation-form-values'
import { JSONObject } from './json-value'

function generateBoundaryWithPrefix() {
  return '----KonfigBoundary' + Math.random().toString(36).slice(2)
}

export function convertToHarRequest(
  params: NonEmptyParameters,
  securities: NonEmptySecurity,
  requestBodyValue: FormInputValue,
  baseUrl: string,
  method: string,
  contentType: string | null
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

  // if requestBodyValue is truthy and content type is multipart/form-data
  // then populate har with multipart/form-data from requestBodyValue
  if (
    requestBodyValue !== null &&
    contentType === 'multipart/form-data' &&
    typeof requestBodyValue === 'object'
  ) {
    const formData = new FormData()
    const addToFormData = (obj: FormInputValue) => {
      Object.entries(obj).forEach(([name, value]) => {
        if (value instanceof Blob) {
          formData.append(name, value, value.name)
        } else {
          formData.append(name, JSON.stringify(value))
        }
      })
    }
    if (Array.isArray(requestBodyValue)) {
      requestBodyValue.forEach(addToFormData)
    } else {
      addToFormData(requestBodyValue)
    }

    const boundary = generateBoundaryWithPrefix()

    // add content type header
    har.headers.push({
      name: 'Content-Type',
      value: `multipart/form-data; boundary=${boundary}`,
    })

    // add form data to postData
    har.postData = {
      mimeType: 'multipart/form-data',
      params: [],
    }

    formData.forEach((value, name) => {
      har.postData.params = har.postData.params || []
      if (value instanceof Blob) {
        har.postData.params.push({
          name,
          value: '',
          fileName: value.name,
          contentType: value.type,
        })
      } else {
        har.postData.params.push({ name, value })
      }
    })
  } else if (contentType !== null) {
    har.headers.push({ name: 'Content-Type', value: contentType })
  }

  const requestBody: JSONObject = {}
  params.forEach(([{ name, parameter }, value]) => {
    if (parameter.isRequestBody) {
      har.postData = {
        mimeType: 'application/json',
        text: JSON.stringify(value),
      }
    } else if (parameter.in === 'header') {
      har.headers.push({ name, value: JSON.stringify(value) })
    } else if (parameter.in === 'query') {
      har.queryString.push({ name, value: JSON.stringify(value) })
    } else if (parameter.in === 'cookie') {
      har.cookies.push({ name, value: JSON.stringify(value) })
    } else if (parameter.in === 'path') {
      // turn value into json string and unquote it
      const pathValue = JSON.stringify(value).replace(/^"(.*)"$/, '$1')
      har.url = har.url.replace(`{${name}}`, pathValue)
    } else if (parameter.in === 'body') {
      // add to requestBody
      requestBody[name] = value
    }
  })

  // convert any non-filled path parameters that look like {parameter} into upper case versions of that string (e.g. {parameter} -> PARAMETER)
  har.url = har.url.replace(/{([^}]+)}/g, (_, parameter) =>
    parameter.toUpperCase()
  )

  // if request body is not empty then add it to postData
  if (Object.keys(requestBody).length > 0) {
    har.postData = {
      mimeType: 'application/json',
      text: JSON.stringify(requestBody, null, 2),
    }
  }

  return har
}
