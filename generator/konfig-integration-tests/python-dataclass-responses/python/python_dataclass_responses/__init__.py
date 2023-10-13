# coding: utf-8

# flake8: noqa

"""
    Python Dataclass Responses API

    A simple API based on python dataclass responses.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

__version__ = "1.0.0"

# import ApiClient
from python_dataclass_responses.api_client import ApiClient

# import Configuration
from python_dataclass_responses.configuration import Configuration

# import exceptions
from python_dataclass_responses.exceptions import OpenApiException
from python_dataclass_responses.exceptions import ApiAttributeError
from python_dataclass_responses.exceptions import ApiTypeError
from python_dataclass_responses.exceptions import ApiValueError
from python_dataclass_responses.exceptions import ApiKeyError
from python_dataclass_responses.exceptions import ApiException

from python_dataclass_responses.client import PythonDataclassResponses
