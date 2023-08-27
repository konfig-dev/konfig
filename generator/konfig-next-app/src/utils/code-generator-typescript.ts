import { CodeGenerator } from './code-generator'
import prettier from 'prettier/standalone'
import typescriptParser from 'prettier/plugins/typescript'
import estree from 'prettier/plugins/estree'
import camelCase from 'camelcase'
import { JSONValue } from './json-value'

export class CodeGeneratorTypeScript extends CodeGenerator {
  protected async format(code: string): Promise<string> {
    return await prettier.format(code, {
      printWidth: 50,
      parser: 'typescript',
      plugins: [typescriptParser, estree],
    })
  }

  protected gen(): string {
    return `${this.importStatement}

const ${this.clientNameLowercase} = new ${this.client}(${this.setupArgs})

const response = await ${this.clientNameLowercase}.${this.namespace}.${this.methodName}(${this.args})
console.log(response.data)
`
  }

  get importStatement(): string {
    if (this.mode === 'production')
      return `import { ${this.clientName} } from '${this.packageName}'`
    return ``
  }

  get client(): string {
    if (this.mode === 'production') {
      return `${this.clientName}`
    }
    return `client.${this.clientName}`
  }

  get setupArgs(): string {
    return Object.keys(this.nonEmptySecurity).length === 0
      ? ''
      : `{
${this.nonEmptySecurity
  .map(([name, value]) => {
    const securityValue = value.type === 'apiKey' ? value.value : value.value
    const securityKey = value.type === 'apiKey' ? value.key : value.name
    return `  ${securityKey}: '${securityValue}',`
  })
  .join('\n')}
  ${
    this.mode === 'production'
      ? ''
      : `basePath: "/api/proxy", baseOptions: {headers: {"x-proxy-target": "${this.basePath}"}}`
  }
}`
  }

  argValue(value: JSONValue): string {
    return JSON.stringify(value, undefined, 2)
  }

  get args(): string {
    if (this.nonEmptyParameters.length === 0) {
      return ''
    }
    const parameters = this.nonEmptyParameters
      .map(([name, value]) => {
        return `  ${name}: ${this.argValue(value.value)},`
      })
      .join('\n')
    return `{${parameters}}`
  }

  get namespace() {
    return this.camelCase(this.tag)
  }

  get methodName() {
    return this.operationId.split('_')[1]
  }

  /**
   * Converts a string to camelCase
   */
  camelCase(str: string): string {
    return camelCase(str)
  }
}
