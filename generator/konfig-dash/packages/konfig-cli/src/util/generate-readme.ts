import { CliUx } from '@oclif/core'
import {
  KonfigYamlAdditionalGeneratorConfig,
  KonfigYamlGeneratorConfig,
  KonfigYamlType,
} from 'konfig-lib'
import { getDefaultBranch } from './get-default-branch'
import { getGitRepositoryName } from './get-git-repository-name'

export function generateReadme({
  konfigYaml,
}: {
  konfigYaml: KonfigYamlType
}): string {
  const defaultBranch = getDefaultBranch()
  CliUx.ux.debug(`Default branch: ${defaultBranch}`)
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
    packageManagerUrl: ReturnType<typeof getPublishedPackageUrl>
  }[] = generatorConfigs
    .filter(
      ([_generator, config]) => !('disabled' in config) || !config.disabled
    )
    .map(([generatorName, config]) => {
      const version = config.version
      const generator: string =
        'generator' in config
          ? (config as KonfigYamlAdditionalGeneratorConfig).generator
          : generatorName
      const sourceUrl =
        generatorName === 'go'
          ? `https://${config.git.host}/${config.git.userId}/${
              config.git.repoId.split('/')[0]
            }/tree/${defaultBranch}/${config.outputDirectory}`
          : `https://${config.git.host}/${config.git.userId}/${config.git.repoId}`
      return {
        language: generatorNameAsDisplayName({
          generatorName: generator,
        }),
        version,
        documentationUrl:
          generatorName === 'php' || config.git.host === 'gitlab.com'
            ? sourceUrl
            : `${sourceUrl}/README.md`,
        sourceUrl,
        packageManagerUrl: getPublishedPackageUrl({
          generatorName: generator,
          generatorConfig: config,
          konfigYaml,
        }),
      }
    })

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
          `[Documentation](${documentationUrl})`,
          `[Source](${sourceUrl})`,
        ].join('|')}|`
      }
    )
    .join('\n')
  return `# ${name}\n\n|Language|Version|Package Manager|Documentation|Source|\n|-|-|-|-|-|\n${languageSection}


## How to regenerate SDKs

1. Install [Konfig's CLI](https://www.npmjs.com/package/konfig-cli).

\`\`\`bash
❯ npm install -g konfig-cli
\`\`\`

2. Signup for an account https://dash.konfigthis.com/signup.

3. Login through the CLI with \`konfig login\`

\`\`\`bash
❯ konfig login
Logging into https://api.konfigthis.com
Email: dylan@konfigthis.com
Password: **************
Successfully logged in as dylan@konfigthis.com
\`\`\`

4. Generate SDKs with \`konfig generate\`

### [Documentation](https://konfigthis.com/docs)
`
}

export function getPublishedPackageUrl({
  generatorName,
  generatorConfig,
  konfigYaml,
}: {
  generatorName: string
  generatorConfig:
    | KonfigYamlAdditionalGeneratorConfig
    | KonfigYamlGeneratorConfig
  konfigYaml: KonfigYamlType
}): { packageManagerName: string; url: string } {
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
      return {
        url: `https://pkg.go.dev/github.com/${config.git.userId}/${config.git.repoId}`,
        packageManagerName: 'Go Packages',
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
        url: `https://pypi.org/project/${config.projectName}/${config.version}`,
        packageManagerName: 'PyPI',
      }
    case 'typescript':
      config = konfigYaml.generators.typescript
      if (config === undefined) throw Error('Config undefined')
      let version = config.version

      // 0.4.0a1 gets converted to 0.4.0-a1 on npm
      // this edge case was surfaced when publishing for humanloop
      if (version.includes('a')) version = version.replace(/a/, '-a')

      // We have to use "generatorConfig" to support "additionalGenerators"
      if ('gitlab' in generatorConfig && generatorConfig.gitlab !== undefined)
        return {
          url: `https://${generatorConfig.git.host}/${generatorConfig.git.userId}/${generatorConfig.git.repoId}/-/packages/`,
          packageManagerName: 'GitLab',
        }

      return {
        url: `https://www.npmjs.com/package/${config.npmName}/v/${version}`,
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
      config = konfigYaml.generators.php
      if (config === undefined) throw Error('Config undefined')
      return {
        url: `https://packagist.org/packages/konfig/${config.packageName}#${config.version}`,
        packageManagerName: 'Packagist',
      }
    case 'swift':
      config = konfigYaml.generators.swift
      if (config === undefined) throw Error('Config undefined')
      return {
        url: `https://cocoapods.org/pods/${config.projectName}`,
        packageManagerName: 'CocoaPods',
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

export function generatorNameAsDisplayName({
  generatorName,
}: {
  generatorName: string
}) {
  switch (generatorName) {
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
      return 'PHP'
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
