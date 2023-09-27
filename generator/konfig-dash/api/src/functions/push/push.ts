import type { APIGatewayEvent, Context } from 'aws-lambda'
import { logger } from 'src/lib/logger'
import { App } from 'octokit'
import * as path from 'path'

import { findRepository, KonfigYaml, KONFIG_YAML_NAME } from 'konfig-lib'
import {
  PushRequestBody,
  PushResponseBody,
  PushResponseBodyType,
} from 'konfig-openapi-spec'
import {
  CORS_HEADERS_METHOD_HEADERS,
  CORS_HEADERS_ORIGIN,
} from 'src/lib/cors-headers'
import { parse } from 'yaml'

const LABEL_NAME = 'automated oas update'

export const handler = async (event: APIGatewayEvent, context: Context) => {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: { ...CORS_HEADERS_METHOD_HEADERS, ...CORS_HEADERS_ORIGIN },
    }
  }
  if (event.body === null) {
    logger.error(
      'Invalid request to /push. Expected request body to be non-empty.'
    )
    return {
      statusCode: 400,
    }
  }

  const requestBodyParseResult = PushRequestBody.safeParse(
    JSON.parse(event.body)
  )
  if (requestBodyParseResult.success === false) {
    logger.error(requestBodyParseResult.error)
    logger.error('Invalid request to /push')
    throw Error('invalid request body')
  }

  // Get Environment Variable for authenticating with GitHub App:
  // https://github.com/apps/konfig-bot
  const privateKey = process.env.GITHUB_APP_PRIVATE_KEY
  if (privateKey === undefined)
    throw Error('Missing GITHUB_APP_PRIVATE_KEY Environment Variable')

  const { eachRepository } = new App({
    appId: 276014,
    privateKey,
  })

  const repo = await findRepository({
    repo: requestBodyParseResult.data.gitHub.repo,
    owner: requestBodyParseResult.data.gitHub.owner,
    eachRepository,
  })

  const repoFullName = `${requestBodyParseResult.data.gitHub.owner}/${requestBodyParseResult.data.gitHub.repo}`
  if (repo === null)
    throw Error(`Could not find repository under ${repoFullName}`)

  const getContent = async ({ path, ref }: { path: string; ref?: string }) => {
    const metadata = await repo.octokit.rest.repos.getContent({
      ...repo,
      path,
      ref,
    })
    if (typeof metadata !== 'object' || !('content' in metadata.data))
      throw Error('Unexpected type for content object')
    const content = await repo.octokit.rest.repos.getContent({
      ...repo,
      path,
      mediaType: {
        format: 'raw',
      },
      ref,
    })
    if (typeof content.data !== 'string')
      throw Error('Unexpected type for content string')
    return {
      content: content.data,
      sha: metadata.data.sha,
    }
  }

  const directory = requestBodyParseResult.data.directory ?? ''

  const { content: konfigYaml } = await getContent({
    path: path.join(directory, KONFIG_YAML_NAME),
  })

  const konfigYamlParseResult = KonfigYaml.safeParse(parse(konfigYaml))
  if (konfigYamlParseResult.success === false)
    throw Error(`Could not find valid ${KONFIG_YAML_NAME} in ${repoFullName}`)

  // Push to specInputPath if it exists, otherwise push to specPath
  const specPath = path.join(
    directory,
    konfigYamlParseResult.data.specInputPath
      ? konfigYamlParseResult.data.specInputPath
      : konfigYamlParseResult.data.specPath
  )
  if (specPath === undefined)
    throw Error(
      `${KONFIG_YAML_NAME} must specify path to OpenAPI Spec with "specPath" field`
    )

  // Check if there is a diff between new OAS and existing OAS
  const { content } = await getContent({
    path: specPath,
  })
  if (content === requestBodyParseResult.data.spec) {
    // Do nothing if there is no diff
    const response: PushResponseBodyType = {
      status: 'no-diff',
    }
    return {
      statusCode: 200,
      headers: {
        ...CORS_HEADERS_ORIGIN,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(PushResponseBody.parse(response)),
    }
  }

  // Generate new branch name
  const newBranch = `new-openapi-spec-${new Date().getTime()}`

  // Get latest commit SHA for main branch
  const sha = await repo.octokit.rest.repos.getBranch({
    ...repo,
    branch: repo.repository.default_branch,
  })

  // Create branch
  repo.octokit.rest.git.createRef({
    ...repo,
    ref: `refs/heads/${newBranch}`,
    sha: sha.data.commit.sha,
  })

  const { sha: specSha } = await getContent({
    path: specPath,
  })

  // Update OAS file & Commit
  await repo.octokit.rest.repos.createOrUpdateFileContents({
    ...repo,
    path: specPath,
    branch: newBranch,
    message: `Update OpenAPI Specification (${specPath})`,
    content: Buffer.from(requestBodyParseResult.data.spec).toString('base64'),
    sha: specSha,
  })

  // Delete existing PRs with same label and matching "directory" string if provided
  const prs = await repo.octokit.rest.pulls.list({
    owner: repo.owner,
    repo: repo.repo,
  })
  const prsWithLabel = prs.data.filter((pr) => {
    const matchesDirectory =
      requestBodyParseResult.data.directory === undefined
        ? true
        : pr.title.includes(`(${requestBodyParseResult.data.directory})`)
    return (
      matchesDirectory &&
      pr.labels.find((label) => label.name === LABEL_NAME) !== undefined
    )
  })

  // If PRs contain same OAS then just move on, otherwise close it and create a new PR
  let alreadyExists = false
  await Promise.all(
    prsWithLabel.map(async (pr) => {
      const existingSpec = await getContent({
        path: specPath,
        ref: pr.head.ref,
      })
      if (existingSpec.content === requestBodyParseResult.data.spec) {
        alreadyExists = true
        return
      }
      await repo.octokit.rest.pulls.update({
        owner: repo.owner,
        repo: repo.repo,
        pull_number: pr.number,
        state: 'closed',
      })
    })
  )

  if (alreadyExists) {
    // Do nothing if there is no diff
    const response: PushResponseBodyType = {
      status: 'no-diff',
    }
    return {
      statusCode: 200,
      headers: {
        ...CORS_HEADERS_ORIGIN,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(PushResponseBody.parse(response)),
    }
  }

  // Make PR to main branch
  const pullRequest = await repo.octokit.rest.pulls.create({
    ...repo,
    title: `Update OpenAPI Specification${
      requestBodyParseResult.data.directory
        ? ` (${requestBodyParseResult.data.directory})`
        : ''
    }`,
    base: repo.repository.default_branch,
    head: newBranch,
  })

  // Add label to PR to labels
  await repo.octokit.rest.issues.addLabels({
    owner: repo.owner,
    repo: repo.repo,
    issue_number: pullRequest.data.number,
    labels: [LABEL_NAME],
  })
  // Update label color
  await repo.octokit.rest.issues.updateLabel({
    owner: repo.owner,
    repo: repo.repo,
    name: LABEL_NAME,
    color: '1c344d',
    description: 'Automated update to OpenAPI Spec by Konfig',
  })

  // Add Dylan as a reviewer
  await repo.octokit.rest.pulls.requestReviewers({
    ...repo,
    pull_number: pullRequest.data.number,
    reviewers: ['konfig-publisher'],
  })

  const response: PushResponseBodyType = {
    status: 'created-pr',
    link: pullRequest.data.html_url,
  }

  return {
    statusCode: 200,
    headers: {
      ...CORS_HEADERS_ORIGIN,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(PushResponseBody.parse(response)),
  }
}
