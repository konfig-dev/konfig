import { parseSpec, ResponsesObject, Spec } from 'konfig-lib'
import { fixOas } from '../../src/util/fix-oas'
import { Progress } from '../../src/util/fix-progress'

describe('fix-oas', () => {
  const responses: ResponsesObject = {
    '200': {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            type: 'string',
          },
        },
      },
    },
  }
  describe('custom modifications', () => {
    it('simple', async () => {
      const oas: Spec['spec'] = {
        openapi: '3.0.0',
        info: {
          title: 'Test API',
          description: 'Test',
          version: '1.0.0',
        },
        tags: [{ name: 'Tag' }],
        paths: {},
        components: {},
      }
      const spec = await parseSpec(JSON.stringify(oas))
      const progress = new Progress({
        progress: {},
        noSave: true,
      })
      await fixOas({
        spec,
        progress,
        konfigYaml: {
          defaultChangesetBumpType: 'patch',
          generators: {},
          specPath: '',
          fixConfig: { modify: { '$.info.description': 'New Test' } },
        },
        alwaysYes: true,
        auto: true,
      })
      expect(spec.spec).toMatchSnapshot()
    })
  })
  describe('disallowed-header-names', () => {
    it('request', async () => {
      const oas: Spec['spec'] = {
        openapi: '3.0.0',
        info: {
          title: 'Test API',
          description: 'Test',
          version: '1.0.0',
        },
        tags: [{ name: 'Tag' }],
        paths: {
          '/': {
            get: {
              tags: ['Tag'],
              operationId: 'Tag_get',
              parameters: [
                {
                  name: 'Content-Type',
                  in: 'header',
                },
                {
                  name: 'Accept',
                  in: 'header',
                },
                {
                  name: 'Authorization',
                  in: 'header',
                },
              ],
              responses,
            },
          },
        },
        components: {},
      }
      const spec = await parseSpec(JSON.stringify(oas))
      const progress = new Progress({
        progress: {
          securityParameters: {
            'Content-Type': { header: false },
            Accept: { header: false },
            Authorization: { header: false },
          },
        },
        noSave: true,
      })
      await fixOas({ spec, progress, alwaysYes: true, auto: true })
      expect(spec.spec).toMatchSnapshot()
    })

    it('response', async () => {
      const oas: Spec['spec'] = {
        openapi: '3.0.0',
        info: {
          title: 'Test API',
          description: 'Test',
          version: '1.0.0',
        },
        tags: [{ name: 'Tag' }],
        paths: {
          '/': {
            get: {
              tags: ['Tag'],
              operationId: 'Tag_get',
              parameters: [],
              responses: {
                '200': {
                  description: 'OK',
                  headers: {
                    'Content-Type': {},
                    Accept: {},
                    Authorization: {},
                  },
                },
              },
            },
          },
        },
        components: {},
      }
      const spec = await parseSpec(JSON.stringify(oas))
      const progress = new Progress({
        progress: {
          securityParameters: {
            'Content-Type': { header: false },
          },
        },
        noSave: true,
      })
      await fixOas({ spec, progress, alwaysYes: true, auto: true })
      expect(spec.spec).toMatchSnapshot()
    })
  })
  describe('oas3-valid-media-example', () => {
    it('fix-number-example', async () => {
      const oas: Spec['spec'] = {
        openapi: '3.0.0',
        info: {
          title: 'Test API',
          description: 'Test',
          version: '1.0.0',
        },
        tags: [{ name: 'Tag' }],
        paths: {
          '/': {
            get: {
              tags: ['Tag'],
              operationId: 'Tag_get',
              parameters: [
                {
                  name: 'lat',
                  in: 'query',
                  schema: { type: 'number' },
                  example: '-115.16988',
                },
              ],
              requestBody: {
                content: {
                  'application/json': {
                    schema: {
                      type: 'number',
                      example: '100',
                    },
                  },
                },
              },
              responses: {
                '200': {
                  description: 'OK',
                  headers: {
                    'Content-Type': {},
                    Accept: {},
                    Authorization: {},
                  },
                },
              },
            },
          },
        },
      }
      const spec = await parseSpec(JSON.stringify(oas))
      const progress = new Progress({
        progress: {
          securityParameters: {
            lat: {
              query: false,
            },
          },
        },
        noSave: true,
      })
      await fixOas({ spec, progress, alwaysYes: true, auto: true })
      expect(spec.spec).toMatchSnapshot()
    })
  })
  describe('oas3-schema', () => {
    it('fix mutual exclusiveness of example & examples field on media object', async () => {
      const oas: Spec['spec'] = {
        openapi: '3.0.0',
        info: {
          title: 'Test API',
          description: 'Test',
          version: '1.0.0',
        },
        tags: [{ name: 'Tag' }],
        paths: {
          '/': {
            get: {
              tags: ['Tag'],
              operationId: 'Tag_get',
              requestBody: {
                content: {
                  'application/json': {
                    schema: {
                      type: 'string',
                    },
                    example: '2',
                    examples: {
                      'example-0': { value: '1' },
                      'example-2': { value: '3' },
                    },
                  } as any,
                },
              },
              responses,
            },
          },
        },
        components: {},
      }
      const spec = await parseSpec(JSON.stringify(oas))
      const progress = new Progress({
        progress: {},
        noSave: true,
      })
      await fixOas({ spec, progress, alwaysYes: true, auto: true })
      expect(spec.spec).toMatchSnapshot()
    })
  })
  describe('ignore potential-incorrect-type', () => {
    const oas: Spec['spec'] = {
      openapi: '3.0.0',
      info: {
        title: 'Test API',
        description: 'Test',
        version: '1.0.0',
      },
      tags: [{ name: 'Tag' }],
      paths: {
        '/': {
          get: {
            operationId: 'Tag_get',
            requestBody: {
              content: {
                'application/json': {
                  schema: {
                    type: 'string',
                    example: '2',
                  },
                },
              },
            },
            responses,
          },
        },
      },
      components: {},
    }
    it('updates spec in place', async () => {
      const spec = await parseSpec(JSON.stringify(oas))
      const progress = new Progress({
        progress: { ignorePotentialIncorrectType: true },
        noSave: true,
      })
      await fixOas({ spec, progress, alwaysYes: true, auto: true })
      expect(spec.spec).toMatchSnapshot()
    })
  })
  describe('duplicate-tag-names', () => {
    const oas: Spec['spec'] = {
      openapi: '3.0.0',
      info: {
        title: 'Test API',
        description: 'Test',
        version: '1.0.0',
      },
      tags: [
        { name: 'Tag' },
        { name: 'tag' },
        { name: 'Tag with space' },
        { name: 'tag with space' },
      ],
      paths: {
        '/': {
          get: {
            tags: ['Tag'],
            operationId: 'Tag_get',
            responses,
          },
          options: {
            tags: ['Tag with space'],
            operationId: 'Tag_options',
            responses,
          },
          delete: {
            tags: ['tag with space'],
            operationId: 'Tag_delete',
            responses,
          },
          patch: {
            tags: ['tag with space'],
            operationId: 'Tag_head',
            responses,
          },
          head: {
            tags: ['tag'],
            operationId: 'Tag_head',
            responses,
          },
          post: {
            tags: ['Tag'],
            operationId: 'Tag_post',
            responses,
          },
        },
      },
    }
    it('deduplicate', async () => {
      const spec = await parseSpec(JSON.stringify(oas))
      const progress = new Progress({
        progress: {},
        noSave: true,
      })
      await fixOas({ spec, progress, alwaysYes: true, auto: true })
      expect(spec.spec).toMatchSnapshot()
    })
  })
  describe('object-with-no-properties', () => {
    const oas: Spec['spec'] = {
      openapi: '3.0.0',
      info: {
        title: 'Test API',
        description: 'Test',
        version: '1.0.0',
      },
      tags: [{ name: 'Tag' }],
      paths: {
        '/': {
          get: {
            operationId: 'Tag_get',
            requestBody: {
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    example: {
                      hello: 'world',
                      onePlus: 2,
                    },
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
                      type: 'object',
                      example: {
                        hello: 'world',
                        onePlus: 1,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      components: {},
    }
    it('generate schemas if not ignored', async () => {
      const spec = await parseSpec(JSON.stringify(oas))
      const progress = new Progress({
        progress: { ignoreObjectsWithNoProperties: false },
        noSave: true,
      })
      await fixOas({ spec, progress, alwaysYes: true, auto: true })
      expect(spec.spec).toMatchSnapshot()
    })
    it('generate schemas if ignored', async () => {
      const spec = await parseSpec(JSON.stringify(oas))
      const progress = new Progress({
        progress: { ignoreObjectsWithNoProperties: true },
        noSave: true,
      })
      await fixOas({ spec, progress, alwaysYes: true, auto: true })
      expect(spec.spec).toMatchSnapshot()
    })
  })
})
