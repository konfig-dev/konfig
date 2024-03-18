import testRule from './__helpers__/helper'
import * as fs from 'fs'
import { parse } from 'yaml'

const snaptradeOas = parse(
  fs.readFileSync(`${__dirname}/snaptrade-missing-descriptions.yaml`, 'utf-8')
)

testRule('operation-description', [
  {
    name: 'snaptrade-operation-missing-description',
    document: snaptradeOas,
    errors: [
      {
        path: ['paths', '/snapTrade/registerUser', 'post'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/snapTrade/encryptedJWT', 'get'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/snapTrade/resetUserSecret', 'post'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/snapTrade/partners', 'get'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/holdings', 'get'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/accounts/{accountId}/holdings', 'get'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/accounts', 'get'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/accounts/{accountId}', 'get'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/accounts/{accountId}', 'put'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/accounts/{accountId}/positions', 'get'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/accounts/{accountId}/quotes', 'get'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/accounts/{accountId}/orders/cancel', 'post'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/accounts/{accountId}/symbols', 'post'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/accounts/{accountId}/options', 'get'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/accounts/{accountId}/optionsChain', 'get'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/accounts/{accountId}/optionStrategy', 'post'],
        code: 'operation-description',
      },
      {
        path: [
          'paths',
          '/accounts/{accountId}/optionStrategy/{optionStrategyId}',
          'get',
        ],
        code: 'operation-description',
      },
      {
        path: [
          'paths',
          '/accounts/{accountId}/optionStrategy/{optionStrategyId}/execute',
          'post',
        ],
        code: 'operation-description',
      },
      {
        path: ['paths', '/authorizations', 'get'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/authorizations/{authorizationId}', 'get'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/authorizations/{authorizationId}', 'delete'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/sessionEvents', 'get'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/brokerages', 'get'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/brokerageAuthorizationTypes', 'get'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/currencies', 'get'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/snapTrade/listUserErrors', 'get'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/currencies/rates', 'get'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/currencies/rates/{currencyPair}', 'get'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/exchanges', 'get'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/symbols', 'post'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/symbols/{query}', 'get'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/trade/place', 'post'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/trade/impact', 'post'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/trade/{tradeId}', 'post'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/trade/oco', 'post'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/connectionAdded', 'post'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/connectionDeleted', 'post'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/userRegistered', 'post'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/userDeleted', 'post'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/accountAdded', 'post'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/accountDeleted', 'post'],
        code: 'operation-description',
      },
      {
        path: ['paths', '/transactionsUpdated', 'post'],
        code: 'operation-description',
      },
    ],
  },
])
