import typing_extensions

from python_async_timeout_with_top_level_operation.apis.tags import TagValues
from python_async_timeout_with_top_level_operation.apis.tags.test_api import TestApi

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
