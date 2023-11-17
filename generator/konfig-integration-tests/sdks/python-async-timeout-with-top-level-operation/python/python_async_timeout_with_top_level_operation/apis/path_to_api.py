import typing_extensions

from python_async_timeout_with_top_level_operation.paths import PathValues
from python_async_timeout_with_top_level_operation.apis.paths.simple_endpoint import SimpleEndpoint

PathToApi = typing_extensions.TypedDict(
    'PathToApi',
    {
        PathValues.SIMPLEENDPOINT: SimpleEndpoint,
    }
)

path_to_api = PathToApi(
    {
        PathValues.SIMPLEENDPOINT: SimpleEndpoint,
    }
)
