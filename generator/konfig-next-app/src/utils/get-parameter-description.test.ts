import { test, describe, expect } from 'vitest'
import { getParameterDescription } from './get-parameter-description'

describe('schema-type-label', () => {
  test('all-of-nullable', () => {
    expect(
      getParameterDescription({
        name: 'test',
        in: 'query',
        schema: {
          nullable: true,
          allOf: [
            {
              type: 'number',
              description: 'Trade Units. Cannot work with notional value.',
            },
          ],
        },
      })
    ).toBe('Trade Units. Cannot work with notional value.')
  })
})
