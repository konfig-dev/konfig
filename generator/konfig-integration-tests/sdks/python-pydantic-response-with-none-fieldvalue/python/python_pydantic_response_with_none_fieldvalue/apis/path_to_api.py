import typing_extensions

from python_pydantic_response_with_none_fieldvalue.paths import PathValues
from python_pydantic_response_with_none_fieldvalue.apis.paths.test import Test

PathToApi = typing_extensions.TypedDict(
    'PathToApi',
    {
        PathValues.TEST: Test,
    }
)

path_to_api = PathToApi(
    {
        PathValues.TEST: Test,
    }
)
