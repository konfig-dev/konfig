import typing_extensions

from python_api_exception_contains_response_headers.apis.tags import TagValues
from python_api_exception_contains_response_headers.apis.tags.test_api import TestApi

TagToApi = typing_extensions.TypedDict(
    'TagToApi',
    {
        TagValues.TEST: TestApi,
    }
)

tag_to_api = TagToApi(
    {
        TagValues.TEST: TestApi,
    }
)
