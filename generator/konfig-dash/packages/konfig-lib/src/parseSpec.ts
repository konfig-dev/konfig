import * as fs from 'fs-extra'
import * as path from 'path'
import * as os from 'os'
import * as yaml from 'js-yaml'

import SwaggerParser from '@apidevtools/swagger-parser'
import { OpenAPIV3, OpenAPIV3_1 } from 'openapi-types'
import { convertSwaggerToOAS3 } from './convertSwaggerToOAS3'

export type SchemaObject = OpenAPIV3.SchemaObject | OpenAPIV3_1.SchemaObject

export type PathsObject = OpenAPIV3.PathsObject | OpenAPIV3_1.PathsObject

export type RequestBodyObject =
  | OpenAPIV3.RequestBodyObject
  | OpenAPIV3_1.RequestBodyObject

export type MediaTypeObject =
  | OpenAPIV3.MediaTypeObject
  | OpenAPIV3_1.MediaTypeObject

export type ParameterObject =
  | OpenAPIV3.ParameterObject
  | OpenAPIV3_1.ParameterObject

export type OpenAPIV3_XDocument = OpenAPIV3.Document | OpenAPIV3_1.Document

export type ComponentsObject = NonNullable<OpenAPIV3_XDocument['components']>

export type ResponsesObject =
  | OpenAPIV3.ResponsesObject
  | OpenAPIV3_1.ResponsesObject

export type ResponseObject =
  | OpenAPIV3.ResponseObject
  | OpenAPIV3_1.ResponseObject

export type Spec = {
  spec: OpenAPIV3_XDocument
  $ref: SwaggerParser.$Refs
  specDereferenced: OpenAPIV3_XDocument | null
}

export const parseSpec = async (rawSpecString: string): Promise<Spec> => {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'konfig-parseSpec'))
  const specFilePath = `${tmpDir}/spec`

  // see if rawSpecString is yaml and convert it to JSON before writing to specFilePath
  // we do this because yaml parsing actually supports dates which is problematic when
  let specJson: string | null = null
  try {
    specJson = JSON.stringify(JSON.parse(rawSpecString))
  } catch (e) {
    specJson = JSON.stringify(yaml.load(rawSpecString))
  }
  if (specJson === null) throw Error('Could not parse spec as JSON or YAML')
  fs.writeFileSync(specFilePath, specJson)

  // We specifically do not want to fully SwaggerParser#dereference the spec so
  // that generated SDKs generates and uses the provided refs & schemas (models)
  // SwaggerParser#parse is exactly what we want to call.
  const parser = new SwaggerParser()
  let spec = await parser.parse(specFilePath)

  // Handle Swagger / OAS2 by converting to OAS3
  if (!('openapi' in spec)) {
    spec = await convertSwaggerToOAS3({ spec })
    spec = await parser.parse(spec)
    if (!('openapi' in spec))
      throw Error('Could not successfuly convert to OAS version 3')
  }

  try {
    // its important to make directly call static resolve so that parser state
    // isnt shared with dereferenced spec
    let specDereferenced = await SwaggerParser.dereference(specFilePath, {
      dereference: { circular: 'ignore' },
    })
    if (!('openapi' in specDereferenced))
      specDereferenced = await convertSwaggerToOAS3({ spec: specDereferenced })
    return {
      spec,
      $ref: parser.$refs,
      specDereferenced,
    }
  } catch (e) {
    // Let pass
  }
  fs.removeSync(tmpDir)
  return {
    spec,
    $ref: parser.$refs,
    specDereferenced: null,
  }
}
