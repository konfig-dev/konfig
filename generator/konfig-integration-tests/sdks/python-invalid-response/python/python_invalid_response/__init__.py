# coding: utf-8

# flake8: noqa

"""
    python-invalid-response API

    A simple API based for testing python-invalid-response.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

__version__ = "1.0.0"

# import ApiClient
from python_invalid_response.api_client import ApiClient

# import Configuration
from python_invalid_response.configuration import Configuration

# import exceptions
from python_invalid_response.exceptions import OpenApiException
from python_invalid_response.exceptions import ApiAttributeError
from python_invalid_response.exceptions import ApiTypeError
from python_invalid_response.exceptions import ApiValueError
from python_invalid_response.exceptions import ApiKeyError
from python_invalid_response.exceptions import ApiException

from python_invalid_response.client import PythonInvalidResponseClient
