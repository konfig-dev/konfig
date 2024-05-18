import { test, describe, expect } from 'vitest'
import { schemaTypeLabel } from './schema-type-label'

describe('schema-type-label', () => {
  test('string', () => {
    expect(schemaTypeLabel({ schema: { type: 'string' } })).toBe('string')
  })
  test('arrary of object type with no type field', () => {
    expect(
      schemaTypeLabel({
        schema: {
          type: 'array',
          items: {
            properties: {
              name: { type: 'string' },
            },
          },
        },
      })
    ).toBe('array of objects')
  })
  test('object type with no type field', () => {
    expect(
      schemaTypeLabel({
        schema: {
          properties: {
            name: { type: 'string' },
          },
        },
      })
    ).toBe('object')
  })
  test('all-of-nullable', () => {
    expect(
      schemaTypeLabel({
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
    ).toBe('number or null')
  })
  test('array of any', () => {
    expect(
      schemaTypeLabel({
        schema: {
          type: 'array',
          items: {},
        },
      })
    ).toBe('array of any')
  })
})
