import { HttpMethodsEnum } from 'konfig-lib'
import {
  CodeGeneratorHttpSnippetConstructorArgs,
  CodeGeneratorHttpsnippet,
} from './code-generator-httpsnippet'
import { test, expect } from 'vitest'

const gitConfig = {
  owner: '',
  path: '',
}

test('httpsnippet - HAR validation error', async () => {
  const args: CodeGeneratorHttpSnippetConstructorArgs = {
    contentType: null,
    httpMethod: HttpMethodsEnum.GET,
    path: '/v1/runs/{workflow_run_id}',
    parameters: [
      {
        description: 'The ID of the workflow run to retrieve.',
        name: 'workflow_run_id',
        required: true,
        in: 'path',
        example: 'rnp_x3p27VQk6MyJfLe',
        schema: { type: 'string' },
      },
    ],
    requestBody: null,
    securitySchemes: {
      api_key: { type: 'apiKey', in: 'header', name: 'X-Api-Key' },
    },
    formData: {
      parameters: { workflow_run_id: 'm ' },
      security: {
        api_key: { type: 'apiKey', in: 'header', key: 'X-Api-Key', value: '' },
      },
      requestBody: '',
    },
    languageConfigurations: {
      typescript: {
        clientName: 'Leap',
        packageName: '@leap-ai/workflows',
        git: gitConfig,
      },
      python: {
        clientName: 'Leap',
        packageName: 'leap_workflows',
        projectName: 'leap-python-sdk',
        git: gitConfig,
      },
    },
    servers: ['https://api.workflows.tryleap.ai'],
    operationId: 'WorkflowRuns_getWorkflowRun',
    tag: 'Workflow Runs',
    basePath: 'https://api.workflows.tryleap.ai',
    oauthTokenUrl: null,
    originalOauthTokenUrl: null,
    requestBodyRequired: false,
    targetId: 'shell',
  }
  const code = await new CodeGeneratorHttpsnippet(args).snippet()
  expect(code).toMatchSnapshot()
})

test('httpsnippet - deeply nested objects with files', async () => {
  const args: CodeGeneratorHttpSnippetConstructorArgs = {
    contentType: 'multipart/form-data',
    httpMethod: HttpMethodsEnum.POST,
    path: '/v1/ingest/documents/local',
    parameters: [],
    requestBody: {
      name: '',
      in: 'body',
      schema: {
        type: 'array',
        items: {
          type: 'object',
          required: ['blob', 'metadata'],
          properties: {
            blob: {
              description: 'The actual file being uploaded.',
              type: 'string',
              format: 'binary',
            },
            metadata: {
              type: 'object',
              required: ['bucketId', 'fileName', 'fileType'],
              properties: {
                bucketId: {
                  type: 'integer',
                  example: 1234,
                },
                fileName: {
                  type: 'string',
                  example: 'my_file.txt',
                },
                fileType: {
                  type: 'string',
                  enum: ['txt', 'docx', 'pptx', 'xlsx', 'pdf', 'png', 'jpg'],
                },
                metadata: {
                  type: 'object',
                  example: {
                    key: 'value',
                  },
                },
                callbackData: {
                  type: 'string',
                  example: 'my_callback_data',
                },
                callbackUrl: {
                  type: 'string',
                  example: 'https://my.callback.url.com',
                },
              },
            },
          },
        },
      },
      isRequestBody: true,
    },
    securitySchemes: {
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'X-API-Key',
      },
    },
    formData: {
      parameters: {
        documentId: '',
      },
      security: {
        ApiKeyAuth: {
          type: 'apiKey',
          in: 'header',
          key: 'X-API-Key',
          value: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        },
      },
      requestBody: [
        {
          blob: new File([], 'document.txt'),
          metadata: {
            bucketId: 6124,
            fileName: 'document.txt',
            fileType: 'txt',
            metadata: '',
            callbackData: '',
            callbackUrl: '',
          },
        },
      ],
    },
    languageConfigurations: {
      typescript: {
        clientName: 'Groundx',
        packageName: 'groundx-typescript-sdk',
        git: gitConfig,
      },
      python: {
        clientName: 'Groundx',
        packageName: 'groundx',
        projectName: 'groundx-python-sdk',
        git: gitConfig,
      },
    },
    servers: ['https://api.groundx.ai/api'],
    operationId: 'Document_uploadLocal',
    tag: 'Documents',
    basePath: 'https://api.groundx.ai/api',
    oauthTokenUrl: null,
    originalOauthTokenUrl: null,
    requestBodyRequired: false,
    targetId: 'shell',
  }
  const code = await new CodeGeneratorHttpsnippet(args).snippet()
  expect(code).toMatchSnapshot()
})

test('generate "requestBody" parameter when non-request body parameter and request body value exist', async () => {
  const code = await new CodeGeneratorHttpsnippet({
    contentType: 'application/json',
    httpMethod: HttpMethodsEnum.PUT,
    path: '/quotes/service_groups/{service_group_id}/locations',
    parameters: [
      {
        description: 'UUID of the service group',
        name: 'service_group_id',
        in: 'path',
        required: true,
        schema: {
          title: 'Service Group Id',
          description: 'UUID of the service group',
          type: 'string',
        },
      },
    ],
    requestBody: {
      name: '',
      in: 'body',
      schema: {
        title: 'Location Ids',
        description:
          'List of location IDs to replace the existing locations on the service group',
        type: 'array',
        items: {
          type: 'string',
        },
      },
      isRequestBody: true,
      required: true,
    },
    securitySchemes: {
      Auth0HTTPBearer: {
        type: 'http',
        scheme: 'bearer',
      },
    },
    formData: {
      parameters: {
        service_group_id: '',
      },
      security: {
        Auth0HTTPBearer: {
          type: 'bearer',
          value: '',
        },
      },
      requestBody: ['123'],
    },
    languageConfigurations: {
      typescript: {
        clientName: 'Bellhop',
        packageName: 'bellhop-partners-typescript',
        git: {
          owner: 'konfig-dev',
          path: 'bellhop-sdks/tree/main/typescript',
        },
      },
      python: {
        clientName: 'Bellhop',
        packageName: 'bellhop',
        projectName: 'bellhop-partners-python',
        git: {
          owner: 'konfig-dev',
          path: 'bellhop-sdks/tree/main/python',
        },
      },
    },
    servers: [
      'https://partners.bellhops.dev/v5',
      'https://partners.bellhop.com/v5',
    ],
    operationId: 'QuoteServiceGroups_changeLocations',
    tag: 'QuoteServiceGroups',
    basePath: 'https://partners.bellhops.dev/v5',
    oauthTokenUrl: null,
    originalOauthTokenUrl: null,
    requestBodyRequired: true,
    targetId: 'shell',
    mode: 'copy',
  }).snippet()
  expect(code).toMatchSnapshot()
})
