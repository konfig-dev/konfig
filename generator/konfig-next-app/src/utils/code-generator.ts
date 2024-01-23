import { Parameter } from '@/components/OperationParameter'
import clone from 'clone'
import {
  API_KEY_VALUE_PROPERTY,
  BEARER_VALUE_PROPERTY,
  CLIENT_STATE_VALUE_PROPERTY,
  FormDataType,
  FormInputValue,
  FormInputValues,
  OAUTH2_CLIENT_ID_PROPERTY,
  OAUTH2_CLIENT_SECRET_PROPERTY,
  PARAMETER_FORM_NAME_PREFIX,
  REQUEST_BODY_FORM_NAME_PREFIX,
  SECURITY_FORM_NAME_PREFIX,
} from './generate-initial-operation-form-values'
import { ReferencePageProps } from './generate-props-for-reference-page'
import { HttpMethods } from 'konfig-lib'
import { isNonEmpty } from './is-non-empty'
import { recursivelyRemoveEmptyValues } from './recursively-remove-empty-values'

type GitConfig = {
  owner: string
  path: string
}

export type CodeGeneratorConstructorArgs = {
  basePath: string
  servers: string[]
  formData: FormDataType
  httpMethod: HttpMethods
  path: string
  requestBody: Parameter | null
  parameters: Parameter[]
  tag: string
  operationId: string
  requestBodyRequired: boolean
  contentType: string | null
  originalOauthTokenUrl: string | null
  oauthTokenUrl: string | null
  securitySchemes: ReferencePageProps['securitySchemes']
  languageConfigurations: {
    typescript: {
      clientName: string
      packageName: string
      git: GitConfig
    }
    python?: {
      clientName: string
      packageName: string
      projectName: string
      git: GitConfig
    }
  }

  /**
   *  'execution' is for executing the code in the browser
   *  'ui' is meant to be displayed to the user in the browser
   *  'copy' is meant to be copied to the clipboard
   */
  mode?: 'execution' | 'ui' | 'copy'
}

export type NonEmptyParameters = [
  { name: string; parameter: Parameter },
  FormInputValues[string],
][]
export abstract class CodeGenerator {
  mode: CodeGeneratorConstructorArgs['mode']

  /**
   * Contains the inputs to the request
   */
  _formData: FormDataType

  /**
   * Contains the schema of inputs for the request
   */
  _parameters: Parameter[]

  /**
   *  The tag of the operation
   */
  tag: string

  /**
   *  The operationId of the operation
   */
  operationId: string

  /**
   * The base path of the API
   */
  basePath: string

  /**
   * The OAuth token URL
   */
  oauthTokenUrl: string | null

  /**
   * The original OAuth token URL
   */
  originalOauthTokenUrl: string | null

  /**
   * The servers of the API
   */
  servers: string[]

  /**
   * Whether or not the request body is required
   */
  requestBodyRequired: boolean

  /**
   * The language configurations for the SDK (i.e. clientName and packageName)
   */
  languageConfigurations: CodeGeneratorConstructorArgs['languageConfigurations']

  configuration: CodeGeneratorConstructorArgs

  constructor(args: CodeGeneratorConstructorArgs) {
    this.configuration = args
    const {
      formData,
      parameters,
      tag,
      operationId,
      languageConfigurations,
      basePath,
      requestBodyRequired,
      mode = 'ui',
      servers,
      oauthTokenUrl,
      originalOauthTokenUrl,
    } = args
    console.debug(JSON.stringify(args, null, 2))
    this.basePath = basePath
    this.oauthTokenUrl = oauthTokenUrl
    this.originalOauthTokenUrl = originalOauthTokenUrl
    this.servers = servers
    this._formData = formData
    this._parameters = parameters
    this.mode = mode
    this.languageConfigurations = languageConfigurations
    this.tag = tag
    this.operationId = operationId
    this.requestBodyRequired = requestBodyRequired
  }

  protected abstract format(code: string): Promise<string>

  /**
   * Single entrypoint for generating code.
   */
  protected abstract gen(): string

  /**
   * Masks a value by replacing each character with an "X"
   * @param value - The value to mask
   * @returns The masked value
   */
  mask(value: string) {
    // Don't mask if in copy mode
    if (this.isCopyMode()) return value

    return value.replace(/./g, 'X')
  }

  async snippet(): Promise<string> {
    return await this.format(this.gen())
  }

  isUsingCustomBasePath(): boolean {
    return this.basePath !== this.servers[0]
  }

  isUsingCustomOAuthTokenUrl(): boolean {
    return this.originalOauthTokenUrl !== this.oauthTokenUrl
  }

  hasMultipleApiKeys(): boolean {
    if (this.configuration.securitySchemes === null) return false
    const hasMultipleApiKeys =
      Object.values(this.configuration.securitySchemes).filter(
        (value) => value.type === 'apiKey'
      ).length > 1
    return hasMultipleApiKeys
  }

  isArrayRequestBody(): boolean {
    return this.configuration.requestBody?.schema?.type === 'array'
  }

  /**
   * This is different than parameter with "in" === "body".  In the case where
   * the request body is a scalar object or array, then this value will be
   * non-empty. The reason why this is a different case is because SDKs are
   * ergonomic in that request bodies are flattened if possible. In the case of
   * a scalar or array request body, the request body cannot be flattened so it
   * is passed as a separate argument.
   */
  requestBodyValue(): FormInputValue {
    return recursivelyRemoveEmptyValues(
      this._formData[REQUEST_BODY_FORM_NAME_PREFIX]
    )
  }

  /**
   * Returns the setup values that are non-empty and exist as part of passed parameters
   */
  nonEmptyParameters(): NonEmptyParameters {
    const parameters = Object.entries(
      this._formData[PARAMETER_FORM_NAME_PREFIX]
    )

    return parameters
      .filter(([name]) => {
        return this.isInThisOperation(name)
      })
      .filter(([_name, value]) => {
        return isNonEmpty(value)
      })
      .map(([name, value]) => {
        return [
          { name, parameter: this.parameterStrict(name) },
          recursivelyRemoveEmptyValues(value),
        ]
      })
  }

  parameterStrict(name: string) {
    const parameter = this.parameter(name)
    if (parameter === undefined) throw Error("Parameter doesn't exist")
    return parameter
  }

  parameters() {
    return this._parameters
  }

  nonBodyParameters() {
    return this._parameters.filter((p) => p.in !== 'body')
  }

  parameter(name: string) {
    const parameter = this._parameters.find((p) => p.name === name)
    return parameter
  }

  isInThisOperation(name: string): boolean {
    return this.parameter(name) !== undefined
  }

  nonEmptySecurityMasked(): NonEmptySecurity {
    return clone(this.nonEmptySecurity()).map(([name, security]) => {
      if (security.type === 'apiKey') {
        security[API_KEY_VALUE_PROPERTY] = this.mask(
          security[API_KEY_VALUE_PROPERTY]
        )
      } else if (security.type === 'bearer') {
        security[BEARER_VALUE_PROPERTY] = this.mask(
          security[BEARER_VALUE_PROPERTY]
        )
      } else if (security.type === 'oauth2-client-credentials') {
        security[OAUTH2_CLIENT_ID_PROPERTY] = this.mask(
          security[OAUTH2_CLIENT_ID_PROPERTY]
        )
        security[OAUTH2_CLIENT_SECRET_PROPERTY] = this.mask(
          security[OAUTH2_CLIENT_SECRET_PROPERTY]
        )
      }
      return [name, security]
    })
  }

  isUiOrCopyMode(): boolean {
    return this.mode === 'ui' || this.mode === 'copy'
  }

  isCopyMode(): boolean {
    return this.mode === 'copy'
  }

  /**
   * Returns the security schemes that are non-empty
   */
  nonEmptySecurity() {
    return Object.entries(this._formData[SECURITY_FORM_NAME_PREFIX]).filter(
      ([_name, security]) => {
        if (security.type === 'apiKey') {
          return (
            security[API_KEY_VALUE_PROPERTY] !== '' &&
            security[API_KEY_VALUE_PROPERTY] !== undefined
          )
        } else if (security.type == 'clientState') {
          return (
            security[CLIENT_STATE_VALUE_PROPERTY] !== '' &&
            security[CLIENT_STATE_VALUE_PROPERTY] !== undefined
          )
        } else if (security.type === 'bearer') {
          return (
            security[BEARER_VALUE_PROPERTY] !== '' &&
            security[BEARER_VALUE_PROPERTY] !== undefined
          )
        } else if (security.type === 'oauth2-client-credentials') {
          return (
            security[OAUTH2_CLIENT_ID_PROPERTY] !== '' &&
            security[OAUTH2_CLIENT_ID_PROPERTY] !== undefined &&
            security[OAUTH2_CLIENT_SECRET_PROPERTY] !== '' &&
            security[OAUTH2_CLIENT_SECRET_PROPERTY] !== undefined
          )
        }
      }
    )
  }
}

export type NonEmptySecurity = ReturnType<CodeGenerator['nonEmptySecurity']>
