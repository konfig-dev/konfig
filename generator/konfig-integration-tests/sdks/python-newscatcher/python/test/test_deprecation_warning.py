import unittest
from unittest.mock import patch

from newscatcherapi_client.api_client import ApiClient, DeprecationWarningOnce
from newscatcherapi_client.configuration import Configuration


class RandomClass:
    configuration = Configuration(
    
        api_key = 'YOUR_API_KEY',
    )
    api_client = ApiClient(configuration)

    @DeprecationWarningOnce
    def deprecated_method(self):
        return "Method called"

    @DeprecationWarningOnce(prefix="tag")
    def deprecated_method_with_prefix(self):
        return "Method with prefix called"


class TestDeprecationWarning(unittest.TestCase):
    @patch("logging.Logger.warning")
    def test_deprecation_warning_without_prefix(self, mock_warning):
        obj = RandomClass()

        obj.deprecated_method()
        obj.deprecated_method()

        # Check that the logger.warning() was called once
        self.assertEqual(mock_warning.call_count, 1)

        # Get the warning message
        warning_msg = mock_warning.call_args[0][0]

        # Check the content of the warning message
        self.assertNotIn("tag", warning_msg)

    @patch("logging.Logger.warning")
    def test_deprecation_warning_with_prefix(self, mock_warning):
        obj = RandomClass()

        obj.deprecated_method_with_prefix()
        obj.deprecated_method_with_prefix()

        # Check that the logger.warning() was called once
        self.assertEqual(mock_warning.call_count, 1)

        # Get the warning message
        warning_msg = mock_warning.call_args[0][0]

        # Check the content of the warning message
        self.assertIn("tag", warning_msg)
