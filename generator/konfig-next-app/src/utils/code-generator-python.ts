import { CodeGenerator } from './code-generator'
import {
  API_KEY_IN_PROPERTY,
  API_KEY_NAME_PROPERTY,
  SECURITY_TYPE_PROPERTY,
} from './generate-initial-operation-form-values'

export class CodeGeneratorPython extends CodeGenerator {
  protected async format(code: string): Promise<string> {
    return code
  }
  protected gen(): string {
    return `${this.importStatement}

${this.clientNameLowercase} = ${this.clientName}(${this.setupArgs})

response = ${this.clientNameLowercase}.${this.namespace}.${this.methodName}(${this.args})
pprint(response.body)`
  }

  get importStatement(): string {
    return `from pprint import pprint
from ${this.packageName} import ${this.clientName}`
  }

  /**
   * Converts a string to snake_case. Examples:
   * - "API Status" -> "api_status"
   * - "APIStatus" -> "api_status"
   * - "apiStatus" -> "api_status"
   * - "api_status" -> "api_status"
   * @param str - string to convert to snake_case
   * @returns snake_case version of str
   */
  snake_case(str: string): string {
    return str
      .replace(/\s+/g, '_') // Replaces spaces with underscores
      .replace(/([a-z])([A-Z])/g, '$1_$2')
      .replace(/([A-Z])([A-Z][a-z])/g, '$1_$2')
      .toLowerCase()
  }

  get setupArgs(): string {
    const args = []
    for (const [name, security] of this.nonEmptySecurity) {
      if (security[SECURITY_TYPE_PROPERTY] === 'clientState') {
        args.push(`${this.snake_case(name)}="${this.mask(security.value)}"`)
      } else if (security[SECURITY_TYPE_PROPERTY] === 'apiKey') {
        args.push(
          `${this.snake_case(security[API_KEY_NAME_PROPERTY])}="${this.mask(
            security.value
          )}"`
        )
      }
    }
    return `
    ${args.join(',\n    ')}
`
  }

  get args(): string {
    if (this._parameters.length === 0) return ''
    const args: string[] = []
    for (const [parameter, value] of this.nonEmptyParameters) {
      args.push(
        `${this.snake_case(parameter.name)}=${JSON.stringify(
          value,
          undefined,
          2
        )}`
      )
    }
    return `
    ${args.join(',\n    ')}
`
  }

  get namespace(): string {
    return this.snake_case(this.tag)
  }

  get methodName(): string {
    const suffix = this.operationId.split('_')[1]
    return this.snake_case(suffix)
  }
}
