import { Parameter } from '@/components/OperationParameter'
import {
  API_KEY_VALUE_PROPERTY,
  BEARER_VALUE_PROPERTY,
  CLIENT_STATE_VALUE_PROPERTY,
  FormDataType,
  OAUTH2_CLIENT_ID_PROPERTY,
  OAUTH2_CLIENT_SECRET_PROPERTY,
  PARAMETER_FORM_NAME_PREFIX,
  SECURITY_FORM_NAME_PREFIX,
} from './generate-initial-operation-form-values'

export type CodeGeneratorConstructorArgs = {
  basePath: string
  formData: FormDataType
  parameters: Parameter[]
  clientName: string
  packageName: string
  tag: string
  operationId: string
  requestBodyRequired: boolean

  /**
   *  Sandbox is for executing the code in a sandboxed environment while
   *  production is meant to be copy-pasted into a project.
   */
  mode?: 'sandbox' | 'production'
}

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
   * The top-level client name in the SDK
   */
  clientName: string

  /**
   * The package name of the SDK (i.e. "konfig-js" for TypeScript in npm)
   */
  packageName: string

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
   * Whether or not the request body is required
   */
  requestBodyRequired: boolean

  constructor({
    formData,
    parameters,
    clientName,
    packageName,
    tag,
    operationId,
    basePath,
    requestBodyRequired,
    mode = 'production',
  }: CodeGeneratorConstructorArgs) {
    this.basePath = basePath
    this._formData = formData
    this._parameters = parameters
    this.mode = mode
    this.clientName = clientName
    this.packageName = packageName
    this.tag = tag
    this.operationId = operationId
    this.requestBodyRequired = requestBodyRequired
  }

  protected abstract format(code: string): Promise<string>

  /**
   * Single entrypoint for generating code.
   */
  protected abstract gen(): string

  async snippet(): Promise<string> {
    return await this.format(this.gen())
  }

  get clientNameLowercase(): string {
    return this.clientName.toLowerCase()
  }

  /**
   * Returns the setup values that are non-empty and exist as part of passed parameters
   */
  get nonEmptyParameters() {
    return Object.entries(this._formData[PARAMETER_FORM_NAME_PREFIX]).filter(
      ([name, parameter]) => {
        return (
          parameter !== '' &&
          parameter !== undefined &&
          Array.isArray(parameter) &&
          parameter.length > 0 &&
          this._parameters.find((p) => p.name === name)
        )
      }
    )
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
