import { unaliasJsonPath } from './ruleset-json-paths'

describe('ruleset-json-paths', () => {
  it('unaliasJsonPath', () => {
    expect(unaliasJsonPath({ path: '#RequestSchemaObject' })).toStrictEqual([
      '$.paths[*][get,put,post,delete,options,head,patch,trace].requestBody.content..schema',
    ])
  })
})
