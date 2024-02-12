import * as inquirer from 'inquirer'
import {
  getOperations,
  MediaObject,
  OpenAPIV3_XDocument,
  Operation,
  resolveRef,
  SchemaObject,
  Spec,
  updateOrSetComponentsSchema,
} from 'konfig-lib'
import { Progress } from './fix-progress'
import { inquirerConfirm } from './inquirer-confirm'
import { logOperationDetails } from './log-operation-details'
import camelcase from 'camelcase'
import boxen from 'boxen'
import { validateSchemaName } from './validate-schema-name'
import { matchesExistingSchemaWithName } from './matches-existing-schema-with-name'

export async function fixComponentsSchemasDefinedOas3({
  spec,
  progress,
  alwaysYes,
  auto,
  noInput,
}: {
  spec: Spec
  progress: Progress
  alwaysYes: boolean
  auto: boolean
  noInput: boolean
}): Promise<number> {
  let numberOfComponentsDefined = 0
  const operations = getOperations({ spec: spec.spec })

  // Request Body
  for (const { operation, path, method } of operations) {
    if (operation.requestBody === undefined) continue
    const requestBody = resolveRef({
      refOrObject: operation.requestBody,
      $ref: spec.$ref,
    })
    for (const media of Object.keys(requestBody.content)) {
      const mediaObjectOrRef = requestBody.content[media]
      const mediaObject = resolveRef({
        refOrObject: mediaObjectOrRef,
        $ref: spec.$ref,
      })
      if (mediaObject.schema === undefined) continue
      if ('$ref' in mediaObject.schema) continue
      numberOfComponentsDefined++
      const savedSchemaName = progress.getRequestSchemaName({
        path,
        method,
        media,
      })
      logOperationDetails({ operation: { operation, path, method } })
      if (savedSchemaName !== undefined) {
        const confirm = await inquirerConfirm({
          message: `Use existing schema name for request body schema "${savedSchemaName}"?`,
          alwaysYes,
        })
        if (confirm) {
          extractToComponentsSchema({
            spec: spec.spec,
            name: savedSchemaName,
            objectWithSchema: mediaObject,
            schemaObject: mediaObject.schema,
          })
          continue
        }
      }
      const name = await inquireName({
        schema: mediaObject.schema,
        type: 'request',
        spec: spec.spec,
        auto,
        noInput,
        operation,
      })
      extractToComponentsSchema({
        spec: spec.spec,
        name,
        objectWithSchema: mediaObject,
        schemaObject: mediaObject.schema,
      })
      progress.saveRequestSchemaName({ path, method, media, name })
    }
  }

  // Responses
  for (const { operation, path, method } of operations) {
    logOperationDetails({ operation: { operation, path, method } })
    for (const statusCode of Object.keys(operation.responses)) {
      const responseObjectOrRef = operation.responses[statusCode]
      const responseObject = resolveRef({
        refOrObject: responseObjectOrRef,
        $ref: spec.$ref,
      })
      if (responseObject.content === undefined) continue
      for (const media of Object.keys(responseObject.content)) {
        const mediaObjectOrRef = responseObject.content[media]
        const mediaObject = resolveRef({
          refOrObject: mediaObjectOrRef,
          $ref: spec.$ref,
        })
        if (mediaObject.schema === undefined) continue
        if ('$ref' in mediaObject.schema) continue
        numberOfComponentsDefined++
        const savedSchemaName = progress.getResponseSchemaName({
          path,
          method,
          media,
          statusCode,
        })
        logOperationDetails({ operation: { operation, path, method }, media })
        if (savedSchemaName !== undefined) {
          const confirm = await inquirerConfirm({
            message: `Use existing schema name "${savedSchemaName}"?`,
            alwaysYes,
          })
          if (confirm) {
            extractToComponentsSchema({
              spec: spec.spec,
              objectWithSchema: mediaObject,
              name: savedSchemaName,
              schemaObject: mediaObject.schema,
            })
            continue
          }
        }
        const name = await inquireName({
          schema: mediaObject.schema,
          type: 'response',
          spec: spec.spec,
          auto,
          noInput,
          operation,
          statusCode,
        })
        extractToComponentsSchema({
          spec: spec.spec,
          name,
          objectWithSchema: mediaObject,
          schemaObject: mediaObject.schema,
        })
        progress.saveResponseSchemaName({
          path,
          method,
          media,
          statusCode,
          name,
        })
      }
    }
  }
  return numberOfComponentsDefined
}

function extractToComponentsSchema({
  spec,
  name,
  objectWithSchema,
  schemaObject,
}: {
  spec: Spec['spec']
  name: string
  objectWithSchema: MediaObject
  schemaObject: SchemaObject
}) {
  objectWithSchema.schema = { $ref: `#/components/schemas/${name}` }
  updateOrSetComponentsSchema({ schemaObject, spec, schemaName: name })
}

async function inquireName({
  schema,
  type,
  spec,
  auto,
  noInput,
  operation,
  statusCode,
}: {
  spec: Spec['spec']
  schema: SchemaObject
  operation: Operation
  type: 'response' | 'request'
  statusCode?: string
  auto: boolean
  noInput: boolean
}) {
  console.log(
    boxen(JSON.stringify(schema, undefined, 2), {
      title: 'Schema',
      padding: 1,
    })
  )
  if (auto && operation.operationId !== undefined) {
    const parts = operation.operationId.split('_')
    const part1 = parts[0]
    const part2 = camelcase(parts[1], { pascalCase: true })
    const part3 = camelcase(type, { pascalCase: true })
    const name = `${part1}${part2}${part3}`
    if (validateSchemaName({ name, spec })) return name
    if (matchesExistingSchemaWithName({ name, spec, schema })) return name
    if (statusCode !== undefined) {
      const secondNameTry = `${part1}${part2}${statusCode}${part3}`
      if (validateSchemaName({ name: secondNameTry, spec }))
        return secondNameTry
      if (matchesExistingSchemaWithName({ name: secondNameTry, spec, schema }))
        return secondNameTry
      if (noInput) return suffixWithInteger(secondNameTry, spec)
    }
    if (noInput) return suffixWithInteger(name, spec)
  }
  const { name } = await inquirer.prompt<{ name: string }>([
    {
      type: 'input',
      name: 'name',
      message: `Enter schema name for ${`${statusCode} `}${type} (use "PascalCase" naming convention):`,
      validate(name) {
        return (
          validateSchemaName({ name, spec }) ||
          `Ensure your name is non-empty, unique, and follows "PascalCase" naming convention`
        )
      },
    },
  ])
  return name
}

function suffixWithInteger(name: string, spec: OpenAPIV3_XDocument) {
  let i = 1
  while (!validateSchemaName({ name: `${name}${i}`, spec })) i++
  return `${name}${i}`
}
