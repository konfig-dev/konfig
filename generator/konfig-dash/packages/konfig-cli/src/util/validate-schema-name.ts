import camelcase from 'camelcase'
import { Spec } from 'konfig-lib'
import { nameSchema } from './fix-progress'

export function validateSchemaName({
  name,
  spec,
}: {
  name: string
  spec: Spec['spec']
}) {
  /**
   * From the OpenAPI Specification:
   * https://spec.openapis.org/oas/v3.1.0#patterned-fields-0
   *
   * Any HTTP status code can be used as the property name, but only one
   * property per code, to describe the expected response for that HTTP status
   * code. This field MUST be enclosed in quotation marks (for example, "200")
   * for compatibility between JSON and YAML. To define a range of response
   * codes, this field MAY contain the uppercase wildcard character X. For
   * example, 2XX represents all response codes between [200-299]. Only the
   * following range definitions are allowed: 1XX, 2XX, 3XX, 4XX, and 5XX. If a
   * response is defined using an explicit code, the explicit code definition
   * takes precedence over the range definition for that code.
   *
   * Takeaway: [1-5]XX is OK along with exact response codes and "default" so we
   * remove "X" as it complicates the isCamelcase check
   */
  const nameWithoutX = name.replace(/X/g, '')
  const isCamelcase =
    camelcase(nameWithoutX, { pascalCase: true }) === nameWithoutX
  console.log(name, isCamelcase)
  const isNonEmpty = nameSchema.safeParse(name).success
  const isUnique =
    spec.components === undefined ||
    spec.components.schemas === undefined ||
    !(name in spec.components.schemas)
  return isCamelcase && isNonEmpty && isUnique
}
