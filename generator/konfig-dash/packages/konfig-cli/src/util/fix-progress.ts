import {
  HttpMethods,
  HttpMethodsEnum,
  Json,
  jsonSchema,
  tagSchema,
} from 'konfig-lib'
import { z } from 'zod'
import 'openapi-types'
import * as path from 'path'
import * as fs from 'fs-extra'
import * as yaml from 'js-yaml'
import { operationIdSchema } from 'konfig-lib'
import { parseKonfigYaml } from './parse-konfig-yaml'
import { getKonfigFolder } from './get-konfig-folder'

export const descriptionSchema = z.string().min(1)
export const nameSchema = z.string().min(1)
export const inSchema = z.enum(['query', 'header', 'cookie'])
const pathSchema = z
  .string()
  .refine((path) => path.startsWith('/'), `Path must start with "/"`)
  .brand('ApiPath')
const httpMethodSchema = z.nativeEnum(HttpMethodsEnum)
const jsonPathSchema = z.string()
const operationPathSchema = z.string()
const operationMethodSchema = z.string()
const operationStatusCodeSchema = z.string()
const mediaSchema = z.string().min(1)
const oauthFlowObjectCommonSchema = z.object({
  refreshUrl: z.string().optional(),
  scopes: z.record(z.string(), z.string()),
})
export type OAuthFlowObjectCommon = z.infer<typeof oauthFlowObjectCommonSchema>
const oauthFlowsObjectSchema = z.object({
  implicit: z
    .object({
      authorizationUrl: z.string(),
    })
    .merge(oauthFlowObjectCommonSchema)
    .optional(),
  password: z
    .object({
      tokenUrl: z.string(),
    })
    .merge(oauthFlowObjectCommonSchema)
    .optional(),
  clientCredentials: z
    .object({
      tokenUrl: z.string(),
    })
    .merge(oauthFlowObjectCommonSchema)
    .optional(),
  authorizationCode: z
    .object({
      authorizationUrl: z.string(),
      tokenUrl: z.string(),
    })
    .merge(oauthFlowObjectCommonSchema)
    .optional(),
})

export type OAuthFlowObject = z.infer<typeof oauthFlowsObjectSchema>

const oauthObjectSchema = z.object({
  securityName: nameSchema,
  type: z.literal('oauth2'),
  flows: oauthFlowsObjectSchema,
})

export type OAuthObject = z.infer<typeof oauthObjectSchema>

const securitySchemeObjectSchema = z
  .object({
    type: z.literal('apiKey'),
    securityName: nameSchema,
    name: nameSchema,
    in: inSchema,
  })
  .or(oauthObjectSchema)

export type SecuritySchemeObject = z.infer<typeof securitySchemeObjectSchema>

const securitySchemeObjectInputSchema = securitySchemeObjectSchema.or(
  z.literal(false)
)
export type SecuritySchemeObjectInput = z.infer<
  typeof securitySchemeObjectInputSchema
>

const fixOnlyOneTagNameSchema = z.record(z.string(), tagSchema.optional())
export type FixOnlyOneTagName = z.infer<typeof fixOnlyOneTagNameSchema>

const progressSchema = z.object({
  ignoreObjectsWithNoProperties: z.boolean().optional(),
  ignorePotentialIncorrectType: z.boolean().optional(),
  fixOnlyOneTagName: fixOnlyOneTagNameSchema.or(z.literal(false)).optional(),
  validServerUrls: z
    .record(z.string(), z.object({ url: z.string() }).optional())
    .optional()
    .default({}),

  operationIds: z
    .record(pathSchema, z.record(httpMethodSchema, operationIdSchema))
    .optional()
    .default({}),
  renameTags: z.record(z.string(), tagSchema).optional().default({}),
  operationTags: z
    .record(pathSchema, z.record(httpMethodSchema, tagSchema))
    .optional()
    .default({}),
  examples: z.record(jsonPathSchema, jsonSchema).optional().default({}),
  securityParameters: z
    .record(
      nameSchema,
      z.record(inSchema, securitySchemeObjectInputSchema.optional())
    )
    .optional()
    .default({}),
  examples_2: z
    .record(
      operationPathSchema,
      z.record(operationMethodSchema, jsonSchema).optional().default({})
    )
    .optional()
    .default({}),
  description: descriptionSchema.optional(),
  requestSchemaNames: z
    .record(
      operationPathSchema,
      z.record(
        operationMethodSchema,
        z.record(mediaSchema, nameSchema.optional())
      )
    )
    .optional()
    .default({}),
  responseSchemaNames: z
    .record(
      operationPathSchema,
      z.record(
        operationMethodSchema,
        z
          .record(
            operationStatusCodeSchema,
            z.record(mediaSchema, nameSchema.optional())
          )
          .refine(
            // make sure there are no duplicate names otherwise one schema will
            // override the other causing an invalid schema for a particular response
            (obj) => {
              const names = Object.values(obj).flatMap((o) => Object.values(o))
              return names.length === new Set(names).size
            },
            `Detected duplicate schema names for response media types`
          )
      )
    )
    .optional()
    .default({}),
  responseDescriptions: z
    .record(
      operationPathSchema,
      z
        .record(
          operationMethodSchema,
          z
            .record(operationStatusCodeSchema, descriptionSchema.optional())
            .optional()
            .default({})
        )
        .optional()
        .default({})
    )
    .optional()
    .default({}),
})
type ProgressSchema = z.infer<typeof progressSchema>
type ProgressInput = { noSave?: boolean } & z.input<typeof progressSchema>

export class Progress {
  progress: ProgressSchema = progressSchema.parse({})
  noSave?: boolean
  konfigDir?: string
  progressYamlPathOverride?: string

  constructor({
    progress,
    noSave,
    konfigDir,
    progressYamlPathOverride,
  }: {
    progress?: ProgressInput | ProgressSchema
    noSave?: boolean
    konfigDir?: string
    progressYamlPathOverride?: string
  }) {
    this.konfigDir = konfigDir
    this.progressYamlPathOverride = progressYamlPathOverride
    if (!progress) return
    this.progress = progressSchema.parse(progress)
    this.noSave = noSave
  }

  getOperationId({ path, method }: { path: string; method: HttpMethods }) {
    const operationIds = this.progress.operationIds[pathSchema.parse(path)]
    if (operationIds === undefined) return
    return operationIds[method]
  }

  saveTagRename({ oldName, newName }: { oldName: string; newName: string }) {
    this.progress.renameTags[oldName] = tagSchema.parse(newName)
    this.save()
  }

  saveIgnoreObjectsWithNoProperties({ confirm }: { confirm: boolean }) {
    this.progress.ignoreObjectsWithNoProperties = confirm
    this.save()
  }

  getIgnoreObjectsWithNoProperties() {
    return this.progress.ignoreObjectsWithNoProperties
  }

  setFixOnlyOneTagNameToFalse() {
    this.progress.fixOnlyOneTagName = false
    this.save()
  }

  setFixOnlyOneTagName({
    operationId,
    tag,
  }: {
    operationId: string
    tag: string
  }) {
    if (this.progress.fixOnlyOneTagName === false) return
    if (this.progress.fixOnlyOneTagName === undefined)
      this.progress.fixOnlyOneTagName = {}
    this.progress.fixOnlyOneTagName[operationId] = tagSchema.parse(tag)
    this.save()
  }

  getFixOnlyOneTagName() {
    return this.progress.fixOnlyOneTagName
  }

  saveIgnorePotentialIncorrectType({ confirm }: { confirm: boolean }) {
    this.progress.ignorePotentialIncorrectType = confirm
    this.save()
  }

  getIgnorePotentialIncorrectType() {
    return this.progress.ignorePotentialIncorrectType
  }

  saveInfoDescription({ description }: { description: string }) {
    this.progress.description = description
    this.save()
  }

  getSecuritySchemeParameter({
    name,
    parameterIn,
  }: {
    name: string
    parameterIn: string
  }) {
    return this.progress.securityParameters[name]?.[inSchema.parse(parameterIn)]
  }

  saveSecuritySchemeParameter({
    name,
    parameterIn,
    securityScheme,
  }: {
    name: string
    parameterIn: string
    securityScheme: SecuritySchemeObjectInput
  }) {
    if (this.progress.securityParameters[name] === undefined)
      this.progress.securityParameters[name] = {}
    this.progress.securityParameters[name][inSchema.parse(parameterIn)] =
      securityScheme
    this.save()
  }

  getInfoDescription() {
    return this.progress.description
  }

  getResponseSchemaName({
    path,
    method,
    statusCode,
    media,
  }: {
    path: string
    method: string
    statusCode: string
    media: string
  }) {
    return this.progress.responseSchemaNames[path]?.[method]?.[statusCode]?.[
      media
    ]
  }

  saveResponseSchemaName({
    path,
    method,
    statusCode,
    media,
    name,
  }: {
    path: string
    method: string
    statusCode: string
    media: string
    name: string
  }) {
    if (this.progress.responseSchemaNames[path] === undefined)
      this.progress.responseSchemaNames[path] = {}
    if (this.progress.responseSchemaNames[path][method] === undefined)
      this.progress.responseSchemaNames[path][method] = {}
    if (
      this.progress.responseSchemaNames[path][method][statusCode] === undefined
    )
      this.progress.responseSchemaNames[path][method][statusCode] = {}
    this.progress.responseSchemaNames[path][method][statusCode][media] = name
    this.save()
  }

  getRequestSchemaName({
    path,
    method,
    media,
  }: {
    path: string
    method: string
    media: string
  }) {
    return this.progress.requestSchemaNames[path]?.[method]?.[media]
  }

  saveRequestSchemaName({
    path,
    method,
    media,
    name,
  }: {
    path: string
    method: string
    media: string
    name: string
  }) {
    if (this.progress.requestSchemaNames[path] === undefined)
      this.progress.requestSchemaNames[path] = {}
    if (this.progress.requestSchemaNames[path][method] === undefined)
      this.progress.requestSchemaNames[path][method] = {}
    this.progress.requestSchemaNames[path][method][media] = name
    this.save()
  }

  saveOperationResponseDescription({
    path,
    method,
    statusCode,
    description,
  }: {
    path: string
    method: string
    statusCode: string
    description: string
  }) {
    if (this.progress.responseDescriptions[path] === undefined)
      this.progress.responseDescriptions[path] = {}
    if (this.progress.responseDescriptions[path][method] === undefined)
      this.progress.responseDescriptions[path][method] = {}
    this.progress.responseDescriptions[path][method][statusCode] = description
    this.save()
  }

  getOperationResponseDescription({
    path,
    method,
    statusCode,
  }: {
    path: string
    method: string
    statusCode: string
  }) {
    return this.progress.responseDescriptions[path]?.[method]?.[statusCode]
  }

  getTagRename({ oldName }: { oldName: string }) {
    const newName = this.progress.renameTags[oldName]
    if (newName === undefined) return
    return newName
  }

  getServerUrl({ oldUrl }: { oldUrl: string }) {
    return this.progress.validServerUrls[oldUrl]
  }

  saveServerUrl({ oldUrl, newUrl }: { oldUrl: string; newUrl: string }) {
    this.progress.validServerUrls[oldUrl] = { url: newUrl }
    this.save()
  }

  getExample({ path, method }: { path: string; method: string }) {
    const example = this.progress.examples_2[path]?.[method]
    if (example === undefined) return
    return example
  }

  saveExample({
    path,
    json,
    method,
  }: {
    path: string
    method: string
    json: Json
  }) {
    if (this.progress.examples_2[path] === undefined)
      this.progress.examples_2[path] = {}
    this.progress.examples_2[path][method] = json
    this.save()
  }

  saveOperationTag({
    path,
    method,
    operationTag,
  }: {
    path: string
    method: HttpMethods
    operationTag: string
  }) {
    const operationPath = pathSchema.parse(path)
    this.progress.operationTags[operationPath] =
      this.progress.operationTags[operationPath] ?? {}
    const operationTags = this.progress.operationTags[operationPath]
    if (operationTags === undefined) throw Error("This shouldn't happen")
    operationTags[httpMethodSchema.parse(method)] =
      tagSchema.parse(operationTag)
    this.save()
  }

  saveOperationId({
    path,
    method,
    operationId,
  }: {
    path: string
    method: HttpMethods
    operationId: string
  }) {
    // Update Progress
    const operationPath = pathSchema.parse(path)
    this.progress.operationIds[operationPath] =
      this.progress.operationIds[operationPath] ?? {}
    const operationIds = this.progress.operationIds[operationPath]
    if (operationIds === undefined) throw Error("This shouldn't happen")
    const httpMethod = httpMethodSchema.parse(method)
    operationIds[httpMethod] = operationIdSchema.parse(operationId)
    this.save()
  }

  static getSaved({
    konfigDir,
    progressYamlPathOverride,
  }: {
    konfigDir: string
    progressYamlPathOverride?: string
  }): Progress {
    if (
      !fs.existsSync(
        Progress.getProgressPath({ konfigDir, progressYamlPathOverride })
      )
    )
      return new Progress({ konfigDir, progressYamlPathOverride })
    const progress = progressSchema.parse(
      yaml.load(
        fs.readFileSync(
          Progress.getProgressPath({ konfigDir, progressYamlPathOverride }),
          'utf-8'
        )
      )
    )
    return new Progress({ progress, konfigDir, progressYamlPathOverride })
  }

  save() {
    if (this.noSave) return
    fs.writeFileSync(
      Progress.getProgressPath({
        konfigDir: this.konfigDir ?? process.cwd(),
        progressYamlPathOverride: this.progressYamlPathOverride,
      }),
      yaml.dump(this.progress, { sortKeys: true })
    )
  }

  static getProgressPath({
    konfigDir,
    progressYamlPathOverride,
  }: {
    konfigDir: string
    progressYamlPathOverride?: string
  }): string {
    if (progressYamlPathOverride !== undefined) return progressYamlPathOverride
    // verify that we are in a konfig folder
    parseKonfigYaml({ configDir: konfigDir })
    const sdkKonfigFolder = getKonfigFolder({ dir: konfigDir })
    fs.ensureDirSync(sdkKonfigFolder)
    return path.join(sdkKonfigFolder, 'progress.yaml')
  }
}

export const PROGRESS_YAML_FILE_NAME = 'progress.yaml'
