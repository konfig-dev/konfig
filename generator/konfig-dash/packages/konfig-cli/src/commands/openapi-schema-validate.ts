import { Command, Flags } from '@oclif/core'
import { validateDataForOpenApiSpecification } from '../util/validate-data-for-openapi-schema'

export default class OpenapiSchemaValidate extends Command {
  static description =
    'Utility for validating input data against an OpenAPI schema'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    inputPath: Flags.file({
      char: 'i',
      description:
        'relative path from current working directory to file containing data to validate',
      required: true,
      exists: true,
    }),
    specificationPath: Flags.file({
      char: 's',
      description:
        'relative path from current working directory to the OpenAPI specification',
      required: true,
      exists: true,
    }),
    schemaName: Flags.string({
      char: 'n',
      description: 'Name of the schema to validate against',
      required: true,
    }),
  }

  public async run(): Promise<void> {
    const { flags } = await this.parse(OpenapiSchemaValidate)
    const result = await validateDataForOpenApiSpecification({
      inputPath: flags.inputPath,
      specificationPath: flags.specificationPath,
      schemaName: flags.schemaName,
    })
    this.log(JSON.stringify(result, null, 2))
  }
}
