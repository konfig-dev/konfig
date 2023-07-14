import { z } from './zod'

import { KonfigYamlCommon } from './KonfigYamlCommon'
import { KonfigYamlFiles } from './KonfigYamlFiles'
import { testConfig } from './TestConfig'
import path from 'path'

const clientState = z
  .string()
  .array()
  .optional()
  .describe(
    'A list of stateful properties generated into the SDK that can be used in custom implementation hooks. This is useful when you need state in the SDK that is not described in the OpenAPI Specification such as a key used for request signing.'
  )

const javaGroupId = z
  .string()
  .describe(
    `Uniquely identifies your JVM-based project (ex. "com.acme"). By default we publish packages under Konfig's group id of "com.konfigthis". If you would like to publish to your own group ID then create a Sonatype account (https://central.sonatype.org/publish/publish-guide/#initial-setup) and claim your group ID and add "dphuang2" to the list of users that can publish to your group ID.`
  )

export const javaConfig = z.object({
  groupId: javaGroupId,
  packageName: z.string().describe('acme').optional(),
  artifactId: z.string().describe('acme-java-sdk'),
  removeKonfigBranding: z.boolean().optional(),
  clientName: z.string(),
  clientState,
  toStringReturnsJson: z
    .boolean()
    .optional()
    .describe(
      "Modify the behavior of toString() for generated schema classes to return a parsable JSON string as opposed to a string representation of the object's properties. This could be useful when you want to log the contents of a schema class without having to manually serialize it to JSON."
    ),
})

export const androidConfig = z.object({
  groupId: javaGroupId,
  packageName: z.string().describe('acme').optional(),
  artifactId: z.string().describe('ascme-java-sdk'),
})

export const kotlinConfig = z.object({
  groupId: z.string().describe('com.acme'),
  artifactId: z.string().describe('acme-kotlin-sdk'),
})

export const rubyConfig = z.object({
  moduleName: z.string(),
  gemName: z.string(),
  clientState,
})

export const goConfig = z.object({
  packageName: z
    .string()
    .describe('acme')
    .refine(
      (name) => !name.includes('-'),
      `Go package names can't contain the hypen character "-" (https://go.dev/ref/spec#identifier)`
    )
    .refine(
      (name) => name.toLowerCase() === name,

      `By convention, packages are given lower case, single-word names; there should be no need for underscores or mixedCaps (https://go.dev/doc/effective_go#package-names)`
    ),
})

export const objcConfig = z.object({
  podName: z.string().describe('AcmeClient'),
  classPrefix: z.string().describe('A'),
  authorName: z.string().describe('acme.com'),
  authorEmail: z.string().describe('engineering@acme.com'),
})

export const csharpConfig = z.object({
  logoPath: z
    .string()
    .refine((logoPath) => logoPath.endsWith('.png'), {
      message: 'Logo file must a .png file',
    })
    .describe(
      'The path to a logo image that is copied to the generated C# SDK to be used as an image on https://nuget.org. This is required and important for branding your SDK.'
    ),
  packageName: z
    .string()
    .describe(
      'The name of this package that shows up on https://nuget.org (e.g. "Acme.Net")'
    ),
  clientState,
})

export const topLevelOperationsOrderedSchema = z
  .object({ operationId: z.string(), methodName: z.string() })
  .array()
  .refine((arr) => {
    // make sure there are no objects with the same operationId
    const operationIds = arr.map((item) => item.operationId)
    return operationIds.length === new Set(operationIds).size
  }, 'Must have at least one top level operation')

export const topLevelOperationsSchema = z
  .record(z.string(), z.string())
  .or(topLevelOperationsOrderedSchema)
  .optional()
export type TopLevelOperations = z.infer<typeof topLevelOperationsSchema>

export const pythonConfig = z.object({
  packageName: z.string().describe('acme_client'),
  projectName: z.string().describe('acme-python-sdk'),
  removeKonfigBranding: z.boolean().optional(),
  pypiApiTokenEnvironmentVariable: z.string().optional(),
  gitlabRepositoryId: z.string().optional(),
  asyncReadmeSnippet: z.string().optional(),
  objectPropertyNamingConvention: z
    .union([z.literal('camelCase'), z.literal('snake_case')])
    .optional()
    .default('snake_case'),
  clientName: z.string(),
  clientState,
  clientStateIsOptional: z
    .boolean()
    .describe('Whether or not to raise an error if client state is provided')
    .optional(),
  setSkipSerializationToTrueByDefault: z.boolean().optional(),
  apiKeyAlias: z.record(z.string(), z.string()).optional(),
  validateRequiredStringsAreNonEmpty: z.boolean().optional(),
  omitApiDocumentation: z.boolean().optional(),
  omitModelDocumentation: z.boolean().optional(),
  packageUrl: z.string().optional(),
  topLevelOperations: topLevelOperationsSchema,
  testPyPI: z.boolean().optional(),
  keepAllParametersOptional: z
    .boolean()
    .optional()
    .describe(
      'This is a feature flag for ensuring that all parameters stay optional in the case of Python SDKs that have been published and distributed to developers already and want to preserve backwards compatability. Particularly we want to handle flattened kwargs and "query_params" / "header_params" form arguments.'
    ),
  generator: z
    .literal('python-prior')
    .or(z.literal('python'))
    .optional()
    .default('python'),
})

export const swiftConfig = z.object({
  projectName: z.string().describe('Acme'),
  podAuthors: z.string().describe('acme.com'),
})

export const phpConfig = z.object({
  packageName: z.string().describe('acme-php'),
  clientState,
  packagistUsername: z
    .string()
    .optional()
    .default('konfig')
    .describe('The username used to publish to packagist.org'),
  invokerPackage: z.string(),
})

export const paginationConfigSchema = z.object({
  parameters: z.string().array(),
  response: z.string().array(),
})

export type PaginationConfig = z.infer<typeof paginationConfigSchema>

const removeRequiredPropertiesSchema = z.string().array()
export type RemoveRequiredProperties = z.infer<
  typeof removeRequiredPropertiesSchema
>

export const typescriptConfig = z.object({
  clientName: z.string(),
  npmName: z.string().describe('acme-typescript-sdk'),
  pagination: paginationConfigSchema.optional(),
  removeKonfigBranding: z.boolean().optional(),
  clientState,
  removeRequiredProperties: removeRequiredPropertiesSchema.optional(),
  topLevelOperations: topLevelOperationsSchema,
  gitlab: z
    .object({
      domain: z.string().default('gitlab.com').describe('gitlab.com'),
      projectId: z.string(),
    })
    .optional(),
  omitApiDocumentation: z.boolean().optional(),
  includeFetchAdapter: z.boolean().optional(),
  includeEventSourceParser: z.boolean().optional(),
})

export const generatorGitConfig = z
  .object({
    host: z.string().default('github.com'),
    userId: z.string(),
    repoId: z.string(),
  })
  .transform((gitConfig) => ({
    repoName: gitConfig.repoId.split('/')[0], // acme-sdks/tree/main/typescript -> acme-sdks
    ...gitConfig,
  }))
  .openapi({
    type: 'object',
    properties: {
      host: { type: 'string' },
      userId: { type: 'string' },
      repoId: { type: 'string' },
    },
  })

export const generatorCommonGitRequired = z.object({
  git: generatorGitConfig,
})

export enum HttpClient {
  FETCH = 'fetch',
  XHR = 'xhr',
  NODE = 'node',
  AXIOS = 'axios',
  ANGULAR = 'angular',
}

const httpClient = z.nativeEnum(HttpClient)

export const parameterStateConfig = z
  .object({
    name: z.string(),
    type: z.union([
      z.literal('string'),
      z.literal('boolean'),
      z.literal('number'),
    ]),
  })
  .array()
  .nonempty()

export const konfigGeneratorConfigCommon = z
  .object({
    parameterState: parameterStateConfig.optional(),
    removeTagFromOperationId: z.boolean().optional(),
    operationIdMapping: z.record(z.string()).optional(),
    pagination: z
      .object({
        parameters: z.string().array(),
        response: z.string().array(),
      })
      .optional(),
  })
  .merge(testConfig)

const generatorCommonRequired = z.object({
  files: KonfigYamlFiles,
  version: z.string(),
})

const copyFilesSchema = z
  .object({
    from: z
      .string()
      .describe(
        'Relative path from directory that contains konfig.yaml to file that you want to copy'
      ),
    to: z
      .string()
      .describe(
        'Relative path from directory that contains konfig.yaml to destination you want to copy to'
      ),
  })
  .array()

export type CopyFilesType = z.infer<typeof copyFilesSchema>

export const generatorCommonOptional = z
  .object({
    outputDirectory: z.string(),
    readmeSnippet: z.string().optional(),
    readmeSupportingDescriptionSnippet: z.string().optional(),
    readmeDescriptionSnippet: z.string().optional(),
    copyFiles: copyFilesSchema
      .optional()
      .describe(
        'Configure copying a set of files from a source to a destination. This is useful if you have custom implementations that you would like duplicated across multiple SDK repos.'
      ),
    apiDocumentationAuthenticationPartial: z
      .string()
      .describe(
        'Filepath to file containing override for the section in generated documentation for setting up authentication in the SDK.'
      )
      .optional(),
    disabled: z.boolean().optional(),
    defaultTimeout: z.number().optional().default(0),
    userAgent: z.string().optional().default('Konfig'),
  })
  .merge(testConfig)

export const generatorCommon = generatorCommonRequired
  .merge(generatorCommonOptional)
  .merge(generatorCommonGitRequired)

export const java = generatorCommon.merge(javaConfig).strict()
export const android = generatorCommon.merge(androidConfig).strict()
export const ruby = generatorCommon.merge(rubyConfig).strict()
export const python = generatorCommon.merge(pythonConfig).strict()
export const typescript = generatorCommon.merge(typescriptConfig).strict()

export const csharp = generatorCommon.merge(csharpConfig).strict()
export const php = generatorCommon.merge(phpConfig).strict()
export const kotlin = generatorCommon.merge(kotlinConfig).strict()
export const objc = generatorCommon.merge(objcConfig).strict()
export const go = generatorCommonOptional
  .merge(generatorCommonRequired)
  .merge(generatorCommonGitRequired)
  .merge(goConfig)
  .strict()
export const swift = generatorCommon.merge(swiftConfig).strict()

const genericGeneratorConfig = z
  .union([
    z
      .object({
        generator: z.literal('java'),
      })
      .merge(java),
    z
      .object({
        generator: z.literal('ruby'),
      })
      .merge(ruby),
    z
      .object({
        generator: z.literal('android'),
      })
      .merge(android),
    z
      .object({
        generator: z.literal('python'),
      })
      .merge(python),
    z
      .object({
        generator: z.literal('typescript'),
      })
      .merge(typescript),
    z
      .object({
        generator: z.literal('csharp'),
      })
      .merge(csharp),
    z
      .object({
        generator: z.literal('php'),
      })
      .merge(php),
    z
      .object({
        generator: z.literal('kotlin'),
      })
      .merge(kotlin),
    z
      .object({
        generator: z.literal('objc'),
      })
      .merge(objc),
    z
      .object({
        generator: z.literal('go'),
      })
      .merge(go),
    z
      .object({
        generator: z.literal('swift'),
      })
      .merge(swift),
  ])
  .transform((config) => {
    if (config.generator === 'typescript' && config.test === undefined) {
      config.test = { script: ['yarn', 'yarn test'] }
    }
    return config
  })

export const KonfigYaml = KonfigYamlCommon.merge(
  z
    .object({
      outputDirectory: z.string().optional(),
      generators: z.object({
        java: java.optional().transform((javaConfig) => {
          if (javaConfig === undefined) return
          if (javaConfig.test !== undefined) return javaConfig
          javaConfig.test = {
            script: ['mvn test'],
          }
          return javaConfig
        }),
        android: android.optional(),
        ruby: ruby.optional().transform((rubyConfig) => {
          if (rubyConfig === undefined) return
          if (rubyConfig.test !== undefined) return rubyConfig
          rubyConfig.test = {
            script: [
              // If you don't remove .gem files you get:
              // You have one or more invalid gemspecs that need to be fixed.
              // The gemspec at snaptrade-sdks/sdks/ruby/snaptrade.gemspec is not valid. Please fix this gemspec.
              // The validation error was 'snaptrade-1.0.0 contains itself (snaptrade-1.0.0.gem), check your files list'
              `rm *.gem || true`, // "|| true" is used to ensure command exits w/o code of 1 (https://superuser.com/a/887349),
              'bundle install',
              `bundle exec rspec`,
            ],
          }
          return rubyConfig
        }),
        python: python.optional().transform((pythonConfig) => {
          if (pythonConfig === undefined) return
          if (pythonConfig.test !== undefined) return pythonConfig
          pythonConfig.test = {
            script: [
              'poetry install',
              `poetry run pytest --cov=${pythonConfig.packageName} -o cache_dir=${pythonConfig.outputDirectory}/.pytest_cache`,
            ],
          }
          return pythonConfig
        }),
        typescript: typescript.optional().transform((typescriptConfig) => {
          if (typescriptConfig === undefined) return
          if (typescriptConfig.test !== undefined) return typescriptConfig
          typescriptConfig.test = {
            script: ['yarn', 'yarn test'],
          }
          return typescriptConfig
        }),
        csharp: csharp.optional().transform((csharpConfig) => {
          if (csharpConfig === undefined) return
          if (csharpConfig.test !== undefined) return csharpConfig
          csharpConfig.test = {
            script: ['dotnet test'],
          }
          return csharpConfig
        }),
        php: php.optional().transform((phpConfig) => {
          if (phpConfig === undefined) return
          if (phpConfig.test !== undefined) return phpConfig
          phpConfig.test = {
            script: ['composer install', path.join('.', 'vendor', 'bin', 'phpunit')],
          }
          return phpConfig
        }),
        kotlin: kotlin.optional(),
        objc: objc.optional(),
        go: go.optional().transform((goConfig) => {
          if (goConfig === undefined) return
          if (goConfig.test !== undefined) return goConfig
          goConfig.test = {
            script: ['go clean -testcache', 'go test ./... -v'],
          }
          return goConfig
        }),
        swift: swift.optional().transform((swiftConfig) => {
          if (swiftConfig === undefined) return
          if (swiftConfig.test !== undefined) return swiftConfig
          swiftConfig.test = {
            script: ['swift test'],
          }
          return swiftConfig
        }),
      }),
      specPath: z.string(),
      specInputPath: z.string().optional(),
      specRemotePath: z.string().url().optional(),
      additionalGenerators: z.record(genericGeneratorConfig).optional(),
    })
    .strict()
)

export type KonfigYamlInputType = z.input<typeof KonfigYaml>
export type KonfigYamlType = z.output<typeof KonfigYaml>
export type KonfigYamlGeneratorNames = keyof KonfigYamlType['generators']
export type JavaConfigType = z.infer<typeof javaConfig>
export type TypeScriptConfigType = z.infer<typeof typescriptConfig>
export type TypeScriptGeneratorInputType = z.input<typeof typescript>
export type CSharpConfigType = z.infer<typeof csharp>
export type KonfigGeneratorCommon = z.infer<typeof konfigGeneratorConfigCommon>
export type PythonConfigType = z.infer<typeof pythonConfig>
export type RubyConfigType = z.infer<typeof rubyConfig>
export type GeneratorCommonGitType = z.infer<typeof generatorCommonGitRequired>
export type ParameterStateConfig = z.infer<typeof parameterStateConfig>
