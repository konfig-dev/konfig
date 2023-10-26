import { CodeGenerator, CodeGeneratorConstructorArgs } from './code-generator'
import { convertToHarRequest } from './convert-to-har-request'
import { HTTPSnippet } from 'httpsnippet'
import type { TargetId } from 'httpsnippet/dist/targets/targets'

type Options = {
  targetId: TargetId
  clientId?: string | undefined
}
export class CodeGeneratorHttpsnippet extends CodeGenerator {
  httpSnippet: HTTPSnippet
  options: Options
  constructor(args: CodeGeneratorConstructorArgs & Options) {
    super(args)
    const harRequest = convertToHarRequest(
      this.nonEmptyParameters,
      this.nonEmptySecurity,
      // can't use URL because we don't want to encode { and } in path yet
      `${this.basePath}${this.configuration.path}`,
      this.configuration.httpMethod.toUpperCase()
    )
    this.httpSnippet = new HTTPSnippet(harRequest)
    this.options = args
  }

  protected async format(code: string): Promise<string> {
    return code
  }
  protected gen(): string {
    const output = this.httpSnippet.convert(this.options.targetId)
    if (typeof output !== 'string') throw new Error('output is not string')
    return output
  }
}
