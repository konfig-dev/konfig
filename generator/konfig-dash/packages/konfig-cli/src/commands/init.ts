import { CliUx, Command, Flags } from '@oclif/core'
import * as inquirer from 'inquirer'
import * as fs from 'fs-extra'
import {
  getKonfigLintWorkflowPath,
  KonfigYamlInputType,
  KonfigYamlType,
} from 'konfig-lib'
import { getSessionToken } from '../util/get-session-token'
import { stringify, parse } from 'yaml'
import merge from 'lodash.merge'
import * as path from 'path'
import axios from 'axios'
import equals from 'deep-equal'
import findVersions from 'find-versions'
import { findNearestGitDirectory } from '../util/find-nearest-git-directory'
import Handlebars from 'handlebars'
import { konfigLintYamlTemplate } from '../util/konfig-lint-yaml-template'
import { getKonfigFolder, KONFIG_FOLDER_NAME } from '../util/get-konfig-folder'
import { KONFIG_YAML_NAME } from 'konfig-lib'
import camelcase from 'camelcase'
import { generateKonfigYamlString } from '../util/generate-konfig-yaml-string'
import { parseKonfigYaml } from '../util/parse-konfig-yaml'

interface Answers {
  languages: (keyof KonfigYamlType['generators'])[]
  domain?: string
  sdkName: string
  relativePathToSpec: string
  logoPath?: string
  gitUserId: string
  gitRepoName: string
}

interface GitHubActionAnswers {
  productionBranch: string
  relativePathToSpec: string
}

export default class Init extends Command {
  static description = 'Initialize a Konfig repository'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    dev: Flags.boolean({ char: 'd', hidden: true }),
    settings: Flags.boolean({ name: 'settings', char: 's' }),
    githubAction: Flags.boolean({ char: 'a' }),
    overwrite: Flags.boolean({ char: 'f' }),
    target: Flags.string({ char: 't' }),
  }

  public async run(): Promise<void> {
    const { flags } = await this.parse(Init)

    // const sessionToken = getSessionToken(flags.dev)
    // this.debug('sessionToken:', sessionToken)

    // if (sessionToken === null) {
    //   console.error('Login with "konfig login"')
    //   return
    // }

    const root = process.cwd()
    const fromRoot = (relativePath: string) => {
      return path.join(root, relativePath)
    }

    const isInputExistingRelativeFilePathFromRoot = (input: string) => {
      const absolutePath = path.join(root, input)
      if (!fs.existsSync(absolutePath))
        return `Spec does not exist at ${absolutePath}`
      if (fs.lstatSync(absolutePath).isDirectory())
        return `${absolutePath} is a directory, please provide path to file`
      return true
    }

    const relativePathToSpecQuestion: inquirer.Question = {
      name: 'relativePathToSpec',
      message:
        'What is the relative path to your spec? (ie. "<CURRENT_DIRECTORY>/path/to/api.yaml")',
      type: 'input',
      validate: isInputExistingRelativeFilePathFromRoot,
    }

    if (flags.githubAction) {
      this.error('Not Implemented')
      // const answers = await inquirer.prompt<GitHubActionAnswers>([
      //   {
      //     name: 'productionBranch',
      //     message:
      //       'What is the name of your main branch? (ex. "main" or "master")',
      //     type: 'input',
      //     validate(input: string) {
      //       return input.length !== 0 || 'Must provide a branch name'
      //     },
      //   },
      //   relativePathToSpecQuestion,
      // ])
      // CliUx.ux.action.start('Setting up GitHub Action for linting OpenAPI Spec')
      // const { workflowDir, konfgLintWorkflowPath } = getKonfigLintWorkflowPath({
      //   repoDir: root,
      // })
      // const template = Handlebars.compile(konfigLintYamlTemplate)
      // fs.ensureDirSync(workflowDir)
      // fs.writeFileSync(konfgLintWorkflowPath, template(answers))
      // return
    }

    if (flags.target) {
      process.chdir(flags.target)
    }

    CliUx.ux.action.start("Downloading Konfig's lint rules")
    let rulesetVersion: string | undefined
    const ruleset = (
      await axios.get<string>(
        'https://unpkg.com/konfig-spectral-ruleset@latest',
        {
          beforeRedirect: (options) => {
            const path = options['path']
            const match = findVersions(path, { loose: true })
            if (match.length === 0) return
            rulesetVersion = match[0]
          },
        }
      )
    ).data
    if (rulesetVersion !== undefined)
      CliUx.ux.info(
        `Downloaded version ${rulesetVersion} of https://www.npmjs.com/package/konfig-spectral-ruleset`
      )
    else CliUx.ux.info(`Could not detect ruleset version`)
    CliUx.ux.action.stop()
    CliUx.ux.action.start('Setting up Spectral')
    const konfigFolder = getKonfigFolder({ dir: root })
    const vscodeFolder = fromRoot('.vscode')
    const fromKonfigFolder = (relativePath: string) => {
      return path.join(konfigFolder, relativePath)
    }
    const fromVscodeFolder = (relativePath: string) => {
      return path.join(vscodeFolder, relativePath)
    }
    fs.ensureDirSync(konfigFolder)
    fs.ensureDirSync(vscodeFolder)
    mergeWithExistingObjectAndWrite({
      path: fromRoot('.spectral.yaml'),
      json: {
        extends: [`${KONFIG_FOLDER_NAME}/ruleset.js`],
      },
      yaml: true,
    })
    fs.writeFileSync(fromKonfigFolder('ruleset.js'), ruleset)
    let konfigYaml: KonfigYamlType | null = null
    try {
      konfigYaml = parseKonfigYaml({ configDir: root }).parsedKonfigYaml
    } catch (e) {
      this.debug('Could not find konfig.yaml')
    }
    if (rulesetVersion)
      fs.writeFileSync(fromKonfigFolder('ruleset-version'), rulesetVersion)
    mergeWithExistingObjectAndWrite({
      path: fromVscodeFolder('extensions.json'),
      json: {
        recommendations: [
          'stoplight.spectral',
          'redhat.vscode-yaml',
          'csharpier.csharpier-vscode',
        ],
      },
    })
    CliUx.ux.action.stop()
    CliUx.ux.action.start('Setting up VScode settings.json')
    const pythonOutputDirectory =
      konfigYaml !== null &&
      konfigYaml.generators.python?.outputDirectory !== undefined
        ? konfigYaml.generators.python.outputDirectory
        : 'python'
    mergeWithExistingObjectAndWrite({
      path: fromVscodeFolder('settings.json'),
      json: {
        'spectral.enable': true,
        'files.associations': {
          '.konfigignore': 'ignore',
        },
        'python.testing.pytestArgs': [
          pythonOutputDirectory,
          '-o',
          `cache_dir=${pythonOutputDirectory}/.pytest_cache`,
        ],
        'python.testing.unittestEnabled': false,
        'python.testing.pytestEnabled': true,
        'dotnet-test-explorer.testProjectPath': '**/*.sln',
        '[python]': {
          'editor.defaultFormatter': 'ms-python.black-formatter',
          'editor.formatOnSave': true,
        },
        'black-formatter.importStrategy': 'fromEnvironment',
        'python.formatting.provider': 'none',
        'python.analysis.typeCheckingMode': 'basic',
        'python.testing.unittestArgs': [
          '-v',
          '-s',
          `./${pythonOutputDirectory}`,
          '-p',
          'test_*.py',
        ],
        'java.compile.nullAnalysis.mode': 'automatic',
        'ruby.useBundler': true, //run non-lint commands with bundle exec
        'ruby.useLanguageServer': true, // use the internal language server (see below)
        'ruby.intellisense': 'rubyLocate',
        'ruby.lint': {
          rubocop: {
            useBundler: true, // enable rubocop via bundler
          },
        },
        'ruby.format': 'rubocop', // use rubocop for formatting
        '[csharp]': {
          'editor.formatOnSave': true,
          'editor.defaultFormatter': 'csharpier.csharpier-vscode',
        },
      },
    })
    CliUx.ux.action.stop()
    if (flags.settings) return

    const konfigYamlPath = fromRoot(KONFIG_YAML_NAME)
    if (fs.existsSync(konfigYamlPath) && !flags.overwrite) {
      CliUx.ux.info(`${KONFIG_YAML_NAME} already exists, exiting`)
      return
    }

    const langs = [
      { name: 'Java', checked: true, value: 'java' },
      { name: 'Ruby', checked: true, value: 'ruby' },
      { name: 'Python', checked: true, value: 'python' },
      { name: 'TypeScript', checked: true, value: 'typescript' },
      { name: 'C#', checked: true, value: 'csharp' },
      { name: 'Swift', checked: true, value: 'swift' },
      { name: 'Objective-C', checked: true, value: 'objc' },
      { name: 'Kotlin', checked: true, value: 'kotlin' },
      { name: 'Go', checked: true, value: 'go' },
      { name: 'PHP', checked: true, value: 'php' },
    ]

    const answers = await inquirer.prompt<Answers>([
      {
        name: 'languages',
        message: 'Select languages to generate SDKs for:',
        type: 'checkbox',
        pageSize: langs.length,
        choices: langs,
        validate: (input) =>
          input.length > 0 ||
          'At least one language must be selected to generate',
      },
      {
        name: 'domain',
        message: 'What is your domain? (ex. acme.com)',
        type: 'input',
        validate: (input: string) =>
          /^[\dA-Za-z][\dA-Za-z-]{1,61}[\dA-Za-z](?:\.[A-Za-z]{2,})+$/.test(
            input
          ) || 'Must be a valid domain name',
        when: (answers) =>
          answers.languages.includes('objc') ||
          answers.languages.includes('java') ||
          answers.languages.includes('swift'),
      },
      {
        name: 'sdkName',
        message:
          'What is the SDK package name? Use hyphens to separate words (ex. acme-web)',
        type: 'input',
        default: (answers: Answers) =>
          answers.domain
            ? answers.domain.split('.')[0].replace(/-/g, '')
            : undefined,
        validate: (input: string) => {
          if (input.includes(' ')) return 'Name must not include space'
          return input.length > 0 || 'Name must be at least 1 character'
        },
      },
      {
        name: 'gitUserId',
        message: 'What is your Git user ID?',
        type: 'input',
      },
      {
        name: 'gitRepoName',
        message: 'What is your Git repository name?',
        type: 'input',
      },
      {
        name: 'logoPath',
        message:
          'What is the relative path to your logo image? (ie. "<CURRENT_DIRECTORY>/path/to/logo.png")',
        type: 'input',
        validate: isInputExistingRelativeFilePathFromRoot,
        when: (answers) => answers.languages.includes('csharp'),
      },
      relativePathToSpecQuestion,
    ])
    const generators: KonfigYamlInputType['generators'] = {}
    for (const lang of answers.languages) {
      if (lang === 'java') {
        if (answers.domain === undefined) {
          console.error("Expected 'domain' to be defined")
          return
        }

        generators.java = {
          version: '1.0.0',
          groupId: answers.domain.split('.').reverse().join('.'),
          artifactId: `${answers.sdkName.toLowerCase()}-java-sdk`,
          clientName: camelcase(answers.sdkName, { pascalCase: true }),
          outputDirectory: 'java',
          git: {
            userId: answers.gitUserId,
            repoId: `${answers.gitRepoName}/tree/main/java`,
          },
        }
      }

      if (lang === 'ruby') {
        generators.ruby = {
          version: '1.0.0',
          moduleName: camelcase(answers.sdkName, {
            pascalCase: true,
          }),
          gemName: answers.sdkName.toLowerCase(),
          outputDirectory: 'ruby',
          git: {
            userId: answers.gitUserId,
            repoId: `${answers.gitRepoName}/tree/main/ruby`,
          },
        }
      }

      if (lang === 'android') {
        if (answers.domain === undefined) {
          console.error("Expected 'domain' to be defined")
          return
        }

        generators.java = {
          version: '1.0.0',
          groupId: answers.domain.split('.').reverse().join('.'),
          artifactId: `${answers.sdkName.toLowerCase()}-android-sdk`,
          clientName: camelcase(answers.sdkName, { pascalCase: true }),
          outputDirectory: 'android',
          git: {
            userId: answers.gitUserId,
            repoId: `${answers.gitRepoName}/tree/main/android`,
          },
        }
      }

      if (lang === 'python') {
        generators.python = {
          version: '1.0.0',
          packageName: `${answers.sdkName
            .toLowerCase()
            .replaceAll('-', '_')}_client`,
          projectName: `${answers.sdkName.toLowerCase()}-python-sdk`,
          outputDirectory: 'python',
          clientName: camelcase(answers.sdkName, { pascalCase: true }),
          git: {
            userId: answers.gitUserId,
            repoId: `${answers.gitRepoName}/tree/main/python`,
          },
        }
      }

      if (lang === 'typescript') {
        generators.typescript = {
          version: '1.0.0',
          npmName: `${answers.sdkName.toLowerCase()}-typescript-sdk`,
          outputDirectory: 'typescript',
          clientName: camelcase(answers.sdkName, { pascalCase: true }),
          git: {
            userId: answers.gitUserId,
            repoId: `${answers.gitRepoName}/tree/main/typescript`,
          },
        }
      }

      if (lang === 'csharp' && answers.logoPath) {
        generators.csharp = {
          version: '1.0.0',
          packageName: `${camelcase(answers.sdkName, {
            pascalCase: true,
          })}.Net`,
          clientName: camelcase(answers.sdkName, { pascalCase: true }),
          outputDirectory: 'csharp',
          logoPath: answers.logoPath,
          git: {
            userId: answers.gitUserId,
            repoId: `${answers.gitRepoName}/tree/main/csharp`,
          },
        }
      }

      if (lang === 'php') {
        generators.php = {
          version: '1.0.0',
          packageName: `${answers.sdkName.toLowerCase()}-php`,
          outputDirectory: 'php',
          invokerPackage: camelcase(answers.sdkName, { pascalCase: true }),
          git: {
            userId: answers.gitUserId,
            repoId: `${answers.gitRepoName}/tree/main/php`,
          },
        }
      }

      if (lang === 'go') {
        generators.go = {
          version: '1.0.0',
          packageName: `${answers.sdkName.replaceAll('-', '')}`,
          outputDirectory: 'go',
          git: {
            userId: answers.gitUserId,
            repoId: `${answers.gitRepoName}/go`,
          },
        }
      }

      if (lang === 'kotlin') {
        if (answers.domain === undefined) {
          console.error("Expected 'domain' to be defined")
          return
        }

        generators.kotlin = {
          version: '1.0.0',
          groupId: groupId(answers.domain),
          artifactId: `${answers.sdkName}-kotlin-sdk`,
          outputDirectory: 'kotlin',
          git: {
            userId: answers.gitUserId,
            repoId: `${answers.gitRepoName}/tree/main/kotlin`,
          },
        }
      }

      if (lang === 'objc') {
        if (answers.domain === undefined) {
          console.error("Expected 'domain' to be defined")
          return
        }

        generators.objc = {
          version: '1.0.0',
          podName: `${camelcase(answers.sdkName, { pascalCase: true })}Client`,
          authorName: answers.domain,
          authorEmail: `engineering@${answers.domain}`,
          classPrefix: abbreviate(answers.sdkName),
          outputDirectory: 'objc',
          git: {
            userId: answers.gitUserId,
            repoId: `${answers.gitRepoName}/tree/main/objc`,
          },
        }
      }

      if (lang === 'swift') {
        if (answers.domain === undefined) {
          console.error("Expected 'domain' to be defined")
          return
        }

        generators.swift = {
          version: '1.0.0',
          projectName: camelcase(answers.sdkName, { pascalCase: true }),
          podAuthors: answers.domain,
          outputDirectory: 'swift',
          git: {
            userId: answers.gitUserId,
            repoId: `${answers.gitRepoName}/tree/main/swift`,
          },
        }
      }
    }

    const konfig: KonfigYamlInputType = {
      outputDirectory: `/tmp/${answers.sdkName}-sdks-out`,
      specPath: answers.relativePathToSpec,
      generators,
    }
    fs.writeFileSync(konfigYamlPath, generateKonfigYamlString(konfig))
  }
}

function groupId(str: string) {
  return str.split('.').reverse().join('.')
}

function abbreviate(str: string) {
  return onlyUpperCase(toTitleCase(str))
}

function onlyUpperCase(str: string) {
  return str.replace(/[^A-Z]/g, '')
}

function toTitleCase(str: string) {
  return str.replace(/\w\S*/g, function (txt: string) {
    return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
  })
}

function mergeWithExistingObjectAndWrite({
  path,
  json,
  yaml,
}: {
  path: string
  json: Record<string, unknown>
  yaml?: boolean
}): void {
  const existingJson = fs.existsSync(path)
    ? yaml
      ? parse(fs.readFileSync(path, 'utf-8'))
      : fs.readJSONSync(path)
    : {}
  const merged = equals(existingJson, json) ? json : merge(json, existingJson)
  const stringified = yaml
    ? stringify(merged)
    : JSON.stringify(merged, undefined, 2)
  fs.writeFileSync(path, stringified)
}
