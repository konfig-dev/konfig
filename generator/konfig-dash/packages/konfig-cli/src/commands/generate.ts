/* eslint-disable complexity */
import { CliUx, Command, Flags } from '@oclif/core'
import { getSessionToken } from '../util/get-session-token'
import { executeFixCommand } from '../util/execute-fix-command'
import execa from 'execa'
import waiton from 'wait-on'
import {
  GenerateRequestBodyInputType,
  JavaGenerateApiRequestBodyType,
  TemplateFilesType,
  KonfigYamlFilesType,
  KonfigYamlType,
  yamlLanguageServerComment,
  KonfigYamlGeneratorNames,
  CopyFilesType,
  GenerateRequestBodyType,
  parseSpec,
  getOperations,
  KonfigYamlAdditionalGeneratorConfig,
  GeneratorGitConfig,
} from 'konfig-lib'
import globby from 'globby'
import { Konfig, KonfigError } from 'konfig-typescript-sdk'
import * as fs from 'fs-extra'
import axios, { AxiosError } from 'axios'
import * as os from 'os'
import { getApiUrl } from '../util/get-api-url'
import { generateHeaders } from '../util/generate-headers'
import * as tar from 'tar'
import * as stream from 'node:stream'
import * as path from 'node:path'
import ignore, { Ignore } from 'ignore'
import { getLastGenerateIdPath } from '../util/get-last-generate-id-path'
import { getKonfigFolder, KONFIG_FOLDER_NAME } from '../util/get-konfig-folder'
import chokidar from 'chokidar'
import { KONFIG_YAML_NAME } from 'konfig-lib'
import { shouldGenerate } from '../util/should-generate'
import { parseKonfigYaml } from '../util/parse-konfig-yaml'
import { parseFilterFlag } from '../util/parseFilterFlag'
import { generateReadme } from '../util/generate-readme'
import { HomeDirParams } from '../util/ensure-config-setup'
import { generateLicense } from '../util/generate-license'
import { oasYamlDump } from '../util/oas-yaml-dump'
import simpleGit from 'simple-git'
import { getUserId } from '../util/get-user-id'
import prettier from 'prettier'
import replaceAsync from 'string-replace-async'
import { removeTrailingSlash } from '../util/remove-trailing-slash'
import { generateStatisticsFileForSdks } from '../util/generate-statistics-file-for-sdks'
import { generateChangelog } from '../util/generate-changelog'
import { isSubmodule } from '../util/is-submodule'
import { getHostForGenerateApi } from '../util/get-host-for-generate-api'
import { getSdkDefaultBranch } from '../util/get-sdk-default-branch'
import { insertTableOfContents } from '../util/insert-table-of-contents'
import boxen from 'boxen'

function getOutputDir(
  outputFlag: string | undefined,
  konfigOutputDirectory: string | undefined
): string {
  if (outputFlag !== undefined) return outputFlag
  if (konfigOutputDirectory)
    return path.join(konfigOutputDirectory, new Date().toISOString())
  return `${process.cwd()}/out`
}

export default class Deploy extends Command {
  static description =
    'Generate SDKs. Expects a konfig.yaml file in the current directory.'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    dev: Flags.boolean({ char: 'd', hidden: true, exclusive: ['test'] }),
    test: Flags.boolean({ char: 't', hidden: true, exclusive: ['dev'] }),
    onlyCopyAdditionalGenerators: Flags.boolean({
      char: 'x',
      description:
        "Only copy generated SDKs specified under 'additionalGenerators'",
    }),
    watch: Flags.string({
      char: 'w',
      description:
        'Watch any files under a regex pattern and re-run generation if any files are changed. Be default "konfig.yaml" is always added to the watch list. This is generally only useful for when you are actively customizing / testing an SDK.',
    }),
    inputSpec: Flags.file({
      char: 'i',
      description: 'Path to OpenAPI Spec file.',
      exists: true,
    }),
    configDir: Flags.directory({
      char: 'c',
      description: 'Path to configuration directory.',
      exists: true,
    }),
    outputSpec: Flags.file({
      char: 's',
      exists: false,
      description: 'Return the transformed specs to a specified directory.',
      exclusive: ['outputDir'],
    }),
    outputDir: Flags.directory({
      char: 'o',
      description:
        'Path to output directory. Deletes any existing directory at output location.',
    }),
    doNotCopy: Flags.boolean({
      char: 'n',
      description: 'Do not copy',
    }),
    copyJavaOutputDir: Flags.directory({
      char: 'j',
      description:
        'Path to java output directory. Contents of existing directory will be deleted first.',
    }),
    copyPythonOutputDir: Flags.directory({
      char: 'p',
      description:
        'Path to python output directory. Contents of existing directory will be deleted first.',
    }),
    copyTypescriptOutputDir: Flags.directory({
      char: 't',
      description:
        'Path to typescript output directory. Contents of existing directory will be deleted first.',
    }),
    copyCSharpOutputDir: Flags.directory({
      char: 'C',
      description:
        'Path to C# output directory. Contents of existing directory will be deleted first.',
    }),
    copySwiftOutputDir: Flags.directory({
      char: 'S',
      description:
        'Path to Swift output directory. Contents of existing directory will be deleted first.',
    }),
    copyPHPOutputDir: Flags.directory({
      char: 'P',
      description:
        'Path to PHP output directory. Contents of existing directory will be deleted first.',
    }),
    copyKotlinOutputDir: Flags.directory({
      char: 'k',
      description:
        'Path to Kotlin output directory. Contents of existing directory will be deleted first.',
    }),
    copyGoOutputDir: Flags.directory({
      char: 'g',
      description:
        'Path to Go output directory. Contents of existing directory will be deleted first.',
    }),
    copyObjcOutputDir: Flags.directory({
      char: 'O',
      description:
        'Path to Objective-C output directory. Contents of existing directory will be deleted first.',
    }),
    apiUrl: Flags.url({ char: 'a', name: 'apiUrl', hidden: true }),
    generatorFilter: Flags.string({
      char: 'f',
      description:
        'Comma separated list of generators to run (e.g. "-f python,java,go,csharp,objc")',
    }),
    ignoreSubmodules: Flags.boolean({
      char: 'I',
      hidden: true,
      description:
        'Ignore submodules. With this flag, certain generators (e.g. php) are not forced to be submodules. \
        This should only be used for integration testing.',
    }),
  }

  static args = []

  public async run(): Promise<void> {
    const { flags } = await this.parse(Deploy)

    const configDir =
      flags.configDir === undefined ? process.cwd() : flags.configDir

    const generateSdks = async () => {
      const homeParams: HomeDirParams = {
        mode: flags.dev ? 'dev' : flags.test ? 'test' : 'prod',
      }

      const host = getHostForGenerateApi({ apiUrl: flags.apiUrl, homeParams })

      this.debug('before parseFilterFlag')
      const generatorFilter = parseFilterFlag(flags.generatorFilter)
      this.debug('after parseFilterFlag')

      this.debug('before parseKonfigYaml')
      const {
        generators,
        additionalGenerators,
        common,
        konfigYamlRaw,
        konfigYamlPath,
        parsedKonfigYaml,
        allGenerators,
      } = parseKonfigYaml({
        configDir,
      })
      if (!konfigYamlRaw.includes(yamlLanguageServerComment))
        fs.writeFileSync(
          konfigYamlPath,
          `${yamlLanguageServerComment}${os.EOL}${os.EOL}${konfigYamlRaw}`
        )
      this.debug('after parseKonfigYaml')

      // if specInputPath is defined then run executeFixCommand automatically
      if (parsedKonfigYaml.specInputPath !== undefined) {
        await executeFixCommand({
          spec: parsedKonfigYaml.specPath,
          specInputPath: parsedKonfigYaml.specInputPath,
        })
      }

      const inputSpecPath = path.join(
        configDir,
        flags.inputSpec ?? common.specPath
      )
      if (inputSpecPath === undefined)
        throw Error(
          `Must provide path to OpenAPI Spec. Either provide the '-i' flag or assign 'specPath' in ${KONFIG_YAML_NAME}`
        )
      const spec = fs.readFileSync(inputSpecPath, 'utf-8')

      const parsedSpec = await parseSpec(spec)
      // check if topLevelOperations from any configs refer to non-existent operationId
      // throw an error if non-existent operationId is referenced
      for (const [_name, config] of allGenerators) {
        if (
          !('topLevelOperations' in config) ||
          config.topLevelOperations === undefined
        )
          continue
        if (!Array.isArray(config.topLevelOperations)) {
          this.warn('topLevelOperations check for object not implemented')
          continue
        }
        for (const operation of config.topLevelOperations) {
          const foundMatch = getOperations(parsedSpec).find(
            ({ operation: op }) => {
              return op.operationId === operation.operationId
            }
          )
          if (foundMatch === undefined)
            this.error(
              `Operation ID specified top "topLevelOperations": "${operation.operationId}" not found in spec`
            )
          else this.debug(`Found match for ${operation.operationId}`)
        }
      }

      const generateConfigs = Object.entries(generators)
      if (generateConfigs.length === 0)
        this.error('Must specify at least one generator')

      this.debug(generators)

      // Read templates from expected directory (i.e. templates/java) and create a files object
      const requestGenerators: GenerateRequestBodyInputType['generators'] = {}

      const getConfig = <Generator extends keyof KonfigYamlType['generators']>(
        generatorName: Generator
      ) => {
        return shouldGenerate({
          generatorName,
          generators,
          generatorFilter,
        })
      }

      const initializeFlowsDirectory = (
        generatorName: KonfigYamlGeneratorNames
      ) => {
        // Update: for now do nothing
        // const flowsDirectory = path.join(configDir, 'flows')
        // fs.ensureDirSync(flowsDirectory)
        // const generatorFlowsDirectory = path.join(flowsDirectory, generatorName)
        // fs.ensureDirSync(generatorFlowsDirectory)
        // const gitKeepPath = path.join(generatorFlowsDirectory, '.gitkeep')
        // fs.ensureFileSync(gitKeepPath)
      }

      this.debug('before creating language configs')
      const goGeneratorConfig = getConfig('go')
      if (goGeneratorConfig && !goGeneratorConfig.disabled) {
        const requestGo = constructGoGenerationRequest({
          configDir,
          goGeneratorConfig,
          initializeFlowsDirectory,
        })
        requestGenerators.go = requestGo
      }

      const objcGeneratorConfig = getConfig('objc')
      if (objcGeneratorConfig && !objcGeneratorConfig.disabled) {
        const { files, ...restOfConfig } = objcGeneratorConfig
        const requestJava: GenerateRequestBodyInputType['generators']['objc'] =
          {
            files: createTemplateFilesObject(files, 'kotlin', configDir),
            ...handleReadmeSnippet({ config: restOfConfig }),
            ...handleReadmeSupportingDescriptionSnippet({
              config: restOfConfig,
            }),
            ...handleapiDocumentationAuthenticationPartialSnippet({
              config: restOfConfig,
            }),
          }
        initializeFlowsDirectory('objc')
        requestGenerators.objc = requestJava
      }

      const kotlinGeneratorConfig = getConfig('kotlin')
      if (kotlinGeneratorConfig && !kotlinGeneratorConfig.disabled) {
        const { files, ...restOfConfig } = kotlinGeneratorConfig
        const requestJava: GenerateRequestBodyInputType['generators']['kotlin'] =
          {
            files: createTemplateFilesObject(files, 'kotlin', configDir),
            ...handleReadmeSnippet({ config: restOfConfig }),
            ...handleReadmeSupportingDescriptionSnippet({
              config: restOfConfig,
            }),
            ...handleapiDocumentationAuthenticationPartialSnippet({
              config: restOfConfig,
            }),
          }
        initializeFlowsDirectory('kotlin')
        requestGenerators.kotlin = requestJava
      }

      const phpGeneratorConfig = getConfig('php')
      if (phpGeneratorConfig && !phpGeneratorConfig.disabled) {
        const requestPhp = constructPhpGenerationRequest({
          configDir,
          phpGeneratorConfig,
          initializeFlowsDirectory,
        })
        requestGenerators.php = requestPhp
      }

      const swiftGeneratorConfig = getConfig('swift')
      if (swiftGeneratorConfig && !swiftGeneratorConfig.disabled) {
        const { files, ...restOfConfig } = swiftGeneratorConfig
        const requestJava: GenerateRequestBodyInputType['generators']['swift'] =
          {
            files: createTemplateFilesObject(files, 'swift', configDir),
            ...handleReadmeSnippet({ config: restOfConfig }),
            ...handleReadmeSupportingDescriptionSnippet({
              config: restOfConfig,
            }),
            ...handleapiDocumentationAuthenticationPartialSnippet({
              config: restOfConfig,
            }),
          }
        initializeFlowsDirectory('swift')
        requestGenerators.swift = requestJava
      }

      const rubyGeneratorConfig = getConfig('ruby')
      if (rubyGeneratorConfig && !rubyGeneratorConfig.disabled) {
        const { files, ...restOfConfig } = rubyGeneratorConfig
        const requestJava: GenerateRequestBodyInputType['generators']['ruby'] =
          {
            files: createTemplateFilesObject(files, 'csharp', configDir),
            ...handleReadmeSnippet({ config: restOfConfig }),
            ...handleReadmeSupportingDescriptionSnippet({
              config: restOfConfig,
            }),
            ...handleapiDocumentationAuthenticationPartialSnippet({
              config: restOfConfig,
            }),
          }
        initializeFlowsDirectory('ruby')
        requestGenerators.ruby = requestJava
      }

      const csharpGeneratorConfig = getConfig('csharp')
      if (csharpGeneratorConfig && !csharpGeneratorConfig.disabled) {
        const { files, ...restOfConfig } = csharpGeneratorConfig
        const requestJava: GenerateRequestBodyInputType['generators']['csharp'] =
          {
            files: createTemplateFilesObject(files, 'csharp', configDir),
            ...handleReadmeSnippet({ config: restOfConfig }),
            ...handleReadmeSupportingDescriptionSnippet({
              config: restOfConfig,
            }),
            ...handleapiDocumentationAuthenticationPartialSnippet({
              config: restOfConfig,
            }),
          }
        initializeFlowsDirectory('csharp')
        requestGenerators.csharp = requestJava
      }

      const androidGeneratorConfig = getConfig('android')
      if (androidGeneratorConfig && !androidGeneratorConfig.disabled) {
        const { files, ...restOfConfig } = androidGeneratorConfig
        const requestJava: GenerateRequestBodyInputType['generators']['android'] =
          {
            files: createTemplateFilesObject(files, 'android', configDir),
            ...handleReadmeSnippet({ config: restOfConfig }),
            ...handleReadmeSupportingDescriptionSnippet({
              config: restOfConfig,
            }),
            ...handleapiDocumentationAuthenticationPartialSnippet({
              config: restOfConfig,
            }),
          }
        initializeFlowsDirectory('android')
        requestGenerators.android = requestJava
      }

      const javaGeneratorConfig = getConfig('java')
      if (javaGeneratorConfig && !javaGeneratorConfig.disabled) {
        const requestJava = constructJavaGenerationRequest({
          configDir,
          javaGeneratorConfig,
          initializeFlowsDirectory,
        })
        requestGenerators.java = requestJava
      }

      const dartGeneratorConfig = getConfig('dart')
      if (dartGeneratorConfig && !dartGeneratorConfig.disabled) {
        const requestDart = constructDartGenerationRequest({
          configDir,
          dartGeneratorConfig,
          initializeFlowsDirectory,
        })
        requestGenerators.dart = requestDart
      }

      const pythonGeneratorConfig = getConfig('python')
      if (pythonGeneratorConfig && !pythonGeneratorConfig.disabled) {
        const { files, ...restOfConfig } = pythonGeneratorConfig

        const requestPython: GenerateRequestBodyInputType['generators']['python'] =
          {
            files: createTemplateFilesObject(files, 'python', configDir),
            ...handleReadmeSnippet({ config: restOfConfig }),
            ...handleReadmeSupportingDescriptionSnippet({
              config: restOfConfig,
            }),
            ...handleapiDocumentationAuthenticationPartialSnippet({
              config: restOfConfig,
            }),
          }
        initializeFlowsDirectory('python')
        requestGenerators.python = requestPython
      }

      const typescriptGeneratorConfig = getConfig('typescript')
      if (typescriptGeneratorConfig && !typescriptGeneratorConfig.disabled) {
        const requestTypescript = constructTypeScriptGenerationRequest({
          configDir,
          typescriptGeneratorConfig,
          initializeFlowsDirectory,
        })
        requestGenerators.typescript = requestTypescript
      }

      // handle additional generators
      const generateRequestBodyAdditionalGenerators: GenerateRequestBodyInputType['additionalGenerators'] =
        {}
      if (additionalGenerators !== undefined) {
        for (const configName of Object.keys(additionalGenerators)) {
          if (generatorFilter !== null && !generatorFilter.includes(configName))
            continue
          const config: KonfigYamlAdditionalGeneratorConfig =
            additionalGenerators[configName]
          if (config.generator === 'typescript') {
            generateRequestBodyAdditionalGenerators[configName] = {
              generator: 'typescript',
              ...constructTypeScriptGenerationRequest({
                configDir,
                typescriptGeneratorConfig: config,
                initializeFlowsDirectory,
              }),
            }
          } else if (config.generator === 'java') {
            generateRequestBodyAdditionalGenerators[configName] = {
              generator: 'java',
              ...constructJavaGenerationRequest({
                configDir,
                javaGeneratorConfig: config,
                initializeFlowsDirectory,
              }),
            }
          } else if (config.generator === 'dart') {
            generateRequestBodyAdditionalGenerators[configName] = {
              generator: 'dart',
              ...constructDartGenerationRequest({
                configDir,
                dartGeneratorConfig: config,
                initializeFlowsDirectory,
              }),
            }
          } else if (config.generator === 'php') {
            generateRequestBodyAdditionalGenerators[configName] = {
              generator: 'php',
              ...constructPhpGenerationRequest({
                configDir,
                phpGeneratorConfig: config,
                initializeFlowsDirectory,
              }),
            }
          } else if (config.generator === 'go') {
            generateRequestBodyAdditionalGenerators[configName] = {
              generator: 'go',
              ...constructGoGenerationRequest({
                configDir,
                goGeneratorConfig: config,
                initializeFlowsDirectory,
              }),
            }
          } else {
            this.error(
              `Unsupported generator: ${config.generator} under additionalGenerators`
            )
          }
        }
      }

      this.debug('after creating language configs')
      this.debug('additionalGenerators: ', additionalGenerators)

      // go through requestGenerators and generateRequestBodyAdditionalGenerators and
      // compute git default branch and assign "defaultBranch" value to git config
      for (const [_, config] of Object.entries({
        ...requestGenerators,
        ...generateRequestBodyAdditionalGenerators,
      })) {
        if (config.git === undefined) continue
        const defaultBranch = await getSdkDefaultBranch({
          git: config.git,
          outputDirectory: config.outputDirectory,
        })
        const isGitSubmodule = await isSubmodule({
          git: config.git,
          configDir,
        })
        Object.assign(config.git, { defaultBranch, isGitSubmodule })
      }

      const body: GenerateRequestBodyInputType = {
        spec,
        generators: requestGenerators,
        outputSpec: flags.outputSpec !== undefined,
        additionalGenerators: generateRequestBodyAdditionalGenerators,
        konfigYaml: konfigYamlRaw,
        ...common,
      }

      const outputDirectory = getOutputDir(
        flags.outputDir,
        common.outputDirectory
      )
      const url = `${host}/generate`
      const headers = generateHeaders(homeParams)
      if (flags.outputSpec) {
        try {
          // Make request to generate Spec
          CliUx.ux.action.start('Generating transformed OpenAPI Spec')
          const { data: specs } = await axios.put<{
            [generator: string]: string
          }>(url, body, {
            headers,
            withCredentials: true,
          })
          CliUx.ux.action.stop()

          if (
            fs.existsSync(flags.outputSpec) &&
            !fs.lstatSync(flags.outputSpec).isDirectory()
          )
            CliUx.ux.error(
              `Found file at ${flags.outputSpec}. Make sure specified output is non-existent so we don't override anything`
            )
          CliUx.ux.action.start(
            `Writing spec to directory "${flags.outputSpec}"`
          )
          fs.ensureDirSync(flags.outputSpec)
          for (const generator of Object.keys(specs)) {
            fs.writeFileSync(
              path.join(flags.outputSpec, `${generator}.yaml`),
              oasYamlDump(specs)
            )
          }
          CliUx.ux.action.stop()
        } catch (error) {
          if (error instanceof AxiosError) {
            console.error(error.message)
            if (error.response?.status === 401)
              console.error('Login with "konfig login"')
          }

          if (error instanceof Error) CliUx.ux.error(error)
          if (typeof error === 'string') CliUx.ux.error(error)
        }
      } else {
        CliUx.ux.info('Output directory set to: %s', outputDirectory)
        try {
          // Make request to generate SDKs
          CliUx.ux.action.start(
            `Generating ${Object.keys(body.generators)
              .concat(Object.keys(body.additionalGenerators ?? {}))
              .join(', ')} SDKs`
          )
          this.debug(
            `Generate Request Body generator configs: ${JSON.stringify(
              body.generators,
              undefined,
              2
            )}`
          )

          const konfig = new Konfig({
            basePath: host,
            authorization: `Bearer ${getUserId(homeParams)}`,
            session: '',
          })
          const {
            data: { urls, generateConfigId },
          } = await konfig.sdk.generate(body as any, {
            headers: { 'auth-provider': 'dbAuth' },
            withCredentials: true,
          }) // TODO: type mismatch here—whats going on?
          CliUx.ux.action.stop()

          this.debug(urls)
          this.debug(generateConfigId)

          fs.ensureDirSync(getKonfigFolder({ dir: configDir }))

          // Download SDKs
          CliUx.ux.action.start(`Downloading ${urls.length} SDKs`)
          const sdkTars = (
            await Promise.all(
              urls.map(({ url }) => {
                return axios.get<Buffer>(url, { responseType: 'arraybuffer' })
              })
            )
          ).map((res) => res.data)
          CliUx.ux.action.stop()

          CliUx.ux.action.start('Deleting output directory')
          fs.rmSync(outputDirectory, { recursive: true, force: true })
          CliUx.ux.action.stop()
          CliUx.ux.action.start('Creating output directory')
          const topLevelOutputDirectory = `${outputDirectory}/sdks`
          const snippetOutputDir = `${outputDirectory}/snippets`
          fs.ensureDirSync(topLevelOutputDirectory)
          fs.ensureDirSync(snippetOutputDir)
          CliUx.ux.action.stop()

          // // Extract to output directory
          CliUx.ux.action.start('Extracting SDKs')
          await Promise.all(
            sdkTars.map((sdkTar) => {
              return new Promise((resolve) => {
                const ws = tar.x({ cwd: topLevelOutputDirectory })
                const s = new stream.Readable()
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                s._read = () => {}
                s.push(sdkTar)
                // eslint-disable-next-line unicorn/no-array-push-push
                s.push(null)
                s.pipe(ws).on('finish', () => {
                  resolve(true)
                })
              })
            })
          )
          renameOpenApiGeneratorNameBackToLanguage({
            outputDir: topLevelOutputDirectory,
          })

          // Write generate-id.txt file to all generated SDK dirs
          const sdkDirs = fs.readdirSync(topLevelOutputDirectory)
          for (const sdkDirName of sdkDirs) {
            const sdkDir = `${topLevelOutputDirectory}/${sdkDirName}`
            const konfigFolder = getKonfigFolder({ dir: sdkDir })
            fs.ensureDirSync(konfigFolder)
            this.debug(`sdkDir: ${sdkDir}`)
            const lastGenerateIdPath = getLastGenerateIdPath({ sdkDir })
            this.debug(`Writing ${generateConfigId} to ${lastGenerateIdPath}`)
            fs.writeFileSync(lastGenerateIdPath, generateConfigId)
          }

          CliUx.ux.action.stop()

          //         if (generators.python && getConfig('python') !== undefined) {
          //           CliUx.ux.action.start('Generating snippet for Python')
          //           // Extract snippet from README
          //           const readme = fs.readFileSync(
          //             `${topLevelOutputDirectory}/python/README.md`,
          //             'utf-8'
          //           )
          //           const snippet = readme
          //             .split(
          //               'Please follow the [installation procedure](#installation--usage) and then run the following:'
          //             )[1]
          //             .split('```python')[1]
          //             .split('```')[0]
          //             .trim()
          //           const snippetSplit = snippet.split('\n')

          //           // Insert workaround code for this particular case
          //           if (
          //             snippet.includes('category=Category') &&
          //             snippet.includes('model.pet import Pet')
          //           ) {
          //             // Find line with model.pet import Pet
          //             const modelImportLine = snippetSplit.find((line) =>
          //               line.includes('model.pet import Pet')
          //             )

          //             if (!modelImportLine)
          //               throw new Error('Could not find specific line to copy')

          //             // workaround for this particular case
          //             snippetSplit.splice(
          //               5,
          //               0,
          //               modelImportLine
          //                 .replace('pet', 'category')
          //                 .replace('Pet', 'Category')
          //             )
          //             snippetSplit.splice(
          //               5,
          //               0,
          //               modelImportLine.replace('pet', 'tag').replace('Pet', 'Tag')
          //             )
          //           }

          //           // Import dir to sdk
          //           snippetSplit.splice(
          //             1,
          //             0,
          //             `import sys
          // from pathlib import Path
          // python_sdk_dir = str(Path(__file__).parents[1]) + '/sdks/python'
          // sys.path.append(python_sdk_dir)`
          //           )

          //           // Write snippet to snippet file
          //           fs.writeFileSync(
          //             `${snippetOutputDir}/main.py`,
          //             snippetSplit.join('\n')
          //           )

          //           // Write to settings.json for extra python path
          //           // const settingsJson = vscodeSettingsJson({
          //           //   configDir,
          //           // })
          //           // settingsJson['python.analysis.extraPaths'] = ['./out/sdks/python']
          //           // fs.ensureDirSync(path.join(configDir, '.vscode'))
          //           // fs.writeFileSync(
          //           //   vscodeSettingsJsonPath({configDir: configDir}),
          //           //   JSON.stringify(settingsJson, undefined, 2),
          //           // )

          //           CliUx.ux.action.stop()
          //         }

          const copyToOutputDirectory = async ({
            generator,
            outputDirectory,
            generatorConfig,
          }: CopyFilesInput) => {
            if (!topLevelOutputDirectory) return
            const ig = createIgnore(outputDirectory)
            const topLevelSdkOutputDirectory = path.join(
              topLevelOutputDirectory,
              generator
            )

            this.debug(
              `Copying from ${topLevelSdkOutputDirectory} to ${outputDirectory}`
            )
            const files = await getFiles(topLevelSdkOutputDirectory)
            this.debug(`Found ${files.length} files to copy`)
            for (const file of files) {
              const subpath = path.relative(topLevelSdkOutputDirectory, file)
              const absoluteDestinationPath = path.join(
                outputDirectory,
                subpath
              )

              // If the file does not exist, then its fine to copy. <-- Update 1: this is wrong
              // Otherwise check if file is part of .konfigignore
              // If the file is in our copy blacklist, then don't copy

              // Update 1:
              // I needed to add "yarn.lock" to .konfigignore and delete it and
              // was hoping it never comes back. But because we first check if
              // the file exists to not copy, we chose to copy it over despite
              // what I assumed .konfigignore should do (which is essentially
              // force a no-op for any files that match the globs)
              if (
                isFileIgnored({
                  ig,
                  relativePath: subpath,
                }) ||
                DO_NOT_COPY_THESE_FILES.has(subpath)
              ) {
                this.debug(`File copy status: Not copying ${subpath}`)
                continue
              }

              this.debug(
                `File copy status: Copying ${file} to ${absoluteDestinationPath}`
              )

              fs.ensureDirSync(path.dirname(absoluteDestinationPath))
              fs.copyFileSync(file, absoluteDestinationPath)
            }

            if (parsedKonfigYaml.readmeHeader) {
              fs.copyFileSync(
                path.join(configDir, parsedKonfigYaml.readmeHeader.image),
                path.join(configDir, outputDirectory, 'header.png')
              )
            }

            if (generatorConfig.copyFiles) {
              for (const copyFileConfiguration of generatorConfig.copyFiles) {
                if ('konfigIgnore' in copyFileConfiguration) {
                  if (
                    !copyFileConfiguration.konfigIgnore.endsWith(
                      KONFIG_IGNORE_FILE_NAME
                    )
                  )
                    throw Error(
                      `The "konfigIgnore" configuration for copying files must point to a ".konfigignore" file`
                    )
                  const konfigIgnore = fs.readFileSync(
                    copyFileConfiguration.konfigIgnore,
                    'utf-8'
                  )

                  this.debug(
                    `Read ${KONFIG_IGNORE_FILE_NAME} from ${copyFileConfiguration.konfigIgnore} and got "${konfigIgnore}"`
                  )

                  // Dylan: handle windows? I pre-emptively wrote this tertiary
                  // statement assuming windows would be a problem
                  const lines = (
                    konfigIgnore.includes('\r\n')
                      ? konfigIgnore.split('\r\n')
                      : konfigIgnore.split('\n')
                  ).filter((line) => line)

                  for (const line of lines) {
                    this.debug(
                      `Copying line "${line}" from "${copyFileConfiguration.konfigIgnore}" to ${outputDirectory}`
                    )
                    const sourceSdkDir = path.dirname(
                      copyFileConfiguration.konfigIgnore
                    )
                    await copyFiles({
                      sourcePath: path.join(sourceSdkDir, line),
                      destinationPath: outputDirectory,
                      forKonfigIgnore: {
                        sourceSdkDirName: sourceSdkDir,
                      },
                    })
                  }
                } else {
                  await copyFiles({
                    sourcePath: copyFileConfiguration.from,
                    destinationPath: copyFileConfiguration.to,
                  })
                }
              }
            }
          }

          if (body.additionalGenerators) {
            for (const [name, config] of Object.entries(
              body.additionalGenerators
            )) {
              if (!config.outputDirectory) continue
              if (config.generator === 'typescript') {
                await copyTypeScriptOutput({
                  flags,
                  typescript: config,
                  sdkDirName: name,
                  copyToOutputDirectory,
                })
              } else if (config.generator === 'java') {
                await copyJavaOutput({
                  flags,
                  java: config,
                  sdkDirName: name,
                  copyToOutputDirectory,
                })
              } else if (config.generator === 'dart') {
                await copyDartOutput({
                  flags,
                  dart: config,
                  sdkDirName: name,
                  copyToOutputDirectory,
                })
              } else if (config.generator === 'php') {
                await copyPhpOutput({
                  flags,
                  php: config,
                  sdkDirName: name,
                  copyToOutputDirectory,
                  configDir,
                })
              } else if (config.generator === 'go') {
                await copyGoOutput({
                  flags,
                  go: config,
                  sdkDirName: name,
                  copyToOutputDirectory,
                  configDir,
                })
              } else {
                CliUx.ux.action.start(
                  `Deleting contents of existing directory "${config.outputDirectory}"`
                )
                await safelyDeleteFiles(config.outputDirectory)
                CliUx.ux.action.stop()

                // Copy content of generated SDK to existing directory
                CliUx.ux.action.start(
                  `Copying ${name} SDK to "${config.outputDirectory}"`
                )
                // TODO: use copy logic from blocks of code handling "body.generators" object (see typescript above)
                await copyToOutputDirectory({
                  generator: name,
                  outputDirectory: config.outputDirectory,
                  generatorConfig: config,
                })
                CliUx.ux.action.stop()
              }
            }
          }

          if (flags.onlyCopyAdditionalGenerators) return

          if (body.generators.kotlin) {
            const outputDirectory =
              flags.copyKotlinOutputDir ??
              body.generators.kotlin.outputDirectory
            if (outputDirectory && !flags.doNotCopy) {
              CliUx.ux.action.start(
                `Deleting contents of existing directory "${outputDirectory}"`
              )
              await safelyDeleteFiles(outputDirectory)
              CliUx.ux.action.stop()

              // Copy content of generated SDK to existing directory
              CliUx.ux.action.start(
                `Copying Kotlin SDK to "${outputDirectory}"`
              )
              await copyToOutputDirectory({
                generator: 'kotlin',
                outputDirectory,
                generatorConfig: body.generators.kotlin,
              })
              CliUx.ux.action.stop()
            }
          }

          if (body.generators.objc) {
            const outputDirectory =
              flags.copyObjcOutputDir ?? body.generators.objc.outputDirectory
            if (outputDirectory && !flags.doNotCopy) {
              CliUx.ux.action.start(
                `Deleting contents of existing directory "${outputDirectory}"`
              )
              await safelyDeleteFiles(outputDirectory)
              CliUx.ux.action.stop()

              // Copy content of generated SDK to existing directory
              CliUx.ux.action.start(
                `Copying Objective-C SDK to "${outputDirectory}"`
              )
              await copyToOutputDirectory({
                generator: 'objc',
                outputDirectory,
                generatorConfig: body.generators.objc,
              })
              CliUx.ux.action.stop()
            }
          }

          if (body.generators.go) {
            await copyGoOutput({
              flags,
              go: body.generators.go,
              copyToOutputDirectory,
              configDir,
            })
          }

          if (body.generators.php) {
            await copyPhpOutput({
              flags,
              php: body.generators.php,
              copyToOutputDirectory,
              configDir,
            })
          }

          if (body.generators.ruby) {
            const outputDirectory = body.generators.ruby.outputDirectory
            this.debug(
              `ruby generator config: ${JSON.stringify(
                body.generators.ruby,
                undefined,
                2
              )}`
            )
            this.debug(`ruby output directory: ${outputDirectory}`)
            if (outputDirectory && !flags.doNotCopy) {
              CliUx.ux.action.start(
                `Deleting contents of existing directory "${outputDirectory}"`
              )
              await safelyDeleteFiles(outputDirectory)
              CliUx.ux.action.stop()

              // Copy content of generated SDK to existing directory
              CliUx.ux.action.start(`Copying Ruby SDK to "${outputDirectory}"`)
              await copyToOutputDirectory({
                generator: 'ruby',
                outputDirectory,
                generatorConfig: body.generators.ruby,
              })
              CliUx.ux.action.stop()
            }
          }

          if (body.generators.swift) {
            if (
              !flags.ignoreSubmodules &&
              (await isSubmodule({ git: body.generators.swift.git, configDir }))
            ) {
              await handleSubmodule({
                outputDirectory: body.generators.swift.outputDirectory,
                configDir,
                git: body.generators.swift.git,
                generator: 'swift',
              })
            }
            const outputDirectory =
              flags.copySwiftOutputDir ?? body.generators.swift.outputDirectory
            this.debug(
              `swift generator config: ${JSON.stringify(
                body.generators.swift,
                undefined,
                2
              )}`
            )
            this.debug(`swift output directory: ${outputDirectory}`)
            if (outputDirectory && !flags.doNotCopy) {
              CliUx.ux.action.start(
                `Deleting contents of existing directory "${outputDirectory}"`
              )
              await safelyDeleteFiles(outputDirectory)
              CliUx.ux.action.stop()

              // Copy content of generated SDK to existing directory
              CliUx.ux.action.start(`Copying Swift SDK to "${outputDirectory}"`)
              await copyToOutputDirectory({
                generator: 'swift',
                outputDirectory,
                generatorConfig: body.generators.swift,
              })
              fs.writeFileSync(
                path.join(outputDirectory, 'LICENSE'),
                generateLicense()
              )
              CliUx.ux.action.stop()
            }
          }

          if (body.generators.csharp) {
            const outputDirectory =
              flags.copyCSharpOutputDir ??
              body.generators.csharp.outputDirectory
            if (outputDirectory && !flags.doNotCopy) {
              CliUx.ux.action.start(
                `Deleting contents of existing directory "${outputDirectory}"`
              )
              await safelyDeleteFiles(outputDirectory)
              CliUx.ux.action.stop()

              // Copy content of generated SDK to existing directory
              CliUx.ux.action.start(`Copying C# SDK to "${outputDirectory}"`)
              await copyToOutputDirectory({
                generator: 'csharp',
                outputDirectory,
                generatorConfig: body.generators.csharp,
              })
              fs.copySync(
                body.generators.csharp.logoPath,
                path.join(outputDirectory, 'logo.png')
              )
              CliUx.ux.action.stop()
            }
          }

          if (body.generators.android) {
            const outputDirectory = body.generators.android.outputDirectory
            if (outputDirectory && !flags.doNotCopy) {
              CliUx.ux.action.start(
                `Deleting contents of existing directory "${outputDirectory}"`
              )
              await safelyDeleteFiles(outputDirectory)
              CliUx.ux.action.stop()

              // Copy content of generated SDK to existing directory
              CliUx.ux.action.start(
                `Copying Android SDK to "${outputDirectory}"`
              )
              await copyToOutputDirectory({
                generator: 'java',
                outputDirectory,
                generatorConfig: body.generators.android,
              })

              // Make gradlew executable from command line
              fs.chmodSync(
                path.join(outputDirectory, 'gradlew'),
                fs.constants.S_IRWXU
              )

              CliUx.ux.action.stop()
            }
          }

          if (body.generators.java) {
            await copyJavaOutput({
              flags,
              java: body.generators.java,
              copyToOutputDirectory,
            })
          }

          if (body.generators.dart) {
            await copyDartOutput({
              flags,
              dart: body.generators.dart,
              copyToOutputDirectory,
            })
          }

          if (body.generators.python) {
            const outputDirectory =
              flags.copyPythonOutputDir ??
              body.generators.python.outputDirectory
            if (outputDirectory && !flags.doNotCopy) {
              CliUx.ux.action.start(
                `Deleting contents of existing directory "${outputDirectory}"`
              )
              await safelyDeleteFiles(outputDirectory)
              CliUx.ux.action.stop()

              CliUx.ux.action.start(
                `Copying Python SDK to "${outputDirectory}"`
              )
              // Copy content of generated SDK to existing directory
              await copyToOutputDirectory({
                generator: 'python',
                outputDirectory,
                generatorConfig: body.generators.python,
              })
              fs.writeFileSync(
                path.join(outputDirectory, 'LICENSE'),
                generateLicense()
              )

              // insert TOC at beginning of README.md
              CliUx.ux.action.start(
                'Inserting table of contents into README.md'
              )
              insertTableOfContents({ outputDirectory })
              CliUx.ux.action.stop()

              // find all files in outputdirectory that end with .md and use the "globby" package
              const markdownFiles = await globby([
                // path.join uses platform-specific path separator but globby requires forward slash
                path.join(outputDirectory, '**/*.md').replace(/\\/g, '/'),
              ])
              for (const markdownPath of markdownFiles) {
                const markdown = fs.readFileSync(markdownPath, 'utf-8')
                await formatPythonSnippet({ markdown, markdownPath, konfig })
              }

              CliUx.ux.action.stop()
            }
          }

          if (body.generators.typescript) {
            await copyTypeScriptOutput({
              flags,
              typescript: body.generators.typescript,
              copyToOutputDirectory,
            })
          }

          CliUx.ux.action.start('Generating top-level README.md')
          const readme = await generateReadme({ konfigYaml: parsedKonfigYaml })
          fs.writeFileSync(path.join(configDir, 'README.md'), readme)
          CliUx.ux.action.stop()

          CliUx.ux.action.start('Generating STATISTICS.md')
          const statistics = await generateStatisticsFileForSdks({
            konfigYaml: parsedKonfigYaml,
            cwd: configDir,
          })
          fs.writeFileSync(path.join(configDir, 'STATISTICS.md'), statistics)
          CliUx.ux.action.stop()

          CliUx.ux.action.start('Writing top-level LICENSE')
          fs.writeFileSync(path.join(configDir, 'LICENSE'), generateLicense())
          CliUx.ux.action.stop()
        } catch (error) {
          // stop whatever action was happening if an error happened
          CliUx.ux.action.stop()

          if (error instanceof AxiosError) {
            console.error(error.message)
            if (error.response?.status === 401)
              console.error('Login with "konfig login"')
          }

          if (error instanceof Error) this.error(error)
          if (typeof error === 'string') this.error(error)
        }
      }
    }

    if (flags.watch !== undefined) {
      CliUx.ux.info(`Watching "${flags.watch}" for changes`)
      let isRunning = false
      const watcher = chokidar.watch(
        [flags.watch, path.join(configDir, KONFIG_YAML_NAME)],
        {
          ignoreInitial: true,
          followSymlinks: false,
          ignored: (testString) => {
            if (testString.includes('node_modules')) return true
            if (testString.includes('.redwood')) return true
            if (testString.includes('dist')) return true
            // idk where this is coming from, redwood?
            if (testString.includes('.watchman-cookie')) return true
            return false
          },
        }
      )
      const runOrSkip: (
        eventName?: 'add' | 'addDir' | 'change' | 'unlink' | 'unlinkDir',
        path?: string,
        stats?: fs.Stats
      ) => void = (event, path) => {
        if (isRunning) {
          if (event !== undefined && path !== undefined) {
            CliUx.ux.info(
              `DETECTED CHANGE BUT ALREADY GENERATING: ${event} at "${path}", re-generating SDKs`
            )
          }
          return
        }
        if (event !== undefined && path !== undefined) {
          CliUx.ux.info(
            `DETECTED CHANGE: ${event} at "${path}", re-generating SDKs`
          )
        }
        isRunning = true

        // Have to wait until server restarts in dev mode
        waiton({
          // set delay because chokidar will catch file change before nodemon in konfig-dash: "yarn dev" catches file change
          delay: 1000,
          resources: [
            `${getApiUrl({ mode: flags.dev ? 'dev' : 'prod' })}/healthz`,
          ],
          timeout: 60_000,
        }).then(() => {
          generateSdks()
            .then(() => {
              isRunning = false
            })
            .catch((reason) => {
              if (
                reason instanceof AxiosError &&
                reason.code === 'ECONNRESET'
              ) {
                // happens when you make a file change in the middle of generation
                CliUx.ux.info('Lost connection to API, restarting generation')
                isRunning = false
                runOrSkip(event, path)
                return
              }
              if (
                reason instanceof AxiosError &&
                reason.response?.status === 500
              ) {
                CliUx.ux.info('API had internal failure, stopping generation')
                isRunning = false
                return
              }
              if (
                reason instanceof Error &&
                reason.message.includes('Request failed with status code 500')
              ) {
                this.warn(reason)
                isRunning = false
                return
              }
              if (typeof reason === 'string') this.error(reason)
              throw Error(reason)
            })
        })
      }
      watcher.on('ready', () => {
        runOrSkip()
      })
      watcher.on('all', (event, path) => {
        CliUx.ux.debug(event, path)
        runOrSkip(event, path)
      })
    } else {
      await generateSdks()
    }
  }
}

// Renames OpenAPI Generator specific-names back to Konfig's simple language names
const renameOpenApiGeneratorNameBackToLanguage = ({
  outputDir,
}: {
  outputDir: string
}) => {
  const generatorNames: JavaGenerateApiRequestBodyType['config']['generatorName'][] =
    ['python-prior', 'typescript-axios', 'swift5', 'csharp-netcore']
  for (const name of generatorNames) {
    const dir = `${outputDir}/${name}`
    if (fs.existsSync(`${outputDir}/${name}`)) {
      if (name === 'python-prior') {
        fs.renameSync(dir, `${outputDir}/python`)
      }

      if (name === 'typescript-axios') {
        fs.renameSync(dir, `${outputDir}/typescript`)
      }

      if (name === 'swift5') {
        fs.renameSync(dir, `${outputDir}/swift`)
      }

      if (name === 'csharp-netcore') {
        fs.renameSync(dir, `${outputDir}/csharp`)
      }
    }
  }
}
/**
 * Copies files from a source path to a destination path.
 * Supports both glob pattern and exact file path as the source.
 * Handles both file path and directory path as the destination.
 * Creates the necessary directory structure for file path destinations.
 *
 * @param {string} sourcePath - The source path (can be a glob pattern or an exact file path).
 * @param {string} destinationPath - The destination path (can be a file path or a directory path).
 */
async function copyFiles({
  sourcePath,
  destinationPath,
  forKonfigIgnore,
}: {
  sourcePath: string
  destinationPath: string
  forKonfigIgnore?: {
    sourceSdkDirName: string
  }
}) {
  try {
    // Check if sourcePath is a glob pattern or an exact file path
    const isGlob = sourcePath.includes('*')
    const sourceFiles = isGlob ? await globby(sourcePath) : [sourcePath]

    // Determine if the destination is a file or directory
    const destinationIsFile = path.extname(destinationPath) !== ''

    // Ensure destination directory exists if it's a file
    if (destinationIsFile) {
      await fs.ensureDir(path.dirname(destinationPath))
    }

    // Iterate over the found source files
    for (const sourceFile of sourceFiles) {
      // Determine the destination file path
      const destinationFile = isGlob
        ? path.join(destinationPath, path.basename(sourceFile))
        : forKonfigIgnore
        ? path.join(
            destinationPath,
            sourceFile.replace(forKonfigIgnore.sourceSdkDirName, '')
          )
        : destinationPath

      // Copy the file
      await fs.copyFile(sourceFile, destinationFile)
      CliUx.ux.info(`Copied file ${sourceFile} to ${destinationFile}`)
    }
  } catch (err) {
    if (err instanceof Error) CliUx.ux.error(err)
    CliUx.ux.error(`Could not copy files: ${err}`)
  }
}

/**
 * Converts readmeSnippet file path to raw string
 */
function handleReadmeSnippet<
  C extends object & {
    readmeSnippet?: string
    asyncReadmeSnippet?: string
    readmeHeaderSnippet?: string
    readmeDescriptionSnippet?: string
  }
>({ config }: { config: C }): C {
  if (config.readmeSnippet !== undefined)
    config.readmeSnippet = fs.readFileSync(config.readmeSnippet, 'utf-8')
  if (config.readmeHeaderSnippet !== undefined)
    config.readmeHeaderSnippet = fs.readFileSync(
      config.readmeHeaderSnippet,
      'utf-8'
    )
  if (config.asyncReadmeSnippet !== undefined)
    config.asyncReadmeSnippet = fs.readFileSync(
      config.asyncReadmeSnippet,
      'utf-8'
    )
  if (config.readmeDescriptionSnippet !== undefined)
    config.readmeDescriptionSnippet = fs.readFileSync(
      config.readmeDescriptionSnippet,
      'utf-8'
    )
  return config
}

/**
 * Converts apiDocumentationAuthenticationPartial file path to raw string
 */
function handleReadmeSupportingDescriptionSnippet<
  C extends object & { readmeSupportingDescriptionSnippet?: string }
>({ config }: { config: C }): C {
  if (config.readmeSupportingDescriptionSnippet !== undefined)
    config.readmeSupportingDescriptionSnippet = fs.readFileSync(
      config.readmeSupportingDescriptionSnippet,
      'utf-8'
    )
  return config
}

/**
 * Converts apiDocumentationAuthenticationPartial file path to raw string
 */
function handleapiDocumentationAuthenticationPartialSnippet<
  C extends object & { apiDocumentationAuthenticationPartial?: string }
>({ config }: { config: C }): C {
  if (config.apiDocumentationAuthenticationPartial !== undefined)
    config.apiDocumentationAuthenticationPartial = fs.readFileSync(
      config.apiDocumentationAuthenticationPartial,
      'utf-8'
    )
  return config
}

const createTemplateFilesObject = (
  konfigFiles: KonfigYamlFilesType,
  generator: keyof KonfigYamlType['generators'],
  configDir: string
): TemplateFilesType => {
  if (konfigFiles === undefined) return
  const requestFiles: TemplateFilesType = {}
  for (const [templateFile, { destinationFilename }] of Object.entries(
    konfigFiles
  )) {
    const source = fs.readFileSync(
      `${configDir}/templates/${generator}/${templateFile}`,
      'utf-8'
    )
    requestFiles[templateFile] = { source, destinationFilename }
  }

  return requestFiles
}

const createIgnore = (dir: string) => {
  const ig = ignore()
  const ignorePaths = [
    path.join(dir, '.gitignore'),
    path.join(dir, KONFIG_IGNORE_FILE_NAME),
  ]
  for (const path of ignorePaths) {
    if (fs.existsSync(path)) ig.add(fs.readFileSync(path, 'utf-8').split('\n'))
  }

  return ig
}

const isFileIgnored = ({
  ig,
  relativePath,
}: {
  ig: Ignore
  relativePath: string
}): boolean => {
  return !(
    relativePath !== '' &&
    !ig.ignores(relativePath) &&
    !DO_NOT_DELETE_THESE_FILES.has(relativePath)
  )
}

const DO_NOT_COPY_THESE_FILES = new Set([
  'git_push.sh',
  '.gitlab-ci.yml',
  '.travis.yml',
])

const KONFIG_IGNORE_FILE_NAME = '.konfigignore'

const DO_NOT_DELETE_THESE_FILES = new Set([
  '.git',
  KONFIG_IGNORE_FILE_NAME,
  'CHANGELOG.md', // for all SDKs
  'yarn.lock', // for TypeScript SDK
  'poetry.lock', // for Python SDK
  'pubspec.lock', // for Dart SDK
])

const safelyDeleteFiles = async (
  directory: string
): Promise<{ directoryExists: boolean }> => {
  if (!fs.existsSync(directory)) return { directoryExists: false }

  const ig = createIgnore(directory)
  // Delete content of existing directory
  const files = await getFiles(directory)
  for (const absolutePath of files) {
    const relativePath = path.relative(directory, absolutePath)
    if (!isFileIgnored({ ig, relativePath }))
      fs.rmSync(absolutePath, { recursive: true, force: true })
  }
  return { directoryExists: true }
}

function constructGoGenerationRequest({
  configDir,
  goGeneratorConfig,
  initializeFlowsDirectory,
}: {
  configDir: string
  goGeneratorConfig: NonNullable<KonfigYamlType['generators']['go']>
  initializeFlowsDirectory: (generatorName: KonfigYamlGeneratorNames) => void
}) {
  const { files, ...restOfConfig } = goGeneratorConfig

  // Make sure that repoId is correct
  if (
    restOfConfig.git.repoId.includes('tree') ||
    restOfConfig.git.repoId.includes('blob')
  ) {
    CliUx.ux.error(
      `Detected go.git.repoId containing "tree" or "blob": "${restOfConfig.git.repoId}". The repoId should either point to a submodule or only includes subpath (e.g. no "tree/master" or "tree/main" in repoId). For example, if your repo is located at https://github.com/username/repo, then your repoId should be "repo" and not "repo/tree/main/subpath".`
    )
  }

  // Make sure the version does not include a "v"
  if (restOfConfig.version.startsWith('v')) {
    CliUx.ux.error(
      `go.git.version "${restOfConfig.version}" cannot start with a "v".`
    )
  }

  const requestGo: GenerateRequestBodyType['generators']['go'] = {
    files: createTemplateFilesObject(files, 'go', configDir),
    ...handleReadmeSnippet({ config: restOfConfig }),
    ...handleReadmeSupportingDescriptionSnippet({ config: restOfConfig }),
    ...handleapiDocumentationAuthenticationPartialSnippet({
      config: restOfConfig,
    }),
  }
  initializeFlowsDirectory('go')
  return requestGo
}

async function formatPythonSnippet({
  markdown,
  markdownPath,
  konfig,
}: {
  konfig: Konfig
  markdownPath: string
  markdown: string
}) {
  const pythonSnippetRegex = /\`\`\`python\r?\n([\s\S]*?)\r?\n\`\`\`/g

  // find all code snippets in the markdown string that matches typescriptSnippetRegex
  // and format them and replace the code snippets with the formatted code snippets
  try {
    const formattedMarkdown = await replaceAsync(
      markdown,
      pythonSnippetRegex,
      async (match, codeSnippet, offset) => {
        // Check if the block is preceded by a line ending with '>'
        const blockStartIndex = offset - 1
        const startOfLineIndex =
          markdown.lastIndexOf('\n', blockStartIndex - 1) + 1
        const lineBeforeBlock = markdown.substring(
          startOfLineIndex,
          blockStartIndex
        )

        if (lineBeforeBlock.endsWith('>')) {
          // If it is, we leave the match unaltered
          return match
        } else {
          // If it's not, proceed with formatting
          const { data: formattedCodeSnippet } = await konfig.sdk.formatPython(
            codeSnippet
          )
          return '```python\n' + formattedCodeSnippet + '```'
        }
      }
    )
    fs.writeFileSync(markdownPath, formattedMarkdown)
  } catch (e) {
    if (e instanceof KonfigError)
      if (typeof e.responseBody === 'string') {
        console.log(
          boxen(e.responseBody, {
            title: "Warning: Couldn't format Python code snippet",
            titleAlignment: 'center',
            borderColor: 'yellow',
          })
        )
      }
  }
}

function constructPhpGenerationRequest({
  configDir,
  phpGeneratorConfig,
  initializeFlowsDirectory,
}: {
  configDir: string
  phpGeneratorConfig: NonNullable<KonfigYamlType['generators']['php']>
  initializeFlowsDirectory: (generatorName: KonfigYamlGeneratorNames) => void
}) {
  const { files, ...restOfConfig } = phpGeneratorConfig
  const requestPhp: GenerateRequestBodyInputType['generators']['php'] = {
    files: createTemplateFilesObject(files, 'php', configDir),
    ...handleReadmeSnippet({ config: restOfConfig }),
    ...handleReadmeSupportingDescriptionSnippet({ config: restOfConfig }),
    ...handleapiDocumentationAuthenticationPartialSnippet({
      config: restOfConfig,
    }),
  }
  initializeFlowsDirectory('php')
  return requestPhp
}

function constructDartGenerationRequest({
  configDir,
  dartGeneratorConfig,
  initializeFlowsDirectory,
}: {
  configDir: string
  dartGeneratorConfig: NonNullable<KonfigYamlType['generators']['dart']>
  initializeFlowsDirectory: (generatorName: KonfigYamlGeneratorNames) => void
}) {
  const { files, ...restOfConfig } = dartGeneratorConfig

  const requestDart: GenerateRequestBodyType['generators']['dart'] = {
    files: createTemplateFilesObject(files, 'dart', configDir),
    ...handleReadmeSnippet({ config: restOfConfig }),
    ...handleReadmeSupportingDescriptionSnippet({
      config: restOfConfig,
    }),
    ...handleapiDocumentationAuthenticationPartialSnippet({
      config: restOfConfig,
    }),
  }
  initializeFlowsDirectory('dart')
  return requestDart
}

function constructJavaGenerationRequest({
  configDir,
  javaGeneratorConfig: javaGeneratorConfig,
  initializeFlowsDirectory,
}: {
  configDir: string
  javaGeneratorConfig: NonNullable<KonfigYamlType['generators']['java']>
  initializeFlowsDirectory: (generatorName: KonfigYamlGeneratorNames) => void
}) {
  const { files, ...restOfConfig } = javaGeneratorConfig

  const requestJava: GenerateRequestBodyType['generators']['java'] = {
    files: createTemplateFilesObject(files, 'java', configDir),
    ...handleReadmeSnippet({ config: restOfConfig }),
    ...handleReadmeSupportingDescriptionSnippet({
      config: restOfConfig,
    }),
    ...handleapiDocumentationAuthenticationPartialSnippet({
      config: restOfConfig,
    }),
  }
  initializeFlowsDirectory('java')
  return requestJava
}

function constructTypeScriptGenerationRequest({
  configDir,
  typescriptGeneratorConfig,
  initializeFlowsDirectory,
}: {
  configDir: string
  typescriptGeneratorConfig: NonNullable<
    KonfigYamlType['generators']['typescript']
  >
  initializeFlowsDirectory: (generatorName: KonfigYamlGeneratorNames) => void
}) {
  const { files, ...restOfConfig } = typescriptGeneratorConfig

  const requestTypescript: GenerateRequestBodyType['generators']['typescript'] =
    {
      files: createTemplateFilesObject(files, 'typescript', configDir),
      ...handleReadmeSnippet({ config: restOfConfig }),
      ...handleReadmeSupportingDescriptionSnippet({
        config: restOfConfig,
      }),
      ...handleapiDocumentationAuthenticationPartialSnippet({
        config: restOfConfig,
      }),
    }
  initializeFlowsDirectory('typescript')
  return requestTypescript
}

async function handleSubmodule({
  outputDirectory,
  configDir,
  git,
  generator,
}: {
  outputDirectory: string
  configDir: string
  git: GeneratorGitConfig
  generator: KonfigYamlGeneratorNames
}) {
  const topLevelGitRepo = simpleGit()
  if (fs.existsSync(outputDirectory)) {
    const submodule = simpleGit(outputDirectory)
    // check if "submodule" is its own repo (e.g. a submodule)
    // do this by checking its remote url and comparing it with topLevelGitRepo
    // if they are the same, then it is not a submodule
    const submoduleRemoteUrl = await submodule.listRemote(['--get-url'])
    const topLevelGitRepoRemoteUrl = await topLevelGitRepo.listRemote([
      '--get-url',
    ])
    const isSubmodule = submoduleRemoteUrl !== topLevelGitRepoRemoteUrl
    if (!isSubmodule) {
      // delete the directory as its probably not important...right?
      fs.rmSync(outputDirectory, { recursive: true, force: true })

      // "git rm" outputDirectory + "git commit" (message: "Remove directory for submodule")
      await topLevelGitRepo.raw(['rm', '-r', outputDirectory])
      await topLevelGitRepo.commit(
        `Remove directory for ${generator} SDK submodule`
      )

      CliUx.ux.action.start(`Adding git submodule at ${outputDirectory}`)
      await topLevelGitRepo.submoduleAdd(
        `https://${git.host}/${git.userId}/${git.repoId}.git`,
        outputDirectory
      )
      await topLevelGitRepo.commit(
        `Initialized git submodule for ${generator} SDK`
      )
      CliUx.ux.action.stop()
    }
  } else {
    CliUx.ux.action.start(`Adding git submodule at ${outputDirectory}`)
    await topLevelGitRepo.submoduleAdd(
      `https://${git.host}/${git.userId}/${git.repoId}.git`,
      outputDirectory
    )
    await topLevelGitRepo.commit(
      `Initialized git submodule for ${generator} SDK`
    )
    CliUx.ux.action.stop()
  }
}

async function copyGoOutput({
  flags,
  go,
  copyToOutputDirectory,
  sdkDirName,
  configDir,
}: {
  flags: {
    copyGoOutputDir?: string
    doNotCopy?: boolean
    ignoreSubmodules?: boolean
  }
  go: GenerateRequestBodyInputType['generators']['go']
  sdkDirName?: string
  copyToOutputDirectory: (input: CopyFilesInput) => Promise<void>
  configDir: string
}) {
  if (go === undefined) return
  const outputDirectory = flags.copyGoOutputDir ?? go.outputDirectory
  if (outputDirectory && !flags.doNotCopy) {
    if (
      !flags.ignoreSubmodules &&
      (await isSubmodule({ git: go.git, configDir }))
    ) {
      await handleSubmodule({
        outputDirectory: go.outputDirectory,
        configDir,
        git: go.git,
        generator: 'go',
      })
    }

    CliUx.ux.action.start(
      `Deleting contents of existing directory "${outputDirectory}"`
    )
    await safelyDeleteFiles(outputDirectory)
    CliUx.ux.action.stop()

    // Copy content of generated SDK to existing directory
    CliUx.ux.action.start(`Copying Go SDK to "${outputDirectory}"`)
    await copyToOutputDirectory({
      generator: sdkDirName ? sdkDirName : 'go',
      outputDirectory,
      generatorConfig: go,
    })
    CliUx.ux.action.stop()
  }
}

async function copyPhpOutput({
  flags,
  php,
  copyToOutputDirectory,
  sdkDirName,
  configDir,
}: {
  flags: {
    copyPHPOutputDir?: string
    doNotCopy?: boolean
    ignoreSubmodules?: boolean
  }
  php: GenerateRequestBodyInputType['generators']['php']
  sdkDirName?: string
  copyToOutputDirectory: (input: CopyFilesInput) => Promise<void>
  configDir: string
}) {
  if (php === undefined) return
  const outputDirectory = flags.copyPHPOutputDir ?? php.outputDirectory
  if (outputDirectory && !flags.doNotCopy) {
    if (!flags.ignoreSubmodules) {
      await handleSubmodule({
        outputDirectory,
        configDir,
        git: php.git,
        generator: 'php',
      })
    }
    CliUx.ux.action.start(
      `Deleting contents of existing directory "${outputDirectory}"`
    )
    await safelyDeleteFiles(outputDirectory)
    CliUx.ux.action.stop()
    // Copy content of generated SDK to existing directory
    CliUx.ux.action.start(`Copying PHP SDK to "${outputDirectory}"`)
    await copyToOutputDirectory({
      generator: sdkDirName ? sdkDirName : 'php',
      outputDirectory,
      generatorConfig: php,
    })

    // const phpGitRepo = simpleGit(outputDirectory)
    // await phpGitRepo.add('.')
    // await phpGitRepo.commit(generateConfigId)
    // await phpGitRepo.push()
    // await topLevelGitRepo.add(outputDirectory)
    // await topLevelGitRepo.commit('Generated PHP SDK', outputDirectory)

    // Copy composer.json to top-level of SDK directory since Packagist
    // see "Creating a composer.json file" here
    // https://packagist.org/about
    // CliUx.ux.info(
    //   'Copying composer.json to root directory for Packagist (see explanation https://packagist.org/about)'
    // )
    // const packageKey = `${body.generators.php.invokerPackage}\\`
    // const packageTestKey = `${body.generators.php.invokerPackage}\\Test\\`
    // const composerJsonSchema = z
    //   .object({
    //     autoload: z.object({
    //       'psr-4': z.object({
    //         [packageKey]: z.string(),
    //       }),
    //     }),
    //     'autoload-dev': z.object({
    //       'psr-4': z.object({ [packageTestKey]: z.string() }),
    //     }),
    //     readme: z.string().optional(),
    //   })
    //   .passthrough()
    // const composerJson = composerJsonSchema.parse(
    //   JSON.parse(
    //     fs.readFileSync(
    //       path.join(
    //         body.generators.php.outputDirectory,
    //         'composer.json'
    //       ),
    //       'utf-8'
    //     )
    //   )
    // )
    // composerJson.readme = `${body.generators.php.outputDirectory}/README.md`
    // composerJson.autoload['psr-4'][
    //   packageKey
    // ] = `${body.generators.php.outputDirectory}/${composerJson.autoload['psr-4'][packageKey]}`
    // composerJson['autoload-dev']['psr-4'][
    //   packageTestKey
    // ] = `${body.generators.php.outputDirectory}/${composerJson['autoload-dev']['psr-4'][packageTestKey]}`

    // fs.writeFileSync(
    //   path.join(configDir, 'composer.json'),
    //   JSON.stringify(composerJson, undefined, 2)
    // )

    CliUx.ux.action.stop()
  }
}

async function copyDartOutput({
  flags,
  dart,
  copyToOutputDirectory,
  sdkDirName,
}: {
  flags: { copyJavaOutputDir?: string; doNotCopy?: boolean }
  dart: GenerateRequestBodyInputType['generators']['dart']
  sdkDirName?: string
  copyToOutputDirectory: (input: CopyFilesInput) => Promise<void>
}) {
  if (dart === undefined) return
  const outputDirectory = dart.outputDirectory
  if (outputDirectory && !flags.doNotCopy) {
    CliUx.ux.action.start(
      `Deleting contents of existing directory "${outputDirectory}"`
    )
    await safelyDeleteFiles(outputDirectory)
    CliUx.ux.action.stop()

    // Copy content of generated SDK to existing directory
    CliUx.ux.action.start(`Copying Dart SDK to "${outputDirectory}"`)
    await copyToOutputDirectory({
      generator: sdkDirName ? sdkDirName : 'dart',
      outputDirectory,
      generatorConfig: dart,
    })
    fs.writeFileSync(path.join(outputDirectory, 'LICENSE'), generateLicense())

    // read CHANGELOG.md into variable if it exists
    const existingChangelogMarkdownPath = path.join(
      dart.outputDirectory,
      'CHANGELOG.md'
    )
    const existingChangelogMarkdown: string | undefined = fs.existsSync(
      existingChangelogMarkdownPath
    )
      ? fs.readFileSync(existingChangelogMarkdownPath, 'utf-8')
      : undefined
    const changelog = generateChangelog({
      existingChangelogMarkdown,
      config: dart,
    })
    fs.writeFileSync(path.join(outputDirectory, 'CHANGELOG.md'), changelog)

    CliUx.ux.action.stop()
  }
}

async function copyJavaOutput({
  flags,
  java,
  copyToOutputDirectory,
  sdkDirName,
}: {
  flags: { copyJavaOutputDir?: string; doNotCopy?: boolean }
  java: GenerateRequestBodyInputType['generators']['java']
  sdkDirName?: string
  copyToOutputDirectory: (input: CopyFilesInput) => Promise<void>
}) {
  if (java === undefined) return
  const outputDirectory = flags.copyJavaOutputDir ?? java.outputDirectory
  if (outputDirectory && !flags.doNotCopy) {
    CliUx.ux.action.start(
      `Deleting contents of existing directory "${outputDirectory}"`
    )
    await safelyDeleteFiles(outputDirectory)
    CliUx.ux.action.stop()

    // Copy content of generated SDK to existing directory
    CliUx.ux.action.start(`Copying Java SDK to "${outputDirectory}"`)
    await copyToOutputDirectory({
      generator: sdkDirName ? sdkDirName : 'java',
      outputDirectory,
      generatorConfig: java,
    })
    CliUx.ux.action.stop()
  }
}

async function copyTypeScriptOutput({
  flags,
  typescript,
  copyToOutputDirectory,
  sdkDirName,
}: {
  flags: { copyTypescriptOutputDir?: string; doNotCopy?: boolean }
  typescript: GenerateRequestBodyInputType['generators']['typescript']
  sdkDirName?: string
  copyToOutputDirectory: (input: CopyFilesInput) => Promise<void>
}) {
  if (typescript === undefined) return
  const outputDirectory =
    flags.copyTypescriptOutputDir ?? typescript.outputDirectory
  if ('generatorVersion' in typescript) {
    throw Error('Unsupported generator. Use generator version 1 instead.')
  }
  if (outputDirectory && !flags.doNotCopy) {
    CliUx.ux.action.start(
      `Deleting contents of existing directory "${outputDirectory}"`
    )
    await safelyDeleteFiles(outputDirectory)
    CliUx.ux.action.stop()

    CliUx.ux.action.start(`Copying Typescript SDK to "${outputDirectory}"`)
    // Copy content of generated SDK to existing directory
    await copyToOutputDirectory({
      generator: sdkDirName ? sdkDirName : 'typescript',
      outputDirectory,
      generatorConfig: typescript,
    })

    // find all files in outputdirectory that end with .md and use the "globby" package
    const markdownFiles = await globby([
      // path.join uses platform-specific path separator but globby requires forward slash
      path.join(outputDirectory, '**/*.md').replace(/\\/g, '/'),
      // write a glob to exclude the node_modules directory
      `!${path
        .join(outputDirectory, '**/node_modules/**')
        .replace(/\\/g, '/')}`,
    ])
    for (const markdownPath of markdownFiles) {
      const markdown = fs.readFileSync(markdownPath, 'utf-8')
      const typescriptSnippetRegex =
        // rewrite the following regex to not include "```" in the match
        /\`\`\`typescript\r?\n([\s\S]*?)\r?\n\`\`\`/g

      // find all code snippets in the markdown string that matches typescriptSnippetRegex
      // and format them and replace the code snippets with the formatted code snippets
      const formattedMarkdown = markdown.replace(
        typescriptSnippetRegex,
        (_, codeSnippet) => {
          const formattedCodeSnippet = prettier.format(codeSnippet, {
            parser: 'typescript',
          })
          return '```typescript\n' + formattedCodeSnippet + '```'
        }
      )
      fs.writeFileSync(markdownPath, formattedMarkdown)
    }

    // use markdown-toc to insert table of contents into markdown
    CliUx.ux.action.start('Inserting table of contents into README.md')
    insertTableOfContents({ outputDirectory })
    CliUx.ux.action.stop()

    // write .npmrc file
    let npmrcContents: string
    if (typescript.gitlab) {
      npmrcContents = `registry=https://${typescript.gitlab.domain}/api/v4/projects/${typescript.gitlab.projectId}/packages/npm/

//${typescript.gitlab.domain}/api/v4/projects/${typescript.gitlab.projectId}/packages/npm/:_authToken="\${NPM_TOKEN}"`
    } else {
      npmrcContents = `//registry.npmjs.org/:_authToken=\${NPM_TOKEN}
registry=https://registry.npmjs.org/
always-auth=true`
    }
    fs.writeFileSync(path.join(outputDirectory, '.npmrc'), npmrcContents)

    // add packageJsonScripts to generated package.json file if exists
    if (typescript.packageJsonScripts !== undefined) {
      const packageJsonPath = path.join(outputDirectory, 'package.json')
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))
      Object.assign(packageJson.scripts, typescript.packageJsonScripts)
      fs.writeFileSync(
        packageJsonPath,
        JSON.stringify(packageJson, undefined, 2)
      )
    }

    CliUx.ux.action.stop()
  }

  // Update yarn.lock file if applicable
  if (outputDirectory) {
    CliUx.ux.action.start(`Updating yarn.lock file...`)
    execa('yarn', { cwd: outputDirectory, stdio: 'inherit', shell: true })
    CliUx.ux.action.stop()
  }
}

const getFiles = async (
  dir: string,
  options?: { skipHiddenFiles: boolean }
): Promise<string[]> => {
  const subdirs = fs.readdirSync(dir)
  const files: string[][] = await Promise.all(
    subdirs.map(async (subdir) => {
      const res = path.resolve(dir, subdir)
      if (options?.skipHiddenFiles && isUnixHiddenPath(res)) return []

      // For some reason node_modules/.bin/ files do not exist but show up as
      // part of readdirSync so we have to exit early to avoid error in statSync
      if (!fs.existsSync(res)) return []

      return fs.statSync(res).isDirectory() ? getFiles(res, options) : [res]
    })
  )
  return files.flat()
}

type CopyFilesInput = {
  generator: keyof KonfigYamlType['generators'] | string
  outputDirectory: string
  generatorConfig: { copyFiles?: CopyFilesType }
  init?: boolean
}

/**
 *
 * Checks whether a path starts with or contains a hidden file or a folder.
 * @param path - The path of the file that needs to be validated.
 * @returns - `true` if the source is blacklisted and otherwise `false`.
 */
const isUnixHiddenPath = (path: string) => {
  return /(^|\/)\.[^./]/g.test(path)
}
