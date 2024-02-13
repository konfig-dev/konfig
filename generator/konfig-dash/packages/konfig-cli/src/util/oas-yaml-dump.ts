import { yamlDump } from 'konfig-lib'
export const order = [
  'openapi',
  'info',
  'servers',
  'tags',
  'paths',
  'components',
  'summary',
  'operationId',
  'security',
  'title',
  'description',
  'version',
  'parameters',
  'requestBody',
  'responses',
  /*
  Note: prism will treat first media type as default and plain/text is problematic:

  ✖  error     Request terminated with error:
  https://stoplight.io/prism/errors#NO_COMPLEX_OBJECT_TEXT: Cannot serialise
  complex objects as text

  */
  'application/json',
  'text/json',
  'plain/text',
]
export function oasYamlDump(obj: any) {
  return yamlDump({ obj, order })
}
