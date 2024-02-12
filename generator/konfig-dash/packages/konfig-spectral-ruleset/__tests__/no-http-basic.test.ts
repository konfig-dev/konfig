import { DiagnosticSeverity } from '@stoplight/types'
import testRule from './__helpers__/helper'

testRule('no-http-basic', [
  {
    name: 'valid case',
    document: {
      openapi: '3.1.0',
      info: { title: 'Example API', version: '1.0' },
      components: {
        securitySchemes: {
          'anything-else': {
            type: 'http',
            scheme: 'bearer',
          },
        },
      },
    },
    errors: [],
  },

  {
    name: 'invalid case',
    document: {
      openapi: '3.1.0',
      info: { title: 'Example API', version: '1.0' },
      components: {
        securitySchemes: {
          'please-hack-me': {
            type: 'http',
            scheme: 'basic',
          },
        },
      },
    },
    errors: [
      {
        message:
          'HTTP Basic is a pretty insecure way to pass credentials around, please consider an alternative.',
        path: ['components', 'securitySchemes', 'please-hack-me', 'scheme'],
        severity: DiagnosticSeverity.Information,
      },
    ],
  },
])
