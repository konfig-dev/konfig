import { Spec } from '../parseSpec'
import { orderOpenApiSpecification } from './order-openapi-specification'

describe('orderOpenApiSpecification', () => {
  it('should order tags and operations based on user configuration', () => {
    const spec: Spec['spec'] = {
      openapi: '3.0.0',
      info: {
        title: 'Test',
        version: '1.0.0',
      },
      paths: {
        '/test4': {
          get: {
            tags: ['test4'],
            operationId: 'test4',
            responses: {},
          },
        },
        '/test3': {
          get: {
            tags: ['test3'],
            operationId: 'test3',
            responses: {},
          },
        },
        '/test': {
          get: {
            tags: ['test'],
            operationId: 'test',
            responses: {},
          },
        },
        '/test-x': {
          get: {
            tags: ['test'],
            operationId: 'test-x',
            responses: {},
          },
        },
        '/test2': {
          get: {
            tags: ['test2'],
            operationId: 'test2',
            responses: {},
          },
        },
      },
      tags: [
        {
          name: 'test2',
        },
        {
          name: 'test',
        },
        {
          name: 'test4',
        },
        {
          name: 'test3',
        },
      ],
    }

    const orderedSpec: Spec['spec'] = {
      openapi: '3.0.0',
      info: {
        title: 'Test',
        version: '1.0.0',
      },
      paths: {
        '/test-x': {
          get: {
            tags: ['test'],
            operationId: 'test-x',
            responses: {},
          },
        },
        '/test': {
          get: {
            tags: ['test'],
            operationId: 'test',
            responses: {},
          },
        },
        '/test2': {
          get: {
            tags: ['test2'],
            operationId: 'test2',
            responses: {},
          },
        },
        '/test4': {
          get: {
            tags: ['test4'],
            operationId: 'test4',
            responses: {},
          },
        },
        '/test3': {
          get: {
            tags: ['test3'],
            operationId: 'test3',
            responses: {},
          },
        },
      },
      tags: [
        {
          name: 'test',
        },
        {
          name: 'test2',
        },
        {
          name: 'test4',
        },
        {
          name: 'test3',
        },
      ],
    }

    orderOpenApiSpecification({
      spec,
      order: [
        {
          tag: 'test',
          operations: [
            'test-x',
            {
              path: '/test',
              method: 'get',
            },
          ],
        },
        {
          tag: 'test2',
        },
      ],
    })

    expect(spec.tags).toStrictEqual(orderedSpec.tags)
    expect(Object.keys(spec.paths)).toStrictEqual(
      Object.keys(orderedSpec.paths)
    )
  })
})
