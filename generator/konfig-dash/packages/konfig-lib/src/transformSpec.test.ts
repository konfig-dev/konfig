import { transformSpec } from './transformSpec'
import * as path from 'path'
import * as fs from 'fs'
import { OpenAPIV3 } from 'openapi-types'

describe('transformSpec', () => {
  it('long example string is shortened', async () => {
    const specPath = path.join(
      __dirname,
      'transform-spec-test',
      'decentro-with-long-example-string.yaml'
    )
    const specString = fs.readFileSync(specPath, 'utf-8')
    const spec = await transformSpec({ specString, generator: 'typescript' })
    expect(spec).toMatchSnapshot()
  })

  it('swagger spec does not throw error when transforming', async () => {
    const specPath = path.join(
      __dirname,
      'transform-spec-test',
      'splitit-onboarding.json'
    )
    const specString = fs.readFileSync(specPath, 'utf-8')
    await transformSpec({ specString, generator: 'typescript' })
  })

  it('remove required properites', async () => {
    const specPath = path.join(
      __dirname,
      'transform-spec-test',
      'humanloop.json'
    )
    const specString = fs.readFileSync(specPath, 'utf-8')
    const spec = await transformSpec({
      specString,
      generator: 'typescript',
      removeRequiredProperties: ['provider_api_keys'],
    })
    expect(spec).toMatchSnapshot()
  })

  it('allOf with single array schema reference', async () => {
    const specPath = path.join(
      __dirname,
      'transform-spec-test',
      'humanloop.json'
    )
    const specString = fs.readFileSync(specPath, 'utf-8')
    const spec = await transformSpec({ specString, generator: 'typescript' })
    expect(spec).toMatchSnapshot()
  })

  describe('filterPaths', () => {
    const spec: OpenAPIV3.Document = {
      openapi: '3.0.0',
      info: {
        title: 'Test',
        version: '1.0.0',
      },
      paths: {
        '/filter-me': {
          get: {
            parameters: [],
            requestBody: {
              content: {
                'application/json': {
                  schema: {
                    type: 'string',
                  },
                },
              },
            },
            responses: {},
          },
          post: {
            parameters: [],
            requestBody: {
              content: {
                'application/json': {
                  schema: {
                    type: 'string',
                  },
                },
              },
            },
            responses: {},
          },
        },
      },
    }
    it('filter entire path', async () => {
      const transformedSpec = await transformSpec({
        specString: JSON.stringify(spec),
        generator: 'typescript',
        filterPaths: [{ path: '/filter-me' }],
      })
      expect(transformedSpec).toMatchSnapshot()
    })
    it('filter single method from path', async () => {
      const transformedSpec = await transformSpec({
        specString: JSON.stringify(spec),
        generator: 'typescript',
        filterPaths: [{ path: '/filter-me', method: 'get' }],
      })
      expect(transformedSpec).toMatchSnapshot()
    })
  })

  describe('x-konfig-operation-can-have-single-parameter', () => {
    it('object requestBody w/ naming conflict is false', async () => {
      const spec: OpenAPIV3.Document = {
        openapi: '3.0.0',
        info: {
          title: 'Test',
          version: '1.0.0',
        },
        paths: {
          '/': {
            get: {
              parameters: [
                { name: 'hello', schema: { type: 'string' }, in: 'cookie' },
              ],
              requestBody: {
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        hello: {
                          type: 'string',
                        },
                      },
                    },
                  },
                },
              },
              responses: {},
            },
          },
        },
      }
      const transformedSpec = await transformSpec({
        specString: JSON.stringify(spec),
        generator: 'typescript',
      })
      expect(transformedSpec).toMatchSnapshot()
    })

    it('object requestBody is true', async () => {
      const spec: OpenAPIV3.Document = {
        openapi: '3.0.0',
        info: {
          title: 'Test',
          version: '1.0.0',
        },
        paths: {
          '/': {
            get: {
              parameters: [
                { name: 'hello', schema: { type: 'string' }, in: 'cookie' },
              ],
              requestBody: {
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        world: {
                          type: 'string',
                        },
                      },
                    },
                  },
                },
              },
              responses: {},
            },
          },
        },
      }
      const transformedSpec = await transformSpec({
        specString: JSON.stringify(spec),
        generator: 'typescript',
      })
      expect(transformedSpec).toMatchSnapshot()
    })

    it('non-object request body with no parameters is true', async () => {
      const spec: OpenAPIV3.Document = {
        openapi: '3.0.0',
        info: {
          title: 'Test',
          version: '1.0.0',
        },
        paths: {
          '/': {
            get: {
              requestBody: {
                content: {
                  'application/json': {
                    schema: {
                      type: 'string',
                    },
                  },
                },
              },
              responses: {},
            },
          },
        },
      }
      const transformedSpec = await transformSpec({
        specString: JSON.stringify(spec),
        generator: 'typescript',
      })
      expect(transformedSpec).toMatchSnapshot()
    })

    it('array requestBody is false', async () => {
      const spec: OpenAPIV3.Document = {
        openapi: '3.0.0',
        info: {
          title: 'Test',
          version: '1.0.0',
        },
        paths: {
          '/': {
            get: {
              parameters: [
                { name: 'hello', schema: { type: 'string' }, in: 'cookie' },
              ],
              requestBody: {
                content: {
                  'application/json': {
                    schema: {
                      type: 'array',
                      items: {
                        type: 'string',
                      },
                    },
                  },
                },
              },
              responses: {},
            },
          },
        },
      }
      const transformedSpec = await transformSpec({
        specString: JSON.stringify(spec),
        generator: 'typescript',
      })
      expect(transformedSpec).toMatchSnapshot()
    })

    it('allOf only object requestBody is true', async () => {
      const spec: OpenAPIV3.Document = {
        openapi: '3.0.0',
        info: {
          title: 'Test',
          version: '1.0.0',
        },
        paths: {
          '/': {
            get: {
              parameters: [
                { name: 'hello', schema: { type: 'string' }, in: 'cookie' },
              ],
              requestBody: {
                content: {
                  'application/json': {
                    schema: {
                      allOf: [
                        {
                          type: 'object',
                          properties: { world: { type: 'string' } },
                        },
                        {
                          type: 'object',
                          properties: { test: { type: 'string' } },
                        },
                      ],
                    },
                  },
                },
              },
              responses: {},
            },
          },
        },
      }
      const transformedSpec = await transformSpec({
        specString: JSON.stringify(spec),
        generator: 'typescript',
      })
      expect(transformedSpec).toMatchSnapshot()
    })

    it('anyOf non-object requestBody is false', async () => {
      const spec: OpenAPIV3.Document = {
        openapi: '3.0.0',
        info: {
          title: 'Test',
          version: '1.0.0',
        },
        paths: {
          '/': {
            get: {
              parameters: [
                { name: 'hello', schema: { type: 'string' }, in: 'cookie' },
              ],
              requestBody: {
                content: {
                  'application/json': {
                    schema: {
                      anyOf: [
                        {
                          type: 'object',
                          properties: { world: { type: 'string' } },
                        },
                        { type: 'string' },
                      ],
                    },
                  },
                },
              },
              responses: {},
            },
          },
        },
      }
      const transformedSpec = await transformSpec({
        specString: JSON.stringify(spec),
        generator: 'typescript',
      })
      expect(transformedSpec).toMatchSnapshot()
    })

    it('anyOf non-object requestBody with ref is false', async () => {
      const spec: OpenAPIV3.Document = {
        openapi: '3.0.0',
        info: {
          title: 'Test',
          version: '1.0.0',
        },
        paths: {
          '/': {
            get: {
              parameters: [
                { name: 'hello', schema: { type: 'string' }, in: 'cookie' },
              ],
              requestBody: {
                content: {
                  'application/json': {
                    schema: {
                      anyOf: [
                        {
                          type: 'object',
                          properties: { world: { type: 'string' } },
                        },
                        { $ref: '#/components/schemas/String' },
                      ],
                    },
                  },
                },
              },
              responses: {},
            },
          },
        },
        components: {
          schemas: {
            String: {
              type: 'string',
            },
          },
        },
      }
      const transformedSpec = await transformSpec({
        specString: JSON.stringify(spec),
        generator: 'typescript',
      })
      expect(transformedSpec).toMatchSnapshot()
    })

    it('anyOf non-object requestBody with no parameters is true', async () => {
      const spec: OpenAPIV3.Document = {
        openapi: '3.0.0',
        info: {
          title: 'Test',
          version: '1.0.0',
        },
        paths: {
          '/': {
            get: {
              requestBody: {
                content: {
                  'application/json': {
                    schema: {
                      anyOf: [
                        {
                          type: 'object',
                          properties: { world: { type: 'string' } },
                        },
                        { type: 'string' },
                      ],
                    },
                  },
                },
              },
              responses: {},
            },
          },
        },
      }
      const transformedSpec = await transformSpec({
        specString: JSON.stringify(spec),
        generator: 'typescript',
      })
      expect(transformedSpec).toMatchSnapshot()
    })

    it('anyOf only object requestBody is true', async () => {
      const spec: OpenAPIV3.Document = {
        openapi: '3.0.0',
        info: {
          title: 'Test',
          version: '1.0.0',
        },
        paths: {
          '/': {
            get: {
              parameters: [
                { name: 'hello', schema: { type: 'string' }, in: 'cookie' },
              ],
              requestBody: {
                content: {
                  'application/json': {
                    schema: {
                      anyOf: [
                        {
                          type: 'object',
                          properties: { world: { type: 'string' } },
                        },
                        {
                          type: 'object',
                          properties: { test: { type: 'string' } },
                        },
                      ],
                    },
                  },
                },
              },
              responses: {},
            },
          },
        },
      }
      const transformedSpec = await transformSpec({
        specString: JSON.stringify(spec),
        generator: 'typescript',
      })
      expect(transformedSpec).toMatchSnapshot()
    })

    it('anyOf only object requestBody w/ conflicting names is false', async () => {
      const spec: OpenAPIV3.Document = {
        openapi: '3.0.0',
        info: {
          title: 'Test',
          version: '1.0.0',
        },
        paths: {
          '/': {
            get: {
              parameters: [
                { name: 'hello', schema: { type: 'string' }, in: 'cookie' },
              ],
              requestBody: {
                content: {
                  'application/json': {
                    schema: {
                      anyOf: [
                        {
                          type: 'object',
                          properties: { world: { type: 'string' } },
                        },
                        {
                          type: 'object',
                          properties: { hello: { type: 'string' } },
                        },
                      ],
                    },
                  },
                },
              },
              responses: {},
            },
          },
        },
      }
      const transformedSpec = await transformSpec({
        specString: JSON.stringify(spec),
        generator: 'typescript',
      })
      expect(transformedSpec).toMatchSnapshot()
    })
  })

  describe('x-konfig-single-parameter-schema', () => {
    it('non-empty parameter and object request body', async () => {
      const spec: OpenAPIV3.Document = {
        openapi: '3.0.0',
        info: {
          title: 'Test',
          version: '1.0.0',
        },
        paths: {
          '/': {
            get: {
              parameters: [
                {
                  name: 'hello',
                  schema: { type: 'string', example: 'world' },
                  in: 'cookie',
                },
              ],
              requestBody: {
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        world: {
                          type: 'number',
                        },
                      },
                      example: {
                        world: 1,
                      },
                    },
                  },
                },
              },
              responses: {},
            },
          },
        },
      }
      const transformedSpec = await transformSpec({
        specString: JSON.stringify(spec),
        generator: 'typescript',
      })
      expect(transformedSpec).toMatchSnapshot()
    })

    it('anyOf with array', async () => {
      const spec: OpenAPIV3.Document = {
        openapi: '3.0.0',
        info: {
          title: 'Test',
          version: '1.0.0',
        },
        paths: {
          '/': {
            get: {
              requestBody: {
                content: {
                  'application/json': {
                    schema: {
                      anyOf: [
                        {
                          type: 'object',
                          properties: {
                            world: {
                              type: 'number',
                            },
                          },
                          example: {
                            world: 1,
                          },
                        },
                        {
                          type: 'array',
                          items: {
                            type: 'object',
                            properties: {
                              one: { type: 'string' },
                              two: { type: 'string' },
                            },
                          },
                        },
                      ],
                    },
                  },
                },
              },
              responses: {},
            },
          },
        },
      }
      const transformedSpec = await transformSpec({
        specString: JSON.stringify(spec),
        generator: 'typescript',
      })
      expect(transformedSpec).toMatchSnapshot()
    })
  })

  // We generate schemas because its a language-agnostic format in which we can
  // describe the shape that works with our example generation algorithm. It was
  // easier to do this than rewrite th generator to work with a raw JSON value.
  describe('x-konfig-generated-schema', () => {
    it('simple', async () => {
      const spec: OpenAPIV3.Document = {
        openapi: '3.0.0',
        info: {
          title: 'Test',
          version: '1.0.0',
        },
        paths: {},
        components: {
          schemas: {
            FreeFormObjectWithExample: {
              type: 'object',
              example: {
                key: 'value',
              },
            },
          },
        },
      }
      const transformedSpec = await transformSpec({
        specString: JSON.stringify(spec),
        generator: 'typescript',
      })
      expect(transformedSpec).toMatchSnapshot()
    })
  })
  describe('topLevelOperations', () => {
    it('humanloop', async () => {
      const specPath = path.join(
        __dirname,
        'transform-spec-test',
        'humanloop.json'
      )
      const specString = fs.readFileSync(specPath, 'utf-8')
      const spec = await transformSpec({
        specString,
        generator: 'typescript',
        topLevelOperations: {
          Generate_generate: 'generate',
          Feedback_submit: 'feedback',
          Logs_log: 'log',
        },
      })
      expect(spec).toMatchSnapshot()
    })
  })

  describe('transform in-line enum properties for ruby', () => {
    it('snaptrade', async () => {
      const specPath = path.join(
        __dirname,
        'transform-spec-test',
        'snaptrade.yaml'
      )
      const specString = fs.readFileSync(specPath, 'utf-8')
      const spec = await transformSpec({
        specString,
        generator: 'ruby',
      })
      expect(spec).toMatchSnapshot()
    })
  })

  describe('attach nullable', () => {
    it('snaptrade', async () => {
      const specPath = path.join(
        __dirname,
        'transform-spec-test',
        'snaptrade.yaml'
      )
      const specString = fs.readFileSync(specPath, 'utf-8')
      const spec = await transformSpec({
        specString,
        generator: 'typescript',
        attachNullabletoAllResponseSchemas: true,
      })
      expect(spec).toMatchSnapshot()
    })
  })
  it('remove date format for swift', async () => {
    const specPath = path.join(__dirname, 'transform-spec-test', 'nuitee.yaml')
    const specString = fs.readFileSync(specPath, 'utf-8')
    const spec = await transformSpec({
      specString,
      generator: 'swift',
    })
    expect(spec).toMatchSnapshot()
  })
  it('inherit top-level object example values in property examples', async () => {
    const input: OpenAPIV3.Document = {
      openapi: '3.0.0',
      info: {
        title: 'Test',
        version: '1.0.0',
      },
      paths: {},
      components: {
        schemas: {
          SchemaWithExampleAlready: {
            type: 'object',
            properties: {
              field: {
                type: 'number',
                example: 3,
              },
            },
            example: {
              field: 2,
            },
          },
          SchemaWithExampleAndXExamples: {
            type: 'object',
            properties: {
              field: {
                type: 'number',
              },
            },
            example: {
              field: 2,
            },
            'x-examples': {
              example: {
                field: 3,
              },
            },
          } as any,
          SchemaWithExample: {
            type: 'object',
            properties: {
              field: {
                type: 'number',
              },
            },
            example: {
              field: 2,
            },
          },
          SchemaWithNestedExample: {
            type: 'object',
            properties: {
              field: {
                type: 'number',
              },
              innerObject: {
                type: 'object',
                properties: {
                  field: {
                    type: 'string',
                    example: 'hello world',
                  },
                },
              },
            },
            example: {
              field: 2,
              innerObject: {
                field: 'hello world',
              },
            },
          },
          SchemaWithXExamples: {
            type: 'object',
            properties: {
              field: {
                type: 'number',
              },
            },
            'x-examples': {
              example: {
                field: 2,
              },
            },
          } as any,
        },
      },
    }
    const spec = await transformSpec({
      specString: JSON.stringify(input),
      generator: 'php',
    })
    expect(spec).toMatchSnapshot()
  })

  describe('info override', () => {
    it('infoContactUrl', async () => {
      const specPath = path.join(
        __dirname,
        'transform-spec-test',
        'decentro.yaml'
      )
      const specString = fs.readFileSync(specPath, 'utf-8')
      const spec = await transformSpec({
        specString,
        generator: 'python',
        infoContactUrl: 'https://decentro.tech',
      })
      expect(spec).toMatchSnapshot()
    })
    it('infoContactName', async () => {
      const specPath = path.join(
        __dirname,
        'transform-spec-test',
        'decentro.yaml'
      )
      const specString = fs.readFileSync(specPath, 'utf-8')
      const spec = await transformSpec({
        specString,
        generator: 'python',
        infoContactName: 'Decentro',
      })
      expect(spec).toMatchSnapshot()
    })
    it('infoContactEmail', async () => {
      const specPath = path.join(
        __dirname,
        'transform-spec-test',
        'decentro.yaml'
      )
      const specString = fs.readFileSync(specPath, 'utf-8')
      const spec = await transformSpec({
        specString,
        generator: 'python',
        infoContactEmail: 'admin@decentro.tech',
      })
      expect(spec).toMatchSnapshot()
    })
  })

  describe('stripRequiredStringProperties', () => {
    it('decentro', async () => {
      const specPath = path.join(
        __dirname,
        'transform-spec-test',
        'decentro.yaml'
      )
      const specString = fs.readFileSync(specPath, 'utf-8')
      const spec = await transformSpec({
        specString,
        generator: 'python',
        stripRequiredStringProperties: true,
      })
      expect(spec).toMatchSnapshot()
    })
  })

  describe('validateRequiredPropertiesAndParametersAreNonEmpty - collections', () => {
    it('decentro', async () => {
      const specPath = path.join(
        __dirname,
        'transform-spec-test',
        'decentro-collections.yaml'
      )
      const specString = fs.readFileSync(specPath, 'utf-8')
      const spec = await transformSpec({
        specString,
        generator: 'python',
        validateRequiredPropertiesAndParametersAreNonEmpty: true,
      })
      expect(spec).toMatchSnapshot()
    })
  })

  describe('validateRequiredPropertiesAndParametersAreNonEmpty', () => {
    it('decentro', async () => {
      const specPath = path.join(
        __dirname,
        'transform-spec-test',
        'decentro.yaml'
      )
      const specString = fs.readFileSync(specPath, 'utf-8')
      const spec = await transformSpec({
        specString,
        generator: 'python',
        validateRequiredPropertiesAndParametersAreNonEmpty: true,
      })
      expect(spec).toMatchSnapshot()
    })
  })

  describe('handle lack of polymorphism support by converting to empty schema object', () => {
    it('decentro - java', async () => {
      const specPath = path.join(
        __dirname,
        'transform-spec-test',
        'decentro.yaml'
      )
      const specString = fs.readFileSync(specPath, 'utf-8')
      const spec = await transformSpec({
        specString,
        generator: 'java',
      })
      expect(spec).toMatchSnapshot()
    })
  })

  describe('x-konfig-pagination', () => {
    it('allOf-with-single-array-schema-reference', async () => {
      const specPath = path.join(
        __dirname,
        'transform-spec-test',
        'humanloop.json'
      )
      const specString = fs.readFileSync(specPath, 'utf-8')
      const spec = await transformSpec({
        specString,
        generator: 'typescript',
        paginationConfig: {
          parameters: ['page', 'size'],
          response: ['page', 'size', 'total'],
        },
      })
      expect(spec).toMatchSnapshot()
    })
    it('newscatcher', async () => {
      const specPath = path.join(
        __dirname,
        'transform-spec-test',
        'newscatcher.yaml'
      )
      const specString = fs.readFileSync(specPath, 'utf-8')
      const spec = await transformSpec({
        specString,
        generator: 'typescript',
        paginationConfig: {
          parameters: ['page_size', 'page'],
          response: ['page_size', 'page', 'total_pages'],
        },
      })
      expect(spec).toMatchSnapshot()
    })
  })
})
