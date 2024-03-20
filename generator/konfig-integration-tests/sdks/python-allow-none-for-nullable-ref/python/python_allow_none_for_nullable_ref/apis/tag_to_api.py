import typing_extensions

from python_allow_none_for_nullable_ref.apis.tags import TagValues
from python_allow_none_for_nullable_ref.apis.tags.test_api import TestApi

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
