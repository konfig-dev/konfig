import { DiagnosticSeverity } from '@stoplight/types'
import testRule from './__helpers__/helper'

testRule('duplicate-sdk-method-name', [
  {
    name: 'valid case',
    document: {
      openapi: '3.0.0',
      info: { title: 'Example API', version: '1.0.0' },
      tags: [{ name: 'Pet' }],
      paths: {
        '/': {
          get: {
            operationId: 'Pet_findOne',
            tags: ['Pet'],
            description: '',
            responses: {},
          },
        },
        '/pet': {
          get: {
            operationId: 'Pet_findMultiple',
            tags: ['pet'],
            description: '',
            responses: {},
          },
        },
      },
    },
    errors: [],
  },
  {
    name: 'invalid case',
    document: {
      openapi: '3.0.0',
      info: { title: 'Example API', version: '1.0.0' },
      tags: [{ name: 'Pet' }],
      paths: {
        '/': {
          get: {
            operationId: 'Pet_find',
            tags: ['Pet'],
            description: '',
            responses: {},
          },
        },
        '/pet': {
          get: {
            operationId: 'pet_find',
            tags: ['pet'],
            description: '',
            responses: {},
          },
        },
      },
    },
    errors: [
      {
        message:
          'Duplicate case-insensitive SDK method name "find" detected. Please rename one of the operations.',
        path: ['paths', '/', 'get', 'operationId'],
        severity: DiagnosticSeverity.Warning,
      },
      {
        message:
          'Duplicate case-insensitive SDK method name "find" detected. Please rename one of the operations.',
        path: ['paths', '/pet', 'get', 'operationId'],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
])
