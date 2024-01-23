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
