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
    from python_circular_reference_2.type.has_required_var import HasRequiredVar

class RequiredHasOptionalVar(TypedDict):
    pass

class OptionalHasOptionalVar(TypedDict, total=False):
    optional: 'HasRequiredVar'

class HasOptionalVar(RequiredHasOptionalVar, OptionalHasOptionalVar):
    pass
