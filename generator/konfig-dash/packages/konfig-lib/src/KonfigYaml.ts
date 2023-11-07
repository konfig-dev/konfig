import { z } from './zod'

import { KonfigYamlCommon } from './KonfigYamlCommon'
import { KonfigYamlFiles } from './KonfigYamlFiles'
import { testConfig } from './TestConfig'
import path from 'path'

/**
 * Don't use this anymore, its not as flexible as clientStateWithExamples
 * because the item type is just a string. Eventually lets try to delete this
 * property if we can
 */
const clientState = z
  .string()
  .array()
  .optional()
  .describe(
    'A list of stateful properties generated into the SDK that can be used in custom implementation hooks. This is useful when you need state in the SDK that is not described in the OpenAPI Specification such as a key used for request signing.'
  )

const removeKonfigBranding = z
  .boolean()
  .optional()
  .describe("Don't add Konfig branding to generated SDK")

export const clientStateWithExamples = z
  .object({
    name: z.string(),
    example: z.string().optional(),
    required: z
      .boolean()
      .optional()
      .describe(
        "Configures SDKs to validate that this client state is non-empty. (e.g. not empty string '' or null)"
      ),
  })
  .array()
  .optional()
  .describe(
    'A list of stateful properties generated into the SDK that can be used in custom implementation hooks. This is useful when you need state in the SDK that is not described in the OpenAPI Specification such as a key used for request signing. This is different from the "clientState" field in that it also includes examples for the generated documentation'
  )

const javaGroupId = z
  .string()
  .describe(
    `Uniquely identifies your JVM-based project (ex. "com.acme"). By default we publish packages under Konfig's group id of "com.konfigthis". If you would like to publish to your own group ID then create a Sonatype account (https://central.sonatype.org/publish/publish-guide/#initial-setup) and claim your group ID and add "dphuang2" to the list of users that can publish to your group ID.`
  )

const gitlab = z
  .object({
    domain: z.string().default('gitlab.com').describe('gitlab.com'),
    projectId: z.string(),
  })
  .optional()

export const javaConfig = z.object({
  language: z.literal('java').default('java'),
  groupId: javaGroupId,
  packageName: z.string().describe('acme').optional(),
  artifactId: z
    .string()
    .describe(
      `Example: "acme-java-sdk" (see https://maven.apache.org/guides/mini/guide-naming-conventions.html)`
    ),
  removeKonfigBranding,
  gitlab,
  clientName: z.string(),
  clientState,
  clientStateWithExamples,
  toStringReturnsJson: z
    .boolean()
    .optional()
    .describe(
      "Modify the behavior of toString() for generated schema classes to return a parsable JSON string as opposed to a string representation of the object's properties. This could be useful when you want to log the contents of a schema class without having to manually serialize it to JSON."
    ),
})

export const androidConfig = z.object({
  language: z.literal('android').default('android'),
  groupId: javaGroupId,
  packageName: z.string().describe('acme').optional(),
  artifactId: z.string().describe('ascme-java-sdk'),
})

export const kotlinConfig = z.object({
  language: z.literal('kotlin').default('kotlin'),
  groupId: z.string().describe('com.acme'),
  artifactId: z.string().describe('acme-kotlin-sdk'),
})

export const rubyConfig = z.object({
  // The field allows consumers of konfig.yaml to disambiguate the type of
  // generator config by checking the value of this field. We use the field name
  // "language" because "generator" is used by "additionalGenerators"
  language: z.literal('ruby').default('ruby'),

  moduleName: z.string(),
  gemName: z
    .string()
    .describe(
      'The name of the gem on rubygems.org (e.g. https://rubygems.org/gems/GEM_NAME)'
    ),
  clientState,
  clientStateWithExamples,
})

export const goConfig = z.object({
  language: z.literal('go').default('go'),
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
  language: z.literal('objc').default('objc'),
  podName: z.string().describe('AcmeClient'),
  classPrefix: z.string().describe('A'),
  authorName: z.string().describe('acme.com'),
  authorEmail: z.string().describe('engineering@acme.com'),
})

export const csharpConfig = z.object({
  language: z.literal('csharp').default('csharp'),
  clientName: z
    .string()
    .refine(
      (clientName) =>
        clientName.endsWith('Client') ||
        `clientName must be suffixed with "Client"`
    ),
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
  clientStateWithExamples,
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

const objectPropertyNamingConvention = z
  .union([z.literal('camelCase'), z.literal('snake_case')])
  .optional()

const useDescriptionInOperationTableDocumentation = z
  .boolean()
  .optional()
  .describe(
    "Whether or not to use the operation's description in the operation table documentation. By default the summary is used."
  )

const pythonResponseTypeVersion1 = z
  .literal('1')
  .describe(
    'Responses are raw dictionaries and use TypedDict. Responses also include all HTTP response fields in the response object.'
  )
const pythonResponseTypeVersion2 = z
  .literal('2')
  .describe(
    'Responses are Pydantic instances and do not include all HTTP response fields in the response object. To get raw HTTP repsonse fields, use the .raw.[method] version of the method.'
  )

export const pythonResponseTypeVersion = z
  .union([pythonResponseTypeVersion1, pythonResponseTypeVersion2])
  .default('2')
  .describe(
    "Choose which version of Konfig's implementation of responses for the Python SDK to use."
  )

export const readmeHeaderSnippet = z
  .string()
  .optional()
  .describe(
    'A snippet of markdown that will be inserted at the top of the README.md file. This is useful for adding a custom header to the README.md file that is not generated by Konfig.'
  )

export const pythonConfig = z.object({
  useDescriptionInOperationTableDocumentation,
  readmeHeaderSnippet,
  language: z.literal('python').default('python'),
  packageName: z.string().describe('acme_client'),
  projectName: z.string().describe('acme-python-sdk'),
  responseTypeVersion: pythonResponseTypeVersion,
  removeKonfigBranding,
  pypiApiTokenEnvironmentVariable: z.string().optional(),
  gitlabRepositoryId: z.string().optional(),
  asyncReadmeSnippet: z.string().optional(),
  objectPropertyNamingConvention:
    objectPropertyNamingConvention.default('snake_case'),
  clientName: z.string(),
  clientState,
  clientStateWithExamples,
  clientStateIsOptional: z
    .boolean()
    .describe('Whether or not to raise an error if client state is provided')
    .optional(),
  setSkipSerializationToTrueByDefault: z.boolean().default(true),
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
})

export const swiftConfig = z.object({
  language: z.literal('swift').default('swift'),
  projectName: z.string().describe('Acme'),
  podAuthors: z.string().describe('acme.com'),
})

export const dartConfig = z.object({
  language: z.literal('dart').default('dart'),
  removeKonfigBranding,
  clientName: z
    .string()
    .describe(
      `The top-level client's name. (e.g. 'Acme' in "final acme = Acme();")`
    ),
  pubName: z
    .string()
    .regex(/^[a-z][a-z\_]*$/)
    .describe(`"a" in import 'package:a/b.dart';`),
})

export const phpConfig = z.object({
  language: z.literal('php').default('php'),
  packageName: z.string().describe('acme-php'),
  clientState,
  clientStateWithExamples,
  supportPhp7: z.boolean().optional().default(false),
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
  useDescriptionInOperationTableDocumentation,
  language: z.literal('typescript').default('typescript'),
  dependencies: z
    .record(z.string(), z.string())
    .optional()
    .describe(
      'A map of dependencies to add to the generated package.json. This is useful for adding dependencies that are required for the SDK to work.'
    ),
  packageJsonScripts: z
    .record(z.string(), z.string())
    .optional()
    .describe(
      'A map of scripts to add to the generated package.json. This is useful for adding custom scripts that run tests or build the SDK.'
    ),
  clientName: z
    .string()
    .describe(
      `The top-level client's name. (e.g. 'Acme' in "import { Acme } from 'acme-typescript-sdk'")`
    ),
  npmName: z
    .string()
    .describe(
      `The name of the npm package (e.g. "acme-typescript-sdk" in "import { Acme } from 'acme-typescript-sdk'")`
    ),
  pagination: paginationConfigSchema.optional(),
  removeKonfigBranding,
  useSecurityKeyParamNameAsPropertyName: z
    .boolean()
    .optional()
    .describe(
      `Whether to use the security requirement's key as the property name. For example, if the security requirement is called "apiKey" but the "Header" key is "X-Api-Key" then setting this to true will make the parameter name "xApiKey".`
    ),
  objectPropertyNamingConvention:
    objectPropertyNamingConvention.default('camelCase'),
  clientState,
  clientStateWithExamples,
  removeRequiredProperties: removeRequiredPropertiesSchema.optional(),
  topLevelOperations: topLevelOperationsSchema,
  gitlab,
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
  .passthrough()
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
  .or(
    z.object({
      konfigIgnore: z
        .string()
        .describe(
          'Relative path to a .konfigignore file. If specified, we parse the .konfigignore file and copy all files that it matches to the current directory.'
        ),
    })
  )
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

export const java = generatorCommon.merge(javaConfig)
export const android = generatorCommon.merge(androidConfig)
export const ruby = generatorCommon.merge(rubyConfig)
export const python = generatorCommon.merge(pythonConfig)
export const typescript = generatorCommon.merge(typescriptConfig)

export const csharp = generatorCommon.merge(csharpConfig)
export const php = generatorCommon.merge(phpConfig)
export const kotlin = generatorCommon.merge(kotlinConfig)
export const objc = generatorCommon.merge(objcConfig)
export const go = generatorCommonOptional
  .merge(generatorCommonRequired)
  .merge(generatorCommonGitRequired)
  .merge(goConfig)

export const swift = generatorCommon.merge(swiftConfig)
export const dart = generatorCommon.merge(dartConfig)

const genericGeneratorConfig = z.union([
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
      generator: z.literal('dart'),
    })
    .merge(dart),
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

export const KonfigYaml = KonfigYamlCommon.merge(
  z.object({
    outputDirectory: z.string().optional(),
    generators: z.object({
      java: java.optional(),
      android: android.optional(),
      ruby: ruby.optional(),
      python: python.optional(),
      typescript: typescript.optional(),
      csharp: csharp.optional(),
      php: php.optional(),
      kotlin: kotlin.optional(),
      objc: objc.optional(),
      go: go.optional(),
      swift: swift.optional(),
      dart: dart.optional(),
    }),
    specPath: z.string(),
    specInputPath: z
      .string()
      .optional()
      .describe(
        `Configure an "input" path for your OpenAPI Specification. This is useful when you want to persist two different versions of your OpenAPI Specification. One that is an exact copy from another location that is either polled from an endpoint or pushed from another Git repository. Another that is modified to be used for code generation. Konfig will detect that this field is set and write or read from it in place of "specPath" for operations like "konfig fix", "konfig pull", and "konfig push".`
      ),
    specRemotePath: z.string().url().optional(),
    additionalGenerators: z.record(genericGeneratorConfig).optional(),
  })
)

export type KonfigYamlInputType = z.input<typeof KonfigYaml>
export type KonfigYamlType = z.output<typeof KonfigYaml>
export type KonfigYamlGeneratorNames = keyof KonfigYamlType['generators']
export type KonfigYamlGeneratorConfig = NonNullable<
  KonfigYamlType['generators'][KonfigYamlGeneratorNames]
>
export type KonfigYamlAdditionalGeneratorConfig = z.infer<
  typeof genericGeneratorConfig
>
export type JavaConfigType = z.infer<typeof javaConfig>
export type TypeScriptConfigType = z.infer<typeof typescriptConfig>
export type TypeScriptGeneratorInputType = z.input<typeof typescript>
export type CSharpConfigType = z.infer<typeof csharp>
export type KonfigGeneratorCommon = z.infer<typeof konfigGeneratorConfigCommon>
export type PythonConfigType = z.infer<typeof pythonConfig>
export type RubyConfigType = z.infer<typeof rubyConfig>
export type DartConfigType = z.infer<typeof dart>
export type GeneratorCommonGitType = z.infer<typeof generatorCommonGitRequired>
export type ParameterStateConfig = z.infer<typeof parameterStateConfig>
export type GeneratorGitConfig = z.input<typeof generatorGitConfig>
