import { HttpMethodsEnum } from 'konfig-lib'
import {
  CodeGeneratorHttpSnippetConstructorArgs,
  CodeGeneratorHttpsnippet,
} from './code-generator-httpsnippet'
import {test} from "vitest"

test.skip('httpsnippet - deeply nested objects with files', async () => {
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
      },
      python: {
        clientName: 'Groundx',
        packageName: 'groundx',
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
