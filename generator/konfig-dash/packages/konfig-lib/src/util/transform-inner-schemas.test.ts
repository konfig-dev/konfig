import { OpenAPIV3 } from 'openapi-types'
import { transformInnerSchemas } from './transform-inner-schemas'
import { parseSpec } from '../parseSpec'

describe('transformInnerSchemas', () => {
  it('transforms inner schemas in OpenAPI document', async () => {
    const originalOpenApiDoc: OpenAPIV3.Document = {
      openapi: '3.0.0',
      info: {
        title: 'My API',
        version: '1.0.0',
      },
      components: {
        schemas: {
          User: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
              },
              address: {
                type: 'object',
                properties: {
                  street: {
                    type: 'string',
                  },
                  city: {
                    type: 'string',
                  },
                },
              },
              tags: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                    },
                  },
                },
              },
              friends: {
                type: 'array',
                items: {
                  $ref: "#/components/schemas/User"
                }
              }
            },
          },
          OtherSchema: {
            type: 'object',
            properties: {
              prop1: {
                type: 'string',
              },
            },
          },
        },
        securitySchemes: {
          apiKey: {
            type: 'apiKey',
            name: 'X-API-Key',
            in: 'header',
          },
        },
      },
      paths: {
        '/users': {
          get: {
            operationId: 'getUsers',
            responses: {
              '200': {
                description: 'OK',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/User',
                    },
                  },
                },
              },
            },
          },
          post: {
            operationId: 'createUser',
            security: [{ apiKey: [] }],
            requestBody: {
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/User',
                  },
                },
              },
            },
            responses: {
              '200': {
                description: 'OK',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/User',
                    },
                  },
                },
              },
            },
          },
        },
      },
    }

    const spec = await parseSpec(JSON.stringify(originalOpenApiDoc))
    transformInnerSchemas({ spec })
    expect(spec.spec).toMatchSnapshot()
  })
})
