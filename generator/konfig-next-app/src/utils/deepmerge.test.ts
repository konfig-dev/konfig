import { test, expect, it } from 'vitest'
import { deepmerge } from './deepmerge'

test('deepmerge should prioritize non-empty requestBody', () => {
  const firstArg = {
    requestBody: [
      {
        blob: '',
        metadata: {
          bucketId: '',
          fileName: '',
          fileType: '',
          searchData: '',
        },
      },
    ],
  }

  const secondArg = {
    requestBody: '',
  }

  const result = deepmerge(firstArg, secondArg as any)

  // Ensure that the requestBody prioritizes the argument that is not an empty string
  expect(result.requestBody).toEqual(firstArg.requestBody)
})

test('deepmerge should not result in undefined parameters', () => {
  const arg = {
    parameters: {
      hello: 'world',
    },
  }

  const result = deepmerge(arg, arg)

  // Ensure that the parameters property is not undefined
  expect(result.parameters).not.toBeUndefined()
})
