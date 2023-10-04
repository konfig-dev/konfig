import { CliUx } from '@oclif/core'
import boxen from 'boxen'
import deepEquals from 'deep-equal'
import {
  generateAndMergeSchemaObjects,
  generateSchemaObjectFromJson,
  getExampleJsonFromMediaObject,
  getOperations,
  isJsonString,
  Json,
  jsonSchema,
  MediaObject,
  OperationObject,
  resolveRef,
  Spec,
} from 'konfig-lib'
import { getOasVersion } from 'konfig-lib/dist/util/get-oas-version'
import { Progress } from './fix-progress'
import { inquirerConfirm } from './inquirer-confirm'
import { logOperationDetails } from './log-operation-details'
import { inquirerPromptCI } from './inquirer-prompt-ci'

export async function fixEmptyResponseBodySchema({
  spec,
  progress,
  alwaysYes,
  ci,
}: {
  spec: Spec
  progress: Progress
  alwaysYes: boolean
  ci: boolean
}): Promise<number> {
  let numberOfEmptyResponseBodySchemasFixed = 0
  const version = getOasVersion({ spec: spec.spec })
  const operations = getOperations({ spec: spec.spec })
  for (const { operation, path, method } of operations) {
    const statusCodes = Object.keys(operation.responses)
    for (const statusCode of statusCodes) {
      const repsponseObjectOrRef = operation.responses[statusCode]
      const responseObject = resolveRef({
        refOrObject: repsponseObjectOrRef,
        $ref: spec.$ref,
      })
      if (responseObject.content === undefined) continue
      const medias = Object.keys(responseObject.content)
      for (const media of medias) {
        const mediaObject = responseObject.content[media]

        // If this is a "well formed" schema object
        // e.g. object with properties or primitive type
        if (mediaObject.schema !== undefined) {
          const schemaObject = resolveRef({
            refOrObject: mediaObject.schema,
            $ref: spec.$ref,
          })

          // If this is an object with properties or polymorphic, move on
          if (
            Object.keys(schemaObject).length > 1 ||
            // in case of polymorphism we don't need to generate a schema object
            'allOf' in schemaObject ||
            'oneOf' in schemaObject ||
            'anyOf' in schemaObject
          )
            continue
          if (
            schemaObject.type === 'boolean' ||
            schemaObject.type === 'integer' ||
            schemaObject.type === 'null' ||
            schemaObject.type === 'number' ||
            schemaObject.type === 'string'
          )
            continue
        }

        // Detected non-descriptive response body schema object, its likely we should add a schema
        // https://konfigthis.com/docs/lint-rules#empty-response-body-schema

        // TODO other media types
        if (media !== 'application/json') {
          CliUx.ux.info(`Fixing media type "${media}" not implemented`)
          continue
        }
        numberOfEmptyResponseBodySchemasFixed++

        // If there were saved examples in postman collection the examples field
        // should be populated
        if ('examples' in mediaObject && mediaObject.examples !== undefined) {
          const examples = Object.values(mediaObject.examples).map(
            (exampleOrRef) => {
              // literally only assigning these variables so I can use it in the debugger
              const parser = jsonSchema
              const resolver = resolveRef
              return parser.parse(
                resolver({ refOrObject: exampleOrRef, $ref: spec.$ref }).value
              )
            }
          )
          const schema = generateAndMergeSchemaObjects({
            examples,
            version: getOasVersion({ spec: spec.spec }),
          })
          mediaObject.schema = schema
          continue
        }

        if ('example' in mediaObject && mediaObject.example !== undefined) {
          const example = jsonSchema.parse(mediaObject.example)
          mediaObject.schema = generateSchemaObjectFromJson({
            json: example,
            version,
          })
          mediaObject.example = undefined
          continue
        }

        const json = await getExample({
          progress,
          path,
          alwaysYes,
          ci,
          operation: { operation, path, method },
          mediaObject,
          spec,
          method,
          responseCode: statusCode,
          mediaType: media,
        })

        mediaObject.schema = generateSchemaObjectFromJson({
          json,
          version,
        })

        mediaObject.example = undefined

        CliUx.ux.debug(JSON.stringify(mediaObject, undefined, 2))
      }
    }
  }
  return numberOfEmptyResponseBodySchemasFixed
}

async function getExample({
  progress,
  path,
  alwaysYes,
  ci,
  operation,
  mediaObject,
  spec,
  method,
  responseCode,
  mediaType,
}: {
  progress: Progress
  path: string
  alwaysYes: boolean
  ci: boolean
  operation: OperationObject
  mediaObject: MediaObject
  spec: Spec
  method: string
  responseCode: string
  mediaType: string
}): Promise<Json> {
  logOperationDetails({ operation })
  const savedExample = progress.getExample({
    path,
    method,
    responseCode,
    mediaType,
  })

  if (savedExample) {
    const example = await getExampleJsonFromMediaObject({ mediaObject, spec })

    /**
     * If the saved example is the same as the written example then no need to confirm anything
     */
    if (example !== undefined && deepEquals(example, savedExample)) {
      return example
    }

    console.log(
      boxen(JSON.stringify(savedExample, undefined, 2), {
        title: 'Saved Example',
        padding: 1,
        titleAlignment: 'center',
      })
    )
    const confirm = await inquirerConfirm({
      message: 'Use saved example?',
      alwaysYes,
    })
    if (confirm) {
      return savedExample
    }
  }
  const json = await getOrRequestExampleJson({
    mediaObject,
    spec,
    operation,
    ci,
  })

  progress.saveExample({ path, method, json, responseCode, mediaType })
  return json
}

async function getOrRequestExampleJson({
  mediaObject,
  spec,
  operation,
  ci,
}: {
  mediaObject: MediaObject
  spec: Spec
  operation: OperationObject
  ci: boolean
}): Promise<Json> {
  const example = await getExampleJsonFromMediaObject({ mediaObject, spec })
  if (example !== undefined) return example
  console.log(
    boxen(
      `Action required for ${operation.method.toUpperCase()} ${
        operation.path
      }!\nPlease provide a response body example to generate response classes in the SDKs.\nRead for details: https://konfigthis.com/docs/lint-rules#empty-response-body-schema`,
      {
        title: 'Missing Response Body Schema',
        padding: 1,
        borderColor: 'red',
      }
    )
  )
  const { rawJson } = await inquirerPromptCI<{ rawJson: string }>({
    ci,
    ciDefault: { rawJson: '{}' },
    questions: [
      {
        type: 'editor',
        name: 'rawJson',
        message: `Missing response body schema detected for "${operation.method.toUpperCase()} ${
          operation.path
        }", provide example JSON here`,
        validate(input: string) {
          if (!isJsonString(input)) {
            CliUx.ux.warn('\nProvided invalid JSON string, try again.\n')
            return false
          }
          return true
        },
      },
    ],
  })
  return jsonSchema.parse(JSON.parse(rawJson))
}
