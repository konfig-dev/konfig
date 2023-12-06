# coding: utf-8

"""
    python-pydantic-response-as-param API

    A simple API based for testing python-pydantic-response-as-param.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING

from python_pydantic_response_as_param.type.sword import Sword

class RequiredAttack(TypedDict):
    pass

class OptionalAttack(TypedDict, total=False):
    monster: str

    sword: Sword

class Attack(RequiredAttack, OptionalAttack):
    pass
