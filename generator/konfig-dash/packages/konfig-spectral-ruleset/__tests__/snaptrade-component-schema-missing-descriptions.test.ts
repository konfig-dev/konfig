import testRule from './__helpers__/helper'
import * as fs from 'fs'
import { parse } from 'yaml'

const snaptradeOas = parse(
  fs.readFileSync(`${__dirname}/snaptrade-missing-descriptions.yaml`, 'utf-8')
)

testRule('component-schema-missing-description', [
  {
    name: 'snaptrade-component-schema-missing-descriptions',
    document: snaptradeOas,
    errors: [
      {
        path: ['components', 'schemas', 'AccountOrderRecordStatus'],
        code: 'component-schema-missing-description',
      },
      {
        path: ['components', 'schemas', 'OptionStrategy'],
        code: 'component-schema-missing-description',
      },
      {
        path: ['components', 'schemas', 'StrategyQuotes'],
        code: 'component-schema-missing-description',
      },
      {
        path: ['components', 'schemas', 'SubPeriodReturnRate'],
        code: 'component-schema-missing-description',
      },
      {
        path: ['components', 'schemas', 'DividendAtDate'],
        code: 'component-schema-missing-description',
      },
      {
        path: ['components', 'schemas', 'BrokerageAuthorizationType'],
        code: 'component-schema-missing-description',
      },
      {
        path: ['components', 'schemas', 'BrokerageAuthorizationTypeReadOnly'],
        code: 'component-schema-missing-description',
      },
      {
        path: ['components', 'schemas', 'Brokerage'],
        code: 'component-schema-missing-description',
      },
      {
        path: ['components', 'schemas', 'BrokerageAuthorization'],
        code: 'component-schema-missing-description',
      },
      {
        path: ['components', 'schemas', 'SessionEvent'],
        code: 'component-schema-missing-description',
      },
      {
        path: ['components', 'schemas', 'Email'],
        code: 'component-schema-missing-description',
      },
      {
        path: ['components', 'schemas', 'Id'],
        code: 'component-schema-missing-description',
      },
      {
        path: ['components', 'schemas', 'ModelAssetClass'],
        code: 'component-schema-missing-description',
      },
      {
        path: ['components', 'schemas', 'ModelAssetClassDetails'],
        code: 'component-schema-missing-description',
      },
      {
        path: ['components', 'schemas', 'ModelAssetClassTarget'],
        code: 'component-schema-missing-description',
      },
      {
        path: ['components', 'schemas', 'ModelPortfolio'],
        code: 'component-schema-missing-description',
      },
      {
        path: ['components', 'schemas', 'ModelPortfolioAssetClass'],
        code: 'component-schema-missing-description',
      },
      {
        path: ['components', 'schemas', 'ModelPortfolioDetails'],
        code: 'component-schema-missing-description',
      },
      {
        path: ['components', 'schemas', 'ModelPortfolioSecurity'],
        code: 'component-schema-missing-description',
      },
      {
        path: ['components', 'schemas', 'MonthlyDividends'],
        code: 'component-schema-missing-description',
      },
      {
        path: ['components', 'schemas', 'NetContributions'],
        code: 'component-schema-missing-description',
      },
      {
        path: ['components', 'schemas', 'PastValue'],
        code: 'component-schema-missing-description',
      },
      {
        path: ['components', 'schemas', 'Percent'],
        code: 'component-schema-missing-description',
      },
      {
        path: ['components', 'schemas', 'PortfolioGroup'],
        code: 'component-schema-missing-description',
      },
      {
        path: ['components', 'schemas', 'PortfolioGroupSettings'],
        code: 'component-schema-missing-description',
      },
    ],
  },
])
