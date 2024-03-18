import testRule from './__helpers__/helper'
import * as fs from 'fs'
import { parse } from 'yaml'

const snaptradeOas = parse(
  fs.readFileSync(`${__dirname}/snaptrade-missing-descriptions.yaml`, 'utf-8')
)

testRule('parameter-missing-description', [
  {
    name: 'snaptrade-parameter-missing-descriptions',
    document: snaptradeOas,
    errors: [
      {
        path: [
          'paths',
          '/accounts/{accountId}/holdings',
          'get',
          'parameters',
          '0',
        ],
        code: 'parameter-missing-description',
      },
    ],
  },
])
