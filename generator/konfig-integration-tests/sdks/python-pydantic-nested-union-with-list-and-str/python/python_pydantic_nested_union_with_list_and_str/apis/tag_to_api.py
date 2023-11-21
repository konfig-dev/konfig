import typing_extensions

from python_pydantic_nested_union_with_list_and_str.apis.tags import TagValues
from python_pydantic_nested_union_with_list_and_str.apis.tags.test_api import TestApi

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
