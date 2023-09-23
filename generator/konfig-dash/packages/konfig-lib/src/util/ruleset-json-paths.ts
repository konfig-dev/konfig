import { POTENTIAL_INCORRECT_DATA_TYPE_RULE_NAME } from './get-ignore'

export const rulesetJsonPaths = {
  // https://github.com/stoplightio/spectral/blob/develop/packages/rulesets/src/oas/index.ts#L35-L38
  PathItem: ['$.paths[*]'],
  Tags: ['$.tags'],
  Tag: ['#Tags.*'],
  OperationObject: ['#PathItem[get,put,post,delete,options,head,patch,trace]'],
  ParameterObjects: ['#OperationObject.parameters.*'],
  ParameterObjectNames: ['#ParameterObjects.name'],
  ParameterSchemaObject: ['#ParameterObjects..schema'],
  RequestContentObject: ['#OperationObject.requestBody.content'],
  RequestSchemaObject: ['#RequestContentObject..schema'],
  ResponsesObjects: ['#OperationObject.responses'],
  ResponsesObjectHeaderNames: ['#ResponsesObjects.*.headers.*~'],
  ResponsesObjectsKeys: ['#ResponsesObjects.*~'],
  ResponseContentObject: ['#ResponsesObjects.*.content.*'],
  ResponseSchemaObject: ['#ResponseContentObject..schema'],
  AllSchemaObjects: [
    '#RequestSchemaObject',
    '#ResponseSchemaObject',
    '#ParameterSchemaObject',
  ],
}

export const givenPaths = {
  [POTENTIAL_INCORRECT_DATA_TYPE_RULE_NAME]: [
    '#ResponseSchemaObject..',
    '#RequestSchemaObject..',
    '#ParameterSchemaObject..',
  ],
}

export function unaliasJsonPath({ path }: { path: string }): string[] {
  const alias = Object.keys(rulesetJsonPaths).find((alias) =>
    path.includes(alias)
  ) as keyof typeof rulesetJsonPaths
  if (alias === undefined) return [path]
  return rulesetJsonPaths[alias].flatMap((subpath) =>
    unaliasJsonPath({ path: path.replace(`#${alias}`, subpath) })
  )
}
