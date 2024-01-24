import { describe, expect, it } from 'vitest'
import { generatePropertiesForSchemaObject } from './generate-properties-for-schema-object'

describe('generate-properties-for-schema-object', async () => {
  it('simple', async () => {})
  const parameters = generatePropertiesForSchemaObject({
    schema: {
      type: 'object',
      properties: { name: { type: 'string' } },
    },
  })
  expect(parameters[0]).toEqual({
    name: 'name',
    in: 'body',
    required: false,
    schema: { type: 'string' },
  })
  it('array', async () => {
    const parameters = generatePropertiesForSchemaObject({
      schema: {
        type: 'object',
        properties: {
          name: {
            type: 'array',
            items: { type: 'string' },
          },
        },
        required: ['name'],
      },
    })
    expect(parameters[0]).toEqual({
      name: 'name',
      in: 'body',
      required: true,
      schema: { type: 'array', items: { type: 'string' } },
    })
  })
})
