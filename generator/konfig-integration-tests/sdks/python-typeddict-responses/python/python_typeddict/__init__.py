# coding: utf-8

# flake8: noqa

"""
    Python TypedDict Responses API

    A simple API based on python typeddict responses.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

__version__ = "1.0.0"

# import ApiClient
from python_typeddict.api_client import ApiClient

# import Configuration
from python_typeddict.configuration import Configuration

# import exceptions
from python_typeddict.exceptions import OpenApiException
from python_typeddict.exceptions import ApiAttributeError
from python_typeddict.exceptions import ApiTypeError
from python_typeddict.exceptions import ApiValueError
from python_typeddict.exceptions import ApiKeyError
from python_typeddict.exceptions import ApiException

from python_typeddict.client import PythonTypedDictResponses
