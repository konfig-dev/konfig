import type { APIGatewayEvent, Context } from 'aws-lambda'
import axios from 'axios'
import {
  GenerateRequestBody,
  javaGenerateApiRequestBody,
  KonfigYamlGeneratorNames,
  KONFIG_API_TEST_ENVIRONMENT_NAME,
} from 'konfig-lib'
import type {
  GenerateRequestBodyInputType,
  GenerateRequestBodyType,
  JavaGenerateApiRequestBodyType,
  TypeScriptGeneratorInputType,
} from 'konfig-lib'
import * as fs from 'fs-extra'
import { sep } from 'path'
import { tmpdir } from 'os'

import { useRequireAuth } from '@redwoodjs/graphql-server'

import { currentUser, getCurrentUser, isAuthenticated } from 'src/lib/auth'
import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'
import { parseSpec, transformSpec } from 'konfig-lib'
import { urlForGenerateApi } from 'src/lib/urlForGenerateApi'
import { prepareJavaRequestProperties } from 'src/lib/prepare-java-request-properties'
import { tarDir } from 'src/lib/tar'
import { getSignedGetObjectUrl, uploadFile } from 'src/lib/s3'
import {
  GenerateResponseBody,
  GenerateResponseBodySchema,
} from 'konfig-openapi-spec'
import {
  CORS_HEADERS_METHOD_HEADERS_STACKBLITZ,
  CORS_HEADERS_ORIGIN_STACKBLITZ,
} from 'src/lib/cors-headers'
const DEBUG_TMP_FOLDER = '/tmp/konfig/'

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */
export const myHandler = async (event: APIGatewayEvent, context: Context) => {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        ...CORS_HEADERS_ORIGIN_STACKBLITZ(event),
        ...CORS_HEADERS_METHOD_HEADERS_STACKBLITZ,
      },
    }
  }

  if (event.body === null) {
    logger.error('Invalid request to /generate')
    return {
      statusCode: 400,
      headers: {
        ...CORS_HEADERS_ORIGIN_STACKBLITZ(event),
        ...CORS_HEADERS_METHOD_HEADERS_STACKBLITZ,
      },
    }
  }

  const parsed = GenerateRequestBody.safeParse(JSON.parse(event.body))
  if (parsed.success === false) {
    logger.error(parsed.error)
    logger.error('Invalid request to /generate')
    return {
      statusCode: 400,
      headers: {
        ...CORS_HEADERS_ORIGIN_STACKBLITZ(event),
        ...CORS_HEADERS_METHOD_HEADERS_STACKBLITZ,
      },
    }
  }

  const body = parsed.data

  // if (process.env.NODE_ENV === 'development') {
  //   fs.ensureDirSync(DEBUG_TMP_FOLDER)
  //   fs.writeFileSync(`${DEBUG_TMP_FOLDER}transformed-spec.yaml`, spec)
  // }
  if (body.outputSpec) {
    const outputSpecs = {} as Record<string, string>
    for (const generator of Object.keys(body.generators)) {
      const generatorConfig =
        body.generators[generator as KonfigYamlGeneratorNames]
      if (generatorConfig === undefined)
        throw Error(`missing generator config for "${generator}"`)
      outputSpecs[generator] = await transformSpec({
        specString: body.spec,
        generator,
        paginationConfig:
          'pagination' in generatorConfig
            ? generatorConfig.pagination
            : undefined,
        mapTags:
          'mapTags' in generatorConfig ? generatorConfig.mapTags : undefined,
        ...body,
      })
    }
    return {
      statusCode: 200,
      headers: {
        ...CORS_HEADERS_ORIGIN_STACKBLITZ(event),
        ...CORS_HEADERS_METHOD_HEADERS_STACKBLITZ,
      },
      body: outputSpecs,
    }
  }

  logger.debug(urlForGenerateApi())
  const sdkS3SignedGetUrls: Promise<GenerateResponseBody['urls'][number]>[] = []

  const createQueueEntry = async (
    requestBody: JavaGenerateApiRequestBodyType
  ): Promise<GenerateResponseBody['urls'][number]> => {
    return (
      await axios.post<GenerateResponseBody['urls'][number]>(
        urlForGenerateApi(),
        JSON.stringify(requestBody),
        {
          headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
          },
          maxBodyLength: Infinity, // Handle "Request body larger than maxBodyLength limit" error
        }
      )
    ).data
  }

  async function transformSpecForGenerator({
    generator,
  }: {
    generator: KonfigYamlGeneratorNames
  }) {
    return await transformSpec({
      specString: body.spec,
      generator,
      ...body,
    })
  }

  logger.debug("Creating requests for Konfig's Generator API")

  const queue = (requestBody: JavaGenerateApiRequestBodyType) =>
    sdkS3SignedGetUrls.push(
      createQueueEntry(javaGenerateApiRequestBody.parse(requestBody))
    )

  if (body.additionalGenerators) {
    for (const [name, generatorConfig] of Object.entries(
      body.additionalGenerators
    )) {
      if (generatorConfig.generator === 'python') {
        throw Error('Python v2 generator not implemented')
        // const tmpDir = fs.mkdtempSync(`${tmpdir()}${sep}`)
        // logger.debug(`tmpDir for python v2 generator: ${tmpDir}`)
        // const spec = await transformSpecForGenerator({
        //   generator: generatorConfig.generator,
        // })
        // const input = (await parseSpec(spec)).spec
        // await generate({
        //   input,
        //   generator: {
        //     python: generatorConfig,
        //   },
        //   output: `${tmpDir}/sdk/${name}`,
        // })
        // const archive = await tarDir(
        //   `${tmpDir}/sdk/`,
        //   `${tmpDir}/archive.tar.gz`
        // )
        // const key = await uploadFile(archive)
        // sdkS3SignedGetUrls.push(getSignedGetObjectUrl(key))
      } else if (generatorConfig.generator === 'typescript') {
        await queueTypeScriptGeneration({
          body,
          queue,
          typescript: generatorConfig,
          outputDirectoryName: name,
        })
      } else if (generatorConfig.generator === 'java') {
        await queueJavaGeneration({
          body,
          queue,
          java: generatorConfig,
          transformSpecForGenerator,
          outputDirectoryName: name,
        })
      } else if (generatorConfig.generator === 'php') {
        await queuePhpGeneration({
          body,
          queue,
          transformSpecForGenerator,
          php: generatorConfig,
          outputDirectoryName: name,
        })
      } else if (generatorConfig.generator === 'go') {
        await queueGoGeneration({
          body,
          queue,
          transformSpecForGenerator,
          go: generatorConfig,
          outputDirectoryName: name,
        })
      } else {
        throw Error(
          `${generatorConfig.generator} not implemented under additional generators`
        )
      }
    }
  }

  if (body.generators.objc) {
    const {
      files,
      version,
      podName,
      classPrefix,
      authorEmail,
      authorName,
      readmeSnippet,
      readmeSupportingDescriptionSnippet,
      readmeDescriptionSnippet,
      git,
      defaultTimeout,
      apiDocumentationAuthenticationPartial,
    } = body.generators.objc
    const requestBody: JavaGenerateApiRequestBodyType = {
      spec: {
        src: await transformSpecForGenerator({ generator: 'objc' }),
      },
      config: {
        additionalProperties: {
          ...prepareJavaRequestProperties({
            body,
            git,
            generatorConfig: body.generators.objc,
          }),
          omitInfoDescription: body.omitInfoDescription,
          tagPriority: body.tagPriority,
          readmeOperation: body.readmeOperation,
          podVersion: version,
          podName,
          classPrefix,
          authorEmail,
          authorName,
          readmeSnippet,
          readmeSupportingDescriptionSnippet,
          readmeDescriptionSnippet,
          apiDocumentationAuthenticationPartial,
          defaultTimeout,
        },
        generatorName: 'objc',
        gitHost: git?.host,
        gitUserId: git?.userId,
        gitRepoId: git?.repoId,
        removeOperationIdPrefix: true,
        files,
      },
    }
    queue(requestBody)
  }

  if (body.generators.go) {
    await queueGoGeneration({
      body,
      go: body.generators.go,
      queue,
      transformSpecForGenerator,
    })
  }

  if (body.generators.kotlin) {
    const generatorConfig = body.generators.kotlin
    const requestBody: JavaGenerateApiRequestBodyType = {
      spec: {
        src: await transformSpecForGenerator({ generator: 'kotlin' }),
      },
      config: {
        additionalProperties: {
          ...prepareJavaRequestProperties({
            body,
            git: generatorConfig.git,
            generatorConfig,
          }),
          omitInfoDescription: body.omitInfoDescription,
          tagPriority: body.tagPriority,
          readmeOperation: body.readmeOperation,
          groupId: generatorConfig.groupId,
          artifactId: generatorConfig.artifactId,
          readmeSnippet: generatorConfig.readmeSnippet,
          readmeSupportingDescriptionSnippet:
            generatorConfig.readmeSupportingDescriptionSnippet,
          readmeDescriptionSnippet: generatorConfig.readmeDescriptionSnippet,
          apiDocumentationAuthenticationPartial:
            generatorConfig.apiDocumentationAuthenticationPartial,
          defaultTimeout: generatorConfig.defaultTimeout,
          userAgent: generatorConfig.userAgent,
        },
        packageName: `${generatorConfig.groupId}.client`,
        artifactVersion: generatorConfig.version,
        generatorName: 'kotlin',
        gitHost: generatorConfig.git?.host,
        gitUserId: generatorConfig.git?.userId,
        gitRepoId: generatorConfig.git?.repoId,
        removeOperationIdPrefix: true,
        files: generatorConfig.files,
      },
    }
    queue(requestBody)
  }

  if (body.generators.ruby) {
    const generatorConfig = body.generators.ruby
    const requestBody: JavaGenerateApiRequestBodyType = {
      spec: {
        src: await transformSpecForGenerator({ generator: 'ruby' }),
      },
      config: {
        additionalProperties: {
          ...prepareJavaRequestProperties({
            body,
            git: generatorConfig.git,
            generatorConfig,
          }),
          omitInfoDescription: body.omitInfoDescription,
          readmeSnippet: generatorConfig.readmeSnippet,
          readmeSupportingDescriptionSnippet:
            generatorConfig.readmeSupportingDescriptionSnippet,
          readmeDescriptionSnippet: generatorConfig.readmeDescriptionSnippet,
          apiDocumentationAuthenticationPartial:
            generatorConfig.apiDocumentationAuthenticationPartial,
          gemName: generatorConfig.gemName,
          gemVersion: generatorConfig.version,
          defaultTimeout: generatorConfig.defaultTimeout,
          userAgent: generatorConfig.userAgent,
          gitRepoName: generatorConfig.git.repoName,
          moduleName: generatorConfig.moduleName,
          clientState: generatorConfig.clientState,
          clientStateWithExamples: generatorConfig.clientStateWithExamples,
          tagPriority: body.tagPriority,
          readmeOperation: body.readmeOperation,
        },
        artifactVersion: generatorConfig.version,
        generatorName: 'ruby',
        gitHost: generatorConfig.git?.host,
        gitUserId: generatorConfig.git?.userId,
        gitRepoId: generatorConfig.git?.repoId,
        removeOperationIdPrefix: true,
        files: generatorConfig.files,
      },
    }
    queue(requestBody)
  }

  if (body.generators.php) {
    await queuePhpGeneration({
      body,
      queue,
      transformSpecForGenerator,
      php: body.generators.php,
    })
  }

  if (body.generators.android) {
    const generatorConfig = body.generators.android
    const packageName = generatorConfig.packageName
      ? `${generatorConfig.groupId}.${generatorConfig.packageName}.client`
      : `${generatorConfig.groupId}.client`
    const requestBody: JavaGenerateApiRequestBodyType = {
      spec: {
        src: await transformSpecForGenerator({ generator: 'android' }),
      },
      config: {
        additionalProperties: {
          ...prepareJavaRequestProperties({
            body,
            git: generatorConfig.git,
            generatorConfig,
          }),
          omitInfoDescription: body.omitInfoDescription,
          tagPriority: body.tagPriority,
          readmeOperation: body.readmeOperation,
          artifactId: generatorConfig.artifactId,
          groupId: generatorConfig.groupId,
          invokerPackage: packageName,
          modelPackage: `${packageName}.model`,
          apiPackage: `${packageName}.api`,
          artifactUrl: `https://${generatorConfig.git.host}/${generatorConfig.git.userId}/${generatorConfig.git.repoId}`,
          readmeSnippet: generatorConfig.readmeSnippet,
          readmeSupportingDescriptionSnippet:
            generatorConfig.readmeSupportingDescriptionSnippet,
          readmeDescriptionSnippet: generatorConfig.readmeDescriptionSnippet,
          disallowAdditionalPropertiesIfNotPresent: false,
          apiDocumentationAuthenticationPartial:
            generatorConfig.apiDocumentationAuthenticationPartial,
          defaultTimeout: generatorConfig.defaultTimeout,
          userAgent: generatorConfig.userAgent,
        },
        artifactVersion: generatorConfig.version,
        generatorName: 'java',
        removeOperationIdPrefix: true,
        gitHost: generatorConfig.git.host,
        gitUserId: generatorConfig.git.userId,
        gitRepoId: generatorConfig.git.repoId,
        files: generatorConfig.files,
      },
    }
    queue(requestBody)
  }

  if (body.generators.java) {
    await queueJavaGeneration({
      body,
      queue,
      transformSpecForGenerator,
      java: body.generators.java,
    })
  }

  if (body.generators.dart) {
    await queueDartGeneration({
      body,
      queue,
      transformSpecForGenerator,
      dart: body.generators.dart,
    })
  }

  if (body.generators.swift) {
    const generatorConfig = body.generators.swift
    const requestBody: JavaGenerateApiRequestBodyType = {
      spec: {
        src: await transformSpecForGenerator({ generator: 'swift' }),
      },

      config: {
        additionalProperties: {
          ...prepareJavaRequestProperties({
            body,
            git: generatorConfig.git,
            generatorConfig,
          }),
          omitInfoDescription: body.omitInfoDescription,
          tagPriority: body.tagPriority,
          readmeOperation: body.readmeOperation,
          podVersion: generatorConfig.version,
          podAuthors: generatorConfig.podAuthors,
          projectName: generatorConfig.projectName,
          swiftPackagePath: generatorConfig.projectName,
          readmeSnippet: generatorConfig.readmeSnippet,
          readmeSupportingDescriptionSnippet:
            generatorConfig.readmeSupportingDescriptionSnippet,
          readmeDescriptionSnippet: generatorConfig.readmeDescriptionSnippet,
          gitRepoName: generatorConfig.git.repoName,
          outputDirectory: generatorConfig.outputDirectory,
          apiDocumentationAuthenticationPartial:
            generatorConfig.apiDocumentationAuthenticationPartial,
          defaultTimeout: generatorConfig.defaultTimeout,
          userAgent: generatorConfig.userAgent,
        },
        generatorName: 'swift5',
        gitHost: generatorConfig.git?.host,
        gitUserId: generatorConfig.git?.userId,
        gitRepoId: generatorConfig.git?.repoId,
        removeOperationIdPrefix: true,
        files: generatorConfig.files,
      },
    }
    queue(requestBody)
  }

  if (body.generators.csharp) {
    const generatorConfig = body.generators.csharp
    const requestBody: JavaGenerateApiRequestBodyType = {
      spec: {
        src: await transformSpecForGenerator({ generator: 'csharp' }),
      },

      config: {
        additionalProperties: {
          ...prepareJavaRequestProperties({
            body,
            git: generatorConfig.git,
            generatorConfig,
          }),
          omitInfoDescription: body.omitInfoDescription,
          tagPriority: body.tagPriority,
          readmeOperation: body.readmeOperation,
          clientName: generatorConfig.clientName,
          packageVersion: generatorConfig.version,
          readmeSnippet: generatorConfig.readmeSnippet,
          readmeSupportingDescriptionSnippet:
            generatorConfig.readmeSupportingDescriptionSnippet,
          readmeDescriptionSnippet: generatorConfig.readmeDescriptionSnippet,
          apiDocumentationAuthenticationPartial:
            generatorConfig.apiDocumentationAuthenticationPartial,
          defaultTimeout: generatorConfig.defaultTimeout,
          userAgent: generatorConfig.userAgent,
          clientState: generatorConfig.clientState,
          clientStateWithExamples: generatorConfig.clientStateWithExamples,
        },
        generatorName: 'csharp-netcore',
        packageName: generatorConfig.packageName,
        removeOperationIdPrefix: true,
        gitHost: generatorConfig.git?.host,
        gitUserId: generatorConfig.git?.userId,
        gitRepoId: generatorConfig.git?.repoId,
        files: generatorConfig.files,
      },
    }
    queue(requestBody)
  }

  if (body.generators.python) {
    const generatorConfig = body.generators.python
    const src = await transformSpec({
      specString: body.spec,
      generator: 'python',
      topLevelOperations: generatorConfig.topLevelOperations,
      ...body,
    })
    const requestBody: JavaGenerateApiRequestBodyType = {
      spec: {
        src,
      },

      config: {
        additionalProperties: {
          ...prepareJavaRequestProperties({
            body,
            git: generatorConfig.git,
            generatorConfig,
          }),
          useDescriptionInOperationTableDocumentation:
            generatorConfig.useDescriptionInOperationTableDocumentation,
          omitInfoDescription: body.omitInfoDescription,
          tagPriority: body.tagPriority,
          pythonResponseTypeVersion: generatorConfig.responseTypeVersion,
          readmeOperation: body.readmeOperation,
          projectName: generatorConfig.projectName,
          useAiohttp3_8: generatorConfig.useAiohttp3_8,
          disallowAdditionalPropertiesIfNotPresent: false,
          packageVersion: generatorConfig.version,
          readmeSnippet: generatorConfig.readmeSnippet,
          asyncReadmeSnippet: generatorConfig.asyncReadmeSnippet,
          clientStateIsOptional: generatorConfig.clientStateIsOptional,
          readmeSupportingDescriptionSnippet:
            generatorConfig.readmeSupportingDescriptionSnippet,
          readmeDescriptionSnippet: generatorConfig.readmeDescriptionSnippet,
          removeKonfigBranding: generatorConfig.removeKonfigBranding,
          omitApiDocumentation: generatorConfig.omitApiDocumentation,
          omitModelDocumentation: generatorConfig.omitModelDocumentation,
          objectPropertyNamingConvention:
            generatorConfig.objectPropertyNamingConvention,
          keepAllParametersOptional: generatorConfig.keepAllParametersOptional,
          clientName: generatorConfig.clientName,
          clientState: generatorConfig.clientState,
          clientStateWithExamples: generatorConfig.clientStateWithExamples,
          apiKeyAlias: generatorConfig.apiKeyAlias,
          packageUrl: generatorConfig.packageUrl,
          apiDocumentationAuthenticationPartial:
            generatorConfig.apiDocumentationAuthenticationPartial,
          setSkipSerializationToTrueByDefault:
            generatorConfig.setSkipSerializationToTrueByDefault,
          defaultTimeout: generatorConfig.defaultTimeout,
          userAgent: generatorConfig.userAgent,
          // Only include the top-level operations if it is an array (i.e. ordered)
          ...(Array.isArray(generatorConfig.topLevelOperations)
            ? { topLevelOperations: generatorConfig.topLevelOperations }
            : {}),
        },
        gitHost: generatorConfig.git?.host,
        gitUserId: generatorConfig.git?.userId,
        gitRepoId: generatorConfig.git?.repoId,
        generatorName: 'python',
        packageName: generatorConfig.packageName,
        removeOperationIdPrefix: true,
        files: generatorConfig.files,
      },
    }
    queue(requestBody)
  }

  if (body.generators.typescript) {
    await queueTypeScriptGeneration({
      body,
      queue,
      typescript: body.generators.typescript,
    })
  }

  logger.debug("Finished creating requests for Konfig's Generator API")

  if (sdkS3SignedGetUrls.length === 0)
    throw Error('You must provide at least one generator')

  try {
    logger.debug("Waiting for Konfig's Generator to push S3 Artifacts")
    const urls = await Promise.all(sdkS3SignedGetUrls)
    logger.debug("Konfig's Generator finished pushing S3 Artifacts")

    if (!process.env[KONFIG_API_TEST_ENVIRONMENT_NAME]) {
      const generateConfig = await db.generateConfig.create({
        data: {
          konfigyaml: parsed.data.konfigYaml,
          openApiSpecification: body.spec,
        },
      })
      // Save GenerateExecution run
      await Promise.all(
        urls.map(({ key }) => {
          return db.generateExecution.create({
            data: {
              generateConfigId: generateConfig.id,
              s3Key: key,
            },
          })
        })
      )

      return {
        statusCode: 200,
        headers: {
          ...CORS_HEADERS_ORIGIN_STACKBLITZ(event),
          ...CORS_HEADERS_METHOD_HEADERS_STACKBLITZ,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          GenerateResponseBodySchema.parse({
            urls,
            generateConfigId: generateConfig.id,
          })
        ),
      }
    }
    return {
      statusCode: 200,
    }
  } catch (e) {
    if (e instanceof Error) {
      logger.error(e.message)
      return {
        statusCode: 500,
        headers: {
          ...CORS_HEADERS_ORIGIN_STACKBLITZ(event),
          ...CORS_HEADERS_METHOD_HEADERS_STACKBLITZ,
        },
        body: e.message,
      }
    }
  }
}

async function queueGoGeneration({
  body,
  go,
  queue,
  outputDirectoryName,
  transformSpecForGenerator,
}: {
  body: GenerateRequestBodyType
  go: GenerateRequestBodyType['generators']['go']
  queue: (requestBody: JavaGenerateApiRequestBodyType) => void
  outputDirectoryName?: string
  transformSpecForGenerator: ({
    generator,
  }: {
    generator: KonfigYamlGeneratorNames
  }) => ReturnType<typeof transformSpec>
}) {
  if (go === undefined) return
  const generatorConfig = go
  const requestBody: JavaGenerateApiRequestBodyType = {
    spec: {
      src: await transformSpecForGenerator({ generator: 'go' }),
    },
    config: {
      outputDirectoryName,
      additionalProperties: {
        ...prepareJavaRequestProperties({
          body,
          git: generatorConfig.git,
          generatorConfig,
        }),
        omitInfoDescription: body.omitInfoDescription,
        tagPriority: body.tagPriority,
        readmeOperation: body.readmeOperation,
        packageVersion: generatorConfig.version,
        readmeSnippet: generatorConfig.readmeSnippet,
        readmeSupportingDescriptionSnippet:
          generatorConfig.readmeSupportingDescriptionSnippet,
        readmeDescriptionSnippet: generatorConfig.readmeDescriptionSnippet,
        apiDocumentationAuthenticationPartial:
          generatorConfig.apiDocumentationAuthenticationPartial,
        defaultTimeout: generatorConfig.defaultTimeout,
        userAgent: generatorConfig.userAgent,
      },
      packageName: generatorConfig.packageName,
      generatorName: 'go',
      gitHost: generatorConfig.git?.host,
      gitUserId: generatorConfig.git?.userId,
      gitRepoId: generatorConfig.git?.repoId,
      removeOperationIdPrefix: true,
      files: generatorConfig.files,
    },
  }
  queue(requestBody)
}

async function queuePhpGeneration({
  body,
  php,
  queue,
  transformSpecForGenerator,
  outputDirectoryName,
}: {
  body: GenerateRequestBodyType
  php: GenerateRequestBodyType['generators']['php']
  queue: (requestBody: JavaGenerateApiRequestBodyType) => void
  transformSpecForGenerator: ({
    generator,
  }: {
    generator: KonfigYamlGeneratorNames
  }) => ReturnType<typeof transformSpec>
  outputDirectoryName?: string
}) {
  if (php === undefined) return
  const generatorConfig = php
  const requestBody: JavaGenerateApiRequestBodyType = {
    spec: {
      src: await transformSpecForGenerator({ generator: 'php' }),
    },
    config: {
      outputDirectoryName,
      additionalProperties: {
        ...prepareJavaRequestProperties({
          body,
          git: generatorConfig.git,
          generatorConfig,
        }),
        omitInfoDescription: body.omitInfoDescription,
        tagPriority: body.tagPriority,
        readmeOperation: body.readmeOperation,
        invokerPackage: generatorConfig.invokerPackage,
        readmeSnippet: generatorConfig.readmeSnippet,
        readmeSupportingDescriptionSnippet:
          generatorConfig.readmeSupportingDescriptionSnippet,
        readmeDescriptionSnippet: generatorConfig.readmeDescriptionSnippet,
        packagistUsername: generatorConfig.packagistUsername,
        apiDocumentationAuthenticationPartial:
          generatorConfig.apiDocumentationAuthenticationPartial,
        defaultTimeout: generatorConfig.defaultTimeout,
        userAgent: generatorConfig.userAgent,
        gitRepoName: generatorConfig.git.repoName,
        clientState: generatorConfig.clientState,
        clientStateWithExamples: generatorConfig.clientStateWithExamples,
        supportPhp7: generatorConfig.supportPhp7,
      },
      packageName: generatorConfig.packageName,
      artifactVersion: generatorConfig.version,
      generatorName: 'php',
      gitHost: generatorConfig.git?.host,
      gitUserId: generatorConfig.git?.userId,
      gitRepoId: generatorConfig.git?.repoId,
      removeOperationIdPrefix: true,
      files: generatorConfig.files,
    },
  }
  queue(requestBody)
}

async function queueDartGeneration({
  body,
  dart,
  queue,
  transformSpecForGenerator,
  outputDirectoryName,
}: {
  body: GenerateRequestBodyType
  dart: GenerateRequestBodyType['generators']['dart']
  queue: (requestBody: JavaGenerateApiRequestBodyType) => void
  transformSpecForGenerator: ({
    generator,
  }: {
    generator: KonfigYamlGeneratorNames
  }) => ReturnType<typeof transformSpec>
  outputDirectoryName?: string
}) {
  if (dart === undefined) return
  const generatorConfig = dart
  // const packageName = generatorConfig.packageName
  //   ? `${generatorConfig.groupId}.${generatorConfig.packageName}.client`
  //   : `${generatorConfig.groupId}.client`
  const requestBody: JavaGenerateApiRequestBodyType = {
    spec: {
      src: await transformSpecForGenerator({ generator: 'dart' }),
    },
    config: {
      outputDirectoryName,
      additionalProperties: {
        ...prepareJavaRequestProperties({
          body,
          git: generatorConfig.git,
          generatorConfig,
        }),
        omitInfoDescription: body.omitInfoDescription,
        tagPriority: body.tagPriority,
        readmeOperation: body.readmeOperation,
        pubAuthor: body.infoContactName ?? 'Konfig',
        pubAuthorEmail: body.infoContactEmail ?? 'engineering@konfigthis.com',
        pubHomepage: body.infoContactUrl ?? 'https://konfigthis.com',
        pubVersion: generatorConfig.version,
        clientName: generatorConfig.clientName,
        removeKonfigBranding: generatorConfig.removeKonfigBranding,
        pubName: generatorConfig.pubName,
        pubLibrary: generatorConfig.pubName,
        pubRepository: generatorConfig.git
          ? `https://${generatorConfig.git.host}/${generatorConfig.git.userId}/${generatorConfig.git.repoId}`
          : 'https://github.com/USER_ID/REPO_ID',
        // invokerPackage: packageName,
        // clientName: generatorConfig.clientName,
        // gitLabProjectId: generatorConfig.gitlab?.projectId,
        apiDocumentationAuthenticationPartial:
          generatorConfig.apiDocumentationAuthenticationPartial,
        readmeSnippet: generatorConfig.readmeSnippet,
        readmeSupportingDescriptionSnippet:
          generatorConfig.readmeSupportingDescriptionSnippet,
        readmeDescriptionSnippet: generatorConfig.readmeDescriptionSnippet,
        disallowAdditionalPropertiesIfNotPresent: false,
        defaultTimeout: generatorConfig.defaultTimeout,
        userAgent: generatorConfig.userAgent,
      },
      artifactVersion: generatorConfig.version,
      generatorName: 'dart',
      removeOperationIdPrefix: true,
      gitHost: generatorConfig.git?.host,
      gitUserId: generatorConfig.git?.userId,
      gitRepoId: generatorConfig.git?.repoId,
      files: generatorConfig.files,
    },
  }
  queue(requestBody)
}

async function queueJavaGeneration({
  body,
  java,
  queue,
  transformSpecForGenerator,
  outputDirectoryName,
}: {
  body: GenerateRequestBodyType
  java: GenerateRequestBodyType['generators']['java']
  queue: (requestBody: JavaGenerateApiRequestBodyType) => void
  transformSpecForGenerator: ({
    generator,
  }: {
    generator: KonfigYamlGeneratorNames
  }) => ReturnType<typeof transformSpec>
  outputDirectoryName?: string
}) {
  if (java === undefined) return
  const generatorConfig = java
  const packageName = generatorConfig.packageName
    ? `${generatorConfig.groupId}.${generatorConfig.packageName}.client`
    : `${generatorConfig.groupId}.client`
  const requestBody: JavaGenerateApiRequestBodyType = {
    spec: {
      src: await transformSpecForGenerator({ generator: 'java' }),
    },
    config: {
      outputDirectoryName,
      additionalProperties: {
        ...prepareJavaRequestProperties({
          body,
          git: generatorConfig.git,
          generatorConfig,
        }),
        omitInfoDescription: body.omitInfoDescription,
        tagPriority: body.tagPriority,
        readmeOperation: body.readmeOperation,
        artifactId: generatorConfig.artifactId,
        groupId: generatorConfig.groupId,
        invokerPackage: packageName,
        clientName: generatorConfig.clientName,
        gitLabProjectId: generatorConfig.gitlab?.projectId,
        clientState: generatorConfig.clientState,
        clientStateWithExamples: generatorConfig.clientStateWithExamples,
        apiDocumentationAuthenticationPartial:
          generatorConfig.apiDocumentationAuthenticationPartial,
        removeKonfigBranding: generatorConfig.removeKonfigBranding,
        modelPackage: `${packageName}.model`,
        apiPackage: `${packageName}.api`,
        toStringReturnsJson: generatorConfig.toStringReturnsJson,
        artifactUrl: generatorConfig.git
          ? `https://${generatorConfig.git.host}/${generatorConfig.git.userId}/${generatorConfig.git.repoId}`
          : 'https://github.com/USER_ID/REPO_ID',
        readmeSnippet: generatorConfig.readmeSnippet,
        readmeSupportingDescriptionSnippet:
          generatorConfig.readmeSupportingDescriptionSnippet,
        readmeDescriptionSnippet: generatorConfig.readmeDescriptionSnippet,
        disallowAdditionalPropertiesIfNotPresent: false,
        defaultTimeout: generatorConfig.defaultTimeout,
        userAgent: generatorConfig.userAgent,
        useSingleRequestParameter: true,
      },
      artifactVersion: generatorConfig.version,
      generatorName: 'java',
      removeOperationIdPrefix: true,
      gitHost: generatorConfig.git?.host,
      gitUserId: generatorConfig.git?.userId,
      gitRepoId: generatorConfig.git?.repoId,
      files: generatorConfig.files,
    },
  }
  queue(requestBody)
}

async function queueTypeScriptGeneration({
  body,
  typescript,
  queue,
  outputDirectoryName,
}: {
  body: GenerateRequestBodyType
  typescript: GenerateRequestBodyType['generators']['typescript']
  queue: (requestBody: JavaGenerateApiRequestBodyType) => void
  outputDirectoryName?: string
}) {
  if (typescript === undefined) return
  const generatorConfig = typescript
  const src = (await parseSpec(body.spec)).spec.openapi.startsWith('3.1')
    ? await transformSpec({
        specString: body.spec,
        ...body,
        convertArrayDataTypesToAny: true,
        generator: 'typescript',
        paginationConfig: generatorConfig.pagination,
        topLevelOperations: generatorConfig.topLevelOperations,
        removeRequiredProperties: generatorConfig.removeRequiredProperties,
      })
    : await transformSpec({
        specString: body.spec,
        ...body,
        generator: 'typescript',
        paginationConfig: generatorConfig.pagination,
        topLevelOperations: generatorConfig.topLevelOperations,
        removeRequiredProperties: generatorConfig.removeRequiredProperties,
        mapTags: generatorConfig.mapTags,
      })
  if (process.env.NODE_ENV === 'development') {
    fs.ensureDirSync(DEBUG_TMP_FOLDER)
    fs.writeFileSync(`${DEBUG_TMP_FOLDER}transformed-typescript-spec.yaml`, src)
  }
  const requestBody: JavaGenerateApiRequestBodyType = {
    spec: {
      src,
    },
    config: {
      outputDirectoryName, // this is so the directory name from additionalGenerators does not conflict with the one under generators
      additionalProperties: {
        ...prepareJavaRequestProperties({
          body,
          git: generatorConfig.git,
          generatorConfig,
        }),
        omitInfoDescription: body.omitInfoDescription,
        tagPriority: body.tagPriority,
        readmeOperation: body.readmeOperation,
        npmName: generatorConfig.npmName,
        npmVersion: generatorConfig.version,
        dependencies: generatorConfig.dependencies,
        useAxios0_27_2: generatorConfig.useAxios0_27_2,
        useDescriptionInOperationTableDocumentation:
          generatorConfig.useDescriptionInOperationTableDocumentation,
        disallowAdditionalPropertiesIfNotPresent: false,
        readmeSnippet: generatorConfig.readmeSnippet,
        removeKonfigBranding: generatorConfig.removeKonfigBranding,
        objectPropertyNamingConvention:
          generatorConfig.objectPropertyNamingConvention,
        readmeSupportingDescriptionSnippet:
          generatorConfig.readmeSupportingDescriptionSnippet,
        readmeDescriptionSnippet: generatorConfig.readmeDescriptionSnippet,
        useSecurityKeyNameAsPropertyName:
          generatorConfig.useSecurityKeyNameAsPropertyName,
        omitApiDocumentation: generatorConfig.omitApiDocumentation,
        clientName: generatorConfig.clientName,
        apiPackage: 'api',
        modelPackage: 'models',
        useSingleRequestParameter: true,
        // Only include the top-level operations if it is an array (i.e. ordered)
        ...(Array.isArray(generatorConfig.topLevelOperations)
          ? { topLevelOperations: generatorConfig.topLevelOperations }
          : {}),
        apiDocumentationAuthenticationPartial:
          generatorConfig.apiDocumentationAuthenticationPartial,
        clientState: generatorConfig.clientState,
        clientStateWithExamples: generatorConfig.clientStateWithExamples,
        defaultTimeout: generatorConfig.defaultTimeout,
        userAgent: generatorConfig.userAgent,
        includeFetchAdapter: generatorConfig.includeFetchAdapter,
        includeEventSourceParser: generatorConfig.includeEventSourceParser,
      },
      gitHost: generatorConfig.git?.host,
      gitUserId: generatorConfig.git?.userId,
      gitRepoId: generatorConfig.git?.repoId,
      generatorName: 'typescript-axios',
      removeOperationIdPrefix: true,
      files: generatorConfig.files,
    },
    validateSpec: body.validateSpec,
  }
  queue(requestBody)
}

export const handler = myHandler
