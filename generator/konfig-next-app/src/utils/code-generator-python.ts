import { CodeGenerator } from './code-generator'

export class CodeGeneratorPython extends CodeGenerator {
  protected async format(code: string): Promise<string> {
    return 'NOT IMPLEMENTED'
  }
  protected gen(): string {
    return 'NOT IMPLEMENTED'
  }
}
