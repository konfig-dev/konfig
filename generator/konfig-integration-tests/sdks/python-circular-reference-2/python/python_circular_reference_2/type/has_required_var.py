# coding: utf-8

"""
    python-circular-reference API

    A simple API based for testing python-circular-reference.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING

if TYPE_CHECKING:
    from python_circular_reference_2.type.has_optional_var import HasOptionalVar

class RequiredHasRequiredVar(TypedDict):
    required: 'HasOptionalVar'

class OptionalHasRequiredVar(TypedDict, total=False):
    pass

class HasRequiredVar(RequiredHasRequiredVar, OptionalHasRequiredVar):
    pass
