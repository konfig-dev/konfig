/*
 * These rules dictate actual content of the API: headers, URL conventions, and general
 * Good Ideas™ for HTTP APIs, mainly from the books/blogs on apisyouwonthate.com
 */

import { truthy, pattern, length, schema } from '@stoplight/spectral-functions'
import { oas2, oas3 } from '@stoplight/spectral-formats'
import { oas } from '@stoplight/spectral-rulesets'
import type { RulesetDefinition } from '@stoplight/spectral-core'
import { DiagnosticSeverity } from '@stoplight/types'
import { listUsageOfSecurity } from './functions/listUsageOfSecurity'
import { redundantSecuritySchemes } from './functions/redundantSecuritySchemes'
import { potentialDataType } from './functions/potentialDataType'
import { redundantSecurityAndParameter } from './functions/redundantSecurityAndParameter'
import { konfigOasDocumentSchema } from './functions/konfigOasDocumentSchema'
import {
  OBJECT_WITH_NO_PROPERTIES_RULE_NAME,
  POTENTIAL_INCORRECT_DATA_TYPE_RULE_NAME,
} from 'konfig-lib/dist/util/get-ignore'
import { urlRegex } from 'konfig-lib/dist/url-regex'
import { useSecurityInstead } from './functions/useSecurityInstead'
import { operationIdRegex } from 'konfig-lib/dist/util/operation-id-schema'
import {
  disallowedHeaderNamesRequest,
  disallowedHeadersRegex,
} from 'konfig-lib/dist/util/disallowed-header-names-request'
import { tagNamingConvention } from './functions/tagNamingConvention'
import { duplicateSchemaNames } from './functions/duplicateSchemaNames'
import { structuredRequestBody } from './functions/structuredRequestBody'
import {
  rulesetJsonPaths,
  givenPaths,
} from 'konfig-lib/dist/util/ruleset-json-paths'
import { objectWithNoProperties } from './functions/objectWithNoProperties'
import { missing2xxResponse } from './functions/missing2xxResponse'
import { duplicateTagNames } from './functions/duplicateTagNames'
import { emptyPropertyName } from './functions/emptyPropertyName'
import { booleanQueryParameter } from './functions/booleanQueryParameter'
import { noParameterNamedRequestBody } from './functions/noParameterNamedRequestBody'
import { missingDataTimeFormat } from './functions/missingDateTimeFormat'
import { missingDateFormat } from './functions/missingDateFormat '
import { invalidRequiredPropertySyntax } from './functions/invalidRequiredPropertySyntax'
import { duplicateSdkMethodName } from './functions/duplicateSdkMethodName'

export default {
  extends: oas,
  aliases: rulesetJsonPaths,
  rules: {
    'operation-description': 'off',
    'operation-success-response': 'off',
    'info-contact': 'off',
    'oas2-schema': 'off',
    'oas3-unused-component': 'off',
    'konfig-oas2-schema': {
      description: 'Validate structure of OpenAPI v2 specification.',
      message: '{{error}}.',
      recommended: true,
      formats: [oas2],
      severity: DiagnosticSeverity.Error,
      given: '$',
      then: {
        function: konfigOasDocumentSchema,
      },
    },
    // Author: Phil Sturgeon (https://github.com/philsturgeon)
    'no-http-basic': {
      description: 'Consider a more secure alternative to HTTP Basic',
      message:
        'HTTP Basic is a pretty insecure way to pass credentials around, please consider an alternative.',
      given: '$.components.securitySchemes[*]',
      then: {
        field: 'scheme',
        function: pattern,
        functionOptions: {
          notMatch: 'basic',
        },
      },
      severity: DiagnosticSeverity.Error,
    },
    'no-parameter-named-requestbody': {
      given: rulesetJsonPaths.ParameterObjectNames,
      message: `Parameter's are not allowed to have a name that can be camelcased to "requestBody" as it is a reserved keyword for Konfig's TypeScript SDK`,
      then: {
        function: noParameterNamedRequestBody,
      },
      severity: DiagnosticSeverity.Error,
    },
    'duplicate-sdk-method-name': {
      given: '#OperationObject',
      then: [
        {
          function: duplicateSdkMethodName,
        },
      ],
      severity: DiagnosticSeverity.Warning,
    },
    'duplicate-tag-names': {
      given: rulesetJsonPaths.Tags,
      then: {
        function: duplicateTagNames,
      },
      severity: DiagnosticSeverity.Warning,
    },
    // Author: Advanced API & Integrations Team (https://www.oneadvanced.com/)
    'no-file-extensions-in-paths': {
      description:
        'Paths must not include file extensions such as .json, .xml, .html and .txt',
      message:
        'Paths must not include file extensions such as .json, .xml, .html and .txt. Use the OpenAPI `content` keyword to tell consumers which Media Types are available.',
      given: '$.paths[*]~',
      then: {
        function: pattern,
        functionOptions: {
          notMatch: '.(json|xml|html|txt)$',
        },
      },
      severity: DiagnosticSeverity.Error,
    },

    // Author: Advanced API & Integrations Team (https://www.oneadvanced.com/)
    'adv-security-schemes-defined': {
      description: 'All APIs MUST have a security scheme defined.',
      message: 'This API definition does not have any security scheme defined.',
      given: '$..components',
      then: {
        field: 'securitySchemes',
        function: schema,
        functionOptions: {
          schema: {
            type: 'object',
            minProperties: 1,
          },
        },
      },
      formats: [oas3],
      severity: DiagnosticSeverity.Error,
    },
    'components-schemas-defined-oas2': {
      description:
        'APIs should define definitions for developer friendly SDK generation.',
      message: '{{description}}',
      given: '$',
      then: [
        {
          function: schema,
          functionOptions: {
            schema: {
              type: 'object',
              properties: {
                definitions: {
                  type: 'object',
                  minProperties: 1,
                },
              },
              required: ['definitions'],
            },
          },
        },
      ],
      formats: [oas2],
      severity: DiagnosticSeverity.Warning,
    },
    [OBJECT_WITH_NO_PROPERTIES_RULE_NAME]: {
      message: `Schema type of "object" has no properties`,
      given: '#AllSchemaObjects',
      then: [
        {
          function: objectWithNoProperties,
        },
      ],
      formats: [oas3],
      severity: DiagnosticSeverity.Hint,
    },
    'invalid-required-property-syntax': {
      message: `{{error}}`,
      given: rulesetJsonPaths.AllSchemaObjects.map((path) => `${path}..`),
      then: [
        {
          function: invalidRequiredPropertySyntax,
        },
      ],
      severity: DiagnosticSeverity.Warning,
    },
    'missing-date-format': {
      message: `Schema type of "string" has no format "date" but has example "{{error}}"`,
      given: rulesetJsonPaths.AllSchemaObjects,
      then: [{ function: missingDateFormat }],
      formats: [oas3],
      severity: DiagnosticSeverity.Warning,
    },
    'missing-date-time-format': {
      message: `Schema type of "string" has no format "date-time" but has example "{{error}}"`,
      given: rulesetJsonPaths.AllSchemaObjects,
      then: [{ function: missingDataTimeFormat }],
      formats: [oas3],
      severity: DiagnosticSeverity.Warning,
    },
    'missing-2xx-response': {
      message: `Specify a "default" or "2xx" range HTTP Status Code response`,
      given: rulesetJsonPaths.ResponsesObjects,
      then: {
        function: missing2xxResponse,
      },
      severity: DiagnosticSeverity.Warning,
    },
    'components-schemas-defined-oas3': {
      description:
        'APIs should define schemas for developer friendly SDK generation.',
      message: '{{description}}',
      given: '$',
      then: [
        {
          function: schema,
          functionOptions: {
            schema: {
              type: 'object',
              properties: {
                components: {
                  type: 'object',
                  properties: {
                    schemas: {
                      type: 'object',
                      minProperties: 1,
                    },
                  },
                  required: ['schemas'],
                },
              },
              required: ['components'],
            },
          },
        },
      ],
      formats: [oas3],
      severity: DiagnosticSeverity.Warning,
    },
    'adv-security-schemes-defined-oas2': {
      description: 'All APIs MUST have a security scheme defined.',
      message: 'This API definition does not have any security scheme defined.',
      given: '$',
      then: {
        field: 'securityDefinitions',
        function: schema,
        functionOptions: {
          schema: {
            type: 'object',
            minProperties: 1,
          },
        },
      },
      formats: [oas2],
      severity: DiagnosticSeverity.Error,
    },
    'list-usage-of-security': {
      description:
        'List usage of security implies multiple possible security strategies which is uncommon',
      message:
        'Potential misuse of the security field. Only use list when you have multiple security strategies. (i.e. list vs map is significant https://swagger.io/docs/specification/authentication/)',
      given: ['$.security', '$.paths..security'],
      then: {
        function: listUsageOfSecurity,
      },
      formats: [oas3],
    },
    'operation-operationId': {
      message:
        'Assign Operation#operationId to create better SDK method names.',
      given: '#OperationObject',
      then: {
        field: 'operationId',
        function: truthy,
      },
    },
    'redundant-security-schemes': {
      message: 'Remove redundant security schemes from operation object.',
      given: '#OperationObject',
      then: {
        function: redundantSecuritySchemes,
      },
    },
    'redundant-security-and-parameter': {
      description:
        'Duplicate security and request parameters will cause generated SDKs to have undesired behavior.',
      message: `Detected security requirement and parameter with the same name "{{error}}".`,
      given: '#OperationObject',
      then: {
        function: redundantSecurityAndParameter,
      },
      formats: [oas2, oas3],
      severity: DiagnosticSeverity.Error,
    },
    'use-security-instead': {
      given: '#OperationObject',
      then: {
        function: useSecurityInstead,
      },
      formats: [oas2, oas3],
      severity: DiagnosticSeverity.Warning,
    },
    [POTENTIAL_INCORRECT_DATA_TYPE_RULE_NAME]: {
      message: '{{error}}. Ensure your types are correct.',
      given: givenPaths[POTENTIAL_INCORRECT_DATA_TYPE_RULE_NAME],
      then: {
        function: potentialDataType,
      },
      severity: DiagnosticSeverity.Error,
    },
    'valid-server-urls-oas3': {
      message: `"{{value}}" is not a valid URL`,
      given: '$.servers.*.url',
      then: {
        function: pattern,
        functionOptions: {
          match: urlRegex,
        },
      },
      formats: [oas3],
      severity: DiagnosticSeverity.Error,
    },
    'disallowed-header-names-request': {
      message: `Konfig's Python SDK does not allow 'Accept', 'Content-Type', or 'Authorization' to be specified as a header in the request`,
      given: rulesetJsonPaths.ParameterObjects,
      then: [
        {
          function: disallowedHeaderNamesRequest,
        },
      ],
      formats: [oas2, oas3],
      severity: DiagnosticSeverity.Error,
    },
    'disallowed-header-names-response': {
      message: `Konfig's Python SDK does not allow 'Accept', 'Content-Type', or 'Authorization' to be specified as a header in the response`,
      given: rulesetJsonPaths.ResponsesObjectHeaderNames,
      then: {
        function: pattern,
        functionOptions: {
          notMatch: disallowedHeadersRegex,
        },
      },
      formats: [oas2, oas3],
      severity: DiagnosticSeverity.Error,
    },
    'limited-oas3_1-support': {
      message: 'Konfig has limited support for OAS 3.1',
      given: '$.openapi',
      then: {
        function: pattern,
        functionOptions: {
          notMatch: `^3\.1\.\\d$`,
        },
      },
      formats: [oas3],
      severity: DiagnosticSeverity.Error,
    },
    'boolean-query-parameter': {
      message:
        'There is no standard method of serializing boolean values in query parameters according to RFC 6570 (https://www.rfc-editor.org/rfc/rfc6570). Konfig serializes boolean values as the lowercase string values "true" and "false". Note that this might not necessarily be compatible with your server implementation.',
      given: rulesetJsonPaths.ParameterObjects,
      then: {
        function: booleanQueryParameter,
      },
      severity: DiagnosticSeverity.Information,
    },
    'multiple-tags': {
      message:
        'Having more than 1 tag can be confusing as generated SDKs will only show up under one tag.',
      given: '#OperationObject.tags',
      then: {
        function: length,
        functionOptions: {
          min: 1,
          max: 1,
        },
      },
      severity: DiagnosticSeverity.Warning,
    },
    'empty-property-name': {
      given: '#AllSchemaObjects..',
      message: 'Empty property names cause generated SDKs to fail',
      then: {
        function: emptyPropertyName,
      },
      severity: DiagnosticSeverity.Error,
    },
    'empty-request-body-content': {
      message: 'Empty request body content is not allowed for SDK generation ',
      given: '#RequestContentObject',
      then: [
        {
          function: length,
          functionOptions: {
            min: 1,
          },
        },
      ],
      severity: DiagnosticSeverity.Error,
    },
    'empty-response-body-schema': {
      message:
        'Provide a response body schema to provide helpful information regarding the operation.',
      given: '#ResponseContentObject',
      then: [
        {
          field: 'schema',
          function: truthy,
        },
        {
          field: 'schema',
          function: length,
          functionOptions: {
            min: 1,
          },
        },
      ],
      severity: DiagnosticSeverity.Warning,
    },
    'duplicate-schema-name-oas3': {
      given: '$.components.schemas',
      then: [
        {
          function: duplicateSchemaNames,
        },
      ],
      severity: DiagnosticSeverity.Error,
      formats: [oas3],
    },
    'duplicate-schema-name-oas2': {
      given: '$.definitions',
      then: [
        {
          function: duplicateSchemaNames,
        },
      ],
      severity: DiagnosticSeverity.Error,
      formats: [oas2],
    },
    'structured-request-body': {
      given: '#RequestSchemaObject',
      then: [
        {
          function: structuredRequestBody,
        },
      ],
      severity: DiagnosticSeverity.Warning,
    },
    'tag-naming-convention': {
      given: '#Tag.name',
      then: [
        {
          function: tagNamingConvention,
        },
      ],
      severity: DiagnosticSeverity.Warning,
    },
    'operationId-pattern': {
      message: `The operation ID "{{value}}" does not match the regex: "${operationIdRegex}". Prefix operation IDs with "Tag_" (https://konfigthis.com/docs/tutorials/naming-operation-ids)`,
      given: '#OperationObject',
      then: [
        {
          field: 'operationId',
          function: pattern,
          functionOptions: {
            match: operationIdRegex,
          },
        },
      ],
      severity: DiagnosticSeverity.Warning,
    },
  },
} as RulesetDefinition
