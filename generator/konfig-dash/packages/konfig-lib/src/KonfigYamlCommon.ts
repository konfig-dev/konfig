import { z } from './zod'
import { requiredEnvironmentVariablesConfig } from './TestConfig'
import { jsonSchema } from './util/json-schema'

const propertyName = z.string().min(1)
const typeName = z.string().min(1)

export const fixConfig = z.object({
  updateProperty: z
    .record(propertyName, z.record(typeName, z.record(z.string(), jsonSchema)))
    .optional(),
  // modify entire value
  modify: z
    .record(z.string().min(1), jsonSchema)
    .optional()
    .describe(
      'A JSON where the key is a JSON Path pointing to a location in the OAS and the value is the JSON value to be placed at the location.'
    ),
  // update object properties
  update: z
    .record(z.string().min(1), z.record(z.string(), jsonSchema))
    .optional()
    .describe(
      'A JSON where the key is a JSON Path pointing to a location in the OAS and the value is a JSON Object that is merged with the existing JSON Object at that location.'
    ),
})

export const tagPrioritySchema = z
  .string()
  .describe('Name of tag')
  .array()
  .describe(
    'Order of tags to be processed by Konfig. This can be used to configure which operation is used when generated the getting started documentation in the generated README for an SDK.'
  )

export const optionalParameters = z
  .object({
    name: z.string().describe(`"name" field of parameter`),
    in: z.string().describe(`"in" field of parameter`),
  })
  .array()
  .describe(`Can be configured to make specified parameters optional in the
  SDKs. This can be useful if you have a set of parameters you would rather
  instantiate on the top-level client to avoid redundant passing of this
  parameter. For example if you have a "version" parameter that you repeatedly
  pass throughout the operations, you can instead make it optional, add it as a
  client state, and implement a request hook to attach the "version" client
  state to the operation.`)

export const KonfigYamlCommon = z
  .object({
    defaultChangesetBumpType: z
      .enum(['major', 'minor', 'patch', 'prerelease'])
      .optional()
      .default('patch')
      .describe("Default changeset bump type for 'konfig changeset' command"),
    fixConfig: fixConfig.optional(),
    filterQueryParams: z.string().array().optional(),
    filterTags: z.array(z.string()).optional(),
    filterModels: z
      .array(z.string())
      .optional()
      .describe(
        "List of model names to filter out. This is useful if you don't want to generate a model for a specific schema."
      ),
    filterRequestBodies: z.array(z.string()).optional(),
    attachNullabletoAllResponseSchemas: z.boolean().optional(),
    validateRequiredPropertiesAndParametersAreNonEmpty: z.boolean().optional(),
    stripRequiredStringProperties: z.boolean().optional(),
    optionalParameters: optionalParameters.optional(),
    doNotValidateGloballyRequiredSecurity: z.boolean().optional(),
    infoContactEmail: z.string().optional(),
    infoContactName: z.string().optional(),
    omitInfoDescription: z.boolean().optional(),
    validateSpec: z.boolean().optional(),
    infoContactUrl: z.string().url().optional(),
    progressYamlPath: z
      .string()
      .optional()
      .describe(
        'Overrides the path of progress.yaml which is used in the "konfig fix" CLI command. This is helpful if you have a staging and production OpenAPI Specification and you want to host two different SDK repos for staging and production releases but want to share the same progress for "konfig fix".'
      ),
    tagPriority: tagPrioritySchema.optional(),
    takeFirstTag: z
      .boolean()
      .default(true)
      .optional()
      .describe('Multiple tags can cause conflicts for TypeScript SDK'),
    removeDefaultArrayValues: z
      .boolean()
      .default(true)
      .optional()
      .describe('Default array value is not supported in Java SDK'),
    convertArrayDataTypesToAny: z
      .boolean()
      .default(false)
      .optional()
      .describe(
        'Array data type is not supported in TypeScript SDK for OAS 3.1'
      ),
    allObjectsHaveAdditionalProperties: z
      .boolean()
      .or(
        z
          .object({
            requestBody: z.boolean().optional(),
            exclude: z.string().array().optional(),
            include: z.string().array().optional(),
            excludeGenerators: z.string().array().optional(),
          })
          .refine(
            (config) => {
              if (config.exclude)
                return (
                  config.exclude.filter(
                    (ex) => config.include && config.include.includes(ex)
                  ).length === 0
                )
              return true
            },
            { message: 'Exclude and include must not overlap' }
          )
      )
      .optional(),
  })
  .merge(requiredEnvironmentVariablesConfig)

export type KonfigYamlCommonType = z.infer<typeof KonfigYamlCommon>
export type FixConfig = z.infer<typeof fixConfig>
