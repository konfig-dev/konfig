import typing_extensions

from python_pydantic.paths import PathValues
from python_pydantic.apis.paths.reserved_word import ReservedWord
from python_pydantic.apis.paths.simple_endpoint import SimpleEndpoint

PathToApi = typing_extensions.TypedDict(
    'PathToApi',
    {
        PathValues.RESERVEDWORD: ReservedWord,
        PathValues.SIMPLEENDPOINT: SimpleEndpoint,
    }
)

path_to_api = PathToApi(
    {
        PathValues.RESERVEDWORD: ReservedWord,
        PathValues.SIMPLEENDPOINT: SimpleEndpoint,
    }
)
