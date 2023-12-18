import { CodeGenerator } from './code-generator'
import {
  API_KEY_IN_PROPERTY,
  API_KEY_NAME_PROPERTY,
  SECURITY_TYPE_PROPERTY,
} from './generate-initial-operation-form-values'
import { recursivelyRemoveEmptyValues } from './recursively-remove-empty-values'

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
      .replace(/-/g, '_') // replace dashes with underscores
      .toLowerCase()
  }

  get setupArgs(): string {
    const args = []
    for (const [name, security] of this.nonEmptySecurity()) {
      if (security[SECURITY_TYPE_PROPERTY] === 'clientState') {
        args.push(`${this.snake_case(name)}="${this.mask(security.value)}"`)
      } else if (security[SECURITY_TYPE_PROPERTY] === 'apiKey') {
        args.push(
          `${
            this.hasMultipleApiKeys()
              ? this.snake_case(security[API_KEY_NAME_PROPERTY])
              : 'api_key'
          }="${this.mask(security.value)}"`
        )
      }
    }
    if (args.length === 0) return ''
    return `
    ${args.join(',\n    ')}
`
  }

  pythonBooleanStringify(key: string, value: any): any {
    if (typeof value === 'boolean') {
      return value ? 'True' : 'False'
    }
    return value
  }

  get clientName(): string {
    return this.languageConfigurations.python?.clientName ?? 'MISSING'
  }

  get clientNameLowercase(): string {
    return this.clientName.toLowerCase()
  }

  get packageName(): string {
    return this.languageConfigurations.python?.packageName ?? 'MISSING'
  }

  toPythonLiteralString(obj: unknown, indentLevel: number = 0): string {
    const indent = '    ' // 4 spaces
    const currentIndent = indent.repeat(indentLevel)
    const nextIndent = indent.repeat(indentLevel + 1)
    if (obj instanceof File) {
      if (obj.name !== '') {
        return `open("${obj.name}", "rb")`
      }
      return `open("FILE_PATH", "rb")`
    }

    if (typeof obj === 'boolean') {
      return obj ? 'True' : 'False'
    }
    if (typeof obj === 'number' || typeof obj === 'string') {
      return JSON.stringify(obj)
    }
    if (Array.isArray(obj)) {
      const items = obj.map(
        (item) =>
          `${nextIndent}${this.toPythonLiteralString(item, indentLevel + 1)}`
      )
      return `[\n${items.join(',\n')}\n${currentIndent}]`
    }
    if (typeof obj === 'object' && obj !== null) {
      const entries = Object.entries(obj).map(
        ([key, value]) =>
          `${nextIndent}${JSON.stringify(key)}: ${this.toPythonLiteralString(
            value,
            indentLevel + 1
          )}`
      )
      return `{\n${entries.join(',\n')}\n${currentIndent}}`
    }
    return 'None'
  }

  get args(): string {
    if (this.isArrayRequestBody()) {
      const arrayValue = recursivelyRemoveEmptyValues(this.requestBodyValue())
      if (Array.isArray(arrayValue)) {
        return `[${arrayValue
          .map((v) => this.toPythonLiteralString(v))
          .join(', ')}]`
      }
      if (arrayValue === '') return ''
    }
    const args: string[] = []
    for (const [parameter, value] of this.nonEmptyParameters()) {
      args.push(
        `${this.snake_case(parameter.name)}=${this.toPythonLiteralString(
          value,
          1
        )}`
      )
    }
    if (args.length === 0) return ''
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
