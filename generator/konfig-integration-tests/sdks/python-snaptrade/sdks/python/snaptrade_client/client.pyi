# coding: utf-8
"""
    SnapTrade

    Connect brokerage accounts to your app for live positions and trading

    The version of the OpenAPI document: 1.0.0
    Contact: api@snaptrade.com
    Created by: https://snaptrade.com/
"""

import typing
import inspect
from datetime import date, datetime
from snaptrade_client.client_custom import ClientCustom
from snaptrade_client.configuration import Configuration
from snaptrade_client.api_client import ApiClient
from snaptrade_client.type_util import copy_signature
from snaptrade_client.apis.tags.account_information_api import AccountInformationApi
from snaptrade_client.apis.tags.api_status_api import APIStatusApi
from snaptrade_client.apis.tags.authentication_api import AuthenticationApi
from snaptrade_client.apis.tags.connections_api import ConnectionsApi
from snaptrade_client.apis.tags.options_api import OptionsApi
from snaptrade_client.apis.tags.reference_data_api import ReferenceDataApi
from snaptrade_client.apis.tags.trading_api import TradingApi
from snaptrade_client.apis.tags.transactions_and_reporting_api import TransactionsAndReportingApi



class SnapTrade(ClientCustom):

    def __init__(self, configuration: typing.Union[Configuration, None] = None, **kwargs):
        super().__init__(configuration, **kwargs)
        if (len(kwargs) > 0):
            configuration = Configuration(**kwargs)
        if (configuration is None):
            raise Exception("configuration is required")
        api_client = ApiClient(configuration)
        self.account_information: AccountInformationApi = AccountInformationApi(api_client)
        self.api_status: APIStatusApi = APIStatusApi(api_client)
        self.authentication: AuthenticationApi = AuthenticationApi(api_client)
        self.connections: ConnectionsApi = ConnectionsApi(api_client)
        self.options: OptionsApi = OptionsApi(api_client)
        self.reference_data: ReferenceDataApi = ReferenceDataApi(api_client)
        self.trading: TradingApi = TradingApi(api_client)
        self.transactions_and_reporting: TransactionsAndReportingApi = TransactionsAndReportingApi(api_client)
