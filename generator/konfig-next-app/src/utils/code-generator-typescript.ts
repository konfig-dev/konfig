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
    if (this.mode === 'production') {
      if (this.args.includes('fs.readFileSync'))
        return `import { ${this.clientName} } from '${this.packageName}'\nimport fs from 'fs'`
      return `import { ${this.clientName} } from '${this.packageName}'`
    }
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
  .map(([_name, value]) => {
    if (value.type === 'oauth2-client-credentials') {
      // convert value.clientSecret to string of same length with all values replace with char 'X'
      const clientSecret =
        this.mode === 'sandbox'
          ? value.clientSecret
          : value.clientSecret.replace(/./g, 'X')
      const clientId =
        this.mode === 'sandbox'
          ? value.clientId
          : value.clientId.replace(/./g, 'X')
      return ` "oauthClientId": "${clientId}",
      "oauthClientSecret": "${clientSecret}",`
    }
    if (value.type === 'bearer') {
      // convert value.value to string of same length with all values replace with char 'X'
      const bearer =
        this.mode === 'sandbox' ? value.value : value.value.replace(/./g, 'X')
      return ` "accessToken": "${bearer}",`
    }
    const securityValue = value.type === 'apiKey' ? value.value : value.value
    const securityKey = value.type === 'apiKey' ? value.key : value.name
    // convert securityValue to string of same length with all values replace with char 'X'
    const securityValueMasked =
      this.mode === 'sandbox' ? securityValue : securityValue.replace(/./g, 'X')
    return `  ${securityKey}: '${securityValueMasked}',`
  })
  .join('\n')}
  ${
    this.oauthTokenUrl !== null && this.isUsingCustomOAuthTokenUrl
      ? `oauthTokenUrl: "${this.oauthTokenUrl}",`
      : ''
  }
  ${
    this.mode === 'production'
      ? this.isUsingCustomBasePath
        ? `basePath: "${this.basePath}",`
        : ''
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

  argValue(value: JSONValue, index?: number): string {
    if (Array.isArray(value)) {
      return `[${value.map((v, index) => this.argValue(v, index)).join(', ')}]`
    }
    if (value instanceof File) {
      if (value.name !== '') {
        return `fs.readFileSync("${value.name}")`
      }
      return `fs.readFileSync("FILE_PATH${
        index !== undefined ? `_${index + 1}` : ``
      }")`
    } else if (typeof value === 'object' && value !== null) {
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
    // remove all non-alphanumeric characters from this.tag and assign to variable. preserve spaces
    const tag = this.tag.replace(/[^a-zA-Z0-9 ]/g, '')

    // convert capital letters to lowercase that aren't at the beginning of a word
    const lowercased = tag.replace(/\B[A-Z]/g, (s) => s.toLowerCase())

    return camelCase(lowercased)
  }

  get methodName() {
    return camelCase(this.operationId.split('_')[1])
  }
}
