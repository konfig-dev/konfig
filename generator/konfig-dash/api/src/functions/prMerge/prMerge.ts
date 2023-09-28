import type { APIGatewayEvent, Context } from 'aws-lambda'
import { logger } from 'src/lib/logger'
import { App } from 'octokit'

import { findRepository } from 'konfig-lib'
import { validateApiKey, API_KEY_HEADER_NAME } from 'src/lib/api-keys'
import { CORS_HEADERS_ORIGIN } from 'src/lib/cors-headers'
import {
  PrMergeResponseBodyType,
  PrMergeResponseBody,
  PrMergeRequestBody,
} from 'konfig-openapi-spec'

export const handler = async (event: APIGatewayEvent, context: Context) => {
  if (event.body === null) {
    logger.error(
      'Invalid request to /prMerge. Expected request body to be non-empty.'
    )
    return {
      statusCode: 400,
    }
  }

  const requestBodyParseResult = PrMergeRequestBody.safeParse(
    JSON.parse(event.body)
  )
  if (requestBodyParseResult.success === false) {
    logger.error(requestBodyParseResult.error)
    logger.error('Invalid request to /prMerge')
    throw Error('invalid request body')
  }

  // Get Environment Variable for authenticating with GitHub App:
  // https://github.com/apps/konfig-bot
  const privateKey = process.env.GITHUB_APP_PRIVATE_KEY
  if (privateKey === undefined)
    throw Error('Missing GITHUB_APP_PRIVATE_KEY Environment Variable')

  validateApiKey({
    key: event.headers[API_KEY_HEADER_NAME],
    owner: requestBodyParseResult.data.owner,
  })

  const { eachRepository } = new App({
    appId: 276014,
    privateKey,
  })

  const repo = await findRepository({
    repo: requestBodyParseResult.data.repo,
    owner: requestBodyParseResult.data.owner,
    eachRepository,
  })

  const repoFullName = `${requestBodyParseResult.data.owner}/${requestBodyParseResult.data.repo}`
  if (repo === null)
    throw Error(`Could not find repository under ${repoFullName}`)

  const base =
    requestBodyParseResult.data.base || repo.repository.default_branch

  // Get PR
  const prs = await repo.octokit.rest.pulls.list({
    owner: repo.owner,
    repo: repo.repo,
    head: `${repo.owner}:${requestBodyParseResult.data.head}`,
    base: base,
  })

  // If pr doesn't exist, return "no-pr-found" status
  if (prs.data.length === 0) {
    const response: PrMergeResponseBodyType = {
      status: 'no-pr-found',
    }

    return {
      statusCode: 200,
      headers: {
        ...CORS_HEADERS_ORIGIN,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(PrMergeResponseBody.parse(response)),
    }
  }

  // If pr exists, merge it and return "merged-pr" status
  await repo.octokit.rest.pulls.merge({
    owner: repo.owner,
    repo: repo.repo,
    pull_number: prs.data[0].number,
    merge_method: 'squash',
  })

  const response: PrMergeResponseBodyType = {
    status: 'merged-pr',
    link: prs.data[0].html_url,
  }

  return {
    statusCode: 200,
    headers: {
      ...CORS_HEADERS_ORIGIN,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(PrMergeResponseBody.parse(response)),
  }
}
