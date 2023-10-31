import { z } from './zod'

import { TemplateFiles } from './TemplateFiles'
import {
  clientStateWithExamples,
  topLevelOperationsOrderedSchema,
} from './KonfigYaml'
import { tagPrioritySchema } from './KonfigYamlCommon'

const additionalProperties = z
  .object({
    useDescriptionInOperationTableDocumentation: z.boolean().optional(),
    apiPackage: z.string().optional(),
    artifactId: z.string().optional(),
    artifactUrl: z.string().optional(),
    authorEmail: z.string().describe('engineering@acme.com').optional(),
    authorName: z.string().describe('acme.com').optional(),
    pythonResponseTypeVersion: z.string().optional(),
    classPrefix: z.string().describe('A').optional(),
    disallowAdditionalPropertiesIfNotPresent: z.boolean().optional(),
    groupId: z.string().optional(),
    outputDirectory: z.string().optional(),
    gitRepoName: z.string().optional(),
    gitLabProjectId: z.string().optional(),
    invokerPackage: z.string().optional(),
    useSecurityKeyParamNameAsPropertyName: z.boolean().optional(),
    dependencies: z.record(z.string(), z.string()).optional(),
    objectPropertyNamingConvention: z.string().optional(),
    clientState: z.string().array().optional(),
    clientStateWithExamples,
    clientStateIsOptional: z.boolean().optional(),
    modelPackage: z.string().optional(),
    supportPhp7: z.boolean().optional(),
    packagistUsername: z.string().optional(),
    apiKeyAlias: z.record(z.string(), z.string()).optional(),
    apiDocumentationAuthenticationPartial: z.string().optional(),
    setSkipSerializationToTrueByDefault: z.boolean().optional(),
    toStringReturnsJson: z.boolean().optional(),
    includeFetchAdapter: z.boolean().optional(),
    pubName: z.string().optional(),
    pubLibrary: z.string().optional(),
    pubDescription: z.string().optional(),
    pubAuthor: z.string().optional(),
    pubAuthorEmail: z.string().optional(),
    pubHomepage: z.string().optional(),
    pubPublishTo: z.string().optional(),
    pubRepository: z.string().optional(),
    pubVersion: z.string().optional(),
    includeEventSourceParser: z.boolean().optional(),
    repoName: z.string().optional(),
    packageUrl: z.string().optional(),
    moduleName: z.string().optional(),
    omitInfoDescription: z.boolean().optional(),
    omitModelDocumentation: z.boolean().optional(),
    omitApiDocumentation: z.boolean().optional(),
    removeKonfigBranding: z.boolean().optional(),
    userAgent: z.string().optional(),
    npmName: z.string().optional(),
    gemName: z.string().optional(),
    gemVersion: z.string().optional(),
    npmVersion: z.string().optional(),
    clientName: z.string().optional(),
    packageVersion: z.string().describe('1.0.0').optional(),
    readmeOperation: z
      .object({
        operationId: z.string(),
      })
      .optional(),
    topLevelOperations: topLevelOperationsOrderedSchema.optional(),
    podAuthors: z.string().optional(),
    podName: z.string().describe('AcmeClient').optional(),
    podVersion: z.string().describe('1.0.0').optional(),
    projectName: z.string().optional(),
    readmeSnippet: z.string().optional(),
    asyncReadmeSnippet: z.string().optional(),
    readmeSupportingDescriptionSnippet: z.string().optional(),
    readmeDescriptionSnippet: z.string().optional(),
    swiftPackagePath: z.string().optional(),
    useSingleRequestParameter: z.boolean().optional(),
    keepAllParametersOptional: z.boolean().optional(),
    defaultTimeout: z.number().optional(),
    tagPriority: tagPrioritySchema.optional(),
  })
  .passthrough()

export const javaGenerateApiRequestBody = z.object({
  validateSpec: z.boolean().optional(),
  spec: z.object({
    src: z.string(),
  }),
  config: z
    .object({
      artifactVersion: z.string().optional(),
      packageName: z.string().optional(),
      gitHost: z.string().optional(),
      gitUserId: z.string().optional(),
      gitRepoId: z.string().optional(),
      outputDirectoryName: z.string().optional(),
      additionalProperties,
      generatorName: z
        .literal('java')
        .or(z.literal('python'))
        .or(z.literal('python-prior'))
        .or(z.literal('csharp-netcore'))
        .or(z.literal('android'))
        .or(z.literal('php'))
        .or(z.literal('swift5'))
        .or(z.literal('kotlin'))
        .or(z.literal('ruby'))
        .or(z.literal('objc'))
        .or(z.literal('go'))
        .or(z.literal('dart'))
        .or(z.literal('typescript-axios')),
      removeOperationIdPrefix: z.boolean(),
      files: TemplateFiles,
    })
    .strict(),
})

export type JavaGenerateApiRequestBodyType = z.infer<
  typeof javaGenerateApiRequestBody
>
