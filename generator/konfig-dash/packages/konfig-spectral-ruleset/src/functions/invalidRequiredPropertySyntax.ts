import { IFunctionResult, RulesetFunction } from '@stoplight/spectral-core'
import type { SchemaObject } from 'konfig-lib/dist/parseSpec'
export const invalidRequiredPropertySyntax: RulesetFunction<SchemaObject> = (
  input,
  _options,
  context
) => {
  const result: IFunctionResult[] = []
  if (input === null) return []
  if (input.type !== 'object') return []
  if (input.required === undefined) return []
  const required = input.required

  // iterate through all required properties and insure it passes the regex
  for (let i = 0; i < required.length; i++) {
    const prop = required[i]
    if (prop === undefined) continue
    if (hasMoreThan3Words(prop)) {
      result.push({
        message: `Detected more than 3 words in required property item: "${prop}". This possibly due to invalid YAML list syntax.`,
        path: [...context.path, 'required', i],
      })
    }
  }

  return result
}

function hasMoreThan3Words(str: string): boolean {
  return str.split(' ').length > 3
}
