import typing_extensions

from python_pydantic_recursively_convert_to_models.paths import PathValues
from python_pydantic_recursively_convert_to_models.apis.paths._list import ModelList
from python_pydantic_recursively_convert_to_models.apis.paths.object import Object

PathToApi = typing_extensions.TypedDict(
    'PathToApi',
    {
        PathValues.LIST: ModelList,
        PathValues.OBJECT: Object,
    }
)

path_to_api = PathToApi(
    {
        PathValues.LIST: ModelList,
        PathValues.OBJECT: Object,
    }
)
