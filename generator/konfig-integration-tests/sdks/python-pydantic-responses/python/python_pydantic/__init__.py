# coding: utf-8

# flake8: noqa

"""
    Python Pydantic Responses API

    A simple API based on python pydantic responses.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

__version__ = "1.0.0"

# import ApiClient
from python_pydantic.api_client import ApiClient

# import Configuration
from python_pydantic.configuration import Configuration

# import exceptions
from python_pydantic.exceptions import OpenApiException
from python_pydantic.exceptions import ApiAttributeError
from python_pydantic.exceptions import ApiTypeError
from python_pydantic.exceptions import ApiValueError
from python_pydantic.exceptions import ApiKeyError
from python_pydantic.exceptions import ApiException

from python_pydantic.client import PythonPydanticResponses
