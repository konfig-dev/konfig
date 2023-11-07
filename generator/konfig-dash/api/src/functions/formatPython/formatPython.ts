import type { APIGatewayEvent, Context } from 'aws-lambda'
import { urlForBlackdApi } from 'src/lib/urlForBlackdApi'
import axios, { AxiosError } from 'axios'
import {
  CORS_HEADERS_METHOD_HEADERS,
  CORS_HEADERS_ORIGIN,
} from 'src/lib/cors-headers'

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */
export const handler = async (event: APIGatewayEvent, context: Context) => {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: { ...CORS_HEADERS_METHOD_HEADERS, ...CORS_HEADERS_ORIGIN },
    }
  }
  if (event.body === null) throw Error('Missing Request body')
  try {
    const { data: formattedSource } = await axios.post(
      urlForBlackdApi(),
      event.body
    )

    return {
      statusCode: 200,
      headers: {
        ...CORS_HEADERS_ORIGIN,
        'Content-Type': 'text/plain',
      },
      // For some reason blackd returns an empty string if the
      // code snippet is already formatted so we have to handle
      // that edge case with an empty string check
      // From: https://black.readthedocs.io/en/stable/usage_and_configuration/black_as_a_server.html
      // "HTTP 204: If the input is already well-formatted. The response body is empty."
      body: formattedSource == '' ? event.body : formattedSource,
    }
  } catch (e) {
    if (e instanceof AxiosError) {
      return {
        statusCode: 500,
        headers: {
          ...CORS_HEADERS_ORIGIN,
          'Content-Type': 'text/plain',
        },
        body: event.body,
      }
    }
  }
}
