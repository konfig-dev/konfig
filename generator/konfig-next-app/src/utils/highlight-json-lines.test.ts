import { describe, expect, test } from 'vitest'
import { highlightJsonLines } from './highlight-json-lines'
describe('highlight-json-lines', () => {
  const simpleJson = {
    id: 2,
    inner: {
      id: 2,
    },
  }
  test('top-level id', () => {
    expect(
      highlightJsonLines({ json: simpleJson, path: ['id'] }).highlightedLines
    ).toStrictEqual([2])
  })
  test('inner id', () => {
    expect(
      highlightJsonLines({ json: simpleJson, path: ['inner', 'id'] })
        .highlightedLines
    ).toStrictEqual([4])
  })
  test('inner', () => {
    expect(
      highlightJsonLines({ json: simpleJson, path: ['inner'] }).highlightedLines
    ).toStrictEqual([3, 4, 5])
  })
  test('root', () => {
    expect(
      highlightJsonLines({ json: simpleJson, path: [] }).highlightedLines
    ).toStrictEqual([1, 2, 3, 4, 5])
  })

  const jsonWithArrayOfObjects = {
    data: [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ],
  }
  test('array of objects', () => {
    expect(
      highlightJsonLines({ json: jsonWithArrayOfObjects, path: ['data'] })
        .highlightedLines
    ).toStrictEqual([2, 3, 4, 5, 6, 7, 8, 9])
  })
  test('id in array of object', () => {
    expect(
      highlightJsonLines({ json: jsonWithArrayOfObjects, path: ['data', 'id'] })
        .highlightedLines
    ).toStrictEqual([4, 7])
  })

  const jsonWithArrayOfScalars = {
    data: [1, 2, 3],
  }
  test('object with array of scalars', () => {
    expect(
      highlightJsonLines({ json: jsonWithArrayOfScalars, path: ['data'] })
        .highlightedLines
    ).toStrictEqual([2, 3, 4, 5, 6])
  })

  const arrayOfScalar = [1, 2, 3]
  test('array of scalars', () => {
    expect(
      highlightJsonLines({ json: arrayOfScalar, path: ['item'] })
        .highlightedLines
    ).toStrictEqual([1, 2, 3, 4, 5])
  })
  test('array of scalars items', () => {
    expect(
      highlightJsonLines({ json: arrayOfScalar, path: ['item'] })
        .highlightedLines
    ).toStrictEqual([2, 3, 4])
  })
})
