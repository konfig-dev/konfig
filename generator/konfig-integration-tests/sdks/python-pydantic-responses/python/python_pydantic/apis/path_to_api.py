import typing_extensions

from python_pydantic.paths import PathValues
from python_pydantic.apis.paths.free_form_object import FreeFormObject
from python_pydantic.apis.paths.reserved_word import ReservedWord
from python_pydantic.apis.paths.simple_endpoint import SimpleEndpoint

PathToApi = typing_extensions.TypedDict(
    'PathToApi',
    {
        PathValues.FREEFORMOBJECT: FreeFormObject,
        PathValues.RESERVEDWORD: ReservedWord,
        PathValues.SIMPLEENDPOINT: SimpleEndpoint,
    }
)

path_to_api = PathToApi(
    {
        PathValues.FREEFORMOBJECT: FreeFormObject,
        PathValues.RESERVEDWORD: ReservedWord,
        PathValues.SIMPLEENDPOINT: SimpleEndpoint,
    }
)
