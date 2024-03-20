# coding: utf-8

"""
    python-allow-none-for-nullable-ref API

    A simple API based for testing python-allow-none-for-nullable-ref.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING

from python_allow_none_for_nullable_ref.type.problematic_schema import ProblematicSchema

class RequiredRequestBody(TypedDict):
    pass

class OptionalRequestBody(TypedDict, total=False):
    problematic_property: typing.List[ProblematicSchema]

class RequestBody(RequiredRequestBody, OptionalRequestBody):
    pass
