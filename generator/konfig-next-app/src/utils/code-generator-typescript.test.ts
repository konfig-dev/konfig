import { HttpMethodsEnum } from 'konfig-lib'
import { CodeGeneratorConstructorArgs } from './code-generator'
import { test, expect, it } from 'vitest'
import { CodeGeneratorTypeScript } from './code-generator-typescript'

const gitConfig = {
  owner: '',
  path: '',
}

test('deeply nested objects with file', async () => {
  const args: CodeGeneratorConstructorArgs = {
    httpMethod: HttpMethodsEnum.POST,
    contentType: 'application/json',
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
          blob: new File([], 'file.txt'),
          metadata: {
            bucketId: 321,
            fileName: '321',
            fileType: 'docx',
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
  }
  const code = await new CodeGeneratorTypeScript(args).snippet()
  expect(code).toMatchSnapshot()
})

test('nested objects does not have empty properties', async () => {
  const args: CodeGeneratorConstructorArgs = {
    contentType: 'application/json',
    httpMethod: HttpMethodsEnum.POST,
    path: '/',
    parameters: [
      {
        name: 'documents',
        in: 'body',
        schema: {
          type: 'array',
          items: {
            type: 'object',
            required: ['bucketId', 'sourceUrl'],
            properties: {
              bucketId: {
                type: 'integer',
                example: 1234,
              },
              sourceUrl: {
                type: 'string',
                example: 'https://my.source.url.com/file.txt',
              },
              callbackData: {
                type: 'string',
                example: 'my_callback_data',
              },
              callbackUrl: {
                type: 'string',
                example: 'https://my.callback.url.com',
              },
              metadata: {
                type: 'object',
                example: {
                  key: 'value',
                },
              },
              type: {
                type: 'string',
                enum: ['txt', 'docx', 'pptx', 'xlsx', 'pdf', 'png', 'jpg'],
              },
            },
          },
        },
        required: true,
      },
    ],
    requestBody: {
      name: '',
      in: 'body',
      schema: {
        type: 'object',
        required: ['documents'],
        properties: {
          documents: {
            type: 'array',
            items: {
              type: 'object',
              required: ['bucketId', 'sourceUrl'],
              properties: {
                bucketId: {
                  type: 'integer',
                  example: 1234,
                },
                sourceUrl: {
                  type: 'string',
                  example: 'https://my.source.url.com/file.txt',
                },
                callbackData: {
                  type: 'string',
                  example: 'my_callback_data',
                },
                callbackUrl: {
                  type: 'string',
                  example: 'https://my.callback.url.com',
                },
                metadata: {
                  type: 'object',
                  example: {
                    key: 'value',
                  },
                },
                type: {
                  type: 'string',
                  enum: ['txt', 'docx', 'pptx', 'xlsx', 'pdf', 'png', 'jpg'],
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
        documents: [
          {
            bucketId: 1,
            sourceUrl: '',
            callbackData: '',
            callbackUrl: '',
            metadata: '',
            type: '',
          },
        ],
        bucketId: '',
        bucket: {
          name: '',
        },
        documentId: '',
        n: '',
        nextToken: '',
        id: '',
        processId: '2fe69d3d-badf-43df-a665-0a49d00ba206',
      },
      security: {
        ApiKeyAuth: {
          type: 'apiKey',
          in: 'header',
          key: 'X-API-Key',
          value: 'mykey',
        },
      },
      requestBody: [
        {
          blob: {},
          metadata: {
            bucketId: 6124,
            fileName: 'file.txt',
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
    operationId: 'Document_uploadRemote',
    tag: 'Documents',
    basePath: 'https://api.groundx.ai/api',
    oauthTokenUrl: null,
    originalOauthTokenUrl: null,
    requestBodyRequired: false,
  }
  const code = await new CodeGeneratorTypeScript(args).snippet()
  expect(code).toMatchSnapshot()
})

test('empty form values', async () => {
  const args: CodeGeneratorConstructorArgs = {
    contentType: 'application/json',
    httpMethod: HttpMethodsEnum.POST,
    path: '/v1/runs',
    parameters: [
      {
        name: 'workflow_id',
        in: 'body',
        schema: {
          description: 'The ID of the workflow to be run.',
          type: 'string',
          format: '',
          example: 'wkf_i3F5UjpZ2Vg',
        },
        required: true,
      },
      {
        name: 'webhook_url',
        in: 'body',
        schema: {
          description:
            'The URL to which the workflow results should be sent to on completion.',
          type: 'string',
          example: 'https://myapp.com/webhook',
        },
        required: false,
      },
      {
        name: 'input',
        in: 'body',
        schema: {
          description:
            'Variables that the workflow can use globally and their values.',
          type: 'object',
          additionalProperties: true,
          example: {
            first_name: 'Sam',
            last_name: 'Altman',
          },
        },
        required: false,
      },
    ],
    requestBody: {
      name: '',
      in: 'body',
      schema: {
        type: 'object',
        properties: {
          workflow_id: {
            description: 'The ID of the workflow to be run.',
            type: 'string',
            format: '',
            example: 'wkf_i3F5UjpZ2Vg',
          },
          webhook_url: {
            description:
              'The URL to which the workflow results should be sent to on completion.',
            type: 'string',
            example: 'https://myapp.com/webhook',
          },
          input: {
            description:
              'Variables that the workflow can use globally and their values.',
            type: 'object',
            additionalProperties: true,
            example: {
              first_name: 'Sam',
              last_name: 'Altman',
            },
          },
        },
        required: ['workflow_id'],
      },
      isRequestBody: true,
      required: true,
    },
    securitySchemes: {
      api_key: {
        type: 'apiKey',
        in: 'header',
        name: 'X-Api-Key',
      },
    },
    formData: {
      parameters: {
        workflow_id: '',
        webhook_url: '',
        input: '',
      },
      security: {
        api_key: {
          type: 'apiKey',
          in: 'header',
          key: 'X-Api-Key',
          value: '',
        },
      },
      requestBody: '',
    },
    languageConfigurations: {
      typescript: {
        clientName: 'Leap',
        packageName: '@leap-ai/workflows',
        git: {
          owner: 'leap-ai',
          path: 'workflows-sdks/tree/main/sdks/typescript',
        },
      },
      python: {
        disabled: false,
        clientName: 'Leap',
        packageName: 'leap_workflows',
        projectName: 'leap-workflows-python-sdk',
        git: {
          owner: 'leap-ai',
          path: 'workflows-sdks/tree/main/sdks/python',
        },
      },
    },
    servers: ['https://api.workflows.tryleap.ai'],
    operationId: 'run_workflow',
    tag: 'Workflow Runs',
    basePath: 'https://api.workflows.tryleap.ai',
    oauthTokenUrl: null,
    originalOauthTokenUrl: null,
    requestBodyRequired: true,
    mode: 'copy',
  }
  const code = await new CodeGeneratorTypeScript(args).snippet()
  expect(code).toMatchSnapshot()
})

test('values from other forms does not throw error', async () => {
  const args: CodeGeneratorConstructorArgs = {
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
        schema: {
          type: 'string',
        },
      },
    ],
    requestBody: null,
    securitySchemes: {
      api_key: {
        type: 'apiKey',
        in: 'header',
        name: 'X-Api-Key',
      },
    },
    formData: {
      parameters: {
        workflow_run_id: '',
        test: '',
      },
      security: {
        api_key: {
          type: 'apiKey',
          in: 'header',
          key: 'X-Api-Key',
          value: '',
        },
      },
      requestBody: '',
    },
    languageConfigurations: {
      typescript: {
        clientName: 'Leap',
        packageName: '@leap-ai/workflows',
        git: {
          owner: 'leap-ai',
          path: 'workflows-sdks/tree/main/sdks/typescript',
        },
      },
      python: {
        disabled: false,
        clientName: 'Leap',
        packageName: 'leap_workflows',
        projectName: 'leap-workflows-python-sdk',
        git: {
          owner: 'leap-ai',
          path: 'workflows-sdks/tree/main/sdks/python',
        },
      },
    },
    servers: ['https://api.workflows.tryleap.ai'],
    operationId: 'WorkflowRuns_getWorkflowRun',
    tag: 'Workflow Runs',
    basePath: 'https://api.workflows.tryleap.ai',
    oauthTokenUrl: null,
    originalOauthTokenUrl: null,
    requestBodyRequired: false,
    mode: 'copy',
  }
  const code = await new CodeGeneratorTypeScript(args).snippet()
  expect(code).toMatchSnapshot()
})

test('request body with blob values', async () => {
  const args: CodeGeneratorConstructorArgs = {
    parameters: [],
    path: '',
    contentType: 'application/json',
    httpMethod: HttpMethodsEnum.POST,
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
          value: '89819d61-8346-4f8e-ba4b-d8f74d56a34f',
        },
      },
      requestBody: [
        {
          blob: new File([], 'file_1.txt'),
          metadata: {
            bucketId: 321,
            fileName: '321',
            fileType: 'txt',
            metadata: '',
            callbackData: '321',
            callbackUrl: '3213',
          },
        },
        {
          blob: new File([], 'file_2.txt'),
          metadata: {
            bucketId: 321,
            fileName: '321',
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
  }
  const code = await new CodeGeneratorTypeScript(args).snippet()
  expect(code).toMatchSnapshot()
})

test('simple example', async () => {
  const code = await new CodeGeneratorTypeScript({
    path: '',
    contentType: 'application/json',
    httpMethod: HttpMethodsEnum.POST,
    securitySchemes: {
      PartnerSignature: {
        type: 'apiKey',
        in: 'header',
        name: 'Signature',
      },
      PartnerClientId: {
        type: 'apiKey',
        in: 'query',
        name: 'clientId',
      },
      PartnerTimestamp: {
        type: 'apiKey',
        in: 'query',
        name: 'timestamp',
      },
    },
    formData: {
      parameters: {},
      requestBody: '',
      security: {
        PartnerClientId: {
          type: 'apiKey',
          in: 'query',
          key: 'clientId',
          value: 'SDK',
        },
        consumerKey: {
          type: 'clientState',
          name: 'consumerKey',
          value: 'SDK',
        },
      },
    },
    parameters: [],
    languageConfigurations: {
      typescript: {
        clientName: 'Test',
        packageName: 'test',
        git: gitConfig,
      },
      python: {
        clientName: 'SnapTrade',
        packageName: 'snaptrade_client',
        projectName: 'snaptrade-python-sdk',
        git: gitConfig,
      },
    },
    requestBody: null,
    tag: 'API Status',
    operationId: 'ApiStatus_check',
    basePath: 'https://api.snaptrade.com/api/v1',
    requestBodyRequired: false,
    servers: ['https://api.snaptrade.com/api/v1'],
    oauthTokenUrl: null,
    originalOauthTokenUrl: null,
  }).snippet()
  expect(code).toMatchSnapshot()
})

test('simple parameters example', async () => {
  const code = await new CodeGeneratorTypeScript({
    path: '',
    contentType: 'application/json',
    httpMethod: HttpMethodsEnum.POST,
    securitySchemes: {
      PartnerSignature: {
        type: 'apiKey',
        in: 'header',
        name: 'Signature',
      },
      PartnerClientId: {
        type: 'apiKey',
        in: 'query',
        name: 'clientId',
      },
      PartnerTimestamp: {
        type: 'apiKey',
        in: 'query',
        name: 'timestamp',
      },
    },
    formData: {
      requestBody: '',
      parameters: {
        userId: '321',
      },
      security: {
        PartnerClientId: {
          type: 'apiKey',
          in: 'query',
          key: 'clientId',
          value: 'SDK',
        },
        consumerKey: {
          type: 'clientState',
          name: 'consumerKey',
          value: 'SDK',
        },
      },
    },
    parameters: [
      {
        name: 'userId',
        in: 'body',
        schema: {
          description:
            "SnapTrade User ID. Provided by SnapTrade Partner. Can be any string, as long as it's unique to a user",
          type: 'string',
          example: 'snaptrade-user-123',
        },
        required: false,
      },
      {
        name: 'rsaPublicKey',
        in: 'body',
        schema: {
          description: 'Open SSH RSA public key',
          type: 'string',
          example:
            'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAAAgQC7vbqajDw4o6gJy8UtmIbkcpnkO3Kwc4qsEnSZp/TR+fQi62F79RHWmwKOtFmwteURgLbj7D/WGuNLGOfa/2vse3G2eHnHl5CB8ruRX9fBl/KgwCVr2JaEuUm66bBQeP5XeBotdR4cvX38uPYivCDdPjJ1QWPdspTBKcxeFbccDw==',
        },
        required: false,
      },
    ],
    languageConfigurations: {
      typescript: {
        clientName: 'Test',
        packageName: 'test',
        git: gitConfig,
      },
      python: {
        clientName: 'SnapTrade',
        packageName: 'snaptrade_client',
        projectName: 'snaptrade-python-sdk',
        git: gitConfig,
      },
    },
    requestBody: null,
    tag: 'Authentication',
    operationId: 'Authentication_registerSnapTradeUser',
    basePath: 'https://api.snaptrade.com/api/v1',
    requestBodyRequired: true,
    servers: ['https://api.snaptrade.com/api/v1'],
    oauthTokenUrl: null,
    originalOauthTokenUrl: null,
  }).snippet()
  expect(code).toMatchSnapshot()
})

it('example with boolean', async () => {
  const code = await new CodeGeneratorTypeScript({
    path: '',
    contentType: 'application/json',
    httpMethod: HttpMethodsEnum.POST,
    securitySchemes: {
      PartnerSignature: {
        type: 'apiKey',
        in: 'header',
        name: 'Signature',
      },
      PartnerClientId: {
        type: 'apiKey',
        in: 'query',
        name: 'clientId',
      },
      PartnerTimestamp: {
        type: 'apiKey',
        in: 'query',
        name: 'timestamp',
      },
    },
    formData: {
      requestBody: '',
      parameters: {
        userId: '321',
        userSecret: '321',
        broker: 'fda',
        immediateRedirect: true,
        customRedirect: '',
        reconnect: '',
        connectionType: '',
        accountId: 'fda321',
        underlying_symbol_id: '321',
        legs: [
          {
            action: 'SELL_TO_CLOSE',
            option_symbol_id: 'fda',
            quantity: 321,
          },
          {
            action: 'BUY_TO_OPEN',
            option_symbol_id: 'fda',
            quantity: 1,
          },
        ],
        strategy_type: 'CUSTOM',
      },
      security: {
        PartnerClientId: {
          type: 'apiKey',
          in: 'query',
          key: 'clientId',
          value: 'SDK',
        },
        consumerKey: {
          type: 'clientState',
          name: 'consumerKey',
          value: 'SDK',
        },
      },
    },
    parameters: [
      {
        in: 'query',
        required: true,
        name: 'userId',
        schema: {
          description: 'SnapTrade User ID',
          type: 'string',
          example: 'John.doe@snaptrade.com',
        },
      },
      {
        in: 'query',
        required: true,
        name: 'userSecret',
        schema: {
          description:
            'SnapTrade User Secret (generated when registering user)',
          type: 'string',
          example: 'USERSECRET123',
        },
      },
      {
        name: 'broker',
        in: 'body',
        schema: {
          type: 'string',
          example: 'ALPACA',
        },
        required: false,
      },
      {
        name: 'immediateRedirect',
        in: 'body',
        schema: {
          type: 'boolean',
          example: true,
        },
        required: false,
      },
      {
        name: 'customRedirect',
        in: 'body',
        schema: {
          type: 'string',
          example: 'https://snaptrade.com',
        },
        required: false,
      },
      {
        name: 'reconnect',
        in: 'body',
        schema: {
          type: 'string',
          example: '8b5f262d-4bb9-365d-888a-202bd3b15fa1',
        },
        required: false,
      },
      {
        name: 'connectionType',
        in: 'body',
        schema: {
          type: 'string',
          enum: ['read', 'trade'],
        },
        required: false,
      },
    ],
    languageConfigurations: {
      typescript: {
        clientName: 'Test',
        packageName: 'test',
        git: gitConfig,
      },
      python: {
        clientName: 'SnapTrade',
        packageName: 'snaptrade_client',
        projectName: 'snaptrade-python-sdk',
        git: gitConfig,
      },
    },
    tag: 'Authentication',
    requestBody: null,
    operationId: 'Authentication_loginSnapTradeUser',
    basePath: 'https://api.snaptrade.com/api/v1',
    requestBodyRequired: false,
    servers: ['https://api.snaptrade.com/api/v1'],
    oauthTokenUrl: null,
    originalOauthTokenUrl: null,
  }).snippet()
  expect(code).toMatchSnapshot()
})

it('example with inner object', async () => {
  const code = await new CodeGeneratorTypeScript({
    path: '',
    contentType: 'application/json',
    httpMethod: HttpMethodsEnum.POST,
    formData: {
      requestBody: '',
      parameters: {
        accountId: 'fda321',
        userId: '321',
        userSecret: '321',
        underlying_symbol_id: '321',
        legs: [
          {
            action: 'SELL_TO_CLOSE',
            option_symbol_id: 'fda',
            quantity: 321,
          },
          {
            action: 'BUY_TO_OPEN',
            option_symbol_id: 'fda',
            quantity: 1,
          },
        ],
        strategy_type: 'CUSTOM',
        optionStrategyId: '',
        order_type: '',
        time_in_force: 'Day',
        price: 321,
        symbol: '',
        ticker: '',
        symbolId: '',
        substring: '',
        currencyPair: '',
        brokerage: '',
        first_trade_id: '',
        second_trade_id: '',
        tradeId: '',
        account_id: '321',
        action: '',
        stop: 321,
        units: '',
        universal_symbol_id: '',
        brokerage_order_id: '',
        symbols: '',
        use_ticker: '',
        startDate: '',
        endDate: '',
        accounts: '',
        detailed: '',
        frequency: '',
        brokerageAuthorizations: '',
        type: '',
        broker: 'fda',
        immediateRedirect: true,
        customRedirect: 'f',
        reconnect: 'fda',
        connectionType: 'trade',
      },
      security: {
        PartnerClientId: {
          type: 'apiKey',
          in: 'query',
          key: 'clientId',
          value: 'SDK',
        },
        consumerKey: {
          type: 'clientState',
          name: 'consumerKey',
          value: 'SDK',
        },
      },
    },
    parameters: [
      {
        in: 'path',
        name: 'accountId',
        required: true,
        description: 'The ID of the account get positions.',
        schema: {
          type: 'string',
          format: 'uuid',
        },
      },
      {
        in: 'query',
        required: true,
        name: 'userId',
        schema: {
          description: 'SnapTrade User ID',
          type: 'string',
          example: 'John.doe@snaptrade.com',
        },
      },
      {
        in: 'query',
        required: true,
        name: 'userSecret',
        schema: {
          description:
            'SnapTrade User Secret (generated when registering user)',
          type: 'string',
          example: 'USERSECRET123',
        },
      },
      {
        name: 'underlying_symbol_id',
        in: 'body',
        schema: {
          type: 'string',
          format: 'uuid',
          example: '2bcd7cc3-e922-4976-bce1-9858296801c3',
        },
        required: true,
      },
      {
        name: 'legs',
        in: 'body',
        schema: {
          type: 'array',
          items: {
            description: 'Option Leg',
            type: 'object',
            properties: {
              action: {
                type: 'string',
                enum: [
                  'BUY_TO_OPEN',
                  'BUY_TO_CLOSE',
                  'SELL_TO_OPEN',
                  'SELL_TO_CLOSE',
                ],
              },
              option_symbol_id: {
                type: 'string',
                description:
                  'Obtained from calling options chain endpoint (option_id)',
                example: 'SPY220819P00200000',
              },
              quantity: {
                type: 'number',
                example: 1,
              },
            },
          },
        },
        required: true,
      },
      {
        name: 'strategy_type',
        in: 'body',
        schema: {
          type: 'string',
          enum: ['CUSTOM'],
        },
        required: true,
      },
    ],
    languageConfigurations: {
      typescript: {
        clientName: 'Test',
        packageName: 'test',
        git: gitConfig,
      },
      python: {
        clientName: 'SnapTrade',
        packageName: 'snaptrade_client',
        projectName: 'snaptrade-python-sdk',
        git: gitConfig,
      },
    },
    securitySchemes: {
      PartnerSignature: {
        type: 'apiKey',
        in: 'header',
        name: 'Signature',
      },
      PartnerClientId: {
        type: 'apiKey',
        in: 'query',
        name: 'clientId',
      },
      PartnerTimestamp: {
        type: 'apiKey',
        in: 'query',
        name: 'timestamp',
      },
    },
    tag: 'Options',
    requestBody: null,
    operationId: 'Options_getOptionStrategy',
    basePath: 'https://api.snaptrade.com/api/v1',
    requestBodyRequired: true,
    servers: ['https://api.snaptrade.com/api/v1'],
    oauthTokenUrl: null,
    originalOauthTokenUrl: null,
  }).snippet()
  expect(code).toMatchSnapshot()
})

it('empty array as request body should count as empty', async () => {
  const args: CodeGeneratorConstructorArgs = {
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
                  description:
                    'the bucketId of the bucket which this local file will be uploaded to.',
                  type: 'integer',
                  example: 1234,
                },
                fileName: {
                  description: 'The name of the file being uploaded',
                  type: 'string',
                  example: 'my_file.txt',
                },
                fileType: {
                  description:
                    'The type of document (one of the seven currently supported file types)',
                  type: 'string',
                  enum: [
                    'txt',
                    'docx',
                    'pptx',
                    'xlsx',
                    'pdf',
                    'png',
                    'jpg',
                    'csv',
                    'tsv',
                    'json',
                  ],
                },
                searchData: {
                  description:
                    "Custom metadata which can be used to influence GroundX's search functionality. This data can be used to further hone GroundX search.",
                  type: 'object',
                  example: {
                    key: 'value',
                  },
                },
              },
            },
          },
        },
      },
      isRequestBody: true,
      required: false,
    },
    securitySchemes: {
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'X-API-Key',
      },
    },
    formData: {
      parameters: {},
      security: {
        ApiKeyAuth: {
          type: 'apiKey',
          in: 'header',
          key: 'X-API-Key',
          value: '',
        },
      },
      requestBody: [],
    },
    languageConfigurations: {
      typescript: {
        clientName: 'Groundx',
        packageName: 'groundx-typescript-sdk',
        git: {
          owner: 'groundxai',
          path: 'groundx-sdks/tree/main/sdks/typescript',
        },
      },
      python: {
        disabled: false,
        clientName: 'Groundx',
        packageName: 'groundx',
        projectName: 'groundx-python-sdk',
        git: {
          owner: 'groundxai',
          path: 'groundx-sdks/tree/main/sdks/python',
        },
      },
    },
    servers: ['https://api.groundx.ai/api'],
    operationId: 'Document_uploadLocal',
    tag: 'Documents',
    basePath: 'https://api.groundx.ai/api',
    oauthTokenUrl: null,
    originalOauthTokenUrl: null,
    requestBodyRequired: false,
    mode: 'copy',
  }
  const code = await new CodeGeneratorTypeScript(args).snippet()
  expect(code).toMatchSnapshot()
})

it('empty values should be removed before checking if all form values are empty', async () => {
  const args: CodeGeneratorConstructorArgs = {
    contentType: 'application/json',
    httpMethod: HttpMethodsEnum.POST,
    path: '/v1/ingest/documents/remote',
    parameters: [
      {
        name: 'documents',
        in: 'body',
        schema: {
          type: 'array',
          items: {
            type: 'object',
            required: ['bucketId', 'sourceUrl'],
            properties: {
              bucketId: {
                description:
                  'the bucketId of the bucket which this remote file will be uploaded to.',
                type: 'integer',
                example: 1234,
              },
              fileName: {
                description: 'The name of the file being uploaded',
                type: 'string',
                example: 'my_file.txt',
              },
              fileType: {
                description:
                  'The type of document (one of the seven currently supported file types)',
                type: 'string',
                enum: [
                  'txt',
                  'docx',
                  'pptx',
                  'xlsx',
                  'pdf',
                  'png',
                  'jpg',
                  'csv',
                  'tsv',
                  'json',
                ],
              },
              searchData: {
                description:
                  "Custom metadata which can be used to influence GroundX's search functionality. This data can be used to further hone GroundX search.",
                type: 'object',
                example: {
                  key: 'value',
                },
              },
              sourceUrl: {
                type: 'string',
                description:
                  'The URL of the document being uploaded to GroundX.',
                format: 'uri',
                example: 'https://my.source.url.com/file.txt',
              },
            },
          },
        },
        required: true,
      },
    ],
    requestBody: {
      name: '',
      in: 'body',
      schema: {
        type: 'object',
        required: ['documents'],
        properties: {
          documents: {
            type: 'array',
            items: {
              type: 'object',
              required: ['bucketId', 'sourceUrl'],
              properties: {
                bucketId: {
                  description:
                    'the bucketId of the bucket which this remote file will be uploaded to.',
                  type: 'integer',
                  example: 1234,
                },
                fileName: {
                  description: 'The name of the file being uploaded',
                  type: 'string',
                  example: 'my_file.txt',
                },
                fileType: {
                  description:
                    'The type of document (one of the seven currently supported file types)',
                  type: 'string',
                  enum: [
                    'txt',
                    'docx',
                    'pptx',
                    'xlsx',
                    'pdf',
                    'png',
                    'jpg',
                    'csv',
                    'tsv',
                    'json',
                  ],
                },
                searchData: {
                  description:
                    "Custom metadata which can be used to influence GroundX's search functionality. This data can be used to further hone GroundX search.",
                  type: 'object',
                  example: {
                    key: 'value',
                  },
                },
                sourceUrl: {
                  type: 'string',
                  description:
                    'The URL of the document being uploaded to GroundX.',
                  format: 'uri',
                  example: 'https://my.source.url.com/file.txt',
                },
              },
            },
          },
        },
      },
      isRequestBody: true,
      required: false,
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
        documents: [
          {
            bucketId: '',
            fileName: '',
            fileType: '',
            searchData: '',
            sourceUrl: '',
          },
        ],
      },
      security: {
        ApiKeyAuth: {
          type: 'apiKey',
          in: 'header',
          key: 'X-API-Key',
          value: '',
        },
      },
      requestBody: '',
    },
    languageConfigurations: {
      typescript: {
        clientName: 'Groundx',
        packageName: 'groundx-typescript-sdk',
        git: {
          owner: 'groundxai',
          path: 'groundx-sdks/tree/main/sdks/typescript',
        },
      },
      python: {
        disabled: false,
        clientName: 'Groundx',
        packageName: 'groundx',
        projectName: 'groundx-python-sdk',
        git: {
          owner: 'groundxai',
          path: 'groundx-sdks/tree/main/sdks/python',
        },
      },
    },
    servers: ['https://api.groundx.ai/api'],
    operationId: 'Document_uploadRemote',
    tag: 'Documents',
    basePath: 'https://api.groundx.ai/api',
    oauthTokenUrl: null,
    originalOauthTokenUrl: null,
    requestBodyRequired: false,
    mode: 'copy',
  }

  const code = await new CodeGeneratorTypeScript(args).snippet()
  expect(code).toMatchSnapshot()
})

it('saved values are filtered from all values empty check', async () => {
  const args: CodeGeneratorConstructorArgs = {
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
        schema: {
          type: 'string',
        },
      },
    ],
    requestBody: null,
    securitySchemes: {
      api_key: {
        type: 'apiKey',
        in: 'header',
        name: 'X-Api-Key',
      },
    },
    formData: {
      parameters: {
        workflow_run_id: '',
        workflow_id: '321',
      },
      security: {
        api_key: {
          type: 'apiKey',
          in: 'header',
          key: 'X-Api-Key',
          value: '',
        },
      },
      requestBody: '',
    },
    languageConfigurations: {
      typescript: {
        clientName: 'Leap',
        packageName: '@leap-ai/workflows',
        git: {
          owner: 'leap-ai',
          path: 'workflows-sdks/tree/main/sdks/typescript',
        },
      },
      python: {
        disabled: false,
        clientName: 'Leap',
        packageName: 'leap_workflows',
        projectName: 'leap-workflows-python-sdk',
        git: {
          owner: 'leap-ai',
          path: 'workflows-sdks/tree/main/sdks/python',
        },
      },
    },
    servers: ['https://api.workflows.tryleap.ai'],
    operationId: 'WorkflowRuns_getWorkflowRun',
    tag: 'Workflow Runs',
    basePath: 'https://api.workflows.tryleap.ai',
    oauthTokenUrl: null,
    originalOauthTokenUrl: null,
    requestBodyRequired: false,
    mode: 'copy',
  }
  const code = await new CodeGeneratorTypeScript(args).snippet()
  expect(code).toMatchSnapshot()
})

it('example with no setup', async () => {
  const code = await new CodeGeneratorTypeScript({
    path: '',
    contentType: 'application/json',
    httpMethod: HttpMethodsEnum.POST,
    securitySchemes: {
      PartnerSignature: {
        type: 'apiKey',
        in: 'header',
        name: 'Signature',
      },
      PartnerClientId: {
        type: 'apiKey',
        in: 'query',
        name: 'clientId',
      },
      PartnerTimestamp: {
        type: 'apiKey',
        in: 'query',
        name: 'timestamp',
      },
    },
    formData: {
      requestBody: '',
      parameters: {},
      security: {},
    },
    parameters: [],
    languageConfigurations: {
      typescript: {
        clientName: 'Test',
        packageName: 'test',
        git: gitConfig,
      },
      python: {
        clientName: 'SnapTrade',
        packageName: 'snaptrade_client',
        projectName: 'snaptrade-python-sdk',
        git: gitConfig,
      },
    },
    tag: 'Options',
    operationId: 'Options_getOptionStrategy',
    requestBody: null,
    basePath: 'https://api.snaptrade.com/api/v1',
    requestBodyRequired: true,
    servers: ['https://api.snaptrade.com/api/v1'],
    oauthTokenUrl: null,
    originalOauthTokenUrl: null,
  }).snippet()
  expect(code).toMatchSnapshot()
})

it('still generate parameters when non-request body parameter and request body parameter exists and non-body parameter is non-empty', async () => {
  const code = await new CodeGeneratorTypeScript({
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
      {
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
    },
    securitySchemes: {
      Auth0HTTPBearer: {
        type: 'http',
        scheme: 'bearer',
      },
    },
    formData: {
      parameters: {
        service_group_id: 'hello',
        '': '',
        quote_id: 'fafaf',
      },
      security: {
        Auth0HTTPBearer: {
          type: 'bearer',
          value: 'hello there',
        },
      },
      requestBody: '',
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
    mode: 'copy',
  }).snippet()
  expect(code).toMatchSnapshot()
})

it('generate "requestBody" parameter when non-request body parameter and request body parameter exist', async () => {
  const code = await new CodeGeneratorTypeScript({
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
      {
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
        '': '',
        quote_id: 'fafaf',
      },
      security: {
        Auth0HTTPBearer: {
          type: 'bearer',
          value: 'hello there',
        },
      },
      requestBody: ['321'],
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
    mode: 'copy',
  }).snippet()
  expect(code).toMatchSnapshot()
})

it('tag with PascalCase is properly converted to camelCase', async () => {
  const code = await new CodeGeneratorTypeScript({
    path: '',
    contentType: 'application/json',
    httpMethod: HttpMethodsEnum.POST,
    securitySchemes: {
      apiKey: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
      },
    },
    formData: {
      requestBody: '',
      parameters: {},
      security: {},
    },
    parameters: [],
    languageConfigurations: {
      typescript: {
        clientName: 'Test',
        packageName: 'test',
        git: gitConfig,
      },
      python: {
        clientName: 'Test',
        packageName: 'test',
        projectName: 'test',
        git: gitConfig,
      },
    },
    tag: 'ShouldBeCamelCase',
    operationId: 'ShouldBeCamelCase_fetch',
    requestBody: null,
    basePath: 'https://test.com',
    requestBodyRequired: false,
    servers: ['https://test.com'],
    oauthTokenUrl: null,
    originalOauthTokenUrl: null,
  }).snippet()
  expect(code).to.include('test.shouldBeCamelCase.fetch')
})

it('example with no form data but > 1 parameters', async () => {
  const code = await new CodeGeneratorTypeScript({
    path: '',
    contentType: 'application/json',
    httpMethod: HttpMethodsEnum.POST,
    securitySchemes: {
      PartnerSignature: {
        type: 'apiKey',
        in: 'header',
        name: 'Signature',
      },
      PartnerClientId: {
        type: 'apiKey',
        in: 'query',
        name: 'clientId',
      },
      PartnerTimestamp: {
        type: 'apiKey',
        in: 'query',
        name: 'timestamp',
      },
    },
    formData: {
      requestBody: '',
      parameters: {},
      security: {},
    },
    parameters: [
      {
        in: 'path',
        name: 'accountId',
        required: true,
        description: 'The ID of the account get positions.',
        schema: {
          type: 'string',
          format: 'uuid',
        },
      },
    ],
    languageConfigurations: {
      typescript: {
        clientName: 'Test',
        packageName: 'test',
        git: gitConfig,
      },
      python: {
        clientName: 'SnapTrade',
        packageName: 'snaptrade_client',
        projectName: 'snaptrade-python-sdk',
        git: gitConfig,
      },
    },
    tag: 'Options',
    operationId: 'Options_getOptionStrategy',
    requestBody: null,
    basePath: 'https://api.snaptrade.com/api/v1',
    requestBodyRequired: true,
    servers: ['https://api.snaptrade.com/api/v1'],
    oauthTokenUrl: null,
    originalOauthTokenUrl: null,
  }).snippet()
  expect(code).toMatchSnapshot()
})
