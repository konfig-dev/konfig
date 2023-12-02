import * as fs from 'fs-extra'
import { parseSpec } from 'konfig-lib'
import Ajv from 'ajv'

export async function validateDataForOpenApiSpecification({
  inputPath,
  specificationPath,
  schemaName,
}: {
  inputPath: string
  specificationPath: string
  schemaName: string
}) {
  const rawSpec = fs.readFileSync(specificationPath, 'utf8')
  const spec = await parseSpec(rawSpec)
  const openapiSchema = spec.specDereferenced?.components?.schemas?.[schemaName]
  if (openapiSchema === undefined) {
    throw new Error(`Schema ${schemaName} not found in ${specificationPath}`)
  }
  const inputData = JSON.parse(fs.readFileSync(inputPath, 'utf8'))
  const ajv = new Ajv()
  const result = ajv.validate(openapiSchema, inputData)
  return { result, errors: ajv.errors }
}
