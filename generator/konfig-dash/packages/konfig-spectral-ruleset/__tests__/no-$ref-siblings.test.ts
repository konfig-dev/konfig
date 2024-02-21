import testRule from './__helpers__/helper'

testRule('no-$ref-siblings', [
  {
    name: 'valid case',
    document: {
      openapi: '3.0.3',
      info: { title: 'Example API', version: '1.0' },
      paths: {
        '/test': {
          get: {
            parameters: [
              {
                description:
                  'This is a test schema with a sibling property to a $ref',
                $ref: '#/components/schemas/test',
              },
            ],
            responses: {},
          },
        },
      },
      components: {
        schemas: {
          test: {
            type: 'string',
          },
        },
      },
    },
    errors: [],
  },
])
