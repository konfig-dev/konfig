# coding: utf-8

"""
    splitit-web-api-v3

    Splitit's Web API

    The version of the OpenAPI document: 1.0.0
    Generated by: https://konfigthis.com
"""

from datetime import date, datetime  # noqa: F401
import decimal  # noqa: F401
import functools  # noqa: F401
import io  # noqa: F401
import re  # noqa: F401
import typing  # noqa: F401
import typing_extensions  # noqa: F401
import uuid  # noqa: F401

import frozendict  # noqa: F401

from python_splitit_client import schemas  # noqa: F401


class PurchaseMethod(
    schemas.EnumBase,
    schemas.StrSchema
):
    """
    This class is auto generated by Konfig (https://konfigthis.com)
    """


    class MetaOapg:
        enum_value_to_name = {
            "InStore": "IN_STORE",
            "PhoneOrder": "PHONE_ORDER",
            "ECommerce": "ECOMMERCE",
        }
    
    @schemas.classproperty
    def IN_STORE(cls):
        return cls("InStore")
    
    @schemas.classproperty
    def PHONE_ORDER(cls):
        return cls("PhoneOrder")
    
    @schemas.classproperty
    def ECOMMERCE(cls):
        return cls("ECommerce")
