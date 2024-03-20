import typing_extensions

from python_ignore_pydantic_protected_namespaces.apis.tags import TagValues
from python_ignore_pydantic_protected_namespaces.apis.tags.test_api import TestApi

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
