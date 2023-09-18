import { CodeGeneratorPython } from './code-generator-python'

test('simple example', async () => {
  const code = await new CodeGeneratorPython({
    packageName: 'konfig-next-app',
    clientName: 'KonfigNextApp',
    tag: 'tag',
    formData: {
      parameters: {},
      security: {},
    },
    parameters: [],
    operationId: 'operationId',
    basePath: 'basePath',
    requestBodyRequired: false,
    servers: [],
    oauthTokenUrl: null,
    originalOauthTokenUrl: null,
  }).snippet()
  expect(code).toMatchSnapshot()
})
