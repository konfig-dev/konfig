import typing_extensions

from python_pydantic.apis.tags import TagValues
from python_pydantic.apis.tags.test_api import TestApi
from python_pydantic.apis.tags.test_response_api import TestResponseApi

TagToApi = typing_extensions.TypedDict(
    'TagToApi',
    {
        TagValues.TEST: TestApi,
        TagValues.TEST_RESPONSE: TestResponseApi,
    }
)

tag_to_api = TagToApi(
    {
        TagValues.TEST: TestApi,
        TagValues.TEST_RESPONSE: TestResponseApi,
    }
)
