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

${this.mode === 'production' ? `const response =` : 'return'} await ${
      this.clientNameLowercase
    }.${this.namespace}.${this.methodName}(${this.args})
${this.mode === 'production' ? `console.log(response.data)` : ''}
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

  object(entries: [string, JSONValue][]) {
    const parameters = entries
      .map(([name, value]) => {
        return `  ${this.argName(name)}: ${this.argValue(value)},`
      })
      .join('\n')
    return `{${parameters}}`
  }

  argValue(value: JSONValue): string {
    if (Array.isArray(value)) {
      return `[${value.map((v) => this.argValue(v)).join(', ')}]`
    }
    if (typeof value === 'object' && value !== null) {
      // filter properties that have empty string ('') as a value
      const filtered = Object.entries(value).filter(([_, v]) => v !== '')
      if (filtered.length === 0) {
        return '{}'
      }
      return this.object(filtered)
    }
    return JSON.stringify(value, undefined, 2)
  }

  argName(name: string): string {
    return camelCase(name)
  }

  get args(): string {
    if (this.nonEmptyParameters.length === 0) {
      if (this.requestBodyRequired) {
        return `{}`
      }
      return ''
    }
    return this.object(this.nonEmptyParameters)
  }

  get namespace() {
    return camelCase(this.tag)
  }

  get methodName() {
    return this.operationId.split('_')[1]
  }
}
