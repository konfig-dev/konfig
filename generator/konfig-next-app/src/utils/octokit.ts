import { Octokit } from '@octokit/rest'
import { createAppAuth } from '@octokit/auth-app'

const APP_ID = 276014

export async function createOctokitInstance({
  owner,
  repo,
}: {
  owner: string
  repo: string
}): Promise<Octokit> {
  const privateKey = process.env.GITHUB_APP_PRIVATE_KEY
  if (privateKey === undefined)
    throw Error('Missing GITHUB_APP_PRIVATE_KEY Environment Variable')

  const octokit = new Octokit({
    authStrategy: createAppAuth,
    auth: {
      appId: APP_ID,
      privateKey,
    },
  })

  try {
    const installations = await octokit.apps.listInstallations()
    const installation = installations.data.find((i) => {
      if (i?.account != null && 'login' in i.account)
        return i.account.login.toLowerCase() === owner.toLowerCase()
      return false
    })

    if (installation) {
      return new Octokit({
        authStrategy: createAppAuth,
        auth: {
          appId: APP_ID,
          privateKey,
          installationId: installation.id,
        },
      })
    } else {
      throw new Error(`No installation found for owner '${owner}'`)
    }
  } catch (error) {
    if (error instanceof Error)
      console.error(
        `Error occurred while creating Octokit instance: ${error.message}`
      )
    throw error
  }
}
