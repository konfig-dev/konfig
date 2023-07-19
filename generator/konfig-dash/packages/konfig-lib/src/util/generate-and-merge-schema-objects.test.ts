import * as fs from 'fs'
import * as path from 'path'
import { generateAndMergeSchemaObjects } from './generate-and-merge-schema-objects'

describe('generate-and-merge-schema-objects', () => {
  it('nuitee-examples-that-generates-lots-of-one-of-schemas', () => {
    const examples = JSON.parse(
      fs.readFileSync(
        path.join(
          __dirname,
          'generate-and-merge-schema-objects-test',
          'nuitee-examples-that-generates-lots-of-one-of-schemas.json'
        ),
        'utf-8'
      )
    )
    const schema = generateAndMergeSchemaObjects({
      examples: Object.values(examples).map(
        (example) => (example as any).value
      ),
      version: '3.0.x',
    })
    expect(schema).toMatchSnapshot()
  })
  it('null and string', () => {
    const examples = [null, 'test']
    const schema = generateAndMergeSchemaObjects({ examples, version: '3.0.x' })
    expect(schema).toStrictEqual({
      type: 'string',
      nullable: true,
      example: 'test',
    })
  })
  it('string and null', () => {
    const examples = ['test', null]
    const schema = generateAndMergeSchemaObjects({ examples, version: '3.0.x' })
    expect(schema).toStrictEqual({
      type: 'string',
      nullable: true,
      example: 'test',
    })
  })
  it('number, string and null', () => {
    const examples = [2, 'test', null]
    const schema = generateAndMergeSchemaObjects({ examples, version: '3.0.x' })
    expect(schema).toStrictEqual({
      oneOf: [
        {
          type: 'number',
          nullable: true,
          example: 2,
        },
        {
          type: 'string',
          nullable: true,
          example: 'test',
        },
      ],
    })
  })
  it('string, number and null', () => {
    const examples = ['test', 2, null]
    const schema = generateAndMergeSchemaObjects({ examples, version: '3.0.x' })
    expect(schema).toStrictEqual({
      oneOf: [
        {
          type: 'string',
          nullable: true,
          example: 'test',
        },
        {
          type: 'number',
          nullable: true,
          example: 2,
        },
      ],
    })
  })
  it('number and null', () => {
    const examples = [2, null]
    const schema = generateAndMergeSchemaObjects({ examples, version: '3.0.x' })
    expect(schema).toStrictEqual({
      type: 'number',
      nullable: true,
      example: 2,
    })
  })
  it('null and number', () => {
    const examples = [null, 2]
    const schema = generateAndMergeSchemaObjects({ examples, version: '3.0.x' })
    expect(schema).toStrictEqual({
      type: 'number',
      nullable: true,
      example: 2,
    })
  })
  it('primitive and array', () => {
    const examples = [
      {
        directors: [
          {
            endDate: 'NA',
            surrenderedDin: 'NA',
            dinOrPan: '01901677',
            beginDate: '18/02/2017',
            name: 'SHUBA CHARLES',
          },
          {
            endDate: 'NA',
            surrenderedDin: 'NA',
            dinOrPan: '03268546',
            beginDate: '18/08/2014',
            name: 'LIONEL JESHURAN CHARLES',
          },
        ],
      },
      {
        directors: '',
      },
    ]
    const schema = generateAndMergeSchemaObjects({ examples, version: '3.0.x' })
    expect(schema).toMatchSnapshot()
  })
  it('3_0 decentro validate response', () => {
    const examples = JSON.parse(
      fs.readFileSync(
        path.join(
          __dirname,
          'generate-and-merge-schema-objects-test',
          '3_0-decentro-validate-response.json'
        ),
        'utf-8'
      )
    )
    const schema = generateAndMergeSchemaObjects({ examples, version: '3.0.x' })
    expect(schema).toMatchSnapshot()
  })
})
