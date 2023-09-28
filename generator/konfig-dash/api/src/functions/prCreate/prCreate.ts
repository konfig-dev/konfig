import type { APIGatewayEvent, Context } from 'aws-lambda'
import { logger } from 'src/lib/logger'
import { App } from 'octokit'

import { findRepository } from 'konfig-lib'
import { CORS_HEADERS_ORIGIN } from 'src/lib/cors-headers'
import { validateApiKey } from 'src/lib/api-keys'
import { API_KEY_HEADER_NAME } from 'konfig-lib'
import {
  PrCreateResponseBodyType,
  PrCreateResponseBody,
  PrCreateRequestBody,
} from 'konfig-openapi-spec'

export const handler = async (event: APIGatewayEvent, context: Context) => {
  if (event.body === null) {
    logger.error(
      'Invalid request to /prCreate. Expected request body to be non-empty.'
    )
    return {
      statusCode: 400,
    }
  }

  const requestBodyParseResult = PrCreateRequestBody.safeParse(
    JSON.parse(event.body)
  )
  if (requestBodyParseResult.success === false) {
    logger.error(requestBodyParseResult.error)
    logger.error('Invalid request to /prCreate')
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

  // Check if PR already exists
  const prs = await repo.octokit.rest.pulls.list({
    owner: repo.owner,
    repo: repo.repo,
    head: `${repo.owner}:${requestBodyParseResult.data.head}`,
    base: base,
  })

  // If pr already exists, return 200 with link to existing PR
  if (prs.data.length > 0) {
    const response: PrCreateResponseBodyType = {
      status: 'pr-already-exists',
      link: prs.data[0].html_url,
    }

    return {
      statusCode: 200,
      headers: {
        ...CORS_HEADERS_ORIGIN,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(PrCreateResponseBody.parse(response)),
    }
  }

  // If pr does not exist, create it and return 200 with link to new PR
  try {
    const pr = await repo.octokit.rest.pulls.create({
      owner: repo.owner,
      repo: repo.repo,
      head: requestBodyParseResult.data.head,
      base: base,
      title: requestBodyParseResult.data.title,
      body: requestBodyParseResult.data.body,
    })

    const response: PrCreateResponseBodyType = {
      status: 'created-pr',
      link: pr.data.html_url,
    }

    return {
      statusCode: 200,
      headers: {
        ...CORS_HEADERS_ORIGIN,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(PrCreateResponseBody.parse(response)),
    }
  } catch (error) {
    logger.error(error)
    throw Error(`Failed to create PR in ${repoFullName}`)
  }
}
