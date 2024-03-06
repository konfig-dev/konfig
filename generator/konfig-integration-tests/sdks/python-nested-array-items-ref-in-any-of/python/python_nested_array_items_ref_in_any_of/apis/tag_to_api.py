import typing_extensions

from python_nested_array_items_ref_in_any_of.apis.tags import TagValues
from python_nested_array_items_ref_in_any_of.apis.tags.test_api import TestApi

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
