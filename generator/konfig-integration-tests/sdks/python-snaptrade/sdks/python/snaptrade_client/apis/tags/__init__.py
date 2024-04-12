# do not import all endpoints into this module because that uses a lot of memory and stack frames
# if you need the ability to import all endpoints from this module, import them with
# from snaptrade_client.apis.tag_to_api import tag_to_api

import enum


class TagValues(str, enum.Enum):
    API_STATUS = "API Status"
    AUTHENTICATION = "Authentication"
    CONNECTIONS = "Connections"
    ACCOUNT_INFORMATION = "Account Information"
    TRADING = "Trading"
    API_DISCLAIMER = "API Disclaimer"
    TRANSACTIONS_AND_REPORTING = "Transactions And Reporting"
    REFERENCE_DATA = "Reference Data"
    OPTIONS = "Options"
