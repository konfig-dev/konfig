import { Parameter } from '@/components/OperationParameter'
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
  SECURITY_FORM_NAME_PREFIX,
} from './generate-initial-operation-form-values'
import { ReferencePageProps } from './generate-props-for-reference-page'
import { HttpMethods } from 'konfig-lib'

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
  originalOauthTokenUrl: string | null
  oauthTokenUrl: string | null
  securitySchemes: ReferencePageProps['securitySchemes']
  languageConfigurations: {
    typescript: {
      clientName: string
      packageName: string
    }
    python?: {
      clientName: string
      packageName: string
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
    return value.replace(/./g, 'X')
  }

  async snippet(): Promise<string> {
    return await this.format(this.gen())
  }

  get isUsingCustomBasePath(): boolean {
    return this.basePath !== this.servers[0]
  }

  get isUsingCustomOAuthTokenUrl(): boolean {
    return this.originalOauthTokenUrl !== this.oauthTokenUrl
  }

  get hasMultipleApiKeys(): boolean {
    if (this.configuration.securitySchemes === null) return false
    const hasMultipleApiKeys =
      Object.values(this.configuration.securitySchemes).filter(
        (value) => value.type === 'apiKey'
      ).length > 1
    return hasMultipleApiKeys
  }

  get isArrayRequestBody(): boolean {
    return this.configuration.requestBody?.schema?.type === 'array'
  }

  get requestBodyValue(): FormInputValue {
    return this._formData['requestBody']
  }

  /**
   * Returns the setup values that are non-empty and exist as part of passed parameters
   */
  get nonEmptyParameters(): NonEmptyParameters {
    const parameters = Object.entries(
      this._formData[PARAMETER_FORM_NAME_PREFIX]
    )

    return parameters
      .filter(([name]) => {
        return this.isInThisOperation(name)
      })
      .filter(([_name, value]) => {
        return this.isNonEmpty(value)
      })
      .map(([name, value]) => {
        return [
          { name, parameter: this.parameterStrict(name) },
          this.recursivelyRemoveEmptyValues(value),
        ]
      })
  }

  parameterStrict(name: string) {
    const parameter = this.parameter(name)
    if (parameter === undefined) throw Error("Parameter doesn't exist")
    return parameter
  }

  parameter(name: string) {
    const parameter = this._parameters.find((p) => p.name === name)
    return parameter
  }

  isInThisOperation(name: string): boolean {
    return this.parameter(name) !== undefined
  }

  /**
   * Useful for pruning tree of argument values to only those that are
   * significant when constructing the SDK method call
   * @param object  The object to recursively remove empty values from
   * @returns The object with empty values removed
   */
  recursivelyRemoveEmptyValues(
    object: FormInputValues[string]
  ): FormInputValues[string] {
    if (typeof object !== 'object') return object

    if (Array.isArray(object)) {
      // remove all empty values from array and return
      const filtered = (object as any)
        .filter((p: any) => this.isNonEmpty(p))
        .map((p: any) => this.recursivelyRemoveEmptyValues(p))
      return filtered
    }

    const clone = { ...object }
    Object.entries(object).forEach(([key, value]) => {
      if (typeof value === 'object') {
        clone[key] = this.recursivelyRemoveEmptyValues(value)
        if (!this.isNonEmpty(clone[key])) delete clone[key]
      } else if (!this.isNonEmpty(value)) {
        delete clone[key]
      }
    })
    return clone
  }

  /**
   * Returns whether or not the parameter is non-empty (i.e. not undefined, not an empty string, not an empty array).
   * Recursively checks if the parameter is an object and checks if any of the values are non-empty
   * @param parameter The parameter to check
   * @returns boolean
   */
  isNonEmpty(parameter: FormInputValues[string]): boolean {
    if (parameter === undefined) return false
    if (!Array.isArray(parameter)) {
      if (parameter instanceof File) return true
      if (typeof parameter === 'object') {
        return (
          Object.values(parameter).filter((p) => this.isNonEmpty(p)).length > 0
        )
      }
      return parameter !== ''
    }
    // filter parameter for non-empty filters
    const filtered: FormInputValues[string][] = []
    for (const p of parameter) {
      if (this.isNonEmpty(p)) filtered.push(p)
    }

    return filtered.length > 0
  }

  /**
   * Returns the security schemes that are non-empty
   */
  get nonEmptySecurity() {
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

export type NonEmptySecurity = CodeGenerator['nonEmptySecurity']
