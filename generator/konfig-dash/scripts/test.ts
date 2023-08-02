import boxen from 'boxen'
import execa from 'execa'
import waiton from 'wait-on'
import * as path from 'path'
import { getApiUrl, TEST_API_PORT } from 'konfig-cli/dist/util/get-api-url'
import { KONFIG_API_TEST_ENVIRONMENT_NAME } from 'konfig-lib/dist/util/konfig-api-test-environment-name'

async function main() {
  // 0. Build before running this script (yarn rw build && yarn rw build api)
  // 1. Run API Server
  // 2. Wait for API Server to start
  // const api = run()
  // await wait()

  // 4. Run tests
  await test()

  // 5. Teardown
  // kill({ api })

  return { success: true } as const
}

async function kill({ api }: { api: ReturnType<typeof run> }) {
  api.kill('SIGTERM', { forceKillAfterTimeout: 2000 })
}

async function wait() {
  await waiton({
    resources: [`${getApiUrl({ mode: 'test' })}/healthz`],
    timeout: 60_000,
  })
}

async function test() {
  try {
    await konfigCliTest()
    // await konfigLibTest()
    // await konfigSpectralRulesetTest()
    // await konfigPostmanToOpenapiTest()
  } catch (error) {
    if (error instanceof Error) throw error
    throw Error('Test failed')
  }
}

function run() {
  return execa.command(`yarn rw serve api -p ${TEST_API_PORT}`, {
    stdio: 'inherit',
    // env: {
    //   [KONFIG_API_TEST_ENVIRONMENT_NAME]: 'true',
    // },
  })
}

function konfigPostmanToOpenapiTest() {
  return execa.command('yarn test', {
    stdio: 'inherit',
    cwd: path.join(
      path.dirname(__dirname),
      'packages',
      'konfig-postman-to-openapi'
    ),
  })
}

function konfigCliTest() {
  return execa.command('yarn test', {
    stdio: 'inherit',
    cwd: path.join(path.dirname(__dirname), 'packages', 'konfig-cli'),
    // env: {
    //   [KONFIG_API_TEST_ENVIRONMENT_NAME]: 'true',
    // },
  })
}

function konfigLibTest() {
  return execa.command('yarn test', {
    stdio: 'inherit',
    cwd: path.join(path.dirname(__dirname), 'packages', 'konfig-lib'),
  })
}

function konfigSpectralRulesetTest() {
  return execa.command('yarn test', {
    stdio: 'inherit',
    cwd: path.join(
      path.dirname(__dirname),
      'packages',
      'konfig-spectral-ruleset'
    ),
  })
}

main()
  .then((result) => {
    if (result.success) {
      console.log(
        boxen('All tests successfully ran!', {
          padding: 1,
          title: 'Result',
          borderColor: 'blue',
          titleAlignment: 'center',
        })
      )
    }
  })
  .catch((reason) => {
    if (reason instanceof Error) {
      console.log(
        boxen(reason.message, {
          padding: 1,
          title: 'Error',
          borderColor: 'red',
          titleAlignment: 'center',
        })
      )
    }
    process.exit(1)
  })
