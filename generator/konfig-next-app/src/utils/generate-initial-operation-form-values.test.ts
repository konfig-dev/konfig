import { generateInitialFormValues } from './generate-initial-operation-form-values'
import { test, expect, describe } from 'vitest'

describe('generateInitialFormValues', () => {
  test('simple array body parameter', async () => {
    const initialValues = generateInitialFormValues({
      parameters: [
        {
          name: 'body',
          in: 'body',
          schema: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          isRequestBody: true,
        },
      ],
      securitySchemes: {},
      hideSecurity: [],
      clientState: [],
    })
    expect(initialValues).toMatchInlineSnapshot(`
      {
        "initialValues": {
          "parameters": {
            "body": "",
          },
          "requestBody": "",
          "security": {},
        },
        "validate": {
          "parameters": {
            "body": [Function],
          },
        },
      }
    `)
  })

  test('nested initial form values for array should contain 1 element', async () => {
    // https://www.notion.so/konfigthis/For-array-request-bodies-populate-the-first-element-by-default-so-it-shows-all-the-documentation-fo-81ad363f65fd453398e905e8bd6e152b?pvs=4
    const initialValues = generateInitialFormValues({
      parameters: [
        {
          name: 'body',
          in: 'body',
          schema: {
            type: 'object',
            properties: {
              documents: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    innerObjectArray: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          item: {
                            type: 'string',
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      ],
      securitySchemes: {},
      hideSecurity: [],
      clientState: [],
    })

    expect(initialValues).toMatchInlineSnapshot(`
      {
        "initialValues": {
          "parameters": {
            "body": {
              "documents": [
                {
                  "innerObjectArray": [
                    {
                      "item": "",
                    },
                  ],
                },
              ],
            },
          },
          "requestBody": "",
          "security": {},
        },
        "validate": {
          "parameters": {
            "body": {
              "documents": {
                "innerObjectArray": {
                  "item": [Function],
                },
              },
            },
          },
        },
      }
    `)
  })
  test('initial form values for array should contain 1 element', async () => {
    // https://www.notion.so/konfigthis/For-array-request-bodies-populate-the-first-element-by-default-so-it-shows-all-the-documentation-fo-81ad363f65fd453398e905e8bd6e152b?pvs=4
    const initialValues = generateInitialFormValues({
      parameters: [
        {
          name: 'body',
          in: 'body',
          schema: {
            type: 'object',
            properties: {
              documents: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    item: {
                      type: 'string',
                    },
                  },
                },
              },
            },
          },
        },
      ],
      securitySchemes: {},
      hideSecurity: [],
      clientState: [],
    })
    expect(initialValues).toMatchInlineSnapshot(`
      {
        "initialValues": {
          "parameters": {
            "body": {
              "documents": [
                {
                  "item": "",
                },
              ],
            },
          },
          "requestBody": "",
          "security": {},
        },
        "validate": {
          "parameters": {
            "body": {
              "documents": {
                "item": [Function],
              },
            },
          },
        },
      }
    `)
  })

  test('simple object request body', async () => {
    const initialValues = generateInitialFormValues({
      parameters: [
        {
          name: 'bodyParam',
          in: 'body',
          schema: {
            type: 'object',
            properties: {
              a: {
                type: 'number',
              },
              b: {
                type: 'string',
              },
            },
          },
        },
      ],
      securitySchemes: {},
      hideSecurity: [],
      clientState: [],
    })
    expect(initialValues).toMatchInlineSnapshot(`
      {
        "initialValues": {
          "parameters": {
            "bodyParam": {
              "a": "",
              "b": "",
            },
          },
          "requestBody": "",
          "security": {},
        },
        "validate": {
          "parameters": {
            "bodyParam": {
              "a": [Function],
              "b": [Function],
            },
          },
        },
      }
    `)
  })

  test('simple number and string query parameters', async () => {
    const initialValues = generateInitialFormValues({
      parameters: [
        {
          name: 'a',
          in: 'query',
          schema: {
            type: 'number',
          },
        },
        {
          name: 'b',
          in: 'query',
          schema: {
            type: 'string',
          },
        },
      ],
      securitySchemes: {},
      hideSecurity: [],
      clientState: [],
    })
    expect(initialValues).toMatchInlineSnapshot(`
      {
        "initialValues": {
          "parameters": {
            "a": "",
            "b": "",
          },
          "requestBody": "",
          "security": {},
        },
        "validate": {
          "parameters": {
            "a": [Function],
            "b": [Function],
          },
        },
      }
    `)
  })

  test('simple string body parameter', async () => {
    const initialValues = generateInitialFormValues({
      parameters: [
        {
          name: 'stringParameter',
          in: 'body',
          schema: {
            type: 'string',
          },
          isRequestBody: true,
        },
      ],
      securitySchemes: {},
      hideSecurity: [],
      clientState: [],
    })
    expect(initialValues).toMatchInlineSnapshot(`
      {
        "initialValues": {
          "parameters": {
            "stringParameter": "",
          },
          "requestBody": "",
          "security": {},
        },
        "validate": {
          "parameters": {
            "stringParameter": [Function],
          },
        },
      }
    `)
  })
})
