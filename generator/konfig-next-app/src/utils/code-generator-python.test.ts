import { CodeGeneratorPython } from './code-generator-python'

test('simple example', async () => {
  const code = await new CodeGeneratorPython({
    formData: {
      parameters: {},
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
    clientName: 'SnapTrade',
    packageName: 'snaptrade_client',
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
  const code = await new CodeGeneratorPython({
    formData: {
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
    clientName: 'SnapTrade',
    packageName: 'snaptrade_client',
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
  const code = await new CodeGeneratorPython({
    formData: {
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
    clientName: 'SnapTrade',
    packageName: 'snaptrade_client',
    tag: 'Authentication',
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
  const code = await new CodeGeneratorPython({
    formData: {
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
    clientName: 'SnapTrade',
    packageName: 'snaptrade_client',
    tag: 'Options',
    operationId: 'Options_getOptionStrategy',
    basePath: 'https://api.snaptrade.com/api/v1',
    requestBodyRequired: true,
    servers: ['https://api.snaptrade.com/api/v1'],
    oauthTokenUrl: null,
    originalOauthTokenUrl: null,
  }).snippet()
  expect(code).toMatchSnapshot()
})
