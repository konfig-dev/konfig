import { test, expect } from 'vitest'
import { deepmerge } from './deepmerge'

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
