import { SchemaObject } from '../parseSpec'
import {
  generateSchemaObjectFromJson,
  mergeSchemaObject,
} from './generate-schema-object-from-json'
import { Json } from './json-schema'
import * as fs from 'fs'
import * as path from 'path'

describe('merge-schema-object', () => {
  it('remove required if missing from other object', () => {
    const a: SchemaObject = {
      type: 'object',
      properties: {
        field: {
          type: 'string',
        },
      },
      required: ['field'],
    }
    const b: SchemaObject = {
      type: 'object',
      properties: {
        someOtherField: {
          type: 'string',
        },
      },
    }
    const mergedSchemaObject = mergeSchemaObject({ a, b })
    expect(mergedSchemaObject).toStrictEqual({
      type: 'object',
      properties: {
        field: {
          type: 'string',
        },
        someOtherField: {
          type: 'string',
        },
      },
      required: [],
    })
  })
  it('array of object types', () => {
    const a: SchemaObject = {
      type: 'object',
      properties: {
        arrayField: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              aField: {
                type: 'number',
              },
              sameField: {
                type: 'number',
              },
            },
          },
        },
      },
    }
    const b: SchemaObject = {
      type: 'object',
      properties: {
        arrayField: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              bField: {
                type: 'string',
              },
              sameField: {
                type: 'string',
              },
            },
          },
        },
      },
    }
    const mergedSchemaObject = mergeSchemaObject({ a, b })
    expect(mergedSchemaObject).toStrictEqual({
      type: 'object',
      properties: {
        arrayField: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              aField: {
                type: 'number',
              },
              bField: {
                type: 'string',
              },
              sameField: {
                oneOf: [
                  {
                    type: 'number',
                  },
                  { type: 'string' },
                ],
              },
            },
          },
        },
      },
    })
  })
  it('objects', () => {
    const a: SchemaObject = {
      type: 'object',
      properties: {
        arrayField: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
        stringField: { type: 'string' },
        aField: { type: 'number' },
        field: {
          type: 'string',
        },
      },
    }
    const b: SchemaObject = {
      type: 'object',
      properties: {
        arrayField: {
          type: 'array',
          items: {
            type: 'number',
          },
        },
        stringField: { type: 'string' },
        bField: { type: 'number' },
        field: {
          type: 'boolean',
        },
      },
    }
    const mergedSchemaObject = mergeSchemaObject({ a, b })
    expect(mergedSchemaObject).toStrictEqual({
      type: 'object',
      properties: {
        arrayField: {
          type: 'array',
          items: {
            oneOf: [{ type: 'string' }, { type: 'number' }],
          },
        },
        stringField: { type: 'string' },
        aField: { type: 'number' },
        bField: { type: 'number' },
        field: {
          oneOf: [{ type: 'string' }, { type: 'boolean' }],
        },
      },
    })
  })
})

describe('generate-schema-object-from-json', () => {
  it('null 3_0', () => {
    const json = {
      nullField: null,
    }
    const schema = generateSchemaObjectFromJson({ json, version: '3.0.x' })
    expect(schema).toStrictEqual({
      type: 'object',
      properties: {
        nullField: {
          type: 'string',
          nullable: true,
          'x-konfig-null-placeholder': true,
        },
      },
      example: {
        nullField: null,
      },
    })
  })
  it('merge 3_0 empty array', () => {
    const json = {
      emptyArray: [],
    }
    expect(
      generateSchemaObjectFromJson({ json, version: '3.0.x' })
    ).toStrictEqual({
      type: 'object',
      properties: {
        emptyArray: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
      },
      example: { emptyArray: [] },
    })
  })
  it('merge 3_0 decentro validate response', () => {
    const json = JSON.parse(
      fs.readFileSync(
        path.join(
          __dirname,
          'generate-schema-object-from-json-test',
          'merge-3_0-decentro-validate-response.json'
        ),
        'utf-8'
      )
    )
    const schema = generateSchemaObjectFromJson({ json, version: '3.0.x' })
    expect(schema).toMatchSnapshot()
  })
  it('merge 3_0', () => {
    const json = {
      object: {
        a: 'b',
        c: 3,
      },
      list: [
        1,
        2.5,
        'test1',
        'test2',
        {
          hello: 'world',
          status: false,
        },
        {
          hello: 'world 2',
          status: true,
          mine: 'now',
        },
      ] as Json[],
    }
    expect(
      generateSchemaObjectFromJson({ json, version: '3.0.x' })
    ).toStrictEqual({
      type: 'object',
      properties: {
        object: {
          type: 'object',
          properties: {
            a: { type: 'string', example: 'b' },
            c: { type: 'number', example: 3 },
          },
        },
        list: {
          type: 'array',
          items: {
            oneOf: [
              { type: 'number', example: 1 },
              { type: 'string', example: 'test1' },
              {
                type: 'object',
                properties: {
                  hello: { type: 'string', example: 'world' },
                  status: { type: 'boolean', example: false },
                  mine: { type: 'string', example: 'now' },
                },
              },
            ],
          },
        },
      },
      example: json,
    } as SchemaObject)
  })
})
