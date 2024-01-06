import { test, expect } from 'vitest'
import { deepmerge } from './deepmerge'

test.skip('deepmerge should prioritize non-empty requestBody', () => {
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

test('deepmerge should not concatenate arrays', () => {
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

  const result = deepmerge(firstArg, secondArg)

  // Ensure that the requestBody is not concatenated
  expect(result.requestBody).toEqual(secondArg.requestBody)
})
