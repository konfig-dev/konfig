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
