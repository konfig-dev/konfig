import { CliUx } from '@oclif/core'
import {
  KonfigYamlAdditionalGeneratorConfig,
  KonfigYamlGeneratorConfig,
  KonfigYamlGeneratorNames,
  KonfigYamlType,
} from 'konfig-lib'
import { getDefaultBranch } from './get-default-branch'
import { getGitRepositoryName } from './get-git-repository-name'
import { isSubmodule } from './is-submodule'
import { UnwrapPromise } from './unwrap-promise'
import { getSdkDefaultBranch } from './get-sdk-default-branch'
import * as fs from 'fs'

export async function generateReadme({
  konfigYaml,
}: {
  konfigYaml: KonfigYamlType
}): Promise<string> {
  const generatorConfigs = [
    ...Object.entries(konfigYaml.generators),
    ...(konfigYaml.additionalGenerators
      ? Object.entries(konfigYaml.additionalGenerators)
      : []),
  ]
  const languages: {
    language: string
    version: string
    documentationUrl: string
    sourceUrl: string
    packageManagerUrl: UnwrapPromise<ReturnType<typeof getPublishedPackageUrl>>
  }[] = await Promise.all(
    generatorConfigs
      .filter(
        ([_generator, config]) => !('disabled' in config) || !config.disabled
      )
      .map(async ([generatorName, config]) => {
        const version = config.version
        const generator: string =
          'generator' in config
            ? (config as KonfigYamlAdditionalGeneratorConfig).generator
            : generatorName
        const generatorIsInSubmodule = await isSubmodule({ 
          git: config.git,
          configDir: process.cwd(),
          directory: config.outputDirectory,
        })
        // If the generator is in a submodule, the source URL should not include the output directory
        const sourceUrlSuffix = generatorIsInSubmodule ? '' : `/${config.outputDirectory}`
        const sourceUrl = `https://${config.git.host}/${config.git.userId}/${config.git.repoName}/tree/HEAD${sourceUrlSuffix}`
        return {
          language: generatorNameAsDisplayName({
            generatorConfig: config,
          }),
          version,
          documentationUrl: await getDocumentationUrl({
            generator: generator as KonfigYamlGeneratorNames,
            sourceUrl,
            generatorConfig: config,
          }),
          sourceUrl,
          packageManagerUrl: await getPublishedPackageUrl({
            generatorName: generator,
            generatorConfig: config,
            konfigYaml,
          }),
        }
      })
  )

  const name = getGitRepositoryName()
  const languageSection = languages
    .map(
      ({
        language,
        version,
        sourceUrl,
        documentationUrl,
        packageManagerUrl: { url: packageManagerUrl, packageManagerName },
      }): string => {
        return `|${[
          `${language}`,
          version,
          `[${packageManagerName}](${packageManagerUrl})`,
          `[README](${sourceUrl}#readme)`,
          `[Source](${sourceUrl})`,
        ].join('|')}|`
      }
    )
    .join('\n')
  const table = `|Language|Version|Package Manager|README|Source|\n|-|-|-|-|-|\n${languageSection}`
  if (konfigYaml.overrideTopLevelReadme) {
    const readme = await overrideReadme(konfigYaml.overrideTopLevelReadme)
    return readme.replace("<!-- TABLE -->", table)
  }
  return `# ${name}\n\n${table}`
}

async function overrideReadme(filePath: string): Promise<string> {
  const readme = fs.readFileSync(filePath).toString()
  return readme
}

export async function getDocumentationUrl({
  generator,
  sourceUrl,
  generatorConfig,
}: {
  generator: KonfigYamlGeneratorNames
  sourceUrl: string
  generatorConfig:
    | KonfigYamlAdditionalGeneratorConfig
    | KonfigYamlGeneratorConfig
}): Promise<string> {
  const generatorIsInSubmodule = await isSubmodule({
    git: generatorConfig.git,
    configDir: process.cwd(),
    directory: generatorConfig.outputDirectory,
  })
  const defaultBranch = await getSdkDefaultBranch({
    git: generatorConfig.git,
    outputDirectory: generatorConfig.outputDirectory,
  })
  CliUx.ux.debug(`Default branch: ${defaultBranch}`)
  const docUrl = generatorIsInSubmodule
    ? `${sourceUrl}/blob/${defaultBranch ?? 'main'}/README.md` // use "main" if defaultBranch was not able to be computed
    : `${sourceUrl}/README.md` // convention for config is for repoId to include the subpath to SDK so just add /README.md
  return docUrl
}

export async function getPublishedPackageUrl({
  generatorName,
  generatorConfig,
  konfigYaml,
}: {
  generatorName: string
  generatorConfig:
    | KonfigYamlAdditionalGeneratorConfig
    | KonfigYamlGeneratorConfig
  konfigYaml: KonfigYamlType
}): Promise<{ packageManagerName: string; url: string }> {
  let config
  switch (generatorName) {
    case 'csharp':
      config = konfigYaml.generators.csharp
      if (config === undefined) throw Error('Config undefined')
      return {
        url: `https://nuget.org/packages/${config.packageName}/${config.version}`,
        packageManagerName: 'NuGet',
      }
    case 'objc':
      config = konfigYaml.generators.objc
      if (config === undefined) throw Error('Config undefined')
      return {
        url: `https://cocoapods.org/pods/${config.podName}`,
        packageManagerName: 'CocoaPods',
      }
    case 'go':
      config = konfigYaml.generators.go
      if (config === undefined) throw Error('Config undefined')

      if (
        await isSubmodule({
          git: generatorConfig.git,
          directory: generatorConfig.outputDirectory,
          configDir: process.cwd(),
        })
      ) {
        return {
          url: `https://${generatorConfig.git.host}/${generatorConfig.git.userId}/${generatorConfig.git.repoId}`,
          packageManagerName: generatorConfig.git.host,
        }
      }

      return {
        url: `https://pkg.go.dev/github.com/${config.git.userId}/${
          config.git.repoId.split('/')[0]
        }/${config.outputDirectory}`,
        packageManagerName: 'pkg.go.dev',
      }
    case 'java':
      config = konfigYaml.generators.java
      if (config === undefined) throw Error('Config undefined')

      // We have to use "generatorConfig" to support "additionalGenerators"
      if ('gitlab' in generatorConfig && generatorConfig.gitlab !== undefined)
        return {
          url: `https://${generatorConfig.git.host}/${generatorConfig.git.userId}/${generatorConfig.git.repoId}/-/packages/`,
          packageManagerName: 'GitLab',
        }

      return {
        url: `https://central.sonatype.com/artifact/${config.groupId}/${config.artifactId}/${config.version}`,
        packageManagerName: 'Maven Central',
      }
    case 'android':
      config = konfigYaml.generators.android
      if (config === undefined) throw Error('Config undefined')
      return {
        url: `https://search.maven.org/artifact/${config.groupId}/${config.artifactId}/${config.version}/jar`,
        packageManagerName: 'Maven Central',
      }
    case 'python':
      config = konfigYaml.generators.python
      if (config === undefined) throw Error('Config undefined')
      return {
        url: generatePyPiPackageUrl({
          packageName: config.projectName,
          version: config.version,
        }),
        packageManagerName: 'PyPI',
      }
    case 'typescript':
      config = konfigYaml.generators.typescript
      if (config === undefined) throw Error('Config undefined')
      let version = generateNpmVersion({ version: config.version })

      // We have to use "generatorConfig" to support "additionalGenerators"
      if ('gitlab' in generatorConfig && generatorConfig.gitlab !== undefined)
        return {
          url: `https://${generatorConfig.git.host}/${generatorConfig.git.userId}/${generatorConfig.git.repoId}/-/packages/`,
          packageManagerName: 'GitLab',
        }

      return {
        url: generateNpmPackageUrl({ npmName: config.npmName, version }),
        packageManagerName: 'npm',
      }
    case 'kotlin':
      config = konfigYaml.generators.kotlin
      if (config === undefined) throw Error('Config undefined')
      return {
        url: `https://search.maven.org/artifact/${config.groupId}/${config.artifactId}/${config.version}/jar`,
        packageManagerName: 'Maven Central',
      }
    case 'php':
      if (!('packageName' in generatorConfig))
        throw Error(`Unexpected value for PHP configuration`)
      if (generatorConfig === undefined) throw Error('Config undefined')
      return {
        url: `https://packagist.org/packages/konfig/${generatorConfig.packageName}#${generatorConfig.version}`,
        packageManagerName: 'Packagist',
      }
    case 'swift':
      config = konfigYaml.generators.swift
      if (config === undefined) throw Error('Config undefined')
      return {
        url: `https://cocoapods.org/pods/${config.projectName}`,
        packageManagerName: 'CocoaPods',
      }
    case 'dart':
      config = konfigYaml.generators.dart
      if (config === undefined) throw Error('Config undefined')
      return {
        url: `https://pub.dev/packages/${config.pubName}/versions/${config.version}`,
        packageManagerName: 'pub.dev',
      }
    case 'ruby':
      config = konfigYaml.generators.ruby
      if (config === undefined) throw Error('Config undefined')
      return {
        url: `https://rubygems.org/gems/${config.gemName}/versions/${config.version}`,
        packageManagerName: 'RubyGems',
      }
  }
  throw Error(`Unexpected generator name: ${generatorName}`)
}

export function generatePyPiPackageUrl({
  packageName,
  version,
}: {
  packageName: string
  version: string
}) {
  return `https://pypi.org/project/${packageName}/${version}`
}

export function generateNpmVersion({ version }: { version: string }) {
  // 0.4.0a1 gets converted to 0.4.0-a1 on npm
  // this edge case was surfaced when publishing for humanloop
  if (/^\d+\.\d+\.\d+a/.test(version)) return version.replace(/a/, '-a')
  return version
}

export function generateNpmPackageUrl({
  npmName,
  version,
}: {
  npmName: string
  version: string
}) {
  return `https://www.npmjs.com/package/${npmName}/v/${version}`
}

export function generatorNameAsDisplayName({
  generatorConfig,
}: {
  generatorConfig:
    | KonfigYamlGeneratorConfig
    | KonfigYamlAdditionalGeneratorConfig
}) {
  const generatorName = generatorConfig.language
  switch (generatorName) {
    case 'dart':
      return 'Dart'
    case 'csharp':
      return 'C#'
    case 'objc':
      return 'Objective-C'
    case 'go':
      return 'Go'
    case 'java':
      return 'Java'
    case 'python':
      return 'Python'
    case 'php':
      if (generatorConfig.supportPhp7) return 'PHP (7.0+)'
      return 'PHP (8.0+)'
    case 'ruby':
      return 'Ruby'
    case 'swift':
      return 'Swift'
    case 'typescript':
      return 'TypeScript'
    case 'kotlin':
      return 'Kotlin'
    case 'android':
      return 'Android (Java)'
  }
  throw Error(`Unexpected generator name: ${generatorName}`)
}
