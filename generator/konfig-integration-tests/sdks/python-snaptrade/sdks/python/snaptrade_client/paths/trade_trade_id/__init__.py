# do not import all endpoints into this module because that uses a lot of memory and stack frames
# if you need the ability to import all endpoints from this module, import them with
# from snaptrade_client.paths.trade_trade_id import Api

from snaptrade_client.paths import PathValues

path = PathValues.TRADE_TRADE_ID