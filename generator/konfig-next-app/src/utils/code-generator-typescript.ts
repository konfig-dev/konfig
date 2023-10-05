import { CodeGenerator } from './code-generator'
import prettier from 'prettier/standalone'
import typescriptParser from 'prettier/plugins/typescript'
import estree from 'prettier/plugins/estree'
import camelCase from 'camelcase'
import { SdkArg } from './json-value'
import { fingerprintFile } from './fingerprint-file'
import { FormDataType } from './generate-initial-operation-form-values'

export class CodeGeneratorTypeScript extends CodeGenerator {
  static setupFiles(values: FormDataType): Record<string, File> {
    const files: Record<string, File> = {}
    // recursively iterate through all values in values.parameters and add files to
    // the files record by fingerprinting the file with "fingerprintFile" function
    // and placing the fingerprint in the files record
    const addFiles = (parameters: unknown) => {
      if (parameters instanceof File) {
        files[fingerprintFile(parameters)] = parameters
        return
      }
      if (Array.isArray(parameters)) {
        for (const parameter of parameters) {
          addFiles(parameter)
        }
      } else if (typeof parameters === 'object' && parameters !== null) {
        for (const [key, value] of Object.entries(parameters)) {
          addFiles(value)
        }
      }
    }
    addFiles(values.parameters)
    return files
  }
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
      ? `{${this.proxySetupArgs}}`
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
    const securityKey = this.quoteIfNecessary(
      value.type === 'apiKey' ? value.key : value.name
    )
    // convert securityValue to string of same length with all values replace with char 'X'
    const securityValueMasked =
      this.mode === 'sandbox' ? securityValue : securityValue.replace(/./g, 'X')
    return `  ${securityKey}: '${securityValueMasked}',`
  })
  .join('\n')}${
          this.oauthTokenUrl !== null && this.isUsingCustomOAuthTokenUrl
            ? `oauthTokenUrl: "${this.oauthTokenUrl}",`
            : ''
        }
  ${this.proxySetupArgs}
}`
  }

  /**
   * TypeScript doesn't like dashes in property names, so we need to quote them if they exist.
   */
  quoteIfNecessary(value: string): string {
    if (value.includes('-')) {
      return `"${value}"`
    }
    return value
  }

  get proxySetupArgs(): string {
    return this.mode === 'production'
      ? this.isUsingCustomBasePath
        ? `basePath: "${this.basePath}",`
        : ''
      : `basePath: "/api/proxy", baseOptions: {headers: {"x-proxy-target": "${this.basePath}"}}`
  }

  innerObject(entries: [string, SdkArg][], preserveCasing = false): string {
    const parameters = entries
      .map(([name, value]) => {
        return `  ${this.argName(name, preserveCasing)}: ${this.argValue(
          value
        )},`
      })
      .join('\n')
    return parameters
  }

  object(entries: [string, SdkArg][], preserveCasing = false) {
    const innerObject = this.innerObject(entries, preserveCasing)
    return `{${innerObject}}`
  }

  get packageName(): string {
    return this.languageConfigurations.typescript.packageName
  }

  get clientName(): string {
    return this.languageConfigurations.typescript.clientName
  }

  get clientNameLowercase(): string {
    return this.clientName.toLowerCase()
  }

  argValue(value: SdkArg, index?: number): string {
    if (Array.isArray(value)) {
      return `[${value.map((v, index) => this.argValue(v, index)).join(', ')}]`
    }
    if (value instanceof File) {
      if (this.mode === 'sandbox') {
        return `files["${fingerprintFile(value)}"]`
      }
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
      return this.object(filtered, true)
    }
    return JSON.stringify(value, undefined, 2)
  }

  /**
   * Returns the name of the argument to be used in the SDK method call based on the name of the parameter.
   * If preserveCasing is true, the name will be returned with all non-alphanumeric characters removed.
   * If preserveCasing is false, the name will be returned in camelCase.
   * @param name The name of the parameter
   * @param preserveCasing Whether or not to preserve the casing of the parameter name
   * @returns The name of the argument to be used in the SDK method call
   */
  argName(name: string, preserveCasing = false): string {
    if (preserveCasing) {
      // remove all non-alphanumeric characters except for underscores from name
      // and return
      return name.replace(/[^a-zA-Z0-9_]/g, '')
    }
    return camelCase(name)
  }

  get args(): string {
    if (this.nonEmptyParameters.length === 0) {
      if (this.requestBodyRequired) {
        return `{}`
      }
      return ''
    }
    const nonBodyParameters = this.nonEmptyParameters
      .filter(([{ parameter }]) => {
        return parameter.in !== 'body'
      })
      .map(([{ name }, value]) => {
        return [name, value] as [string, SdkArg]
      })
    const bodyParameters = this.nonEmptyParameters
      .filter(([{ parameter }]) => {
        return parameter.in === 'body'
      })
      .map(([{ name }, value]) => {
        return [name, value] as [string, SdkArg]
      })
    return `{${this.innerObject(nonBodyParameters)}${this.innerObject(
      bodyParameters,
      true
    )}}`
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
