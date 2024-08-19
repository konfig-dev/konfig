import { describe, expect, test } from 'vitest'
import { highlightJsonLines } from './highlight-json-lines'
describe('highlight-json-lines', () => {
  const simpleJson = {
    id: 2,
    inner: {
      id: 2,
    },
    another: {
      id: 3,
    },
  }
  test('top-level id', () => {
    expect(
      highlightJsonLines({ json: simpleJson, path: ['id'] }).highlightedLines
    ).toStrictEqual([2])
  })
  test('inner id', () => {
    expect(
      highlightJsonLines({ json: simpleJson, path: ['inner', 'id'] })
        .highlightedLines
    ).toStrictEqual([4])
  })
  test('inner', () => {
    expect(
      highlightJsonLines({ json: simpleJson, path: ['inner'] }).highlightedLines
    ).toStrictEqual([3, 4, 5])
  })
  test('root', () => {
    expect(
      highlightJsonLines({ json: simpleJson, path: [] }).highlightedLines
    ).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  const jsonWithArrayOfObjects = {
    data: [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ],
  }
  test('array of objects', () => {
    expect(
      highlightJsonLines({ json: jsonWithArrayOfObjects, path: ['data'] })
        .highlightedLines
    ).toStrictEqual([2, 3, 4, 5, 6, 7, 8, 9])
  })
  test('id in array of object', () => {
    expect(
      highlightJsonLines({
        json: jsonWithArrayOfObjects,
        path: ['data', '$item', 'id'],
      }).highlightedLines
    ).toStrictEqual([4, 7])
  })

  const jsonWithArrayOfScalars = {
    data: [1, 2, 3],
  }
  test('object with array of scalars', () => {
    expect(
      highlightJsonLines({ json: jsonWithArrayOfScalars, path: ['data'] })
        .highlightedLines
    ).toStrictEqual([2, 3, 4, 5, 6])
  })

  const arrayOfScalar = [1, 2, 3]
  test('array of scalars', () => {
    expect(
      highlightJsonLines({ json: arrayOfScalar, path: [] }).highlightedLines
    ).toStrictEqual([1, 2, 3, 4, 5])
  })
  test('array of scalars items', () => {
    expect(
      highlightJsonLines({ json: arrayOfScalar, path: ['$item'] })
        .highlightedLines
    ).toStrictEqual([2, 3, 4])
  })

  const nestedObjects = {
    a: {
      b: {
        c: 1,
      },
    },
  }
  test('nested objects - a', () => {
    expect(
      highlightJsonLines({ json: nestedObjects, path: ['a'] }).highlightedLines
    ).toStrictEqual([2, 3, 4, 5, 6])
  })
  test('nested objects - b', () => {
    expect(
      highlightJsonLines({ json: nestedObjects, path: ['a', 'b'] })
        .highlightedLines
    ).toStrictEqual([3, 4, 5])
  })
  test('nested objects - c', () => {
    expect(
      highlightJsonLines({ json: nestedObjects, path: ['a', 'b', 'c'] })
        .highlightedLines
    ).toStrictEqual([4])
  })

  const arrayOfObjects = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ]
  test('array of object items', () => {
    expect(
      highlightJsonLines({ json: arrayOfObjects, path: ['$item'] })
        .highlightedLines
    ).toStrictEqual([2, 3, 4, 5, 6, 7])
  })
  test('array of objects id', () => {
    expect(
      highlightJsonLines({ json: arrayOfObjects, path: ['$item', 'id'] })
        .highlightedLines
    ).toStrictEqual([3, 6])
  })

  const complicatedJson = [
    {
      symbol: {
        id: '2bcd7cc3-e922-4976-bce1-9858296801c3',
        symbol: {
          id: '2bcd7cc3-e922-4976-bce1-9858296801c3',
          symbol: 'VAB.TO',
          raw_symbol: 'VAB',
          description: 'VANGUARD CDN AGGREGATE BOND INDEX ETF',
          currency: {
            id: '87b24961-b51e-4db8-9226-f198f6518a89',
            code: 'USD',
            name: 'US Dollar',
          },
          exchange: {
            id: '2bcd7cc3-e922-4976-bce1-9858296801c3',
            code: 'TSX',
            mic_code: 'XTSE',
            name: 'Toronto Stock Exchange',
            timezone: 'America/New_York',
            start_time: '09:30:00',
            close_time: '16:00:00',
            suffix: '.TO',
          },
          type: {
            id: '2bcd7cc3-e922-4976-bce1-9858296801c3',
            code: 'cs',
            description: 'Common Stock',
            is_supported: true,
          },
          currencies: [
            {
              id: '87b24961-b51e-4db8-9226-f198f6518a89',
              code: 'USD',
              name: 'US Dollar',
            },
          ],
          figi_code: 'BBG000B9XRY4',
          figi_instrument: {
            figi_code: 'BBG000B9Y5X2',
            figi_share_class: 'BBG001S5N8V8',
          },
        },
        brokerage_authorization: {
          id: '2bcd7cc3-e922-4976-bce1-9858296801c3',
          created_date: '2022-01-21T20:11:19.217Z',
          updated_date: '2022-01-21T20:11:19.217Z',
          brokerage: {
            id: '2bcd7cc3-e922-4976-bce1-9858296801c3',
            name: 'Questrade',
            display_name: 'Questrade',
            description:
              "Questrade is an online brokerage firm and wealth management firm based in Canada. It is Canada's largest discount broker.",
            aws_s3_logo_url: 'https://www.snaptrade.com/questrade.logo',
            aws_s3_square_logo_url: 'https://www.snaptrade.com/questrade.logo',
            open_url: 'https://www.brokerage.com',
            slug: 'QUESTRADE',
            url: 'https://www.questrade.com/',
            enabled: true,
            maintenance_mode: true,
            allows_fractional_units: true,
            allows_trading: true,
            has_reporting: true,
            is_real_time_connection: true,
            allows_trading_through_snaptrade_api: true,
            is_scraping_integration: true,
            default_currency: '2bcd7cc3-e922-4976-bce1-9858296801c3',
            brokerage_type: {
              id: '2bcd7cc3-e922-4976-bce1-9858296801c3',
              name: 'Traditional Brokerage',
            },
            exchanges: [
              '2bcd7cc3-e922-4976-bce1-9858296801c3',
              '4bcd8cc3-c122-4974-dc21-1858296801f4',
            ],
          },
          name: 'Connection-1',
          type: 'trade',
          disabled: false,
          disabled_date: '2022-01-21T20:11:19.217Z',
          meta: {
            identifier: 123456,
          },
        },
        description: 'VANGUARD CDN AGGREGATE BOND INDEX ETF',
        allows_fractional_units: true,
        option_symbol: {
          id: '2bcd7cc3-e922-4976-bce1-9858296801c3',
          ticker: 'SPY 220819P00200000',
          option_type: 'CALL',
          strike_price: 200,
          expiration_date: '2017-07-17T15:13:07.177712+00:00',
          is_mini_option: false,
          underlying_symbol: {
            id: '2bcd7cc3-e922-4976-bce1-9858296801c3',
            symbol: 'SPY',
            description: 'SPDR S&P 500 ETF Trust',
            currency: {
              id: '87b24961-b51e-4db8-9226-f198f6518a89',
              code: 'USD',
              name: 'US Dollar',
            },
            exchange: {
              id: '2bcd7cc3-e922-4976-bce1-9858296801c3',
              code: 'ARCX',
              mic_code: 'ARCA',
              name: 'NYSE ARCA',
              timezone: 'America/New_York',
              start_time: '09:30:00',
              close_time: '16:00:00',
              suffix: 'None',
              allows_cryptocurrency_symbols: false,
            },
            type: {
              id: '2bcd7cc3-e922-4976-bce1-9858296801c3',
              code: 'cs',
              description: 'Common Stock',
              is_supported: true,
            },
            currencies: [
              {
                id: '87b24961-b51e-4db8-9226-f198f6518a89',
                code: 'USD',
                name: 'US Dollar',
              },
            ],
            figi_code: 'BBG000B9XRY4',
            figi_instrument: {
              figi_code: 'BBG000B9Y5X2',
              figi_share_class: 'BBG001S5N8V8',
            },
          },
          local_id: '40817960',
          exchange_id: '6e73ee7b-fdf3-44c2-947d-260c3ee72506',
        },
      },
      price: 31.33,
      units: 10,
      currency: {
        id: '87b24961-b51e-4db8-9226-f198f6518a89',
        code: 'USD',
        name: 'US Dollar',
      },
      average_purchase_price: 108.3353,
    },
  ]
  test('complicated json - symbol', () => {
    expect(
      highlightJsonLines({ json: complicatedJson, path: ['$item', 'symbol'] })
        .highlightedLines
    ).toStrictEqual(Array.from({ length: 133 }).map((_, i) => i + 3))
  })
  test('complicated json - symbol.id', () => {
    expect(
      highlightJsonLines({
        json: complicatedJson,
        path: ['$item', 'symbol', 'id'],
      }).highlightedLines
    ).toStrictEqual([4])
  })
  test('complicated json - average_purchase_price', () => {
    expect(
      highlightJsonLines({
        json: complicatedJson,
        path: ['$item', 'average_purchase_price'],
      }).highlightedLines
    ).toStrictEqual([143])
  })
  test('complicated json - symbol.brokerage_authorization.name', () => {
    expect(
      highlightJsonLines({
        json: complicatedJson,
        path: ['$item', 'symbol', 'brokerage_authorization', 'name'],
      }).highlightedLines
    ).toStrictEqual([76])
  })

  const createOptionsStrategyResponse = {
    strategy: {
      underlying_symbol_id: {
        currencies: [
          {
            name: 'US Dollar',
          },
        ],
        figi_code: 'BBG000B9XRY4',
      },
    },
  }
  test('create options strategy response', () => {
    expect(
      highlightJsonLines({
        json: createOptionsStrategyResponse,
        path: ['strategy', 'underlying_symbol_id', 'figi_code'],
      }).highlightedLines
    ).toStrictEqual([9])
  })

  const getBrokerageAuthDetailsResponse = {
    brokerage: {
      name: 'Traditional Brokerage',
    },
    name: 'Connection-1',
  }
  test('get brokerage auth details response', () => {
    expect(
      highlightJsonLines({
        json: getBrokerageAuthDetailsResponse,
        path: ['name'],
      }).highlightedLines
    ).toStrictEqual([5])
  })

  const identicalNestedObjects = {
    balances: [
      {
        currency: {
          id: '87b24961-b51e-4db8-9226-f198f6518a89',
        },
      },
    ],
    positions: [
      {
        symbol: {
          symbol: {
            currency: {
              id: '87b24961-b51e-4db8-9226-f198f6518a89',
            },
          },
        },
      },
    ],
  }
  test('identical nested objects', () => {
    expect(
      highlightJsonLines({
        json: identicalNestedObjects,
        path: ['balances', '$item', 'currency'],
      }).highlightedLines
    ).toStrictEqual([4, 5, 6])
  })
  const groundxResponse = {
    ingest: {
      processId: '9e0ad09b-5150-48c0-aded-707587048fd9',
      progress: {
        cancelled: {
          documents: [
            {
              document: {
                bucketId: 0,
                documentId: '4704590c-004e-410d-adf7-acb7ca0a7052',
                fileName: 'string',
                fileSize: '1.4MB',
                fileType: 'txt',
                processId: '9e0ad09b-5150-48c0-aded-707587048fd9',
                searchData: {},
                sourceUrl: 'http://example.com',
                status: 'queued',
                statusMessage: 'string',
              },
            },
          ],
          total: 0,
        },
        complete: {
          documents: [
            {
              document: {
                bucketId: 0,
                documentId: '4704590c-004e-410d-adf7-acb7ca0a7052',
                fileName: 'string',
                fileSize: '1.4MB',
                fileType: 'txt',
                processId: '9e0ad09b-5150-48c0-aded-707587048fd9',
                searchData: {},
                sourceUrl: 'http://example.com',
                status: 'queued',
                statusMessage: 'string',
              },
            },
          ],
          total: 0,
        },
        errors: {
          documents: [
            {
              document: {
                bucketId: 0,
                documentId: '4704590c-004e-410d-adf7-acb7ca0a7052',
                fileName: 'string',
                fileSize: '1.4MB',
                fileType: 'txt',
                processId: '9e0ad09b-5150-48c0-aded-707587048fd9',
                searchData: {},
                sourceUrl: 'http://example.com',
                status: 'queued',
                statusMessage: 'string',
              },
            },
          ],
          total: 0,
        },
        processing: {
          documents: [
            {
              document: {
                bucketId: 0,
                documentId: '4704590c-004e-410d-adf7-acb7ca0a7052',
                fileName: 'string',
                fileSize: '1.4MB',
                fileType: 'txt',
                processId: '9e0ad09b-5150-48c0-aded-707587048fd9',
                searchData: {},
                sourceUrl: 'http://example.com',
                status: 'queued',
                statusMessage: 'string',
              },
            },
          ],
          total: 0,
        },
      },
      status: 'queued',
      statusMessage: 'string',
    },
  }
  test('groundx response', () => {
    expect(
      highlightJsonLines({
        json: groundxResponse,
        path: ['ingest', 'progress'],
      }).highlightedLines
    ).toStrictEqual(Array.from({ length: 81 - 4 + 1 }).map((_, i) => i + 4))
  })
  test('groundx response - documents', () => {
    expect(
      highlightJsonLines({
        json: groundxResponse,
        path: ['ingest', 'progress', 'cancelled', 'documents'],
      }).highlightedLines
    ).toStrictEqual(Array.from({ length: 21 - 6 + 1 }).map((_, i) => i + 6))
  })

  const snaptradeResponse = {
    account: {
      id: '917c8734-8470-4a3e-a18f-57c3f2ee6631',
      brokerage_authorization: '87b24961-b51e-4db8-9226-f198f6518a89',
      portfolio_group: '2bcd7cc3-e922-4976-bce1-9858296801c3',
      name: 'Robinhood Individual',
      number: 'Q6542138443',
      institution_name: 'Robinhood',
      created_date: '2024-07-23T22:50:22.761Z',
      meta: {
        type: 'Margin',
        status: 'ACTIVE',
        institution_name: 'Robinhood',
      },
      cash_restrictions: [],
      sync_status: {
        transactions: {
          initial_sync_completed: true,
          last_successful_sync: '2022-01-24',
          first_transaction_date: '2022-01-24',
        },
        holdings: {
          initial_sync_completed: true,
          last_successful_sync: '2024-06-28 18:42:46.561408+00:00',
        },
      },
      balance: {
        total: {
          amount: 15363.23,
          currency: 'USD',
        },
      },
    },
    balances: [
      {
        currency: {
          id: '87b24961-b51e-4db8-9226-f198f6518a89',
          code: 'USD',
          name: 'US Dollar',
        },
        cash: 300.71,
        buying_power: 410.71,
      },
    ],
    positions: [
      {
        symbol: {
          id: '2bcd7cc3-e922-4976-bce1-9858296801c3',
          description: 'VANGUARD CDN AGGREGATE BOND INDEX ETF',
          symbol: {
            id: '2bcd7cc3-e922-4976-bce1-9858296801c3',
            symbol: 'VAB.TO',
            raw_symbol: 'VAB',
            description: 'VANGUARD CDN AGGREGATE BOND INDEX ETF',
            currency: {
              id: '87b24961-b51e-4db8-9226-f198f6518a89',
              code: 'USD',
              name: 'US Dollar',
            },
            exchange: {
              id: '2bcd7cc3-e922-4976-bce1-9858296801c3',
              code: 'TSX',
              mic_code: 'XTSE',
              name: 'Toronto Stock Exchange',
              timezone: 'America/New_York',
              start_time: '09:30:00',
              close_time: '16:00:00',
              suffix: '.TO',
            },
            type: {
              id: '2bcd7cc3-e922-4976-bce1-9858296801c3',
              code: 'cs',
              description: 'Common Stock',
              is_supported: true,
            },
            currencies: [
              {
                id: '87b24961-b51e-4db8-9226-f198f6518a89',
                code: 'USD',
                name: 'US Dollar',
              },
            ],
            figi_code: 'BBG000B9XRY4',
            figi_instrument: {
              figi_code: 'BBG000B9Y5X2',
              figi_share_class: 'BBG001S5N8V8',
            },
          },
          local_id: '3291231',
          is_quotable: true,
          is_tradable: true,
        },
        units: 40,
        price: 113.15,
        open_pnl: 0.44,
        fractional_units: 1.44,
        average_purchase_price: 108.3353,
      },
    ],
    option_positions: [
      {
        symbol: {
          id: '2bcd7cc3-e922-4976-bce1-9858296801c3',
          description: 'SPY CALL 7/17 200',
          option_symbol: {
            id: '2bcd7cc3-e922-4976-bce1-9858296801c3',
            ticker: 'SPY 220819P00200000',
            option_type: 'CALL',
            strike_price: 200,
            expiration_date: '2026-12-18',
            is_mini_option: false,
            underlying_symbol: {
              id: '2bcd7cc3-e922-4976-bce1-9858296801c3',
              symbol: 'SPY',
              raw_symbol: 'VAB',
              description: 'SPDR S&P 500 ETF Trust',
              currency: {
                id: '87b24961-b51e-4db8-9226-f198f6518a89',
                code: 'USD',
                name: 'US Dollar',
              },
              exchange: {
                id: '2bcd7cc3-e922-4976-bce1-9858296801c3',
                code: 'ARCX',
                mic_code: 'ARCA',
                name: 'NYSE ARCA',
                timezone: 'America/New_York',
                start_time: '09:30:00',
                close_time: '16:00:00',
                suffix: 'None',
                allows_cryptocurrency_symbols: false,
              },
              type: {
                id: '2bcd7cc3-e922-4976-bce1-9858296801c3',
                code: 'cs',
                description: 'Common Stock',
                is_supported: true,
              },
              currencies: [
                {
                  id: '87b24961-b51e-4db8-9226-f198f6518a89',
                  code: 'USD',
                  name: 'US Dollar',
                },
              ],
              figi_code: 'BBG000B9XRY4',
              figi_instrument: {
                figi_code: 'BBG000B9Y5X2',
                figi_share_class: 'BBG001S5N8V8',
              },
            },
          },
        },
        price: 113.15,
        units: 10,
        currency: {
          id: '87b24961-b51e-4db8-9226-f198f6518a89',
          code: 'USD',
          name: 'US Dollar',
        },
        average_purchase_price: 108.3353,
      },
    ],
    orders: [
      {
        brokerage_order_id: 'string',
        status: 'NONE',
        symbol: '2bcd7cc3-e922-4976-bce1-9858296801c3',
        universal_symbol: {
          id: '2bcd7cc3-e922-4976-bce1-9858296801c3',
          symbol: 'VAB.TO',
          raw_symbol: 'VAB',
          description: 'VANGUARD CDN AGGREGATE BOND INDEX ETF',
          currency: {
            id: '87b24961-b51e-4db8-9226-f198f6518a89',
            code: 'USD',
            name: 'US Dollar',
          },
          exchange: {
            id: '2bcd7cc3-e922-4976-bce1-9858296801c3',
            code: 'TSX',
            mic_code: 'XTSE',
            name: 'Toronto Stock Exchange',
            timezone: 'America/New_York',
            start_time: '09:30:00',
            close_time: '16:00:00',
            suffix: '.TO',
          },
          type: {
            id: '2bcd7cc3-e922-4976-bce1-9858296801c3',
            code: 'cs',
            description: 'Common Stock',
            is_supported: true,
          },
          currencies: [
            {
              id: '87b24961-b51e-4db8-9226-f198f6518a89',
              code: 'USD',
              name: 'US Dollar',
            },
          ],
          figi_code: 'BBG000B9XRY4',
          figi_instrument: {
            figi_code: 'BBG000B9Y5X2',
            figi_share_class: 'BBG001S5N8V8',
          },
        },
        option_symbol: {
          id: '2bcd7cc3-e922-4976-bce1-9858296801c3',
          ticker: 'SPY 220819P00200000',
          option_type: 'CALL',
          strike_price: 200,
          expiration_date: '2026-12-18',
          is_mini_option: false,
          underlying_symbol: {
            id: '2bcd7cc3-e922-4976-bce1-9858296801c3',
            symbol: 'SPY',
            raw_symbol: 'VAB',
            description: 'SPDR S&P 500 ETF Trust',
            currency: {
              id: '87b24961-b51e-4db8-9226-f198f6518a89',
              code: 'USD',
              name: 'US Dollar',
            },
            exchange: {
              id: '2bcd7cc3-e922-4976-bce1-9858296801c3',
              code: 'ARCX',
              mic_code: 'ARCA',
              name: 'NYSE ARCA',
              timezone: 'America/New_York',
              start_time: '09:30:00',
              close_time: '16:00:00',
              suffix: 'None',
              allows_cryptocurrency_symbols: false,
            },
            type: {
              id: '2bcd7cc3-e922-4976-bce1-9858296801c3',
              code: 'cs',
              description: 'Common Stock',
              is_supported: true,
            },
            currencies: [
              {
                id: '87b24961-b51e-4db8-9226-f198f6518a89',
                code: 'USD',
                name: 'US Dollar',
              },
            ],
            figi_code: 'BBG000B9XRY4',
            figi_instrument: {
              figi_code: 'BBG000B9Y5X2',
              figi_share_class: 'BBG001S5N8V8',
            },
          },
        },
        action: 'string',
        total_quantity: 100,
        open_quantity: 10,
        canceled_quantity: 10,
        filled_quantity: 80,
        execution_price: 12.34,
        limit_price: 12.34,
        stop_price: 12.5,
        order_type: 'Market',
        time_in_force: 'string',
        time_placed: '2024-07-30T22:51:49.746Z',
        time_updated: '2024-08-05T00:05:57.409Z',
        time_executed: '2024-08-05T00:05:57.409Z',
        expiry_date: '2024-08-05T00:05:57.409Z',
      },
    ],
    total_value: {
      value: 32600.71,
      currency: 'USD',
    },
  }
  test('snaptrade - list account holdings - balances', () => {
    expect(
      highlightJsonLines({
        json: snaptradeResponse,
        path: ['balances'],
      }).highlightedLines
    ).toStrictEqual(Array.from({ length: 44 - 34 + 1 }).map((_, i) => i + 34))
  })
  test('snaptrade - list account holdings - account.cash_restrictions', () => {
    expect(
      highlightJsonLines({
        json: snaptradeResponse,
        path: ['account', 'cash_restrictions'],
      }).highlightedLines
    ).toStrictEqual([15])
  })
})
