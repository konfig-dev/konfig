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
})
