import { Parameter } from '@/components/OperationParameter'
import { JSONValue } from './json-value'
import { FormDataType } from './generate-initial-operation-form-values'
import { SECURITY_FORM_NAME_PREFIX } from '@/components/OperationSecuritySchemeForm'

type ParameterValue = Omit<Parameter, 'schema'> & { value: JSONValue }

export abstract class CodeGenerator {
  /**
   * Sandbox is for executing the code in a sandboxed environment while
   * production is meant to be copy-pasted into a project.
   */
  mode: 'sandbox' | 'production'

  /**
   * Single entrypoint for generating code.
   */
  abstract gen(): string

  /**
   * Contains the inputs to the request
   */
  _formData: FormDataType

  /**
   * Contains the schema of inputs for the request
   */
  _parameters: Parameter[]

  constructor({
    formData,
    parameters,
  }: {
    formData: FormDataType
    parameters: Parameter[]
  }) {
    this._formData = formData
    this._parameters = parameters
    this.mode = 'sandbox'
  }

  /**
   * A representation of _formData + _parameters that can easily be used in
   * generation of SDK snippets
   */
  get inputs(): {
    parameters: ParameterValue[]
    setupValues: Record<string, string>
  } {
    const nonEmptyParameters: ParameterValue[] = []
    for (const parameter of this._parameters) {
      const input = this._formData[parameter.name]
      // if input is not empty (e.g. not null / undefined / empty string)
      if (input !== null && input !== undefined && input !== '') {
        nonEmptyParameters.push({
          ...parameter,
          value: this._formData[parameter.name],
        })
      }
    }
    const setupValues: Record<string, string> = {}
    for (const [name, value] of Object.entries(this._formData)) {
      if (
        name.startsWith(SECURITY_FORM_NAME_PREFIX) &&
        typeof value === 'string'
      ) {
        setupValues[name.replace(SECURITY_FORM_NAME_PREFIX, '')] = value
      }
    }
    return {
      parameters: nonEmptyParameters,
      setupValues,
    }
  }
}
