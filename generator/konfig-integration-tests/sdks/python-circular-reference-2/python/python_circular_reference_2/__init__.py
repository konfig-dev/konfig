# coding: utf-8

# flake8: noqa

"""
    python-circular-reference API

    A simple API based for testing python-circular-reference.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

__version__ = "1.0.0"

# import ApiClient
from python_circular_reference_2.api_client import ApiClient

# import Configuration
from python_circular_reference_2.configuration import Configuration

# import exceptions
from python_circular_reference_2.exceptions import OpenApiException
from python_circular_reference_2.exceptions import ApiAttributeError
from python_circular_reference_2.exceptions import ApiTypeError
from python_circular_reference_2.exceptions import ApiValueError
from python_circular_reference_2.exceptions import ApiKeyError
from python_circular_reference_2.exceptions import ApiException

from python_circular_reference_2.client import PythonCircularReference2Client
