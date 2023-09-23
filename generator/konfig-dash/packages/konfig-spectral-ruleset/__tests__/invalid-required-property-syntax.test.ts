// import { DiagnosticSeverity } from '@stoplight/types'
import { DiagnosticSeverity } from '@stoplight/types'
import testRule from './__helpers__/helper'

testRule('invalid-required-property-syntax', [
  {
    name: 'invalid case',
    document: {
      openapi: '3.0.0',
      info: {
        title: 'Invalid API Spec',
        version: '1.0.0',
      },
      paths: {
        '/users': {
          post: {
            summary: 'Create a new user',
            requestBody: {
              required: true,
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      firstName: {
                        type: 'string',
                      },
                      lastName: {
                        type: 'string',
                      },
                      email: {
                        type: 'string',
                      },
                    },
                    required: ['firstName lastName email test'],
                  },
                },
              },
            },
            responses: {
              '201': {
                description: 'User created',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'string',
                        },
                        firstName: {
                          type: 'string',
                        },
                        lastName: {
                          type: 'string',
                        },
                        email: {
                          type: 'string',
                        },
                      },
                      required: ['id firstName lastName email'],
                    },
                  },
                },
              },
            },
          },
        },
        '/users/{userId}': {
          get: {
            summary: 'Get user by ID',
            parameters: [
              {
                name: 'userId',
                in: 'path',
                required: true,
                schema: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                    },
                    firstName: {
                      type: 'string',
                    },
                    lastName: {
                      type: 'string',
                    },
                    email: {
                      type: 'string',
                    },
                  },
                  required: ['id firstName lastName email'],
                },
              },
            ],
            responses: {
              '200': {
                description: 'User found',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'string',
                        },
                        firstName: {
                          type: 'string',
                        },
                        lastName: {
                          type: 'string',
                        },
                        email: {
                          type: 'string',
                        },
                      },
                      required: ['id firstName lastName email'],
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    errors: [
      {
        message:
          'Detected more than 3 words in required property item: "firstName lastName email test". This possibly due to invalid YAML list syntax.',
        path: [
          'paths',
          '/users',
          'post',
          'requestBody',
          'content',
          'application/json',
          'schema',
          'required',
          '0',
        ],
        severity: DiagnosticSeverity.Warning,
      },
      {
        message:
          'Detected more than 3 words in required property item: "id firstName lastName email". This possibly due to invalid YAML list syntax.',
        path: [
          'paths',
          '/users',
          'post',
          'responses',
          '201',
          'content',
          'application/json',
          'schema',
          'required',
          '0',
        ],
        severity: DiagnosticSeverity.Warning,
      },
      {
        message:
          'Detected more than 3 words in required property item: "id firstName lastName email". This possibly due to invalid YAML list syntax.',
        path: [
          'paths',
          '/users/{userId}',
          'get',
          'parameters',
          '0',
          'schema',
          'required',
          '0',
        ],
        severity: DiagnosticSeverity.Warning,
      },
      {
        message:
          'Detected more than 3 words in required property item: "id firstName lastName email". This possibly due to invalid YAML list syntax.',
        path: [
          'paths',
          '/users/{userId}',
          'get',
          'responses',
          '200',
          'content',
          'application/json',
          'schema',
          'required',
          '0',
        ],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
  {
    name: 'valid case',
    document: {
      openapi: '3.0.0',
      info: {
        title: 'Valid API Spec',
        version: '1.0.0',
      },
      paths: {
        '/users': {
          post: {
            summary: 'Create a new user',
            requestBody: {
              required: true,
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      firstName: {
                        type: 'string',
                      },
                      lastName: {
                        type: 'string',
                      },
                      email: {
                        type: 'string',
                      },
                    },
                    required: [
                      'firstName there',
                      'lastName hello world',
                      'test_hello',
                      'test_one_two',
                      'testOneTwoThree',
                      'email',
                    ],
                  },
                },
              },
            },
            responses: {
              '201': {
                description: 'User created',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'string',
                        },
                        firstName: {
                          type: 'string',
                        },
                        lastName: {
                          type: 'string',
                        },
                        email: {
                          type: 'string',
                        },
                      },
                      required: ['id', 'firstName', 'lastName', 'email'],
                    },
                  },
                },
              },
            },
          },
        },
        '/users/{userId}': {
          get: {
            summary: 'Get user by ID',
            parameters: [
              {
                name: 'userId',
                in: 'path',
                required: true,
                schema: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                    },
                    firstName: {
                      type: 'string',
                    },
                    lastName: {
                      type: 'string',
                    },
                    email: {
                      type: 'string',
                    },
                  },
                  required: ['id'],
                },
              },
            ],
            responses: {
              '200': {
                description: 'User found',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'string',
                        },
                        firstName: {
                          type: 'string',
                        },
                        lastName: {
                          type: 'string',
                        },
                        email: {
                          type: 'string',
                        },
                      },
                      required: ['id', 'firstName', 'lastName', 'email'],
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    errors: [],
  },
])
