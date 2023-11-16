import { KonfigYamlCommonType } from './KonfigYamlCommon'
import { parseSpec, SchemaObject, Spec } from './parseSpec'
import { stringify } from 'yaml'
import { Path, recurseObject } from './recurseObject'
import { resolveRef } from './resolveRef'
import {
  PaginationConfig,
  RemoveRequiredProperties,
  TopLevelOperations,
} from './KonfigYaml'
import { getOperations } from './get-operations'
import { matchesPaginationConfig } from './util/matches-pagination-config'
import { httpMethods } from './http-methods'
import { jsonSchema } from './util/json-schema'
import { JSONPath } from 'jsonpath-plus'
import { generateSchemaObjectFromJson } from './util/generate-schema-object-from-json'
import { getOasVersion } from './util/get-oas-version'
import { canOperationHaveSingleParameter } from './util/can-operation-have-single-parameter'
import { getSomeOperationRequestBodySchema } from './util/get-some-operation-request-body-schema'
import { getOperationParameters } from './util/get-operation-parameters'
import { getValidPropertySetFromSchema } from './util/get-valid-property-set-from-schema'
import { sanitizeSchemaName } from './util/sanitizeSchemaName'
import { recurseObjectTypeSchemaWithRequiredProperties } from './recurse-object-type-schema-with-required-properties'
import { fixCustomModifications } from './util/fix-custom-modifications'
import { defaultOr200RangeStatusCodeRegex } from './util/default-or-200-range-status-code-regex'
import { operationIdSchema } from './util/operation-id-schema'
import { filterSpecPaths } from './util/filter-spec-paths'
import equals from 'deep-equal'
import camelcase from './util/camelcase'
import { HttpMethods } from './forEachOperation'
import { transformInnerSchemas } from './util/transform-inner-schemas'
import { convertOneOfSchemasToAny } from './convert-one-of-schemas-to-any'
import { orderOpenApiSpecification } from './util/order-openapi-specification'
import { convertAnyOfSchemasToAny } from './convert-any-of-schemas-to-any'

export const doNotGenerateVendorExtension = 'x-do-not-generate'

type Options = {
  specString: string
  generator: string
  paginationConfig?: PaginationConfig
  topLevelOperations?: TopLevelOperations
  removeRequiredProperties?: RemoveRequiredProperties
} & Omit<KonfigYamlCommonType, 'defaultChangesetBumpType'>
export const transformSpec = async ({
  specString,
  filterQueryParams,
  optionalParameters,
  filterTags,
  allObjectsHaveAdditionalProperties,
  filterModels,
  filterRequestBodies,
  filterPaths,
  takeFirstTag,
  removeDefaultArrayValues,
  convertArrayDataTypesToAny,
  generator,
  attachNullabletoAllResponseSchemas,
  paginationConfig,
  topLevelOperations,
  validateRequiredPropertiesAndParametersAreNonEmpty,
  stripRequiredStringProperties,
  infoContactEmail,
  infoContactName,
  infoContactUrl,
  fixConfig,
  order,
  doNotValidateGloballyRequiredSecurity,
  removeRequiredProperties,
}: Options): Promise<string> => {
  const spec = await parseSpec(specString)

  if (!spec.spec.paths) throw Error('"path" is not an array')

  if (order !== undefined) {
    orderOpenApiSpecification({ spec: spec.spec, order })
  }

  // recurse through entire spec and shorten any strings that are grater than
  // 65535 bytes by taking out middle sections of the string
  recurseObject(spec.spec, ({ value: text, parent, path }) => {
    if (parent === undefined) return
    if (typeof text !== 'string') return

    // The Java String constant pool has a string limit of 65535 bytes so we
    // arbitrarily chose 65535 for that reason.
    if (text.length <= 65535) return

    const firstHalf = text.substring(0, 100)
    const secondHalf = text.substring(text.length - 100)
    const key = path[path.length - 1]
    Object.assign(parent, {
      [key]: `${firstHalf}...SHORTENED-BY-KONFIG...${secondHalf}`,
    })
  })

  // Ruby generator throws a syntax error for SnapTrade when property of object type is enum w/ default:
  // 1) SnapTrade::ModelPortfolio test an instance of ModelPortfolio should create an instance of ModelPortfolio
  //    Failure/Error: self.model_type = MODEL_TYPE::NMINUS_1
  //    NameError:
  //      uninitialized constant SnapTrade::ModelPortfolio::MODEL_TYPE
  //              self.model_type = MODEL_TYPE::NMINUS_1
  //
  // To avoid this we transform all in-line enum object type properties into components
  if (generator === 'ruby') {
    recurseObject(spec.spec, ({ value: objectTypeSchema, path }) => {
      if (typeof objectTypeSchema !== 'object') return
      if (objectTypeSchema === null) return
      if (objectTypeSchema['type'] !== 'object') return
      if (objectTypeSchema.properties === undefined) return
      for (const key in objectTypeSchema.properties) {
        const value = objectTypeSchema.properties[key]
        if (!('enum' in value)) continue
        // found an in-line enum property, lets convert this property to a $ref and create a component schema
        let name = camelcase(key, { pascalCase: true })
        if (spec.spec.components === undefined) spec.spec.components = {}
        if (spec.spec.components.schemas === undefined)
          spec.spec.components.schemas = {}

        // handle naming conflict case
        if (name in spec.spec.components.schemas) {
          // cool, the conflict is not a problem since the schemas equal each other anyway so just continue
          if (equals(spec.spec.components.schemas[name], value)) break
          else {
            // find a new prefix to prepend to the name
            // there are a two different cases we could run into
            // 1. we are in some in-line schema inside an operation
            // 2. we are in some schema under components

            // 1
            if (path[0] === 'paths') {
              const operationId = operationIdSchema.parse(
                spec.spec.paths?.[path[1] as any]?.[path[2] as HttpMethods]
                  ?.operationId
              )
              const prefix = operationId.split('_')[1]
              name = camelcase(`${prefix}_${name}`, { pascalCase: true })
            }

            // 2
            else if (path[0] === 'components') {
              name = camelcase(`${path[2]}_${name}`, { pascalCase: true })
            } else {
              throw Error(
                `Ran into unexpected case. Here is the path: ${path.join(', ')}`
              )
            }
          }
        }
        if (name in spec.spec.components.schemas)
          throw Error(
            `We couldn't find a new name for this enum property "${name}" :(`
          )

        spec.spec.components.schemas[name] = { ...value }
        Object.keys(value).forEach((p) => {
          delete value[p]
        })
        value['$ref'] = `#/components/schemas/${name}`
      }
    })
  }

  if (generator === 'python') {
    // The Python generator expects explicit component schemas to properly
    // generate types. For example, if you have an "array" type schema with an
    // inner-object, the inner-object must be a "$ref" to generate explicit
    // types for the array items in the Python SDK.
    transformInnerSchemas({ spec })
  }

  // Since "list" is a reserved keyword in PHP lets convert all operation IDs from "list" to "all"
  // Dylan: TODO: this should also be performed for Python but SnapTrade Python
  // SDK has already been published with "callList" as the method name so we can
  // only enable it if we also enable a feature flag for Python SDK
  // Notion Ticket: 33ae6d7954834584a62673739f9fe1c4
  if (generator === 'php') {
    recurseObject(spec.spec, ({ value: operationObject }) => {
      if (typeof operationObject !== 'object') return
      if (operationObject === null) return
      if (!('operationId' in operationObject)) return
      const operationId = operationObject['operationId']
      if (typeof operationId !== 'string') return
      if (!operationIdSchema.safeParse(operationId).success) return
      const methodName = operationId.split('_')[1]
      if (methodName === 'list') {
        operationObject['operationId'] = operationId.replace('_list', '_all')
      }
    })
  }

  // I thought that associative array as parameterse was more
  // ergonomic/idiomatic for PHP since the Stripe SDK is doing that but I later
  // realized that named arguments are objectively better because you can use
  // positional or named arguments as a consumer.
  //
  // if (generator === 'php') {
  //   // Ensure all operations have a single request parameter as this is more idiomatic/ergonomic for PHP
  //   const operations = getOperations({ spec: spec.spec })
  //   for (const { operation } of operations) {
  //     Object.assign(operation, { 'x-group-parameters': true })
  //   }
  // }

  if (fixConfig !== undefined) {
    await fixCustomModifications({ fixConfig, spec })
  }

  // if a schema has the "default" property filled but the "example" property is empty
  // then copy the "default" property to the "example" property
  recurseObject(spec.spec, ({ value: schema, path }) => {
    // if path includes responses then skip
    if (path.includes('responses')) return

    // check if "schema" variable is a SchemaObject
    // either it has a "type" property
    // or allOf/oneOf/anyOf
    if (schema === null) return
    if (typeof schema !== 'object') return
    if (
      !(
        'type' in schema ||
        'allOf' in schema ||
        'oneOf' in schema ||
        'anyOf' in schema
      )
    )
      return

    if (schema['default'] !== undefined && schema['example'] === undefined) {
      schema['example'] = schema['default']
    }
  })

  // use recurseObject function to iterate through all objects with the
  // "example" property and copy the property to another property on the same
  // object called "x-konfig-original-example"
  // This is useful because the Java OAS parser converts the "example" property
  // to a date if "format" is "date" but we want to preserve the original
  // example
  recurseObject(spec.spec, ({ value: schema }) => {
    // check if schema is of type object and includes 'example' property and return if not
    if (schema === null) return
    if (typeof schema !== 'object') return
    if (!('example' in schema)) return
    schema['x-konfig-original-example'] = schema['example']
  })

  if (removeRequiredProperties !== undefined) {
    recurseObjectTypeSchemaWithRequiredProperties(
      spec.spec,
      ({ value: schema }) => {
        const required: string[] = schema['required']
        for (const propertyToRemove of removeRequiredProperties) {
          const index = required.findIndex(
            (value) => value === propertyToRemove
          )
          if (index === -1) continue
          required.splice(index, 1)
        }
      }
    )
  }

  if (removeDefaultArrayValues) {
    recurseObject(spec.spec, ({ value: schema }) => {
      if (
        schema !== null &&
        schema['type'] === 'array' &&
        'default' in schema
      ) {
        delete schema['default']
      }
    })
  }

  if (infoContactEmail !== undefined) {
    if (spec.spec.info.contact === undefined) spec.spec.info.contact = {}
    spec.spec.info.contact.email = infoContactEmail
  }
  if (infoContactName !== undefined) {
    if (spec.spec.info.contact === undefined) spec.spec.info.contact = {}
    spec.spec.info.contact.name = infoContactName
  }
  if (infoContactUrl !== undefined) {
    if (spec.spec.info.contact === undefined) spec.spec.info.contact = {}
    spec.spec.info.contact.url = infoContactUrl
  }

  // x-konfig-strip (i.e. remove leading and trailing whitespace)
  if (stripRequiredStringProperties) {
    recurseObjectTypeSchemaWithRequiredProperties(
      spec.spec,
      ({ value: schema }) => {
        const required: string[] = schema['required']

        for (const property of required) {
          if (!(property in schema['properties'])) continue
          const propertySchema = schema['properties'][property]
          if (propertySchema.type !== 'string') continue
          if (propertySchema === undefined) continue
          if ('x-konfig-strip' in propertySchema) continue
          propertySchema['x-konfig-strip'] = true
        }
      }
    )
  }

  // validateRequiredPropertiesAndParametersAreNonEmpty (i.e. minLength: 1)
  if (validateRequiredPropertiesAndParametersAreNonEmpty) {
    recurseObject(spec.spec, ({ value: parameter, parent, path }) => {
      if (!Array.isArray(parent)) return
      if (path[3] !== 'parameters') return
      if (!('required' in parameter)) return
      if (!parameter['required']) return
      if (!('schema' in parameter)) return
      if ('minLength' in parameter['schema']) return
      parameter['schema']['minLength'] = 1
    })
    recurseObjectTypeSchemaWithRequiredProperties(
      spec.spec,
      ({ value: schema }) => {
        const required: string[] = schema['required']

        for (const property of required) {
          if (!(property in schema['properties'])) continue
          const propertySchema = schema['properties'][property]
          if (propertySchema.type !== 'string') continue
          if (propertySchema === undefined) continue
          if ('minLength' in propertySchema) continue
          propertySchema['minLength'] = 1
        }
      }
    )
  }

  // x-konfig-globally-required-security
  const operations = getOperations({ spec: spec.spec })
  if (
    spec.spec.components?.securitySchemes &&
    !doNotValidateGloballyRequiredSecurity
  ) {
    const securityCount: Record<string, number> = {}
    for (const { operation } of operations) {
      if (operation.security === undefined) continue
      const securities = operation.security.flatMap((requirements) =>
        Object.keys(requirements)
      )
      for (const security of securities) {
        const isInAllRequirements = operation.security.every((requirements) => {
          return security in requirements
        })
        if (isInAllRequirements) {
          if (security in securityCount) securityCount[security]++
          else securityCount[security] = 1
        }
      }
    }
    for (const security in spec.spec.components.securitySchemes) {
      const isGloballyRequired = spec.spec.security
        ? spec.spec.security.every((requirements) => {
            return security in requirements
          })
        : false
      const isRequired =
        isGloballyRequired || securityCount[security] === operations.length
      Object.assign(spec.spec.components.securitySchemes[security], {
        'x-konfig-globally-required-security': isRequired,
      })
      if (isRequired)
        Object.assign(spec.spec.info, {
          'x-konfig-has-globally-required-security': isRequired,
        })
    }
  }

  // konfig.yaml#optionalParameters
  if (optionalParameters !== undefined) {
    for (const { operation } of operations) {
      const parameters = getOperationParameters({ operation, spec })
      if (parameters === undefined) continue
      for (const parameter of parameters) {
        for (const optional of optionalParameters) {
          if (parameter.name !== optional.name) continue
          if (parameter.in !== optional.in) continue
          delete parameter['required']
        }
      }
    }
  }

  // x-konfig-uses-multipart-form-data
  for (const { operation } of operations) {
    if (operation.requestBody === undefined) continue
    const requestBody = resolveRef({
      refOrObject: operation.requestBody,
      $ref: spec.$ref,
    })
    const mediaTypes = Object.keys(requestBody.content)
    for (const mediaType of mediaTypes) {
      if (mediaType === 'multipart/form-data') {
        Object.assign(spec.spec.info, {
          'x-konfig-uses-multipart-form-data': true,
        })
      }
    }
  }

  // inherit top-level object example values in property examples
  recurseObject(spec.spec, ({ value: schema }) => {
    // Found object type schema
    if (typeof schema !== 'object') return
    if (!('type' in schema)) return
    if (schema['type'] !== 'object') return

    inheritExamplesFromTopLevelExample({ schema, spec })
  })

  // x-konfig-generated-schema (for generating example in generated
  // documentation for free-form object schema)
  // Why?
  // We do this because a lot of code in Java is built to generate examples from
  // a schema. So to generate examples for a free-form object (e.g. "type:
  // object" with no properties), we have to generate a schema for the example
  // and then reference that schema in the spec to reuse the same Java code.
  recurseObject(spec.spec, ({ value: schema, path }) => {
    // Found schema w/ example
    if (typeof schema !== 'object') return
    if (!('type' in schema)) return
    if (!('example' in schema)) return
    if (schema['example'] === undefined) return

    // Avoid redundant processing / If this a generated schema then don't process it
    if ('x-konfig-generated-schema' in schema) return
    if (
      path.find((prop) => prop.includes('konfig-generated-schema')) !==
      undefined
    )
      return

    // Create a new schema under the components that should not conflict with any existing component schemas
    const generatedSchemaName = sanitizeSchemaName({
      name: ['konfig-generated-schema', ...path].join('-'),
    })

    const normalizedJson = JSON.parse(JSON.stringify(schema['example']))
    const example = jsonSchema.parse(normalizedJson)

    const generatedSchema = generateSchemaObjectFromJson({
      json: example,
      version: getOasVersion({ spec: spec.spec }),
    })

    // generator service understands this and does not generate
    Object.assign(generatedSchema, {
      [doNotGenerateVendorExtension]: true,
    })

    if (spec.spec.components === undefined) spec.spec.components = {}
    if (spec.spec.components.schemas === undefined)
      spec.spec.components.schemas = {}
    spec.spec.components.schemas[generatedSchemaName] = generatedSchema
    Object.assign(schema, {
      'x-konfig-generated-schema': generatedSchemaName,
    })
  })

  // x-konfig-operation-can-have-single-parameter
  const xKonfigOperationCanHaveSingleParameterKey =
    'x-konfig-operation-can-have-single-parameter'
  for (const { operation } of operations) {
    const xKonfigOperationCanHaveSingleParameter =
      canOperationHaveSingleParameter({ operation, spec })
    Object.assign(operation, {
      [xKonfigOperationCanHaveSingleParameterKey]:
        xKonfigOperationCanHaveSingleParameter,
    })
  }

  // x-konfig-single-parameter-schema
  // This is used to help generate documentation
  for (const { operation, path, method } of operations) {
    const canHandleSingleParameter = (operation as any)[
      xKonfigOperationCanHaveSingleParameterKey
    ]
    if (!canHandleSingleParameter) continue
    const properties: NonNullable<SchemaObject['properties']> = {}
    const required: NonNullable<SchemaObject['required']> = []
    // x-konfig-is-parameter
    const xKonfigIsParameter: string[] = []
    const parameters = getOperationParameters({ operation, spec })
    if (parameters) {
      for (const parameter of parameters) {
        xKonfigIsParameter.push(parameter.name)
        if (parameter.schema === undefined) continue
        properties[parameter.name] = parameter.schema
        if (parameter.required) required.push(parameter.name)
      }
    }

    const requestBodySchema = getSomeOperationRequestBodySchema({
      operation,
      spec,
    })
    if (requestBodySchema !== undefined) {
      const allRequestBodyProperties = getValidPropertySetFromSchema({
        schema: requestBodySchema,
        spec,
      })
      allRequestBodyProperties.properties.forEach(({ name, schema }) => {
        properties[name] = schema
      })
      required.push(...allRequestBodyProperties.required)
    }
    const schema: SchemaObject = { type: 'object', properties, required }
    // Java generator understands this and does not generate
    Object.assign(schema, {
      [doNotGenerateVendorExtension]: true,
    })
    Object.assign(schema, {
      'x-konfig-is-parameter': xKonfigIsParameter,
    })
    const generatedSchemaName = sanitizeSchemaName({
      name: `konfig-generated-schema-single-parameter-schema-${method}-${path}`,
    })
    Object.assign(operation, {
      'x-konfig-single-parameter-schema': generatedSchemaName,
    })
    if (spec.spec.components === undefined) spec.spec.components = {}
    if (spec.spec.components.schemas === undefined)
      spec.spec.components.schemas = {}
    spec.spec.components.schemas[generatedSchemaName] = schema
  }

  if (topLevelOperations !== undefined) {
    const operations = getOperations({ spec: spec.spec })
    for (const { operation } of operations) {
      if (operation.operationId === undefined) continue
      if (!Array.isArray(topLevelOperations)) {
        if (Object.keys(topLevelOperations).includes(operation.operationId)) {
          Object.assign(operation, {
            'x-konfig-top-level-operation':
              topLevelOperations[operation.operationId],
          })
        }
      } else {
        const matchingOperation = topLevelOperations.find(
          ({ operationId }) => operationId === operation.operationId
        )
        if (matchingOperation !== undefined) {
          Object.assign(operation, {
            'x-konfig-top-level-operation': matchingOperation.methodName,
          })
        }
      }
    }
  }

  if (generator === 'csharp') {
    // remove uuid format from any "string" type schemas
    // Why? Well SnapTrade has the following schema:
    /*
        - in: query
          required: false
          name: brokerage_authorizations
          description:
            Optional. Comma seperated list of authorization IDs (only use if
            filtering is needed on one or more authorizations).
          schema:
            type: string
            format: uuid
            example: 917c8734-8470-4a3e-a18f-57c3f2ee6631
    */
    // But then I realized the whole use of the "Guid" class in C# is actually a bit annoying when all other languages
    // will accept a string type for a UUID. So I decided to remove the format from all string types in C#.
    recurseObject(spec.spec, ({ value: schema }) => {
      if (schema === null) return
      if (typeof schema !== 'object') return
      if (schema['type'] !== 'string') return
      if (schema['format'] !== 'uuid') return
      delete schema['format']
    })
  }

  if (generator === 'java') {
    const successfulVendorExtension = 'x-konfig-is-used-in-successful-response'
    const nonSuccessfulVendorExtension =
      'x-konfig-is-used-in-non-successful-response'

    // recurse over all operations and tag any schemas that are used in a non-successful response with a "x-konfig-used-in-non-successful-response" or "x-konfig-used-in-successful-response" vendor extension
    const operations = getOperations({ spec: spec.spec })
    for (const { operation } of operations) {
      for (const statusCode in operation.responses) {
        const responseObjectOrRef = operation.responses[statusCode]
        const responseObject = resolveRef({
          refOrObject: responseObjectOrRef,
          $ref: spec.$ref,
        })
        if (responseObject.content === undefined) continue
        for (const media in responseObject.content) {
          const mediaObjectOrRef = responseObject.content[media]
          const mediaObject = resolveRef({
            refOrObject: mediaObjectOrRef,
            $ref: spec.$ref,
          })
          if (mediaObject.schema === undefined) continue
          const schema = resolveRef({
            refOrObject: mediaObject.schema,
            $ref: spec.$ref,
          })
          if (defaultOr200RangeStatusCodeRegex.test(statusCode)) {
            Object.assign(schema, {
              [successfulVendorExtension]: true,
            })
          } else {
            Object.assign(schema, {
              [nonSuccessfulVendorExtension]: true,
            })
            // also add x-do-not-generate to ResponseObject
            Object.assign(responseObject, {
              [doNotGenerateVendorExtension]: true,
            })
          }
        }
      }
    }

    // recurse over all schema objects and add the "x-do-not-generate" vendor
    // extension if the schema is only used in a non-successful response code
    // this is helpful in Java SDK because schemas only used for non-succcessful
    // responses are not used at al
    recurseObject(spec.spec, ({ value: schema, path }) => {
      if (typeof schema !== 'object') return
      if (schema == null) return
      if (!('type' in schema)) return

      if (
        successfulVendorExtension in schema ||
        schema[successfulVendorExtension]
      )
        return
      if (
        !(nonSuccessfulVendorExtension in schema) ||
        !schema[nonSuccessfulVendorExtension]
      )
        return
      Object.assign(schema, {
        [doNotGenerateVendorExtension]: true,
      })
    })

    // convert all "oneOf" schemas to {} to denote any since java generator does not support polymorphism
    convertOneOfSchemasToAny({ spec: spec.spec })
    convertAnyOfSchemasToAny({ spec: spec.spec })
  }

  if (generator === 'dart') {
    convertOneOfSchemasToAny({ spec: spec.spec })
  }

  // remove invalid escape sequence "\*" for Python from any descriptions in a schema component in the spec
  if (spec.spec.components?.schemas) {
    for (const schema of Object.values(spec.spec.components.schemas)) {
      if (schema.description) {
        schema.description = schema.description.replace(/\\\*/g, '')
      }
    }
  }

  if (generator === 'swift') {
    // get rid of all "format: date" fields since its problematic when you just
    // want to pass a date string w/ JSON Content-Type and Swift SDK
    // auto-serializes to format you don't want This happens in Nuitee's
    // specific use-case. But more often than not having the ability to choose
    // how you format the date string is more important for now. Maybe later we
    // can add vendor extension to choose serialization format for date in SDK
    // (and infer from Postman as well).
    recurseObject(spec.spec, ({ value: schema }) => {
      if (
        schema !== null &&
        schema !== undefined &&
        schema['type'] === 'string' &&
        schema['format'] === 'date'
      ) {
        delete schema['format']
      }
    })
  }

  if (paginationConfig !== undefined) {
    const operations = getOperations({ spec: spec.spec })
    for (const { operation } of operations) {
      if (operation.responses === undefined) continue
      const parameters =
        operation.parameters === undefined
          ? []
          : operation.parameters.map((parameter) =>
              resolveRef({ refOrObject: parameter, $ref: spec.$ref })
            )
      const responses = Object.values(operation.responses).map((response) =>
        resolveRef({ refOrObject: response, $ref: spec.$ref })
      )
      const requestBody =
        operation.requestBody === undefined
          ? undefined
          : resolveRef({ refOrObject: operation.requestBody, $ref: spec.$ref })
      if (
        !matchesPaginationConfig({
          parameters,
          responses,
          requestBody,
          pagination: paginationConfig,
          spec,
        })
      )
        continue
      Object.assign(operation, { 'x-konfig-pagination': true })
    }
  }

  if (convertArrayDataTypesToAny) {
    recurseObject(spec.spec, ({ value: schema, path }) => {
      if (
        schema !== null &&
        schema['type'] === 'array' &&
        !path.includes('examples')
      ) {
        Object.keys(schema).forEach((key) => delete schema[key])
      }
    })
  }

  // flatten allOf of size 1 with $ref to $ref type schema object
  recurseObject(spec.spec, ({ value: schema }) => {
    if (
      schema === null ||
      schema === undefined ||
      !Array.isArray(schema['allOf']) ||
      schema['allOf'].length !== 1 ||
      schema['allOf'][0]['$ref'] === undefined ||
      resolveRef({ refOrObject: schema['allOf'][0], $ref: spec.$ref }).type !==
        'array'
    )
      return
    schema['$ref'] = schema['allOf'][0]['$ref']
    // delete all properties besides $ref
    for (const property in schema) {
      if (property === '$ref') continue
      if (Object.prototype.hasOwnProperty.call(schema, property)) {
        delete schema[property]
      }
    }
  })

  // Make sure each path only has one tag
  if (takeFirstTag) {
    for (const path in spec.spec.paths) {
      const pathObject = spec.spec.paths[path]
      if (!pathObject) throw Error()
      for (const method of httpMethods) {
        const operationObject = pathObject[method]
        if (operationObject === undefined) continue
        if (!operationObject.tags)
          throw Error(`${method} ${path} does not have tags`)
        if (operationObject.tags.length < 1) throw Error()
        operationObject.tags = [operationObject.tags[0]]
      }
    }
  }

  if (filterQueryParams !== undefined) {
    for (const path in spec.spec.paths) {
      const pathObject = spec.spec.paths[path]
      if (!pathObject) throw Error()
      for (const method of httpMethods) {
        const operationObject = pathObject[method]
        if (!operationObject?.parameters) throw Error()
        for (const filterQueryParam of filterQueryParams) {
          const idx = operationObject.parameters.findIndex(
            (p) => 'name' in p && p.name === filterQueryParam
          )
          if (idx !== -1) operationObject.parameters.splice(idx, 1)
        }
      }
    }
  }

  if (filterTags !== undefined) {
    for (const path in spec.spec.paths) {
      const pathObject = spec.spec.paths[path]
      if (!pathObject) throw Error()
      for (const method of httpMethods) {
        const operationObject = pathObject[method]
        if (!operationObject?.tags) continue
        const tags = operationObject.tags
        if (tags.filter((tag) => filterTags.includes(tag)).length > 0) {
          delete spec.spec.paths[path]
        }
      }
    }
    if (spec.spec.tags)
      spec.spec.tags = spec.spec.tags.filter(
        (tag) => !filterTags.includes(tag.name)
      )
  }

  if (filterPaths !== undefined) {
    filterSpecPaths({ spec: spec.spec, filter: filterPaths })
  }

  if (filterModels !== undefined) {
    if (spec.spec.components?.schemas) {
      for (const model of filterModels) {
        delete spec.spec.components.schemas[model]
      }
    }
  }

  if (filterRequestBodies !== undefined) {
    if (spec.spec.components?.requestBodies) {
      for (const requestBody of filterRequestBodies) {
        delete spec.spec.components.requestBodies[requestBody]
      }
    }
  }

  const requestBodyRefs = resolveAllRequestBodySchemasPaths(spec)
  const parameterSchemaRefs = resolveAllParameterSchemasPaths(spec)

  if (attachNullabletoAllResponseSchemas) {
    recurseObject(spec.spec, ({ key: schemaKeyOrSchemaName, value, path }) => {
      if (
        // is this a schema object?
        typeof value === 'object' &&
        !Array.isArray(value) &&
        value != null &&
        'type' in value &&
        ['string', 'number', 'integer', 'object', 'array', 'boolean'].includes(
          value['type']
        ) &&
        schemaKeyOrSchemaName != null &&
        // is this schema is not apart of any request body?
        requestBodyRefs.every((ref) => !isJsonRefSubPath(path, ref)) &&
        // is this schema is not apart of any parameter?
        parameterSchemaRefs.every((ref) => !isJsonRefSubPath(path, ref))
      ) {
        value['nullable'] = true
      }
    })
  }

  if (allObjectsHaveAdditionalProperties) {
    if (
      typeof allObjectsHaveAdditionalProperties === 'object' &&
      !allObjectsHaveAdditionalProperties.excludeGenerators?.includes(generator)
    ) {
      recurseObject(
        spec.spec,
        ({ key: schemaKeyOrSchemaName, value, path }) => {
          if (
            typeof value === 'object' &&
            !Array.isArray(value) &&
            schemaKeyOrSchemaName != null
          ) {
            if (
              value !== null &&
              'type' in value &&
              value['type'] === 'object'
            ) {
              if (typeof allObjectsHaveAdditionalProperties === 'object') {
                if (allObjectsHaveAdditionalProperties.include) {
                  /**
                   * Always add "additionalProperties" to configured included schema names
                   */
                  if (
                    allObjectsHaveAdditionalProperties.include.includes(
                      schemaKeyOrSchemaName
                    )
                  ) {
                    value['additionalProperties'] = true
                    return
                  }
                }
                if (allObjectsHaveAdditionalProperties.exclude) {
                  /**
                   * Do not add "additionalProperties" to configured excluded schema names
                   */
                  if (
                    allObjectsHaveAdditionalProperties.exclude.includes(
                      schemaKeyOrSchemaName
                    )
                  ) {
                    return
                  }
                }
                if (allObjectsHaveAdditionalProperties.requestBody)
                  value['additionalProperties'] = true
                else if (
                  // schema is not apart of a request body
                  requestBodyRefs.every((ref) => !isJsonRefSubPath(path, ref))
                )
                  value['additionalProperties'] = true
              } else {
                value['additionalProperties'] = true
              }
            }
          }
        }
      )
    }
  }

  return serialize({ spec: spec.spec })
}

/**
 * Traverse properties and fill empty object examples based on top-level example
 * If example doesn't exist for property then just exit
 */
function inheritExamplesFromTopLevelExample({
  schema,
  objectExample = null,
  path = [],
  spec,
}: {
  schema: SchemaObject
  objectExample?: null | boolean | number | string | object | any[]
  path?: string[]
  spec: Spec
}): void {
  if (objectExample === null)
    objectExample = getExampleFromSchemaObject({ schema })
  if (path.length === 0 && objectExample === null) return

  if (schema.type === 'object') {
    for (const property in schema.properties) {
      const propertySchemaOrRef = schema.properties[property]
      const propertySchema = resolveRef({
        refOrObject: propertySchemaOrRef,
        $ref: spec.$ref,
      })
      inheritExamplesFromTopLevelExample({
        schema: propertySchema,
        objectExample: objectExample,
        path: [...path, property],
        spec,
      })
    }
  }

  if (
    schema.type === 'boolean' ||
    schema.type === 'number' ||
    schema.type === 'integer' ||
    schema.type === 'string'
  ) {
    if (schema.example !== undefined) return
    const jsonpath = `$.${path.join('.')}`
    const propertyExample = JSONPath({
      json: objectExample,
      path: jsonpath,
      wrap: false,
    })
    schema.example = propertyExample
  }
}

function getExampleFromSchemaObject({
  schema,
}: {
  schema: SchemaObject
}): null | boolean | number | string | object | any[] {
  if (schema.example) {
    return schema.example
  }
  if ('x-examples' in schema) {
    const examples = Object.values((schema as any)['x-examples'])
    if (examples.length === 0) return null
    return examples[0] as any
  }
  return null
}

function serialize({ spec }: { spec: Spec['spec'] }) {
  return stringify(JSON.parse(JSON.stringify(spec)))
}

const hasSubArray = (master: string[], sub: string[]) => {
  return sub.every(
    (
      (i) => (v) =>
        (i = master.indexOf(v, i) + 1)
    )(0)
  )
}

const isJsonRefSubPath = (path: Path, subpath: string) => {
  const withoutRoot = subpath.split('/').map((path) => jsonRefUnescape(path))
  withoutRoot.shift()
  return hasSubArray(path, withoutRoot)
}

/**
 * https://swagger.io/docs/specification/using-ref/
 * You'll want to Json ref escape the string in case the path itself has "/" or "~" characters
 */
const jsonRefEscape = (path: string) => {
  return path.replaceAll('~', '~0').replaceAll('/', '~1')
}

// https://swagger.io/docs/specification/using-ref/
const jsonRefUnescape = (path: string) => {
  return path.replaceAll('~0', '~').replaceAll('~1', '/')
}

type Ref = string
/**
 * Walks through the entire OAS and adds any schema $ref paths that are used as
 * part of an operation's request body
 */
const resolveAllRequestBodySchemasPaths = ({ spec, $ref }: Spec): Ref[] => {
  if (!spec.paths) throw Error('"path" does not exist')
  const refs: Ref[] = []
  for (const path in spec.paths) {
    const pathObject = spec.paths[path]
    if (!pathObject) throw Error()
    for (const method of httpMethods) {
      const operationObject = pathObject[method]
      if (!operationObject?.requestBody) continue
      let requestBody = operationObject.requestBody
      const requestBodySchemaName =
        '$ref' in requestBody ? requestBody.$ref.split('/').at(-1) : null
      requestBody =
        '$ref' in requestBody ? $ref.get(requestBody.$ref) : requestBody

      if ('content' in requestBody) {
        for (const mediaType in requestBody.content) {
          const mediaTypeObject = requestBody.content[mediaType]
          if (!mediaTypeObject.schema) continue
          if ('$ref' in mediaTypeObject.schema) {
            refs.push(mediaTypeObject.schema.$ref)
          } else {
            if (requestBodySchemaName === null) {
              refs.push(
                `#/paths/${jsonRefEscape(
                  path
                )}/${method}/requestBody/content/${jsonRefEscape(
                  mediaType
                )}/schema`
              )
            } else {
              refs.push(
                `#/components/requestBodies/${requestBodySchemaName}/content/${jsonRefEscape(
                  mediaType
                )}/schema`
              )
            }
          }
        }
      }
    }
  }
  return refs
}

/**
 * Walks through the entire OAS and adds any schema $ref paths that are used as
 * part of an operation's request body
 */
const resolveAllParameterSchemasPaths = ({ spec, $ref }: Spec): Ref[] => {
  if (!spec.paths) throw Error('"path" does not exist')
  const refs: Ref[] = []
  for (const path in spec.paths) {
    const pathObject = spec.paths[path]
    if (!pathObject) throw Error()
    for (const method of httpMethods) {
      const operationObject = pathObject[method]
      if (!operationObject?.parameters) continue
      let parameters = operationObject.parameters
      for (const i in parameters) {
        const parameterOrRef = parameters[i]
        const parameter = resolveRef({ refOrObject: parameterOrRef, $ref })
        const schemaOrRef = parameter.schema
        if (schemaOrRef === undefined) continue
        if ('$ref' in schemaOrRef) refs.push(schemaOrRef.$ref)
        else
          refs.push(
            `#/paths/${jsonRefEscape(path)}/${method}/parameters/${i}/schema`
          )
      }
    }
  }
  return refs
}
