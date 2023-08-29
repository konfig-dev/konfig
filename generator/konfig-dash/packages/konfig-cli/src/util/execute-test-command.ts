import { CliUx } from '@oclif/core'
import execa, { ExecaSyncReturnValue, SyncOptions } from 'execa'
import {
  KonfigYamlGeneratorNames,
  KonfigYamlGeneratorConfig,
  RequiredEnvironmentVariablesConfig,
  TestConfig,
  KonfigYamlAdditionalGeneratorConfig,
} from 'konfig-lib'
import waiton from 'wait-on'
import kill from 'konfig-kill-port'
import path from 'path'
import { parseKonfigYaml } from './parse-konfig-yaml'
import { parseFilterFlag } from './parseFilterFlag'

const validateRequiredEnvironmentVariables = (
  config: RequiredEnvironmentVariablesConfig
) => {
  if (config.requiredEnvironmentVariables === undefined) return
  for (const environmentVariable of config.requiredEnvironmentVariables) {
    if (!(environmentVariable in process.env))
      CliUx.ux.error(
        `Missing required environment variable: ${environmentVariable}`
      )
  }
}

export async function executeTestCommand({
  filterInput,
  sequence,
}: {
  filterInput?: string
  sequence: boolean
}) {
  const filter = parseFilterFlag(filterInput)
  const configDir = process.cwd()
  const { generators, common, additionalGenerators } = parseKonfigYaml({
    configDir,
  })

  // kill any existing process on 4010
  const port = 4010
  CliUx.ux.log(`Killing any process using port ${port}`)
  try {
    await kill(port)
  } catch (e) {
    if (e instanceof Error) {
      if (e.message !== 'No process running on port') throw e
    }
  }

  // spawn process that run "konfig mock -d {specPath}" from konfig.yaml
  CliUx.ux.log('💻 Starting mock server')
  // TODO: ENG-1099 Use a function call here instead of CLI
  execa.command(`konfig mock -d ${common.specPath}`, {
    cwd: configDir,
    stdio: 'inherit',
    shell: true,
  })

  // if this process exits in any way, kill the mock server
  const handleTermination = async () => {
    CliUx.ux.log('🛑 Killing mock server')
    await kill(port)
    process.exit()
  };

  process.on('exit', handleTermination)
  process.on('SIGINT', handleTermination)
  process.on('SIGTERM', handleTermination)
  process.on('SIGUSR1', handleTermination)
  process.on('SIGUSR2', handleTermination)

  await waiton({
    resources: [`http://127.0.0.1:${port}`],
    timeout: 60_000,
    validateStatus: (status) => {
      console.log(status)
      return status === 405 || status === 404 || status === 200
    },
  })
  CliUx.ux.log('✅ Started mock server')

  validateRequiredEnvironmentVariables(common)
  const results: {
    generatorName: string
    result: ExecaSyncReturnValue<string>
  }[] = []
  const asyncResults: Promise<{
    generatorName: string
    result: ExecaSyncReturnValue<string>
  }>[] = []

  if (!sequence) CliUx.ux.log('Running tests in parallel')
  else CliUx.ux.log('Running tests sequentially')

  function runTest({
    test,
    outputDirectory,
    disabled,
    generatorName,
    generatorConfig,
  }: {
    test?: TestConfig['test']
    outputDirectory?: string
    disabled?: boolean
    generatorName: string
    generatorConfig: KonfigYamlGeneratorConfig
  }) {
    if (filter !== null && !filter.includes(generatorName)) return
    if (disabled) return
    const testScript =
      test?.script === undefined
        ? defaultTestScript({
            generatorName: generatorName as KonfigYamlGeneratorNames,
            generatorConfig,
          })
        : test.script
    if (outputDirectory === undefined)
      throw Error(
        `Generator "${generatorName}" must provide "outputDirectory" for "testScript" to work`
      )
    if (sequence)
      CliUx.ux.action.start(`Running tests for ${generatorName} SDK`)

    // verify environment variables are set if specified
    if (test !== undefined) validateRequiredEnvironmentVariables(test)

    const commandOptions: SyncOptions = {
      cwd: path.join(configDir, outputDirectory),
      stdio: 'inherit',
      shell: true,
    }

    if (sequence) {
      // Sequential
      for (const idx in testScript) {
        const result = execa.commandSync(testScript[idx], commandOptions)
        if (parseInt(idx) == testScript.length - 1) {
          results.push({
            generatorName,
            result,
          })
        }
      }
    } else {
      // Parallel
      asyncResults.push(
        new Promise(async (resolve) => {
          for (const idx in testScript) {
            const result = await execa.command(testScript[idx], commandOptions)
            if (parseInt(idx) === testScript.length - 1) {
              resolve({ generatorName, result })
            }
          }
        })
      )
    }
    if (sequence) CliUx.ux.action.stop()
  }

  for (const [generatorName, generatorConfig] of [
    ...Object.entries(generators),
    ...(additionalGenerators ? Object.entries(additionalGenerators) : []),
  ]) {
    runTest({ ...generatorConfig, generatorName, generatorConfig })
  }

  results.push(...(await Promise.all(asyncResults)))

  if (results.length === 0) {
    CliUx.ux.error('No tests were run')
  }

  let anyFailed: boolean = false
  for (const { result, generatorName } of results) {
    if (!result.failed) continue
    CliUx.ux.warn(`tests for ${generatorName} failed`)
  }
  if (anyFailed) CliUx.ux.error('Test failure occurred')

  // If we made it here then we successfully ran all tests
  CliUx.ux.info('Successfully ran all tests!')

  process.exit()
}

const defaultTestScripts: Record<
  KonfigYamlGeneratorNames,
  ((config: KonfigYamlGeneratorConfig) => string[]) | undefined
> = {
  typescript: () => ['yarn', 'yarn test', 'yarn build'],
  csharp: () => ['dotnet test'],
  java: () => ['mvn test'],
  ruby: () => [
    // If you don't remove .gem files you get:
    // You have one or more invalid gemspecs that need to be fixed.
    // The gemspec at snaptrade-sdks/sdks/ruby/snaptrade.gemspec is not valid. Please fix this gemspec.
    // The validation error was 'snaptrade-1.0.0 contains itself (snaptrade-1.0.0.gem), check your files list'
    `rm *.gem || true`, // "|| true" is used to ensure command exits w/o code of 1 (https://superuser.com/a/887349),
    'bundle install',
    `bundle exec rspec`,
  ],
  python: (config) => {
    if (!('packageName' in config))
      throw Error('Got unexpected config for Python SDK')
    return [
      'poetry install',
      `poetry run pytest --cov=${config.packageName} -o cache_dir=${path.join(
        config.outputDirectory,
        '.pytest_cache'
      )}`,
    ]
  },
  php: () => ['composer install', path.join('.', 'vendor', 'bin', 'phpunit')],
  go: () => ['go clean -testcache', 'go test ./... -v'],
  swift: () => ['swift test'],
  android: () => {
    throw Error('Android generator not supported, use Java instead')
  },
  kotlin: () => {
    throw Error('Kotlin generator not supported, use Java instead')
  },
  objc: () => {
    throw Error('Objective-C generator not supported, use Swift instead')
  },
}
function defaultTestScript({
  generatorName,
  generatorConfig,
}: {
  generatorName: KonfigYamlGeneratorNames
  generatorConfig:
    | KonfigYamlGeneratorConfig
    | KonfigYamlAdditionalGeneratorConfig
}): string[] {
  const name =
    'generator' in generatorConfig ? generatorConfig.generator : generatorName
  const testScript = defaultTestScripts[name]
  if (testScript === undefined)
    throw Error(
      `Could not find default test script for generator with name: "${generatorName}"`
    )
  return testScript(generatorConfig)
}
