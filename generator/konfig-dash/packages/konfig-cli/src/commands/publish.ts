import { CliUx, Command, Flags } from '@oclif/core'
import { parseKonfigYaml } from '../util/parse-konfig-yaml'
import { parseFilterFlag } from '../util/parseFilterFlag'
import {
  CSharpConfigType,
  GeneratorCommonGitType,
  KonfigYamlAdditionalGeneratorConfig,
  KonfigYamlGeneratorNames,
  TypeScriptConfigType,
  csharp,
  python,
} from 'konfig-lib'
import * as shell from 'shelljs'
import * as path from 'path'
import * as fs from 'fs-extra'
import { isGitDirectoryClean } from '../util/is-git-directory-clean'
import { isGitRemoteInSync } from '../util/is-git-remote-in-sync'
import { executeTestCommand } from '../util/execute-test-command'
import axios, { AxiosError } from 'axios'
import { isSubmodule } from '../util/is-submodule'

async function generateGitTagCommands({
  version,
  generator,
  skipTag,
  outputDirectory,
  isSubmodule: isSubmoduleComputed,
}: {
  version: string
  generator: KonfigYamlGeneratorNames
  skipTag?: boolean
  isSubmodule?: boolean
  outputDirectory?: string
}): Promise<string[]> {
  if (skipTag) return []

  const tag = computeTag({
    version,
    generator,
    outputDirectory,
    isSubmodule: isSubmoduleComputed,
  })

  return [`git tag ${tag}`, `git push origin ${tag}`]
}

function computeTag({
  version,
  generator,
  outputDirectory,
  isSubmodule,
}: {
  version: string
  isSubmodule?: boolean
  generator: string
  outputDirectory?: string
}) {
  // PHP does not allow for suffix with any random string in versioning also PHP
  // is in a submodule so the suffix is unnecessary since it's already in a
  // separate repo
  if (generator === 'php' || isSubmodule || generator === 'swift') {
    return `v${version}`
  }
  // https://go.dev/ref/mod#vcs-version
  // "If a module is defined in a subdirectory within the repository, that is,
  // the module subdirectory portion of the module path is not empty, then each
  // tag name must be prefixed with the module subdirectory, followed by a
  // slash. For example, the module golang.org/x/tools/gopls is defined in the
  // gopls subdirectory of the repository with root path golang.org/x/tools. The
  // version v0.4.0 of that module must have the tag named gopls/v0.4.0 in that
  // repository."
  if (generator === 'go') {
    return `${outputDirectory}/v${version}`
  }

  return `v${version}-${generator}`
}

const publishScripts = {
  ruby: async ({
    version,
    gemName,
    skipTag,
  }: {
    version: string
    gemName: string
    skipTag: boolean
  }) => {
    const gitTagCommands = await generateGitTagCommands({
      version,
      generator: 'ruby',
      skipTag,
    })
    // git tag has to be present for pod trunk to work
    return [
      // If you don't remove .gem files you get:
      // You have one or more invalid gemspecs that need to be fixed.
      // The gemspec at snaptrade-sdks/sdks/ruby/snaptrade.gemspec is not valid. Please fix this gemspec.
      // The validation error was 'snaptrade-1.0.0 contains itself (snaptrade-1.0.0.gem), check your files list'
      `rm *.gem || true`, // "|| true" is used to ensure command exits w/o code of 1 (https://superuser.com/a/887349)
      `gem build ${gemName}.gemspec -o ${gemName}-${version}.gem`,
      `gem push ${gemName}-${version}.gem`,
      ...gitTagCommands,
    ]
  },
  swift: async ({
    version,
    projectName,
    skipTag,
  }: {
    version: string
    projectName: string
    skipTag: boolean
  }) => {
    const gitTagCommands = await generateGitTagCommands({
      version,
      generator: 'swift',
      skipTag,
    })
    // git tag has to be present for pod trunk to work
    return [...gitTagCommands, `pod trunk push ${projectName}.podspec --allow-warnings --allow-root`]
  },
  go: async ({
    version,
    outputDirectory,
    isSubmodule,
    owner,
    repo,
    gitHost,
    skipTag,
  }: {
    version: string
    outputDirectory: string
    isSubmodule: boolean
    owner: string
    repo: string
    gitHost: string
    skipTag?: boolean
  }) => {
    const majorVersion = version.split('.')[0]
    const majorVersionStr = parseInt(majorVersion) > 1 ? `/v${majorVersion}` : ''
    return [
      ...(await generateGitTagCommands({
        version,
        generator: 'go',
        outputDirectory,
        isSubmodule,
        skipTag,
      })),
      `GOPROXY=proxy.golang.org go list -m ${gitHost}/${owner}/${repo}${majorVersionStr}@v${version}`,
    ]
  },
  npm: async ({
    version,
    gitlab,
    skipTag,
  }: {
    version: string
    gitlab: TypeScriptConfigType['gitlab']
    skipTag?: boolean
  }) => {
    const gitTagCommands = await generateGitTagCommands({
      version,
      generator: 'typescript',
      skipTag,
    })
    if (gitlab !== undefined && !process.env.GITLAB_TOKEN)
      throw Error(
        'GITLAB_TOKEN must be configured for publishing npm to GitLab'
      )
    return [
      `${
        gitlab !== undefined ? `NPM_TOKEN=${process.env.GITLAB_TOKEN} ` : ''
      }npm publish`,
      ...gitTagCommands,
    ]
  },
  mavenCentral: async ({
    version,
    skipTag,
    ci
  }: {
    version: string
    skipTag?: boolean
    ci?: boolean
  }) => {
    const gitTagCommands = await generateGitTagCommands({
      version,
      generator: 'java',
      skipTag,
    })
    let mvnCommand = `mvn clean deploy -Dmaven.test.skip=true`;
    if (ci) mvnCommand = `${mvnCommand} -Dgpg.executable=gpg -Dgpg.passphrase="$GPG_PASSPHRASE" -Dgpg.keyname="$GPG_KEY_ID" -P ossrh --settings ~/.m2/settings.xml`
    return [mvnCommand, ...gitTagCommands]
  },
  php: async ({
    version,
    gitConfig,
    skipTag,
    packageName,
    outputDirectory,
  }: {
    version: string
    gitConfig: GeneratorCommonGitType['git']
    skipTag?: boolean
    packageName: string
    outputDirectory: string
  }) => {
    const vendorDirectory = path.join(process.cwd(), outputDirectory, 'vendor')
    const vendorDirectoryExists = fs.existsSync(vendorDirectory)
    if (!(await isGitRemoteInSync({ cwd: outputDirectory })))
      CliUx.ux.error('Git remote is out of sync for PHP SDK')
    return [
      ...(vendorDirectoryExists ? [] : ['composer install']),
      ...(await generateGitTagCommands({
        version,
        generator: 'php',
        skipTag,
      })),
      async () => {
        // POST https://packagist.org/api/create-package?username=[username]&apiToken=[apiToken] -d '{"repository":{"url":"[url]"}}'
        const axiosConfig = {
          params: {
            username: 'konfig',
            apiToken: process.env.PACKAGIST_API_TOKEN,
          },
        }
        const gitUrl = `https://${gitConfig.host}/${gitConfig.userId}/${gitConfig.repoName}`
        try {
          const response = await axios.post(
            'https://packagist.org/api/create-package',
            {
              repository: {
                url: gitUrl,
              },
            },
            axiosConfig
          )
          CliUx.ux.debug(JSON.stringify(response.data, undefined, 2))
          CliUx.ux.info('Successfully created PHP package')
        } catch (error) {
          if (!(error instanceof AxiosError))
            CliUx.ux.error('Could not create PHP package')
          const message = error.response?.data.message.repository as string
          if (message.search('already exists') === -1) {
            if (message.search('Repository not found') !== -1)
              CliUx.ux.error(
                `Git repo (${gitUrl}) does not exist, double check your konfig.yaml`
              )
            CliUx.ux.error('Could not create PHP package')
          }

          try {
            // try update instead
            const response = await axios.post(
              'https://packagist.org/api/update-package',
              {
                repository: {
                  url: `https://packagist.org/packages/konfig/${packageName}`,
                },
              },
              axiosConfig
            )
            if (response.data.status === 'success') {
              CliUx.ux.info('Successfuly updated PHP package')
            } else {
              CliUx.ux.error('Could not create PHP package')
            }
          } catch (error) {
            CliUx.ux.error('Could not update PHP package')
          }
        }
      },
    ]
  },
  pypi: async ({
    test,
    token,
    version,
    gitlabRepositoryId,
    skipTag,
    useTwine,
  }: {
    test?: boolean
    token?: string
    version: string
    gitlabRepositoryId?: string
    skipTag?: boolean
    useTwine?: boolean
  }) => {
    const repository = test ? '-r testpypi ' : ''
    const credentials =
      token !== undefined && !useTwine ? `-u __token__ -p ${token} ` : ''
    const gitTagCommands = await generateGitTagCommands({
      version,
      generator: 'python',
      skipTag,
    })
    const useGitlab = gitlabRepositoryId !== undefined
    const gitlabAuth = useGitlab
      ? `TWINE_PASSWORD=${process.env.GITLAB_TOKEN} TWINE_USERNAME=${process.env.GITLAB_USERNAME} `
      : ''
    const gitLabRepository = useGitlab
      ? `--repository-url https://gitlab.com/api/v4/projects/${gitlabRepositoryId}/packages/pypi `
      : ''
    return [
      'poetry install',
      'rm -rf dist/',
      'poetry run python -m build',
      'poetry run twine check dist/*',
      `${gitlabAuth}poetry run twine upload ${gitLabRepository}${repository}${credentials}dist/*`,
      ...gitTagCommands,
    ]
  },
  nuget: async ({
    config,
    version,
  }: {
    config: CSharpConfigType
    version: string
  }) => {
    const gitTagCommands = await generateGitTagCommands({
      version,
      generator: 'csharp',
    })
    return [
      'dotnet pack',
      `dotnet nuget push src/${config.packageName}/bin/Debug/${config.packageName}.${config.version}.nupkg --api-key $NUGET_API_KEY --source https://api.nuget.org/v3/index.json`,
      ...gitTagCommands,
    ]
  },
} as const

export default class Publish extends Command {
  static description = 'Publish SDKs'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    debug: Flags.boolean({ name: 'debug', char: 'd' }),
    generator: Flags.string({
      name: 'generator',
      char: 'g',
      exclusive: ['all'],
    }),
    all: Flags.boolean({
      name: 'all',
      char: 'a',
      description: 'Specify all generators',
      exclusive: ['generator'],
    }),
    useTwine: Flags.boolean({
      name: 'twine',
      char: 'T',
      description: 'Force use TWINE_USERNAME and TWINE_PASSWORD for publishing',
    }),
    test: Flags.boolean({ name: 'test', char: 't' }),
    skipGitCleanCheck: Flags.boolean({
      name: 'skipGitCleanCheck',
      description: 'Do not check that git directory is clean',
    }),
    skipRemoteCheck: Flags.boolean({
      name: 'skipRemoteCheck',
      description: 'Do not check that remote is in sync',
    }),
    skipTests: Flags.boolean({
      name: 'skipTests',
      description: 'Do not run tests before publishing',
    }),
    skipTag: Flags.boolean({
      name: 'skip tag',
      char: 's',
      description: 'Skip pushing git tag',
    }),
    noMockServer: Flags.boolean({
      description: 'Disable mock server from running',
      char: 'x',
      default: false,
    }),
    tolerateRepublish: Flags.boolean({
      name: 'tolerateRepublish',
      description:
        'Do not fail if package version already exists in package manager. Note that published version will not be overridden. Used in CI',
    }),
    ci: Flags.boolean({
      name: "ci",
      description: "Run in CI mode. This ensures non-interactivity in all publishing actions."
    })
  }

  public async run(): Promise<void> {
    const { flags } = await this.parse(Publish)

    if (flags.skipGitDirtyCheck && !isGitDirectoryClean()) {
      // use git status --porcelain to print list of changes
      CliUx.ux.log('Git status:')
      CliUx.ux.log(shell.exec('git status --porcelain').stdout)
      CliUx.ux.error(
        'Git directory must be clean. Make sure there are no unstaged changes.'
      )
    }

    if (!flags.skipRemoteCheck && !(await isGitRemoteInSync()))
      CliUx.ux.error(
        'Git remote is out of sync. Make sure all changes are pushed or pulled before publishing.'
      )

    const { generators, additionalGenerators } = parseKonfigYaml({
      configDir: process.cwd(),
    })

    const filter = parseFilterFlag(flags.generator)
    if (!flags.all && filter === null)
      this.error('At least -a or -g must be specified')

    // Run all tests before publishing to ensure everything works
    if (!flags.skipTests)
      await executeTestCommand({
        filterInput: filter !== null ? flags.generator : undefined,
        sequence: true,
        cliRoot: this.config.root,
        noMockServer: flags.noMockServer,
      })

    for (const [generatorName, generatorConfig] of [
      ...Object.entries(generators),
      ...(additionalGenerators ? Object.entries(additionalGenerators) : []),
    ]) {
      if ('disabled' in generatorConfig && generatorConfig.disabled) continue
      if (filter !== null && !filter.includes(generatorName)) continue
      if (generatorConfig.outputDirectory === undefined)
        throw Error(
          `Generator "${generatorName}" must provide "outputDirectory" to publish`
        )

      const outputDirectory = generatorConfig.outputDirectory

      const executePublishScript = async ({
        script,
        cwd,
      }: {
        script: Promise<string[]> | Promise<(string | (() => Promise<void>))[]>
        cwd?: string
      }) => {
        const publishScripts = await script
        for (const command of publishScripts) {
          if (flags.debug) {
            if (typeof command === 'string') CliUx.ux.info(`DEBUG: ${command}`)
            else await command()
          } else {
            if (typeof command === 'string') {
              const shellResult = shell.exec(command, {
                cwd: cwd !== undefined ? cwd : outputDirectory,
              })
              handleCommandResult({ shellResult, command })
              if (shellResult.code !== 0) return // Don't execute remaining commands
            } else {
              await command()
            }
          }
        }
      }

      const republishErrorMessages = [
        'You cannot publish over the previously published version', // npm
        'deprecations must be strings', // npm
        'File already exists', // pypi
        'does not allow updating artifact', // maven
        'already exists and cannot be modified', // nuget
        `tag 'v${generatorConfig.version}' already exists`, // go
        `tag 'v${generatorConfig.version}-python' already exists`, // also python
        'Repushing of gem versions is not allowed.', // ruby
      ]

      const handleCommandResult = async ({
        shellResult,
        command,
      }: {
        shellResult: shell.ShellString
        command: string
      }) => {
        if (shellResult.code === 0)
          CliUx.ux.log(`Command "${command}" succeeded`)
        else if (
          shellResult.code !== 0 &&
          flags.tolerateRepublish &&
          (republishErrorMessages.some((message) =>
            shellResult.stderr.includes(message)
          ) ||
            republishErrorMessages.some((message) =>
              shellResult.stdout.includes(message)
            ))
        )
          CliUx.ux.warn(
            `Failed to publish ${generatorName} ${generatorConfig.version} because it already exists in package manager. Due to --tolerateRepublish flag, no error will be raised.`
          )
        else
          CliUx.ux.error(
            `Message: "${shellResult.stderr.trim()}"\nCommand "${command}" failed with exit code ${
              shellResult.code
            }"`
          )
      }

      if (
        (generatorName === 'go' ||
          ('generator' in generatorConfig &&
            generatorConfig.generator === 'go')) &&
        'packageName' in generatorConfig
      ) {
        const goIsInSubmodule = await isSubmodule({
          git: generatorConfig.git,
          configDir: process.cwd(),
          directory: generatorConfig.outputDirectory,
        })
        await executePublishScript({
          script: publishScripts['go']({
            version: generatorConfig.version,
            outputDirectory: generatorConfig.outputDirectory,
            isSubmodule: goIsInSubmodule,
            gitHost: generatorConfig.git.host,
            owner: generatorConfig.git.userId,
            repo: generatorConfig.git.repoId,
            skipTag: flags.skipTag,
          }),
          cwd: goIsInSubmodule ? generatorConfig.outputDirectory : undefined,
        })
      }

      // NPM config detected
      if ('npmName' in generatorConfig && 'version' in generatorConfig) {
        await executePublishScript({
          script: publishScripts['npm']({
            version: generatorConfig.version,
            gitlab: generatorConfig.gitlab,
            skipTag: flags.skipTag,
          }),
        })
      }

      // Ruby config detected
      if (
        'gemName' in generatorConfig &&
        'version' in generatorConfig &&
        generatorName === 'ruby'
      ) {
        await executePublishScript({
          script: publishScripts['ruby']({
            version: generatorConfig.version,
            gemName: generatorConfig.gemName,
            skipTag: flags.skipTag,
          }),
        })
      }

      // Maven Central config detected
      if (
        'groupId' in generatorConfig &&
        (generatorName === 'java' ||
          generatorName === 'kotlin' ||
          ('generator' in generatorConfig &&
            (generatorConfig as KonfigYamlAdditionalGeneratorConfig)
              .generator === 'java'))
      ) {
        await executePublishScript({
          script: publishScripts['mavenCentral']({
            version: generatorConfig.version,
            skipTag: flags.skipTag,
            ci: flags.ci
          }),
        })
      }

      // Swift config detected
      if ('projectName' in generatorConfig && generatorName === 'swift') {
        await executePublishScript({
          script: publishScripts['swift']({
            version: generatorConfig.version,
            projectName: generatorConfig.projectName,
            skipTag: flags.skipTag,
          }),
        })
      }

      if (
        'invokerPackage' in generatorConfig &&
        'packageName' in generatorConfig
      ) {
        if (!process.env.PACKAGIST_API_TOKEN)
          CliUx.ux.error(
            'Set PACKAGIST_API_TOKEN environment variable to publish to Packagist'
          )
        if (generatorConfig.packageName === undefined)
          throw Error('packageName is required for PHP generator')
        await executePublishScript({
          script: publishScripts['php']({
            gitConfig: generatorConfig.git,
            version: generatorConfig.version,
            skipTag: flags.skipTag,
            packageName: generatorConfig.packageName,
            outputDirectory,
          }),
          cwd: generatorConfig.outputDirectory,
        })
      }

      // PyPI config detected
      if (
        generatorName === 'python' ||
        ('generator' in generatorConfig &&
          generatorConfig.generator === 'python')
      ) {
        const pythonConfig = python.parse(generatorConfig)
        const usesToken =
          pythonConfig.pypiApiTokenEnvironmentVariable !== undefined &&
          !flags.useTwine
        const testPyPI = flags.test || pythonConfig.testPyPI
        if (testPyPI && !usesToken) {
          if (!process.env.TEST_TWINE_USERNAME)
            CliUx.ux.error(
              'Set TEST_TWINE_USERNAME environment variable to publish to PyPI (see https://twine.readthedocs.io/en/stable/index.html#environment-variables)'
            )
          if (!process.env.TEST_TWINE_PASSWORD)
            CliUx.ux.error(
              'Set TEST_TWINE_PASSWORD environment variable to publish to PyPI (see https://twine.readthedocs.io/en/stable/index.html#environment-variables)'
            )
          // Override TWINE_USERNAME / PASWORD
          process.env.TWINE_USERNAME = process.env.TEST_TWINE_USERNAME
          process.env.TWINE_PASSWORD = process.env.TEST_TWINE_PASSWORD
        } else if (!usesToken) {
          if (!process.env.TWINE_USERNAME)
            CliUx.ux.error(
              'Set TWINE_USERNAME environment variable to publish to PyPI (see https://twine.readthedocs.io/en/stable/index.html#environment-variables)'
            )
          if (!process.env.TWINE_PASSWORD)
            CliUx.ux.error(
              'Set TWINE_PASSWORD environment variable to publish to PyPI (see https://twine.readthedocs.io/en/stable/index.html#environment-variables)'
            )
        }
        const token = usesToken
          ? process.env[pythonConfig.pypiApiTokenEnvironmentVariable as string]
          : undefined
        if (usesToken && token === undefined)
          throw Error(
            `Set ${pythonConfig.pypiApiTokenEnvironmentVariable} environment variable to publish to PyPI`
          )
        if (pythonConfig.gitlabRepositoryId !== undefined) {
          if (!process.env.GITLAB_USERNAME)
            CliUx.ux.error(
              'Set GITLAB_USERNAME environment variable to publish to PyPI (see https://docs.gitlab.com/ee/user/packages/pypi_repository/#publish-a-pypi-package-by-using-twine)'
            )
          if (!process.env.GITLAB_TOKEN)
            CliUx.ux.error(
              'Set GITLAB_TOKEN environment variable to publish to PyPI (see https://docs.gitlab.com/ee/user/packages/pypi_repository/#publish-a-pypi-package-by-using-twine)'
            )
        }
        await executePublishScript({
          script: publishScripts['pypi']({
            test: !!testPyPI,
            token,
            useTwine: flags.useTwine,
            version: pythonConfig.version,
            gitlabRepositoryId: pythonConfig.gitlabRepositoryId,
            skipTag: flags.skipTag,
          }),
        })
      }

      // NuGet config detected
      if ('logoPath' in generatorConfig && generatorName === 'csharp') {
        if (!process.env.NUGET_API_KEY)
          CliUx.ux.error(
            'Set NUGET_API_KEY environment variable to publish to NuGet (see https://www.nuget.org/account/apikeys)'
          )
        const csharpConfig = csharp.parse(generatorConfig)
        await executePublishScript({
          script: publishScripts['nuget']({
            config: csharpConfig,
            version: csharpConfig.version,
          }),
        })
      }
    }
  }
}
