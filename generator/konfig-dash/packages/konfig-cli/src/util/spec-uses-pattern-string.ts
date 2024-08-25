import { OpenAPIV3_XDocument, recurseObject } from 'konfig-lib'
import * as yaml from 'js-yaml'

export function specUsesPatternString(specString: string): boolean {
  let spec: OpenAPIV3_XDocument

  try {
    // Try parsing as JSON first
    spec = JSON.parse(specString)
  } catch {
    // If JSON parsing fails, try parsing as YAML
    try {
      spec = yaml.load(specString) as OpenAPIV3_XDocument
    } catch {
      throw new Error('Invalid spec format. Must be valid JSON or YAML.')
    }
  }

  let hasPatternString = false

  recurseObject(spec, ({ value }) => {
    if (
      typeof value === 'object' &&
      value !== null &&
      'type' in value &&
      value.type === 'string' &&
      'pattern' in value &&
      typeof value.pattern === 'string' &&
      value.pattern.length > 0
    ) {
      hasPatternString = true
    }
  })

  return hasPatternString
}
