import { HttpMethodsEnum } from 'konfig-lib'
import { CodeGenerator, CodeGeneratorConstructorArgs } from './code-generator'
import { SECURITY_FORM_NAME_PREFIX } from './generate-initial-operation-form-values'
import clone from 'clone'
import { test, expect } from 'vitest'

class CodeGeneratorTest extends CodeGenerator {
  protected format(code: string): Promise<string> {
    throw new Error(
      'This class is only used for testing shared functions in CodeGenerator'
    )
  }
  protected gen(): string {
    throw new Error(
      'This class is only used for testing shared functions in CodeGenerator'
    )
  }
}

const gitConfig = {
  owner: '',
  path: '',
}

/**
 * Creates new instance of CodeGeneratorTest with values used for testing
 */
function testArgs(): CodeGeneratorConstructorArgs {
  return {
    path: '',
    contentType: 'application/json',
    httpMethod: HttpMethodsEnum.POST,
    securitySchemes: {
      apiKey: {
        type: 'apiKey',
        in: 'header',
        name: 'X-Api-Key',
      },
    },
    formData: {
      requestBody: '',
      parameters: {},
      security: {
        apiKey: {
          type: 'apiKey',
          in: 'header',
          key: 'X-API-Key',
          value: 'my_api_key',
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
        clientName: 'Test',
        packageName: 'test',
        projectName: 'test',
        git: gitConfig,
      },
    },
    tag: 'Test',
    operationId: 'Test_test',
    requestBody: null,
    basePath: 'https://test.com/api',
    requestBodyRequired: true,
    servers: ['https://test.com/api'],
    oauthTokenUrl: null,
    originalOauthTokenUrl: null,
  }
}

test('ensure nonEmptySecurityMasked does not modify security values in-place', async () => {
  const args: CodeGeneratorConstructorArgs = testArgs()
  const test = new CodeGeneratorTest(args)
  const before = clone(test.configuration.formData[SECURITY_FORM_NAME_PREFIX])
  test.nonEmptySecurityMasked()
  const after = test.configuration.formData[SECURITY_FORM_NAME_PREFIX]
  expect(before).toStrictEqual(after)
})
