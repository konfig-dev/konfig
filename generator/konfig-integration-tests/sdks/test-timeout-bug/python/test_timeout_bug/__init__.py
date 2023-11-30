# coding: utf-8

# flake8: noqa

"""
    test-timeout-bug API

    A simple API based for testing test-timeout-bug.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

__version__ = "1.0.0"

# import ApiClient
from test_timeout_bug.api_client import ApiClient

# import Configuration
from test_timeout_bug.configuration import Configuration

# import exceptions
from test_timeout_bug.exceptions import OpenApiException
from test_timeout_bug.exceptions import ApiAttributeError
from test_timeout_bug.exceptions import ApiTypeError
from test_timeout_bug.exceptions import ApiValueError
from test_timeout_bug.exceptions import ApiKeyError
from test_timeout_bug.exceptions import ApiException

from test_timeout_bug.client import TestTimeoutBugClient
