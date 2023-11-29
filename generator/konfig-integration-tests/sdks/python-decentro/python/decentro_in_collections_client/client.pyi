# coding: utf-8
"""
    decentro-in-collections

    Collections

    The version of the OpenAPI document: 1.0.0
    Contact: admin@decentro.tech
    Created by: https://decentro.tech
"""

import typing
import inspect
from datetime import date, datetime
from decentro_in_collections_client.client_custom import ClientCustom
from decentro_in_collections_client.configuration import Configuration
from decentro_in_collections_client.api_client import ApiClient
from decentro_in_collections_client.type_util import copy_signature
from decentro_in_collections_client.apis.tags.collections_api import CollectionsApi



class Decentro(ClientCustom):

    def __init__(self, configuration: typing.Union[Configuration, None] = None, **kwargs):
        super().__init__(configuration, **kwargs)
        if (len(kwargs) > 0):
            configuration = Configuration(**kwargs)
        if (configuration is None):
            raise Exception("configuration is required")
        api_client = ApiClient(configuration)
        self.collections: CollectionsApi = CollectionsApi(api_client)
