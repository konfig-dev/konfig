import typing_extensions

from snaptrade_client.paths import PathValues
from snaptrade_client.apis.paths.root import Root
from snaptrade_client.apis.paths.snap_trade_register_user import SnapTradeRegisterUser
from snaptrade_client.apis.paths.snap_trade_login import SnapTradeLogin
from snaptrade_client.apis.paths.snap_trade_list_users import SnapTradeListUsers
from snaptrade_client.apis.paths.snap_trade_delete_user import SnapTradeDeleteUser
from snaptrade_client.apis.paths.snap_trade_encrypted_jwt import SnapTradeEncryptedJWT
from snaptrade_client.apis.paths.snap_trade_reset_user_secret import SnapTradeResetUserSecret
from snaptrade_client.apis.paths.authorizations import Authorizations
from snaptrade_client.apis.paths.authorizations_authorization_id import AuthorizationsAuthorizationId
from snaptrade_client.apis.paths.session_events import SessionEvents
from snaptrade_client.apis.paths.accounts import Accounts
from snaptrade_client.apis.paths.holdings import Holdings
from snaptrade_client.apis.paths.accounts_account_id_holdings import AccountsAccountIdHoldings
from snaptrade_client.apis.paths.accounts_account_id import AccountsAccountId
from snaptrade_client.apis.paths.accounts_account_id_balances import AccountsAccountIdBalances
from snaptrade_client.apis.paths.accounts_account_id_positions import AccountsAccountIdPositions
from snaptrade_client.apis.paths.accounts_account_id_orders import AccountsAccountIdOrders
from snaptrade_client.apis.paths.accounts_account_id_quotes import AccountsAccountIdQuotes
from snaptrade_client.apis.paths.trade_impact import TradeImpact
from snaptrade_client.apis.paths.trade_trade_id import TradeTradeId
from snaptrade_client.apis.paths.trade_place import TradePlace
from snaptrade_client.apis.paths.trade_oco import TradeOco
from snaptrade_client.apis.paths.accounts_account_id_orders_cancel import AccountsAccountIdOrdersCancel
from snaptrade_client.apis.paths.snap_trade_partners import SnapTradePartners
from snaptrade_client.apis.paths.accounts_account_id_symbols import AccountsAccountIdSymbols
from snaptrade_client.apis.paths.accounts_account_id_options import AccountsAccountIdOptions
from snaptrade_client.apis.paths.accounts_account_id_options_chain import AccountsAccountIdOptionsChain
from snaptrade_client.apis.paths.accounts_account_id_option_strategy import AccountsAccountIdOptionStrategy
from snaptrade_client.apis.paths.accounts_account_id_option_strategy_option_strategy_id import AccountsAccountIdOptionStrategyOptionStrategyId
from snaptrade_client.apis.paths.accounts_account_id_option_strategy_option_strategy_id_execute import AccountsAccountIdOptionStrategyOptionStrategyIdExecute
from snaptrade_client.apis.paths.brokerages import Brokerages
from snaptrade_client.apis.paths.brokerage_authorization_types import BrokerageAuthorizationTypes
from snaptrade_client.apis.paths.currencies import Currencies
from snaptrade_client.apis.paths.currencies_rates import CurrenciesRates
from snaptrade_client.apis.paths.currencies_rates_currency_pair import CurrenciesRatesCurrencyPair
from snaptrade_client.apis.paths.exchanges import Exchanges
from snaptrade_client.apis.paths.security_types import SecurityTypes
from snaptrade_client.apis.paths.symbols import Symbols
from snaptrade_client.apis.paths.symbols_query import SymbolsQuery
from snaptrade_client.apis.paths.activities import Activities
from snaptrade_client.apis.paths.performance_custom import PerformanceCustom

PathToApi = typing_extensions.TypedDict(
    'PathToApi',
    {
        PathValues._: Root,
        PathValues.SNAP_TRADE_REGISTER_USER: SnapTradeRegisterUser,
        PathValues.SNAP_TRADE_LOGIN: SnapTradeLogin,
        PathValues.SNAP_TRADE_LIST_USERS: SnapTradeListUsers,
        PathValues.SNAP_TRADE_DELETE_USER: SnapTradeDeleteUser,
        PathValues.SNAP_TRADE_ENCRYPTED_JWT: SnapTradeEncryptedJWT,
        PathValues.SNAP_TRADE_RESET_USER_SECRET: SnapTradeResetUserSecret,
        PathValues.AUTHORIZATIONS: Authorizations,
        PathValues.AUTHORIZATIONS_AUTHORIZATION_ID: AuthorizationsAuthorizationId,
        PathValues.SESSION_EVENTS: SessionEvents,
        PathValues.ACCOUNTS: Accounts,
        PathValues.HOLDINGS: Holdings,
        PathValues.ACCOUNTS_ACCOUNT_ID_HOLDINGS: AccountsAccountIdHoldings,
        PathValues.ACCOUNTS_ACCOUNT_ID: AccountsAccountId,
        PathValues.ACCOUNTS_ACCOUNT_ID_BALANCES: AccountsAccountIdBalances,
        PathValues.ACCOUNTS_ACCOUNT_ID_POSITIONS: AccountsAccountIdPositions,
        PathValues.ACCOUNTS_ACCOUNT_ID_ORDERS: AccountsAccountIdOrders,
        PathValues.ACCOUNTS_ACCOUNT_ID_QUOTES: AccountsAccountIdQuotes,
        PathValues.TRADE_IMPACT: TradeImpact,
        PathValues.TRADE_TRADE_ID: TradeTradeId,
        PathValues.TRADE_PLACE: TradePlace,
        PathValues.TRADE_OCO: TradeOco,
        PathValues.ACCOUNTS_ACCOUNT_ID_ORDERS_CANCEL: AccountsAccountIdOrdersCancel,
        PathValues.SNAP_TRADE_PARTNERS: SnapTradePartners,
        PathValues.ACCOUNTS_ACCOUNT_ID_SYMBOLS: AccountsAccountIdSymbols,
        PathValues.ACCOUNTS_ACCOUNT_ID_OPTIONS: AccountsAccountIdOptions,
        PathValues.ACCOUNTS_ACCOUNT_ID_OPTIONS_CHAIN: AccountsAccountIdOptionsChain,
        PathValues.ACCOUNTS_ACCOUNT_ID_OPTION_STRATEGY: AccountsAccountIdOptionStrategy,
        PathValues.ACCOUNTS_ACCOUNT_ID_OPTION_STRATEGY_OPTION_STRATEGY_ID: AccountsAccountIdOptionStrategyOptionStrategyId,
        PathValues.ACCOUNTS_ACCOUNT_ID_OPTION_STRATEGY_OPTION_STRATEGY_ID_EXECUTE: AccountsAccountIdOptionStrategyOptionStrategyIdExecute,
        PathValues.BROKERAGES: Brokerages,
        PathValues.BROKERAGE_AUTHORIZATION_TYPES: BrokerageAuthorizationTypes,
        PathValues.CURRENCIES: Currencies,
        PathValues.CURRENCIES_RATES: CurrenciesRates,
        PathValues.CURRENCIES_RATES_CURRENCY_PAIR: CurrenciesRatesCurrencyPair,
        PathValues.EXCHANGES: Exchanges,
        PathValues.SECURITY_TYPES: SecurityTypes,
        PathValues.SYMBOLS: Symbols,
        PathValues.SYMBOLS_QUERY: SymbolsQuery,
        PathValues.ACTIVITIES: Activities,
        PathValues.PERFORMANCE_CUSTOM: PerformanceCustom,
    }
)

path_to_api = PathToApi(
    {
        PathValues._: Root,
        PathValues.SNAP_TRADE_REGISTER_USER: SnapTradeRegisterUser,
        PathValues.SNAP_TRADE_LOGIN: SnapTradeLogin,
        PathValues.SNAP_TRADE_LIST_USERS: SnapTradeListUsers,
        PathValues.SNAP_TRADE_DELETE_USER: SnapTradeDeleteUser,
        PathValues.SNAP_TRADE_ENCRYPTED_JWT: SnapTradeEncryptedJWT,
        PathValues.SNAP_TRADE_RESET_USER_SECRET: SnapTradeResetUserSecret,
        PathValues.AUTHORIZATIONS: Authorizations,
        PathValues.AUTHORIZATIONS_AUTHORIZATION_ID: AuthorizationsAuthorizationId,
        PathValues.SESSION_EVENTS: SessionEvents,
        PathValues.ACCOUNTS: Accounts,
        PathValues.HOLDINGS: Holdings,
        PathValues.ACCOUNTS_ACCOUNT_ID_HOLDINGS: AccountsAccountIdHoldings,
        PathValues.ACCOUNTS_ACCOUNT_ID: AccountsAccountId,
        PathValues.ACCOUNTS_ACCOUNT_ID_BALANCES: AccountsAccountIdBalances,
        PathValues.ACCOUNTS_ACCOUNT_ID_POSITIONS: AccountsAccountIdPositions,
        PathValues.ACCOUNTS_ACCOUNT_ID_ORDERS: AccountsAccountIdOrders,
        PathValues.ACCOUNTS_ACCOUNT_ID_QUOTES: AccountsAccountIdQuotes,
        PathValues.TRADE_IMPACT: TradeImpact,
        PathValues.TRADE_TRADE_ID: TradeTradeId,
        PathValues.TRADE_PLACE: TradePlace,
        PathValues.TRADE_OCO: TradeOco,
        PathValues.ACCOUNTS_ACCOUNT_ID_ORDERS_CANCEL: AccountsAccountIdOrdersCancel,
        PathValues.SNAP_TRADE_PARTNERS: SnapTradePartners,
        PathValues.ACCOUNTS_ACCOUNT_ID_SYMBOLS: AccountsAccountIdSymbols,
        PathValues.ACCOUNTS_ACCOUNT_ID_OPTIONS: AccountsAccountIdOptions,
        PathValues.ACCOUNTS_ACCOUNT_ID_OPTIONS_CHAIN: AccountsAccountIdOptionsChain,
        PathValues.ACCOUNTS_ACCOUNT_ID_OPTION_STRATEGY: AccountsAccountIdOptionStrategy,
        PathValues.ACCOUNTS_ACCOUNT_ID_OPTION_STRATEGY_OPTION_STRATEGY_ID: AccountsAccountIdOptionStrategyOptionStrategyId,
        PathValues.ACCOUNTS_ACCOUNT_ID_OPTION_STRATEGY_OPTION_STRATEGY_ID_EXECUTE: AccountsAccountIdOptionStrategyOptionStrategyIdExecute,
        PathValues.BROKERAGES: Brokerages,
        PathValues.BROKERAGE_AUTHORIZATION_TYPES: BrokerageAuthorizationTypes,
        PathValues.CURRENCIES: Currencies,
        PathValues.CURRENCIES_RATES: CurrenciesRates,
        PathValues.CURRENCIES_RATES_CURRENCY_PAIR: CurrenciesRatesCurrencyPair,
        PathValues.EXCHANGES: Exchanges,
        PathValues.SECURITY_TYPES: SecurityTypes,
        PathValues.SYMBOLS: Symbols,
        PathValues.SYMBOLS_QUERY: SymbolsQuery,
        PathValues.ACTIVITIES: Activities,
        PathValues.PERFORMANCE_CUSTOM: PerformanceCustom,
    }
)
