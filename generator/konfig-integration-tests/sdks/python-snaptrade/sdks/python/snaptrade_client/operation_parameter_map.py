operation_parameter_map = {
    '/holdings-GET': {
        'parameters': [
            {
                'name': 'userId'
            },
            {
                'name': 'userSecret'
            },
            {
                'name': 'brokerage_authorizations'
            },
        ]
    },
    '/accounts/{accountId}/balances-GET': {
        'parameters': [
            {
                'name': 'userId'
            },
            {
                'name': 'userSecret'
            },
            {
                'name': 'accountId'
            },
        ]
    },
    '/accounts/{accountId}-GET': {
        'parameters': [
            {
                'name': 'userId'
            },
            {
                'name': 'userSecret'
            },
            {
                'name': 'accountId'
            },
        ]
    },
    '/accounts/{accountId}/orders-GET': {
        'parameters': [
            {
                'name': 'userId'
            },
            {
                'name': 'userSecret'
            },
            {
                'name': 'accountId'
            },
            {
                'name': 'state'
            },
            {
                'name': 'days'
            },
        ]
    },
    '/accounts/{accountId}/positions-GET': {
        'parameters': [
            {
                'name': 'userId'
            },
            {
                'name': 'userSecret'
            },
            {
                'name': 'accountId'
            },
        ]
    },
    '/accounts/{accountId}/holdings-GET': {
        'parameters': [
            {
                'name': 'accountId'
            },
            {
                'name': 'userId'
            },
            {
                'name': 'userSecret'
            },
        ]
    },
    '/accounts-GET': {
        'parameters': [
            {
                'name': 'userId'
            },
            {
                'name': 'userSecret'
            },
        ]
    },
    '/accounts/{accountId}-PUT': {
        'parameters': [
            {
                'name': 'userId'
            },
            {
                'name': 'userSecret'
            },
            {
                'name': 'accountId'
            },
        ]
    },
    '/-GET': {
        'parameters': [
        ]
    },
    '/snapTrade/deleteUser-DELETE': {
        'parameters': [
            {
                'name': 'userId'
            },
        ]
    },
    '/snapTrade/encryptedJWT-GET': {
        'parameters': [
            {
                'name': 'userId'
            },
            {
                'name': 'userSecret'
            },
        ]
    },
    '/snapTrade/listUsers-GET': {
        'parameters': [
        ]
    },
    '/snapTrade/login-POST': {
        'parameters': [
            {
                'name': 'userId'
            },
            {
                'name': 'userSecret'
            },
            {
                'name': 'broker'
            },
            {
                'name': 'immediateRedirect'
            },
            {
                'name': 'customRedirect'
            },
            {
                'name': 'reconnect'
            },
            {
                'name': 'connectionType'
            },
            {
                'name': 'connectionPortalVersion'
            },
        ]
    },
    '/snapTrade/registerUser-POST': {
        'parameters': [
            {
                'name': 'userId'
            },
        ]
    },
    '/snapTrade/resetUserSecret-POST': {
        'parameters': [
            {
                'name': 'userId'
            },
            {
                'name': 'userSecret'
            },
        ]
    },
    '/authorizations/{authorizationId}-GET': {
        'parameters': [
            {
                'name': 'authorizationId'
            },
            {
                'name': 'userId'
            },
            {
                'name': 'userSecret'
            },
        ]
    },
    '/authorizations-GET': {
        'parameters': [
            {
                'name': 'userId'
            },
            {
                'name': 'userSecret'
            },
        ]
    },
    '/authorizations/{authorizationId}-DELETE': {
        'parameters': [
            {
                'name': 'authorizationId'
            },
            {
                'name': 'userId'
            },
            {
                'name': 'userSecret'
            },
        ]
    },
    '/sessionEvents-GET': {
        'parameters': [
            {
                'name': 'PartnerClientId'
            },
            {
                'name': 'userId'
            },
            {
                'name': 'sessionId'
            },
        ]
    },
    '/accounts/{accountId}/optionStrategy-POST': {
        'parameters': [
            {
                'name': 'underlying_symbol_id'
            },
            {
                'name': 'legs'
            },
            {
                'name': 'strategy_type'
            },
            {
                'name': 'userId'
            },
            {
                'name': 'userSecret'
            },
            {
                'name': 'accountId'
            },
        ]
    },
    '/accounts/{accountId}/optionsChain-GET': {
        'parameters': [
            {
                'name': 'userId'
            },
            {
                'name': 'userSecret'
            },
            {
                'name': 'accountId'
            },
            {
                'name': 'symbol'
            },
        ]
    },
    '/accounts/{accountId}/optionStrategy/{optionStrategyId}-GET': {
        'parameters': [
            {
                'name': 'userId'
            },
            {
                'name': 'userSecret'
            },
            {
                'name': 'accountId'
            },
            {
                'name': 'optionStrategyId'
            },
        ]
    },
    '/accounts/{accountId}/options-GET': {
        'parameters': [
            {
                'name': 'userId'
            },
            {
                'name': 'userSecret'
            },
            {
                'name': 'accountId'
            },
        ]
    },
    '/accounts/{accountId}/optionStrategy/{optionStrategyId}/execute-POST': {
        'parameters': [
            {
                'name': 'order_type'
            },
            {
                'name': 'time_in_force'
            },
            {
                'name': 'userId'
            },
            {
                'name': 'userSecret'
            },
            {
                'name': 'accountId'
            },
            {
                'name': 'optionStrategyId'
            },
            {
                'name': 'price'
            },
        ]
    },
    '/currencies/rates/{currencyPair}-GET': {
        'parameters': [
            {
                'name': 'currencyPair'
            },
        ]
    },
    '/snapTrade/partners-GET': {
        'parameters': [
        ]
    },
    '/securityTypes-GET': {
        'parameters': [
        ]
    },
    '/exchanges-GET': {
        'parameters': [
        ]
    },
    '/symbols-POST': {
        'parameters': [
            {
                'name': 'substring'
            },
        ]
    },
    '/symbols/{query}-GET': {
        'parameters': [
            {
                'name': 'query'
            },
        ]
    },
    '/brokerageAuthorizationTypes-GET': {
        'parameters': [
            {
                'name': 'brokerage'
            },
        ]
    },
    '/brokerages-GET': {
        'parameters': [
        ]
    },
    '/currencies-GET': {
        'parameters': [
        ]
    },
    '/currencies/rates-GET': {
        'parameters': [
        ]
    },
    '/accounts/{accountId}/symbols-POST': {
        'parameters': [
            {
                'name': 'userId'
            },
            {
                'name': 'userSecret'
            },
            {
                'name': 'accountId'
            },
            {
                'name': 'substring'
            },
        ]
    },
    '/accounts/{accountId}/orders/cancel-POST': {
        'parameters': [
            {
                'name': 'userId'
            },
            {
                'name': 'userSecret'
            },
            {
                'name': 'accountId'
            },
            {
                'name': 'brokerage_order_id'
            },
        ]
    },
    '/trade/impact-POST': {
        'parameters': [
            {
                'name': 'userId'
            },
            {
                'name': 'userSecret'
            },
            {
                'name': 'account_id'
            },
            {
                'name': 'action'
            },
            {
                'name': 'order_type'
            },
            {
                'name': 'price'
            },
            {
                'name': 'stop'
            },
            {
                'name': 'time_in_force'
            },
            {
                'name': 'units'
            },
            {
                'name': 'universal_symbol_id'
            },
            {
                'name': 'notional_value'
            },
        ]
    },
    '/accounts/{accountId}/quotes-GET': {
        'parameters': [
            {
                'name': 'userId'
            },
            {
                'name': 'userSecret'
            },
            {
                'name': 'symbols'
            },
            {
                'name': 'accountId'
            },
            {
                'name': 'use_ticker'
            },
        ]
    },
    '/trade/place-POST': {
        'parameters': [
            {
                'name': 'userId'
            },
            {
                'name': 'userSecret'
            },
            {
                'name': 'account_id'
            },
            {
                'name': 'action'
            },
            {
                'name': 'order_type'
            },
            {
                'name': 'price'
            },
            {
                'name': 'stop'
            },
            {
                'name': 'time_in_force'
            },
            {
                'name': 'units'
            },
            {
                'name': 'universal_symbol_id'
            },
            {
                'name': 'notional_value'
            },
        ]
    },
    '/trade/oco-POST': {
        'parameters': [
            {
                'name': 'userId'
            },
            {
                'name': 'userSecret'
            },
            {
                'name': 'first_trade_id'
            },
            {
                'name': 'second_trade_id'
            },
        ]
    },
    '/trade/{tradeId}-POST': {
        'parameters': [
            {
                'name': 'tradeId'
            },
            {
                'name': 'userId'
            },
            {
                'name': 'userSecret'
            },
            {
                'name': 'wait_to_confirm'
            },
        ]
    },
    '/activities-GET': {
        'parameters': [
            {
                'name': 'userId'
            },
            {
                'name': 'userSecret'
            },
            {
                'name': 'startDate'
            },
            {
                'name': 'endDate'
            },
            {
                'name': 'accounts'
            },
            {
                'name': 'brokerageAuthorizations'
            },
            {
                'name': 'type'
            },
        ]
    },
    '/performance/custom-GET': {
        'parameters': [
            {
                'name': 'startDate'
            },
            {
                'name': 'endDate'
            },
            {
                'name': 'userId'
            },
            {
                'name': 'userSecret'
            },
            {
                'name': 'accounts'
            },
            {
                'name': 'detailed'
            },
            {
                'name': 'frequency'
            },
        ]
    },
};